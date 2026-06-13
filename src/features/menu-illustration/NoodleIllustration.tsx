import type { MenuVisualNoodle, NoodleTopping } from "./menuVisualSpec";
import { Bowl } from "./parts/Bowl";
import { Chopsticks } from "./parts/Chopsticks";
import { Condiments } from "./parts/Condiments";
import { Noodles } from "./parts/Noodles";
import { Soup } from "./parts/Soup";
import { Steam } from "./parts/Steam";
import { EbiTenTopping } from "./toppings/EbiTenTopping";
import { IkaTenTopping } from "./toppings/IkaTenTopping";
import { KakiageTamagoTopping } from "./toppings/KakiageTamagoTopping";
import { KakiageTopping } from "./toppings/KakiageTopping";
import { KamoTopping } from "./toppings/KamoTopping";
import { KitsuneTopping } from "./toppings/KitsuneTopping";
import { OroshiTopping } from "./toppings/OroshiTopping";
import { TanukiTopping } from "./toppings/TanukiTopping";
import { TorikaraTopping } from "./toppings/TorikaraTopping";
import { TsukimiTopping } from "./toppings/TsukimiTopping";
import { TsukiyoBakashiTopping } from "./toppings/TsukiyoBakashiTopping";
import { YamakakeTopping } from "./toppings/YamakakeTopping";

const SOUP_CLIP_ID = "noodle-soup-clip";

function ToppingElement({ topping }: { topping: NoodleTopping }) {
  switch (topping) {
    case "plain":
      return null;
    case "kakiage":
      return <KakiageTopping />;
    case "kakiageTamago":
      return <KakiageTamagoTopping />;
    case "kitsune":
      return <KitsuneTopping />;
    case "tanuki":
      return <TanukiTopping />;
    case "tsukimi":
      return <TsukimiTopping />;
    case "yamakake":
      return <YamakakeTopping />;
    case "oroshi":
      return <OroshiTopping />;
    case "ebiTen":
      return <EbiTenTopping />;
    case "ikaTen":
      return <IkaTenTopping />;
    case "torikara":
      return <TorikaraTopping />;
    case "kamo":
      return <KamoTopping />;
    case "tsukiyoBakashi":
      return <TsukiyoBakashiTopping />;
  }
}

// セット表示用の内部コンポーネント (svgラッパーなし)
export function NoodleArtwork({ spec }: { spec: MenuVisualNoodle }) {
  const isHot = spec.temperature === "hot";
  return (
    <g>
      <defs>
        <clipPath id={SOUP_CLIP_ID}>
          <ellipse cx="200" cy="184" rx="142" ry="34" />
        </clipPath>
      </defs>
      {isHot && <Steam />}
      <Bowl />
      <Soup />
      <Noodles noodleKind={spec.noodleKind} clipId={SOUP_CLIP_ID} />
      <ToppingElement topping={spec.topping} />
      <Condiments />
      <Chopsticks />
    </g>
  );
}

type Props = {
  spec: MenuVisualNoodle;
  label: string;
};

export function NoodleIllustration({ spec, label }: Props) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label}>
      <NoodleArtwork spec={spec} />
    </svg>
  );
}
