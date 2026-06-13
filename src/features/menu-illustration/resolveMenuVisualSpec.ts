import type {
  DonburiKind,
  MenuVisualDonburi,
  MenuVisualNoodle,
  MenuVisualSpec,
  NoodleKind,
  NoodleTemperature,
  NoodleTopping,
} from "./menuVisualSpec";

function noodle(
  noodleKind: NoodleKind,
  temperature: NoodleTemperature,
  topping: NoodleTopping,
): MenuVisualNoodle {
  return { kind: "noodle", noodleKind, temperature, topping };
}

function don(donburiKind: DonburiKind): MenuVisualDonburi {
  return { kind: "donburi", donburiKind };
}

function miniSet(
  donburiKind: DonburiKind,
  noodleKind: NoodleKind,
  temperature: NoodleTemperature,
): MenuVisualSpec {
  return {
    kind: "set",
    primary: noodle(noodleKind, temperature, "plain"),
    secondary: don(donburiKind),
  };
}

function manpukuSet(
  donburiKind: DonburiKind,
  noodleKind: NoodleKind,
  temperature: NoodleTemperature,
): MenuVisualSpec {
  return {
    kind: "set",
    primary: don(donburiKind),
    secondary: noodle(noodleKind, temperature, "plain"),
  };
}

const SPECS: Record<string, MenuVisualSpec> = {
  // ── 麺 (温) ────────────────────────────────────────────────
  "kake-soba-hot": noodle("soba", "hot", "plain"),
  "kake-udon-hot": noodle("udon", "hot", "plain"),
  "kakiage-soba-hot": noodle("soba", "hot", "kakiage"),
  "kakiage-udon-hot": noodle("udon", "hot", "kakiage"),
  "kakiage-tamago-soba-hot": noodle("soba", "hot", "kakiageTamago"),
  "kakiage-tamago-udon-hot": noodle("udon", "hot", "kakiageTamago"),
  "ika-soba-hot": noodle("soba", "hot", "ikaTen"),
  "ika-udon-hot": noodle("udon", "hot", "ikaTen"),
  "ebi-soba-hot": noodle("soba", "hot", "ebiTen"),
  "ebi-udon-hot": noodle("udon", "hot", "ebiTen"),
  "torikara-soba-hot": noodle("soba", "hot", "torikara"),
  "torikara-udon-hot": noodle("udon", "hot", "torikara"),
  "tanuki-soba-hot": noodle("soba", "hot", "tanuki"),
  "tanuki-udon-hot": noodle("udon", "hot", "tanuki"),
  "kitsune-soba-hot": noodle("soba", "hot", "kitsune"),
  "kitsune-udon-hot": noodle("udon", "hot", "kitsune"),
  "tsukimi-soba-hot": noodle("soba", "hot", "tsukimi"),
  "tsukimi-udon-hot": noodle("udon", "hot", "tsukimi"),
  "yamakake-soba-hot": noodle("soba", "hot", "yamakake"),
  "yamakake-udon-hot": noodle("udon", "hot", "yamakake"),
  "tsukiyo-no-bakashi-soba-hot": noodle("soba", "hot", "tsukiyoBakashi"),
  "tsukiyo-no-bakashi-udon-hot": noodle("udon", "hot", "tsukiyoBakashi"),
  "kamo-nanban-soba-hot": noodle("soba", "hot", "kamo"),
  "kamo-nanban-udon-hot": noodle("udon", "hot", "kamo"),

  // ── 麺 (冷・丼スタイル) ────────────────────────────────────
  "hiyashi-tanuki-soba-cold": noodle("soba", "cold", "tanuki"),
  "hiyashi-tanuki-udon-cold": noodle("udon", "cold", "tanuki"),
  "nimai-hiyashi-tanuki-soba-cold": noodle("soba", "cold", "tanuki"),
  "nimai-hiyashi-tanuki-udon-cold": noodle("udon", "cold", "tanuki"),
  "hiyashi-kitsune-soba-cold": noodle("soba", "cold", "kitsune"),
  "hiyashi-kitsune-udon-cold": noodle("udon", "cold", "kitsune"),
  "nimai-hiyashi-kitsune-soba-cold": noodle("soba", "cold", "kitsune"),
  "nimai-hiyashi-kitsune-udon-cold": noodle("udon", "cold", "kitsune"),
  "tsukiyo-no-bakashi-soba-cold": noodle("soba", "cold", "tsukiyoBakashi"),
  "tsukiyo-no-bakashi-udon-cold": noodle("udon", "cold", "tsukiyoBakashi"),

  // ── 麺 (せいろ) ────────────────────────────────────────────
  "mori-soba-cold": noodle("soba", "seiro", "plain"),
  "mori-udon-cold": noodle("udon", "seiro", "plain"),
  "zaru-soba-cold": noodle("soba", "seiro", "plain"),
  "zaru-udon-cold": noodle("udon", "seiro", "plain"),
  "nimai-mori-soba-cold": noodle("soba", "seiro", "plain"),
  "nimai-mori-udon-cold": noodle("udon", "seiro", "plain"),
  "kakiage-seiro-cold": noodle("soba", "seiro", "kakiage"),
  "kakiage-udon-seiro-cold": noodle("udon", "seiro", "kakiage"),
  "kakiage-tamago-seiro-cold": noodle("soba", "seiro", "kakiageTamago"),
  "kakiage-tamago-udon-seiro-cold": noodle("udon", "seiro", "kakiageTamago"),
  "ika-seiro-cold": noodle("soba", "seiro", "ikaTen"),
  "ika-udon-seiro-cold": noodle("udon", "seiro", "ikaTen"),
  "ebi-seiro-cold": noodle("soba", "seiro", "ebiTen"),
  "ebi-udon-seiro-cold": noodle("udon", "seiro", "ebiTen"),
  "torikara-seiro-cold": noodle("soba", "seiro", "torikara"),
  "torikara-udon-seiro-cold": noodle("udon", "seiro", "torikara"),
  "yamakake-seiro-cold": noodle("soba", "seiro", "yamakake"),
  "yamakake-udon-seiro-cold": noodle("udon", "seiro", "yamakake"),
  "oroshi-seiro-cold": noodle("soba", "seiro", "oroshi"),
  "oroshi-udon-seiro-cold": noodle("udon", "seiro", "oroshi"),
  "kamo-seiro-cold": noodle("soba", "seiro", "kamo"),
  "kamo-udon-seiro-cold": noodle("udon", "seiro", "kamo"),

  // ── 丼単品 ─────────────────────────────────────────────────
  "joten-don": don("joTenDon"),
  tendon: don("tenDon"),
  "curry-don": don("curryDon"),
  oyakodon: don("oyakoDon"),
  "hirekatsu-don": don("hirekatsuDon"),

  // ── 満腹セット ─────────────────────────────────────────────
  "manpuku-joten-soba": manpukuSet("joTenDon", "soba", "hot"),
  "manpuku-joten-udon": manpukuSet("joTenDon", "udon", "hot"),
  "manpuku-joten-seiro-cold": manpukuSet("joTenDon", "soba", "seiro"),
  "manpuku-joten-udon-seiro-cold": manpukuSet("joTenDon", "udon", "seiro"),
  "manpuku-ten-soba-hot": manpukuSet("tenDon", "soba", "hot"),
  "manpuku-ten-udon-hot": manpukuSet("tenDon", "udon", "hot"),
  "manpuku-ten-seiro-cold": manpukuSet("tenDon", "soba", "seiro"),
  "manpuku-ten-udon-seiro-cold": manpukuSet("tenDon", "udon", "seiro"),
  "manpuku-curry-soba-hot": manpukuSet("curryDon", "soba", "hot"),
  "manpuku-curry-udon-hot": manpukuSet("curryDon", "udon", "hot"),
  "manpuku-curry-seiro-cold": manpukuSet("curryDon", "soba", "seiro"),
  "manpuku-curry-udon-seiro-cold": manpukuSet("curryDon", "udon", "seiro"),
  "manpuku-oyako-soba": manpukuSet("oyakoDon", "soba", "hot"),
  "manpuku-oyako-udon": manpukuSet("oyakoDon", "udon", "hot"),
  "manpuku-oyako-seiro-cold": manpukuSet("oyakoDon", "soba", "seiro"),
  "manpuku-oyako-udon-seiro-cold": manpukuSet("oyakoDon", "udon", "seiro"),
  "manpuku-hirekatsu-soba-hot": manpukuSet("hirekatsuDon", "soba", "hot"),
  "manpuku-hirekatsu-udon-hot": manpukuSet("hirekatsuDon", "udon", "hot"),
  "manpuku-hirekatsu-seiro-cold": manpukuSet("hirekatsuDon", "soba", "seiro"),
  "manpuku-hirekatsu-udon-seiro-cold": manpukuSet(
    "hirekatsuDon",
    "udon",
    "seiro",
  ),

  // ── ミニ丼セット ───────────────────────────────────────────
  "mini-kakiage-soba": miniSet("kakiageDon", "soba", "hot"),
  "mini-kakiage-udon": miniSet("kakiageDon", "udon", "hot"),
  "mini-kakiage-seiro": miniSet("kakiageDon", "soba", "seiro"),
  "mini-kakiage-udon-seiro": miniSet("kakiageDon", "udon", "seiro"),
  "mini-yamakake-soba": miniSet("yamakakeDon", "soba", "hot"),
  "mini-yamakake-udon": miniSet("yamakakeDon", "udon", "hot"),
  "mini-yamakake-seiro": miniSet("yamakakeDon", "soba", "seiro"),
  "mini-yamakake-udon-seiro": miniSet("yamakakeDon", "udon", "seiro"),
  "mini-torikara-soba": miniSet("torikaraDon", "soba", "hot"),
  "mini-torikara-udon": miniSet("torikaraDon", "udon", "hot"),
  "mini-torikara-seiro": miniSet("torikaraDon", "soba", "seiro"),
  "mini-torikara-udon-seiro": miniSet("torikaraDon", "udon", "seiro"),
  "mini-curry-soba": miniSet("curryDon", "soba", "hot"),
  "mini-curry-udon": miniSet("curryDon", "udon", "hot"),
  "mini-curry-seiro": miniSet("curryDon", "soba", "seiro"),
  "mini-curry-udon-seiro": miniSet("curryDon", "udon", "seiro"),
  "mini-oyako-soba": miniSet("oyakoDon", "soba", "hot"),
  "mini-oyako-udon": miniSet("oyakoDon", "udon", "hot"),
  "mini-oyako-seiro": miniSet("oyakoDon", "soba", "seiro"),
  "mini-oyako-udon-seiro": miniSet("oyakoDon", "udon", "seiro"),
  "mini-hirekatsu-soba": miniSet("hirekatsuDon", "soba", "hot"),
  "mini-hirekatsu-udon": miniSet("hirekatsuDon", "udon", "hot"),
  "mini-hirekatsu-seiro": miniSet("hirekatsuDon", "soba", "seiro"),
  "mini-hirekatsu-udon-seiro": miniSet("hirekatsuDon", "udon", "seiro"),
};

export function resolveMenuVisualSpec(menuId: string): MenuVisualSpec {
  const spec = SPECS[menuId];
  if (spec === undefined) {
    throw new Error(`未対応のメニューID: ${menuId}`);
  }
  return spec;
}
