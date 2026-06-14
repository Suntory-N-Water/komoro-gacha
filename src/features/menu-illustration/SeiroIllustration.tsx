import type { ReactNode } from "react";
import type { MenuVisualNoodle, NoodleTopping } from "./menuVisualSpec";
import { EbiTenTopping } from "./toppings/EbiTenTopping";
import { IkaTenTopping } from "./toppings/IkaTenTopping";
import { KakiageTopping } from "./toppings/KakiageTopping";
import { KamoTopping } from "./toppings/KamoTopping";
import { TorikaraTopping } from "./toppings/TorikaraTopping";
import { YamakakeTopping } from "./toppings/YamakakeTopping";

const SEIRO_CLIP_ID = "seiro-noodle-clip";

// 角せいろを斜め俯瞰で。手前が広く奥が狭い台形 + 側面に木目。
function SquareSeiro() {
  return (
    <g>
      {/* テーブル影 */}
      <ellipse
        cx="170"
        cy="298"
        rx="140"
        ry="12"
        fill="#000000"
        opacity="0.18"
      />

      {/* 側面影 */}
      <path d="M 45 257 L 295 257 L 288 292 L 52 292 Z" fill="#5e371c" />
      {/* 側面前面 */}
      <path d="M 45 248 L 295 248 L 288 283 L 52 283 Z" fill="#7a4a25" />
      {/* 側面の木目 */}
      <g stroke="#5e371c" strokeWidth="1" opacity="0.55">
        <line x1="55" y1="258" x2="285" y2="258" />
        <line x1="57" y1="268" x2="283" y2="268" />
        <line x1="58" y1="278" x2="282" y2="278" />
      </g>
      {/* 木の節 */}
      <ellipse cx="100" cy="270" rx="5" ry="2.5" fill="#5e371c" opacity="0.5" />
      <ellipse cx="230" cy="263" rx="4" ry="2" fill="#5e371c" opacity="0.5" />

      {/* 天面外枠(台形・手前が広い) */}
      <path d="M 65 165 L 275 165 L 295 248 L 45 248 Z" fill="#7a4a25" />
      {/* 天面くぼみ */}
      <path d="M 78 175 L 262 175 L 280 240 L 60 240 Z" fill="#b87a3a" />

      {/* すだれ(竹簾) */}
      <g
        stroke="#7a4a25"
        strokeWidth="1.3"
        opacity="0.6"
        clipPath={`url(#${SEIRO_CLIP_ID})`}
      >
        <line x1="72" y1="182" x2="268" y2="182" />
        <line x1="70" y1="192" x2="270" y2="192" />
        <line x1="68" y1="203" x2="272" y2="203" />
        <line x1="66" y1="215" x2="274" y2="215" />
        <line x1="63" y1="228" x2="277" y2="228" />
      </g>

      {/* 縁のハイライト */}
      <path
        d="M 67 167 L 273 167"
        stroke="#c89060"
        strokeWidth="1.5"
        opacity="0.7"
      />
    </g>
  );
}

// せいろの上に盛り付けたそば/うどん。山のシルエットと横方向の麺線で
// 高さ(Z軸)を Y軸プロファイルに置き換えて見せる方式。
function SeiroNoodles({ noodleKind }: { noodleKind: "soba" | "udon" }) {
  const isSoba = noodleKind === "soba";
  // 山の塗り(下層・中段・頂上ハイライト)。soba は金茶系で木色と差別化。
  const fillBase = isSoba ? "#b8924c" : "#e8dfc8";
  const fillMid = isSoba ? "#c9a560" : "#f4ecd8";
  const highlightStroke = isSoba ? "#e6c684" : "#fff7e0";
  // 麺の流線
  const strandMid = isSoba ? "#7a5a28" : "#b8a878";
  const strandDark = isSoba ? "#5a4520" : "#9a8858";
  const strandLight = isSoba ? "#f5e0aa" : "#ffffff";

  // せいろ天面台形(60,240)-(280,240)-(262,175)-(78,175)に収まる山。
  // 麺の山が天面外にはみ出ないよう、麺関連はクリップで台形に閉じ込める。
  return (
    <g clipPath={`url(#${SEIRO_CLIP_ID})`}>
      {/* 山の輪郭(下層・最大シルエット) */}
      <path
        d="M 70 240 C 90 215, 108 192, 130 178 C 150 165, 165 152, 178 148 C 192 146, 208 158, 222 172 C 242 190, 260 215, 278 240 Z"
        fill={fillBase}
      />
      {/* 山の中段 */}
      <path
        d="M 82 240 C 100 218, 118 198, 138 182 C 155 170, 170 158, 182 156 C 194 156, 208 168, 220 180 C 238 198, 254 218, 270 240 Z"
        fill={fillMid}
        opacity="0.95"
      />
      {/* 山の頂上ハイライト(稜線) */}
      <path
        d="M 118 182 C 138 165, 158 152, 178 150 C 196 150, 208 158, 220 170 C 235 184, 250 200, 264 218"
        stroke={highlightStroke}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 麺一本一本: 横方向に流れる細い線 */}
      <g
        stroke={strandMid}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      >
        <path d="M 72 235 Q 125 198 178 172 T 278 235" />
        <path d="M 78 238 Q 130 202 182 176 T 276 238" />
        <path d="M 88 228 Q 132 192 178 165 T 270 228" />
        <path d="M 100 218 Q 138 182 180 158 T 262 220" />
        <path d="M 112 205 Q 142 175 180 152 T 254 208" />
      </g>
      {/* 手前の濃い麺(ピントが合う層) */}
      <g
        stroke={strandDark}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      >
        <path d="M 76 238 Q 128 202 182 175 T 278 238" />
        <path d="M 92 230 Q 138 192 182 165 T 270 230" />
      </g>
      {/* ハイライト線 */}
      <g
        stroke={strandLight}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      >
        <path d="M 122 178 Q 158 152 198 148" />
        <path d="M 134 188 Q 168 162 208 160" />
        <path d="M 148 170 Q 178 150 218 152" />
      </g>
    </g>
  );
}

// つゆ猪口 (右上)。おろしせいろのときは大根おろし、山かけせいろのときはとろろを入れる。
function TsuyuCup({
  withOroshi,
  withYamakake,
}: {
  withOroshi: boolean;
  withYamakake: boolean;
}) {
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

      {/* とろろ(山かけ。半透明の白で粘度感を出す) */}
      {withYamakake && (
        <g>
          <ellipse
            cx="340"
            cy="222"
            rx="26"
            ry="5.5"
            fill="#f0ece4"
            opacity="0.92"
          />
          <ellipse
            cx="340"
            cy="220"
            rx="20"
            ry="4"
            fill="#e8e4dc"
            opacity="0.9"
          />
          <ellipse
            cx="336"
            cy="217"
            rx="11"
            ry="2"
            fill="#ffffff"
            opacity="0.7"
          />
          {/* とろろの糸引き */}
          <path
            d="M 322 222 Q 332 220 342 222 T 358 222"
            fill="none"
            stroke="#d8d4cc"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
          />
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
         皿に盛り付けた見た目になるよう、皿幅(rx=94)の7割程度を占めるサイズで
         皿中心(200,348)に配置する */}
      <g transform="translate(80 240) scale(0.6)">{children}</g>
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
    topping === "tsukiyoBakashi" ||
    topping === "yamakake"
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
        {/* 麺の山がせいろ上方向に突き出るよう、内側台形を上に延長したクリップ */}
        <clipPath id={SEIRO_CLIP_ID}>
          <path d="M 78 100 L 262 100 L 280 240 L 60 240 Z" />
        </clipPath>
      </defs>
      <SquareSeiro />
      <SeiroNoodles noodleKind={spec.noodleKind} />
      <TsuyuCup
        withOroshi={spec.topping === "oroshi"}
        withYamakake={spec.topping === "yamakake"}
      />
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
