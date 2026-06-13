import type { ReactNode } from "react";
import type { MenuVisualNoodle, NoodleTopping } from "./menuVisualSpec";
import { EbiTenTopping } from "./toppings/EbiTenTopping";
import { IkaTenTopping } from "./toppings/IkaTenTopping";
import { KakiageTopping } from "./toppings/KakiageTopping";
import { KamoTopping } from "./toppings/KamoTopping";
import { TorikaraTopping } from "./toppings/TorikaraTopping";
import { YamakakeTopping } from "./toppings/YamakakeTopping";

const SEIRO_CLIP_ID = "seiro-noodle-clip";

// 丸いせいろ(竹ザル)。中央配置。
function RoundSeiro() {
  return (
    <g>
      {/* テーブル影 */}
      <ellipse
        cx="170"
        cy="290"
        rx="140"
        ry="14"
        fill="#000000"
        opacity="0.12"
      />

      {/* せいろ外枠(木) */}
      <ellipse cx="170" cy="225" rx="135" ry="62" fill="#6a4a28" />
      <ellipse cx="170" cy="220" rx="135" ry="62" fill="#8a6438" />
      {/* 内側の木目 */}
      <ellipse cx="170" cy="218" rx="128" ry="56" fill="#a0784a" />
      {/* 竹のすだれ部分(内側) */}
      <ellipse cx="170" cy="215" rx="120" ry="50" fill="#c8a870" />

      {/* 竹のすだれ線(横方向) */}
      <g stroke="#9a7240" strokeWidth="1.3" opacity="0.55">
        <line x1="58" y1="200" x2="282" y2="200" />
        <line x1="54" y1="210" x2="286" y2="210" />
        <line x1="52" y1="220" x2="288" y2="220" />
        <line x1="54" y1="230" x2="286" y2="230" />
        <line x1="58" y1="240" x2="282" y2="240" />
        <line x1="64" y1="250" x2="276" y2="250" />
      </g>

      {/* 外枠ハイライト */}
      <path
        d="M 50 215 Q 70 175 170 168 Q 270 175 290 215"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.35"
      />
      {/* 外枠の縁 */}
      <ellipse
        cx="170"
        cy="215"
        rx="120"
        ry="50"
        fill="none"
        stroke="#5a3a1c"
        strokeWidth="2"
        opacity="0.6"
      />
    </g>
  );
}

// せいろの上に盛り付けたそば/うどん。モンブラン状に高く盛る。
// 同心楕円のリングを高さを変えて積み上げ、Z軸方向の盛り上がりを表現。
function SeiroNoodles({ noodleKind }: { noodleKind: "soba" | "udon" }) {
  const isSoba = noodleKind === "soba";
  const c1 = isSoba ? "#5a4a40" : "#e8dfc8";
  const c2 = isSoba ? "#6e5c50" : "#f4ecd8";
  const c3 = isSoba ? "#8a7060" : "#fff7e0";
  const cShade = isSoba ? "#3a2a22" : "#c8bf9c";
  const w = isSoba ? 3 : 4.5;

  // モンブラン状の一山。底面が広く、上に向かって細く高くなる。
  // 各層は楕円リングで、cyを上に移動させながら半径を縮める。
  const mound = (
    cx: number,
    baseCy: number,
    baseRx: number,
    baseRy: number,
  ) => {
    const layers = 7;
    const layerSpecs = Array.from({ length: layers }, (_, i) => {
      const t = i / (layers - 1);
      return {
        t,
        cy: baseCy - t * baseRy * 1.7,
        rx: baseRx * (1 - t * 0.78),
        ry: baseRy * (1 - t * 0.78),
        color: t > 0.7 ? c3 : i % 2 === 0 ? c1 : c2,
      };
    });
    return (
      <g>
        {/* 影(底面に落ちる影) */}
        <ellipse
          cx={cx}
          cy={baseCy + 4}
          rx={baseRx * 1.02}
          ry={baseRy * 0.9}
          fill={cShade}
          opacity="0.55"
        />
        {layerSpecs.map((s) => (
          <ellipse
            key={`${cx}-${s.cy.toFixed(2)}`}
            cx={cx}
            cy={s.cy}
            rx={s.rx}
            ry={s.ry}
            fill="none"
            stroke={s.color}
            strokeWidth={w}
          />
        ))}
        {/* 頂上の小さな結び目(麺の終端) */}
        <ellipse
          cx={cx}
          cy={baseCy - baseRy * 1.7}
          rx={baseRx * 0.08}
          ry={baseRy * 0.08}
          fill={c3}
        />
      </g>
    );
  };

  return (
    <g clipPath={`url(#${SEIRO_CLIP_ID})`}>
      {/* 左の山(やや小さく奥) */}
      {mound(125, 232, 46, 20)}
      {/* 右の山(大きく手前) */}
      {mound(218, 238, 52, 22)}
    </g>
  );
}

// つゆ猪口 (右上)。おろしせいろのときは大根おろしを入れる。
function TsuyuCup({ withOroshi }: { withOroshi: boolean }) {
  return (
    <g>
      {/* 影 */}
      <ellipse cx="340" cy="282" rx="34" ry="8" fill="#000000" opacity="0.18" />
      {/* 高台 */}
      <path
        d="M 320 268 L 360 268 L 354 278 Q 340 282 326 278 Z"
        fill="#2a1808"
      />
      {/* 猪口の本体 */}
      <path
        d="M 305 225 Q 300 270, 320 280 Q 340 286, 360 280 Q 380 270, 375 225 Z"
        fill="#3a2210"
      />
      {/* 縁 */}
      <ellipse
        cx="340"
        cy="225"
        rx="36"
        ry="9"
        fill="#3a2210"
        stroke="#7a5028"
        strokeWidth="2.5"
      />
      {/* つゆ */}
      <ellipse cx="340" cy="227" rx="30" ry="6.5" fill="#2c160a" />
      {/* 表面ツヤ */}
      <ellipse cx="332" cy="228" rx="10" ry="2" fill="#7a3e1a" opacity="0.55" />

      {/* おろし(大根おろしの山がつゆに浮かぶ) */}
      {withOroshi && (
        <g>
          <ellipse
            cx="340"
            cy="222"
            rx="24"
            ry="5"
            fill="#f4f0ea"
            opacity="0.95"
          />
          <path
            d="M 320 222 Q 330 212, 340 210 Q 350 212, 360 222 Q 350 226, 340 226 Q 328 226, 320 222 Z"
            fill="#ece8e0"
          />
          <ellipse
            cx="338"
            cy="218"
            rx="10"
            ry="2.5"
            fill="#ffffff"
            opacity="0.55"
          />
          {/* 上に刻みネギを少し */}
          <ellipse cx="334" cy="216" rx="3" ry="1.4" fill="#27ae60" />
          <ellipse cx="344" cy="218" rx="3.2" ry="1.5" fill="#27ae60" />
        </g>
      )}
    </g>
  );
}

// 別皿(揚げ物などを乗せる平らな白皿)。手前下に設置。
function SidePlate({ children }: { children: ReactNode }) {
  return (
    <g>
      {/* 皿の影(設置感) */}
      <ellipse
        cx="200"
        cy="368"
        rx="108"
        ry="10"
        fill="#000000"
        opacity="0.18"
      />
      {/* 皿(楕円・浅め) */}
      <ellipse cx="200" cy="358" rx="106" ry="18" fill="#ffffff" />
      <ellipse
        cx="200"
        cy="354"
        rx="106"
        ry="18"
        fill="#f6efe0"
        stroke="#c8bdb0"
        strokeWidth="2"
      />
      <ellipse cx="200" cy="350" rx="94" ry="12" fill="#fdf9ee" />
      <ellipse
        cx="200"
        cy="354"
        rx="94"
        ry="12"
        fill="none"
        stroke="#d8c8b0"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* 載せるトッピング: トッピングは概ね(200,180)中心で半径〜80程度を想定。
         皿中心(200,348)に縮小して収める */}
      <g transform="translate(130 285) scale(0.35)">{children}</g>
    </g>
  );
}

function SideDishContent({ topping }: { topping: NoodleTopping }) {
  switch (topping) {
    case "kakiage":
    case "kakiageTamago":
      return <KakiageTopping />;
    case "ebiTen":
      return <EbiTenTopping />;
    case "ikaTen":
      return <IkaTenTopping />;
    case "torikara":
      return <TorikaraTopping />;
    case "yamakake":
      return <YamakakeTopping />;
    case "kamo":
      return <KamoTopping />;
    default:
      return null;
  }
}

function ToppingSlot({ topping }: { topping: NoodleTopping }) {
  if (
    topping === "plain" ||
    topping === "oroshi" ||
    topping === "kitsune" ||
    topping === "tanuki" ||
    topping === "tsukimi" ||
    topping === "tsukiyoBakashi"
  ) {
    return null;
  }
  return (
    <SidePlate>
      <SideDishContent topping={topping} />
    </SidePlate>
  );
}

// セット表示用の内部コンポーネント (svgラッパーなし)
export function SeiroArtwork({ spec }: { spec: MenuVisualNoodle }) {
  return (
    <g>
      <defs>
        <clipPath id={SEIRO_CLIP_ID}>
          <ellipse cx="170" cy="215" rx="118" ry="48" />
        </clipPath>
      </defs>
      <RoundSeiro />
      <SeiroNoodles noodleKind={spec.noodleKind} />
      <TsuyuCup withOroshi={spec.topping === "oroshi"} />
      <ToppingSlot topping={spec.topping} />
    </g>
  );
}

type Props = {
  spec: MenuVisualNoodle;
  label: string;
};

export function SeiroIllustration({ spec, label }: Props) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label}>
      <SeiroArtwork spec={spec} />
    </svg>
  );
}
