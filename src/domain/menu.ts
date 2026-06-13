export const MENU_CATEGORIES = [
  "麺",
  "丼単品",
  "満腹セット",
  "ミニ丼セット",
] as const;

export const NOODLE_KINDS = ["そば", "うどん", "なし"] as const;

export const HOT_COLD_KINDS = ["温", "冷"] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export type NoodleKind = (typeof NOODLE_KINDS)[number];

export type HotColdKind = (typeof HOT_COLD_KINDS)[number];

export type MenuItem = {
  readonly id: string;
  readonly name: string;
  readonly category: MenuCategory;
  readonly noodleKind: NoodleKind;
  readonly hotCold: HotColdKind | null;
  readonly calories: number;
  readonly largeServingCalories: number | null;
};

export type SideMenu = {
  readonly name: string;
  readonly calories: number;
};

export type MenuCatalog = {
  readonly menuItems: ReadonlyArray<MenuItem>;
  readonly policy: GachaPolicy;
};

export type MenuCatalogRepository = {
  loadMenuCatalog(): Promise<MenuCatalog>;
};

export const AMOUNT_LEVELS = [
  "かるめ",
  "ふつう",
  "おおめ",
  "がっつり",
] as const;

export const NOODLE_CHOICES = ["そば", "うどん", "丼単品"] as const;

export type AmountLevel = (typeof AMOUNT_LEVELS)[number];

export type NoodleChoice = (typeof NOODLE_CHOICES)[number];

export type CalorieRange = {
  readonly min: number;
  readonly max: number | null;
};

export type GachaPolicy = {
  readonly amountCalorieRanges: Readonly<Record<AmountLevel, CalorieRange>>;
  readonly inari: SideMenu;
  readonly inariChance: number;
  readonly largeServingChanceByAmount: Readonly<
    Partial<Record<AmountLevel, number>>
  >;
};

export type GachaSelection = {
  readonly amountLevel: AmountLevel;
  readonly noodleChoice: NoodleChoice;
};

export type GachaModifier = "大盛り" | "いなり";

export type GachaResult = {
  readonly menuItem: MenuItem;
  readonly modifiers: ReadonlyArray<GachaModifier>;
  readonly totalCalories: number;
};
