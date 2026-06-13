import {
  buildGachaPool,
  canAddInari,
  canAddLargeServing,
} from "../domain/gacha";
import {
  AMOUNT_LEVELS,
  type GachaModifier,
  type GachaResult,
  type GachaSelection,
  type MenuCatalogRepository,
  NOODLE_CHOICES,
} from "../domain/menu";

export type RandomPort = {
  next(): number;
};

export type DrawMenuInput = GachaSelection;

export type DrawMenuDeps = {
  readonly menuCatalogRepository: MenuCatalogRepository;
  readonly random: RandomPort;
};

export type DrawMenuOutput =
  | {
      readonly status: "hit";
      readonly result: GachaResult;
    }
  | {
      readonly status: "empty";
      readonly selection: GachaSelection;
    };

export type SelectableGachaOption = GachaSelection & {
  readonly selectable: boolean;
};

export type GetSelectableGachaOptionsDeps = {
  readonly menuCatalogRepository: MenuCatalogRepository;
};

export async function drawMenu(
  input: DrawMenuInput,
  deps: DrawMenuDeps,
): Promise<DrawMenuOutput> {
  const catalog = await deps.menuCatalogRepository.loadMenuCatalog();
  const pool = buildGachaPool(catalog.menuItems, input, catalog.policy);

  if (pool.length === 0) {
    return {
      status: "empty",
      selection: input,
    };
  }

  const selectedIndex = Math.max(
    0,
    Math.min(pool.length - 1, Math.floor(deps.random.next() * pool.length)),
  );
  const selectedMenu = pool[selectedIndex];

  if (selectedMenu === undefined) {
    throw new Error("抽選候補の選択に失敗しました");
  }

  const modifiers: Array<GachaModifier> = [];
  let totalCalories = selectedMenu.calories;

  if (
    canAddLargeServing(selectedMenu, input.amountLevel, catalog.policy) &&
    deps.random.next() <
      (catalog.policy.largeServingChanceByAmount[input.amountLevel] ?? 0)
  ) {
    modifiers.push("大盛り");
    totalCalories += selectedMenu.largeServingCalories ?? 0;
  }

  if (
    canAddInari(
      selectedMenu,
      totalCalories,
      input.amountLevel,
      catalog.policy,
    ) &&
    deps.random.next() < catalog.policy.inariChance
  ) {
    modifiers.push("いなり");
    totalCalories += catalog.policy.inari.calories;
  }

  return {
    status: "hit",
    result: {
      menuItem: selectedMenu,
      modifiers,
      totalCalories,
    },
  };
}

export async function getSelectableGachaOptions(
  deps: GetSelectableGachaOptionsDeps,
): Promise<ReadonlyArray<SelectableGachaOption>> {
  const catalog = await deps.menuCatalogRepository.loadMenuCatalog();

  return AMOUNT_LEVELS.flatMap((amountLevel) =>
    NOODLE_CHOICES.map((noodleChoice) => ({
      amountLevel,
      noodleChoice,
      selectable:
        buildGachaPool(
          catalog.menuItems,
          { amountLevel, noodleChoice },
          catalog.policy,
        ).length > 0,
    })),
  );
}
