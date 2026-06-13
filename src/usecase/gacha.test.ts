import { describe, expect, it } from "vitest";
import type { GachaPolicy, MenuCatalog, MenuItem } from "../domain/menu";
import type { RandomPort } from "./gacha";
import { drawMenu, getSelectableGachaOptions } from "./gacha";

describe("メニュー抽選", () => {
  describe("抽選結果", () => {
    it("抽選できるメニューがある時、選ばれた候補メニューが返ること", async () => {
      const sut = drawMenu;
      const menuItems = [
        createMenuItem({
          id: "first",
          name: "上天丼セット",
          category: "満腹セット",
          calories: 1000,
        }),
        createMenuItem({
          id: "second",
          name: "親子丼セット",
          category: "満腹セット",
          calories: 1100,
        }),
      ];

      const result = await sut(
        { amountLevel: "がっつり", noodleChoice: "そば" },
        createDeps(createCatalog(menuItems), [0.75]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem: menuItems[1],
          modifiers: [],
          totalCalories: 1100,
        },
      });
    });

    it("抽選で最初の候補が選ばれた時、最初の候補メニューが返ること", async () => {
      const sut = drawMenu;
      const menuItems = [
        createMenuItem({
          id: "first",
          name: "上天丼セット",
          category: "満腹セット",
          calories: 1000,
        }),
        createMenuItem({
          id: "second",
          name: "親子丼セット",
          category: "満腹セット",
          calories: 1100,
        }),
      ];

      const result = await sut(
        { amountLevel: "がっつり", noodleChoice: "そば" },
        createDeps(createCatalog(menuItems), [0]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem: menuItems[0],
          modifiers: [],
          totalCalories: 1000,
        },
      });
    });

    it("条件に合うメニューがない時、空の結果と選択条件が返ること", async () => {
      const sut = drawMenu;

      const result = await sut(
        { amountLevel: "かるめ", noodleChoice: "丼単品" },
        createDeps(createCatalog([]), []),
      );

      expect(result).toStrictEqual({
        status: "empty",
        selection: {
          amountLevel: "かるめ",
          noodleChoice: "丼単品",
        },
      });
    });

    it("大盛りの抽選に外れた時、大盛りが付かないこと", async () => {
      const sut = drawMenu;
      const menuItem = createMenuItem({
        calories: 900,
        largeServingCalories: 40,
      });
      const catalog = createCatalog([menuItem], {
        largeServingChanceByAmount: { おおめ: 0.5 },
      });

      const result = await sut(
        { amountLevel: "おおめ", noodleChoice: "そば" },
        createDeps(catalog, [0, 0.5]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem,
          modifiers: [],
          totalCalories: 900,
        },
      });
    });

    it("いなりの抽選に外れた時、いなりが付かないこと", async () => {
      const sut = drawMenu;
      const menuItem = createMenuItem({
        calories: 600,
      });
      const catalog = createCatalog([menuItem], {
        inariChance: 0.5,
      });

      const result = await sut(
        { amountLevel: "ふつう", noodleChoice: "そば" },
        createDeps(catalog, [0, 0.5]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem,
          modifiers: [],
          totalCalories: 600,
        },
      });
    });
  });

  describe("大盛りといなりの組み合わせ", () => {
    it("大盛りといなりを足しても量の上限を超えない時、両方が付くこと", async () => {
      const sut = drawMenu;
      const menuItem = createMenuItem({
        calories: 800,
        largeServingCalories: 40,
      });
      const catalog = createCatalog([menuItem], {
        largeServingChanceByAmount: { おおめ: 1 },
        inariChance: 1,
      });

      const result = await sut(
        { amountLevel: "おおめ", noodleChoice: "そば" },
        createDeps(catalog, [0, 0, 0]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem,
          modifiers: ["大盛り", "いなり"],
          totalCalories: 1000,
        },
      });
    });

    it("大盛り後にいなりを足すと量の上限を超える時、大盛りだけが付くこと", async () => {
      const sut = drawMenu;
      const menuItem = createMenuItem({
        calories: 800,
        largeServingCalories: 60,
      });
      const catalog = createCatalog([menuItem], {
        largeServingChanceByAmount: { おおめ: 1 },
        inariChance: 1,
      });

      const result = await sut(
        { amountLevel: "おおめ", noodleChoice: "そば" },
        createDeps(catalog, [0, 0]),
      );

      expect(result).toStrictEqual({
        status: "hit",
        result: {
          menuItem,
          modifiers: ["大盛り"],
          totalCalories: 860,
        },
      });
    });
  });
});

describe("選択可能な条件", () => {
  it("全ての量と種別の組み合わせについて、選べるかどうかが返ること", async () => {
    const sut = getSelectableGachaOptions;

    const result = await sut({
      menuCatalogRepository: {
        loadMenuCatalog: async () => createCatalog([]),
      },
    });

    expect(result).toHaveLength(12);
    expect(result).toEqual(
      expect.arrayContaining([
        { amountLevel: "かるめ", noodleChoice: "そば", selectable: false },
        { amountLevel: "かるめ", noodleChoice: "うどん", selectable: false },
        { amountLevel: "かるめ", noodleChoice: "丼単品", selectable: false },
        { amountLevel: "ふつう", noodleChoice: "そば", selectable: false },
        { amountLevel: "ふつう", noodleChoice: "うどん", selectable: false },
        { amountLevel: "ふつう", noodleChoice: "丼単品", selectable: false },
        { amountLevel: "おおめ", noodleChoice: "そば", selectable: false },
        { amountLevel: "おおめ", noodleChoice: "うどん", selectable: false },
        { amountLevel: "おおめ", noodleChoice: "丼単品", selectable: false },
        {
          amountLevel: "がっつり",
          noodleChoice: "そば",
          selectable: false,
        },
        {
          amountLevel: "がっつり",
          noodleChoice: "うどん",
          selectable: false,
        },
        {
          amountLevel: "がっつり",
          noodleChoice: "丼単品",
          selectable: false,
        },
      ]),
    );
  });

  it("条件に合うメニューがある組み合わせだけ選べること", async () => {
    const sut = getSelectableGachaOptions;
    const catalog = createCatalog([
      createMenuItem({
        id: "soba",
        category: "麺",
        noodleKind: "そば",
        calories: 650,
      }),
      createMenuItem({
        id: "don",
        category: "丼単品",
        noodleKind: "なし",
        calories: 850,
      }),
    ]);

    const result = await sut({
      menuCatalogRepository: {
        loadMenuCatalog: async () => catalog,
      },
    });

    expect(result).toContainEqual({
      amountLevel: "ふつう",
      noodleChoice: "そば",
      selectable: true,
    });
    expect(result).toContainEqual({
      amountLevel: "ふつう",
      noodleChoice: "うどん",
      selectable: false,
    });
    expect(result).toContainEqual({
      amountLevel: "おおめ",
      noodleChoice: "丼単品",
      selectable: true,
    });
    expect(result).toContainEqual({
      amountLevel: "かるめ",
      noodleChoice: "丼単品",
      selectable: false,
    });
  });
});

function createDeps(catalog: MenuCatalog, randomValues: ReadonlyArray<number>) {
  return {
    menuCatalogRepository: {
      loadMenuCatalog: async () => catalog,
    },
    random: createRandomPort(randomValues),
  };
}

function createRandomPort(values: ReadonlyArray<number>): RandomPort {
  let index = 0;

  return {
    next: () => {
      const value = values[index];
      index += 1;

      if (value === undefined) {
        throw new Error("テスト用の乱数が不足しています");
      }

      return value;
    },
  };
}

function createCatalog(
  menuItems: ReadonlyArray<MenuItem>,
  policyOverrides: Partial<GachaPolicy> = {},
): MenuCatalog {
  return {
    menuItems,
    policy: createPolicy(policyOverrides),
  };
}

function createMenuItem(overrides: Partial<MenuItem> = {}): MenuItem {
  return {
    id: "soba",
    name: "かけそば",
    category: "麺",
    noodleKind: "そば",
    hotCold: "温",
    calories: 600,
    largeServingCalories: 141,
    ...overrides,
  };
}

function createPolicy(overrides: Partial<GachaPolicy> = {}): GachaPolicy {
  return {
    amountCalorieRanges: {
      かるめ: { min: 0, max: 600 },
      ふつう: { min: 600, max: 800 },
      おおめ: { min: 800, max: 1000 },
      がっつり: { min: 1000, max: null },
    },
    inari: { name: "いなり(二個)", calories: 160 },
    inariChance: 0.25,
    largeServingChanceByAmount: {},
    ...overrides,
  };
}
