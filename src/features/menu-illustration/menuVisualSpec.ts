export type NoodleKind = "soba" | "udon";
export type NoodleTemperature = "hot" | "cold" | "seiro";

export type NoodleTopping =
  | "plain"
  | "kakiage"
  | "kakiageTamago"
  | "kitsune"
  | "tanuki"
  | "tsukimi"
  | "yamakake"
  | "oroshi"
  | "ebiTen"
  | "ikaTen"
  | "torikara"
  | "kamo"
  | "tsukiyoBakashi";

export type DonburiKind =
  | "kakiageDon"
  | "yamakakeDon"
  | "torikaraDon"
  | "curryDon"
  | "oyakoDon"
  | "tenDon"
  | "joTenDon"
  | "hirekatsuDon";

export type MenuVisualNoodle = {
  kind: "noodle";
  noodleKind: NoodleKind;
  temperature: NoodleTemperature;
  topping: NoodleTopping;
};

export type MenuVisualDonburi = {
  kind: "donburi";
  donburiKind: DonburiKind;
};

export type MenuVisualItem = MenuVisualNoodle | MenuVisualDonburi;

export type MenuVisualSpec =
  | MenuVisualItem
  | {
      kind: "set";
      primary: MenuVisualItem;
      secondary: MenuVisualItem;
    };
