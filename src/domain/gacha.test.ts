import { describe, expect, it } from "vitest";
import { buildGachaPool, canAddInari, canAddLargeServing } from "./gacha";
import type { GachaPolicy, MenuItem } from "./menu";

describe("抽選候補", () => {
  it("そばを選ぶと、そばの麺メニュー・満腹セット・ミニ丼セットだけが候補になること", () => {
    const sut = buildGachaPool;
    const menuItems = [
      createMenuItem({
        id: "soba",
        category: "麺",
        noodleKind: "そば",
        calories: 650,
      }),
      createMenuItem({
        id: "soba-manpuku",
        category: "満腹セット",
        noodleKind: "そば",
        calories: 700,
      }),
      createMenuItem({
        id: "soba-mini",
        category: "ミニ丼セット",
        noodleKind: "そば",
        calories: 750,
      }),
      createMenuItem({
        id: "udon",
        category: "麺",
        noodleKind: "うどん",
        calories: 650,
      }),
      createMenuItem({
        id: "don",
        category: "丼単品",
        noodleKind: "なし",
        calories: 650,
      }),
    ];

    const result = sut(
      menuItems,
      { amountLevel: "ふつう", noodleChoice: "そば" },
      createPolicy(),
    );

    expect(result.map((menuItem) => menuItem.id)).toStrictEqual([
      "soba",
      "soba-manpuku",
      "soba-mini",
    ]);
  });

  it("うどんを選ぶと、うどんの麺メニュー・満腹セット・ミニ丼セットだけが候補になること", () => {
    const sut = buildGachaPool;
    const menuItems = [
      createMenuItem({
        id: "udon",
        category: "麺",
        noodleKind: "うどん",
        calories: 650,
      }),
      createMenuItem({
        id: "udon-manpuku",
        category: "満腹セット",
        noodleKind: "うどん",
        calories: 700,
      }),
      createMenuItem({
        id: "udon-mini",
        category: "ミニ丼セット",
        noodleKind: "うどん",
        calories: 750,
      }),
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
        calories: 650,
      }),
    ];

    const result = sut(
      menuItems,
      { amountLevel: "ふつう", noodleChoice: "うどん" },
      createPolicy(),
    );

    expect(result.map((menuItem) => menuItem.id)).toStrictEqual([
      "udon",
      "udon-manpuku",
      "udon-mini",
    ]);
  });

  it("丼単品を選ぶと、丼単品だけが候補になること", () => {
    const sut = buildGachaPool;
    const menuItems = [
      createMenuItem({
        id: "don",
        category: "丼単品",
        noodleKind: "なし",
        calories: 650,
      }),
      createMenuItem({
        id: "soba",
        category: "麺",
        noodleKind: "そば",
        calories: 650,
      }),
    ];

    const result = sut(
      menuItems,
      { amountLevel: "ふつう", noodleChoice: "丼単品" },
      createPolicy(),
    );

    expect(result.map((menuItem) => menuItem.id)).toStrictEqual(["don"]);
  });

  it("メニューのカロリーが量の下限と同じなら候補になり、上限と同じなら候補にならないこと", () => {
    const sut = buildGachaPool;
    const menuItems = [
      createMenuItem({ id: "min", calories: 600 }),
      createMenuItem({ id: "middle", calories: 799 }),
      createMenuItem({ id: "max", calories: 800 }),
    ];

    const result = sut(
      menuItems,
      { amountLevel: "ふつう", noodleChoice: "そば" },
      createPolicy(),
    );

    expect(result.map((menuItem) => menuItem.id)).toStrictEqual([
      "min",
      "middle",
    ]);
  });

  it("量の上限がない時、上限を気にせず候補になること", () => {
    const sut = buildGachaPool;
    const menuItems = [
      createMenuItem({ id: "large", calories: 1000 }),
      createMenuItem({ id: "very-large", calories: 1400 }),
    ];

    const result = sut(
      menuItems,
      { amountLevel: "がっつり", noodleChoice: "そば" },
      createPolicy(),
    );

    expect(result.map((menuItem) => menuItem.id)).toStrictEqual([
      "large",
      "very-large",
    ]);
  });
});

describe("大盛り付与", () => {
  it("麺メニューとミニ丼セットで大盛りの対象になる時、大盛りを付けられること", () => {
    const sut = canAddLargeServing;
    const policy = createPolicy({
      largeServingChanceByAmount: { おおめ: 1 },
    });

    expect(
      sut(
        createMenuItem({
          category: "麺",
          largeServingCalories: 141,
        }),
        "おおめ",
        policy,
      ),
    ).toBe(true);
    expect(
      sut(
        createMenuItem({
          category: "ミニ丼セット",
          largeServingCalories: 141,
        }),
        "おおめ",
        policy,
      ),
    ).toBe(true);
  });

  it("大盛りの対象外メニューや大盛り設定がない時、大盛りを付けられないこと", () => {
    const sut = canAddLargeServing;
    const policy = createPolicy({
      largeServingChanceByAmount: { おおめ: 1 },
    });

    expect(
      sut(createMenuItem({ category: "満腹セット" }), "おおめ", policy),
    ).toBe(false);
    expect(sut(createMenuItem({ category: "丼単品" }), "おおめ", policy)).toBe(
      false,
    );
    expect(
      sut(
        createMenuItem({ category: "麺", largeServingCalories: null }),
        "おおめ",
        policy,
      ),
    ).toBe(false);
    expect(
      sut(
        createMenuItem({ category: "麺", largeServingCalories: 141 }),
        "ふつう",
        policy,
      ),
    ).toBe(false);
  });
});

describe("いなり付与", () => {
  it("麺メニューとミニ丼セットで量の上限を超えない時、いなりを付けられること", () => {
    const sut = canAddInari;
    const policy = createPolicy();

    expect(sut(createMenuItem({ category: "麺" }), 600, "ふつう", policy)).toBe(
      true,
    );
    expect(
      sut(createMenuItem({ category: "ミニ丼セット" }), 600, "ふつう", policy),
    ).toBe(true);
  });

  it("いなりを足した後のカロリーが量の上限と同じ時、いなりを付けられること", () => {
    const sut = canAddInari;

    const result = sut(createMenuItem(), 640, "ふつう", createPolicy());

    expect(result).toBe(true);
  });

  it("いなりを足した後のカロリーが量の上限を超える時、いなりを付けられないこと", () => {
    const sut = canAddInari;

    const result = sut(createMenuItem(), 641, "ふつう", createPolicy());

    expect(result).toBe(false);
  });

  it("満腹セットと丼単品には、いなりを付けられないこと", () => {
    const sut = canAddInari;
    const policy = createPolicy();

    expect(
      sut(createMenuItem({ category: "満腹セット" }), 640, "ふつう", policy),
    ).toBe(false);
    expect(
      sut(createMenuItem({ category: "丼単品" }), 640, "ふつう", policy),
    ).toBe(false);
  });

  it("量の上限がない時、いなり対象メニューならいなりを付けられること", () => {
    const sut = canAddInari;

    const result = sut(createMenuItem(), 2000, "がっつり", createPolicy());

    expect(result).toBe(true);
  });
});

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
