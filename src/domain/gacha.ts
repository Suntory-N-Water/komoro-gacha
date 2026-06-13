import type {
  AmountLevel,
  GachaPolicy,
  GachaSelection,
  MenuCategory,
  MenuItem,
} from "./menu";

const MAIN_NOODLE_CATEGORIES: ReadonlyArray<MenuCategory> = [
  "麺",
  "満腹セット",
  "ミニ丼セット",
] as const;

const ADD_ON_TARGET_CATEGORIES: ReadonlyArray<MenuCategory> = [
  "麺",
  "ミニ丼セット",
] as const;

export function buildGachaPool(
  menuItems: ReadonlyArray<MenuItem>,
  selection: GachaSelection,
  policy: GachaPolicy,
): ReadonlyArray<MenuItem> {
  const calorieRange = policy.amountCalorieRanges[selection.amountLevel];

  return menuItems.filter(
    (menuItem) =>
      menuItem.calories >= calorieRange.min &&
      (calorieRange.max === null || menuItem.calories < calorieRange.max) &&
      (selection.noodleChoice === "丼単品"
        ? menuItem.category === "丼単品"
        : MAIN_NOODLE_CATEGORIES.includes(menuItem.category) &&
          menuItem.noodleKind === selection.noodleChoice),
  );
}

export function canAddLargeServing(
  menuItem: MenuItem,
  amountLevel: AmountLevel,
  policy: GachaPolicy,
): boolean {
  return (
    ADD_ON_TARGET_CATEGORIES.includes(menuItem.category) &&
    menuItem.largeServingCalories !== null &&
    (policy.largeServingChanceByAmount[amountLevel] ?? 0) > 0
  );
}

export function canAddInari(
  menuItem: MenuItem,
  totalCalories: number,
  amountLevel: AmountLevel,
  policy: GachaPolicy,
): boolean {
  const calorieRange = policy.amountCalorieRanges[amountLevel];

  return (
    ADD_ON_TARGET_CATEGORIES.includes(menuItem.category) &&
    (calorieRange.max === null ||
      totalCalories + policy.inari.calories <= calorieRange.max)
  );
}
