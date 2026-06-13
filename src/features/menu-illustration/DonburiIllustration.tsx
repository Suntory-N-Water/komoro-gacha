import type { DonburiKind, MenuVisualDonburi } from "./menuVisualSpec";

// 丼鉢
function DonburiBowl() {
  return (
    <g>
      <ellipse cx="200" cy="312" rx="130" ry="22" fill="#000" opacity="0.13" />
      <path d="M155 295 L245 295 L228 310 Q200 320 172 310 Z" fill="#5d4637" />
      <path
        d="M55 185 Q75 240 102 275 Q125 302 155 310 Q200 322 245 310 Q275 302 298 275 Q325 240 345 185 Z"
        fill="#3d2a1a"
      />
      <path
        d="M92 192 Q80 220 87 250 Q95 278 115 295 Q98 272 92 248 Q86 222 93 196 Z"
        fill="#ffffff"
        opacity="0.12"
      />
      <ellipse
        cx="200"
        cy="185"
        rx="145"
        ry="38"
        fill="#3d2a1a"
        stroke="#8b6914"
        strokeWidth="4"
      />
      <ellipse
        cx="200"
        cy="185"
        rx="134"
        ry="33"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.2"
        opacity="0.7"
      />
    </g>
  );
}

// ごはん(米粒のテクスチャ付き)
function Rice() {
  return (
    <g>
      <ellipse cx="200" cy="189" rx="136" ry="31" fill="#f8f3e6" />
      {/* 米粒(細かい楕円を散りばめる) */}
      <g fill="#ffffff" opacity="0.85">
        {RICE_GRAINS.map((g) => (
          <ellipse
            key={`${g.x}-${g.y}`}
            cx={g.x}
            cy={g.y}
            rx="3.2"
            ry="1.6"
            transform={`rotate(${g.r} ${g.x} ${g.y})`}
          />
        ))}
      </g>
      <g fill="#e8dfc4" opacity="0.6">
        {RICE_SHADOWS.map((g) => (
          <ellipse
            key={`${g.x}-${g.y}`}
            cx={g.x}
            cy={g.y}
            rx="2.5"
            ry="1.2"
            transform={`rotate(${g.r} ${g.x} ${g.y})`}
          />
        ))}
      </g>
    </g>
  );
}

const RICE_GRAINS = [
  { x: 90, y: 184, r: 20 },
  { x: 105, y: 178, r: -10 },
  { x: 120, y: 190, r: 35 },
  { x: 135, y: 182, r: -25 },
  { x: 150, y: 195, r: 15 },
  { x: 168, y: 180, r: -40 },
  { x: 185, y: 192, r: 25 },
  { x: 200, y: 184, r: -15 },
  { x: 218, y: 190, r: 40 },
  { x: 235, y: 182, r: -20 },
  { x: 252, y: 195, r: 10 },
  { x: 270, y: 184, r: -35 },
  { x: 285, y: 190, r: 25 },
  { x: 300, y: 180, r: -10 },
  { x: 110, y: 200, r: -30 },
  { x: 145, y: 208, r: 18 },
  { x: 180, y: 205, r: -22 },
  { x: 215, y: 208, r: 30 },
  { x: 248, y: 205, r: -15 },
  { x: 285, y: 202, r: 20 },
  { x: 130, y: 172, r: 5 },
  { x: 175, y: 170, r: 30 },
  { x: 220, y: 172, r: -25 },
  { x: 260, y: 172, r: 10 },
];
const RICE_SHADOWS = [
  { x: 100, y: 195, r: 15 },
  { x: 140, y: 190, r: -20 },
  { x: 180, y: 198, r: 30 },
  { x: 225, y: 196, r: -10 },
  { x: 265, y: 198, r: 25 },
  { x: 295, y: 192, r: -15 },
  { x: 115, y: 188, r: 40 },
  { x: 160, y: 200, r: -30 },
  { x: 200, y: 200, r: 10 },
  { x: 240, y: 200, r: -25 },
  { x: 280, y: 195, r: 35 },
];

// ─── 各丼のトッピング ───────────────────────────────────────────

function KakiageDonTopping() {
  return (
    <g transform="translate(-25 12) scale(1.0)">
      {/* かき揚げ本体 (KakiageToppingを大きく) */}
      <g transform="translate(225 162)">
        <ellipse cx="0" cy="22" rx="78" ry="14" fill="#000" opacity="0.18" />
        <g>
          <circle cx="-42" cy="6" r="34" fill="#d35400" opacity="0.8" />
          <circle cx="42" cy="10" r="34" fill="#d35400" opacity="0.8" />
          <circle cx="0" cy="-22" r="36" fill="#f1c40f" />
          <circle cx="-28" cy="-16" r="34" fill="#f1c40f" />
          <circle cx="28" cy="-12" r="34" fill="#f1c40f" />
          <circle cx="-18" cy="16" r="36" fill="#f1c40f" />
          <circle cx="22" cy="16" r="34" fill="#f1c40f" />
          <circle cx="0" cy="5" r="36" fill="#f1c40f" />
        </g>
        <g fill="#ffeaa7">
          <circle cx="-15" cy="-8" r="22" />
          <circle cx="15" cy="-5" r="22" />
          <circle cx="0" cy="10" r="24" />
        </g>
        <g fill="#e67e22" stroke="#a04010" strokeWidth="1">
          <rect
            x="-38"
            y="-12"
            width="28"
            height="6"
            rx="2"
            transform="rotate(15 -24 -9)"
          />
          <rect
            x="-10"
            y="-24"
            width="22"
            height="6"
            rx="2"
            transform="rotate(-30 1 -21)"
          />
          <rect
            x="12"
            y="-12"
            width="30"
            height="6"
            rx="2"
            transform="rotate(45 27 -9)"
          />
          <rect
            x="-22"
            y="14"
            width="26"
            height="6"
            rx="2"
            transform="rotate(-10 -9 17)"
          />
          <rect
            x="6"
            y="10"
            width="26"
            height="6"
            rx="2"
            transform="rotate(25 19 13)"
          />
        </g>
        <g fill="#27ae60" stroke="#145a32" strokeWidth="1">
          <rect
            x="-22"
            y="-20"
            width="20"
            height="7"
            rx="2"
            transform="rotate(55 -12 -17)"
          />
          <rect
            x="14"
            y="-22"
            width="22"
            height="6"
            rx="2"
            transform="rotate(-15 25 -19)"
          />
          <rect
            x="14"
            y="14"
            width="22"
            height="7"
            rx="2"
            transform="rotate(60 25 18)"
          />
        </g>
        <g stroke="#ff7675" strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M -15 -3 A 9 9 0 0 1 0 -11" />
          <path d="M 8 2 A 11 11 0 0 1 22 14" />
        </g>
      </g>
    </g>
  );
}

function YamakakeDonTopping() {
  return (
    <g>
      <ellipse
        cx="200"
        cy="188"
        rx="125"
        ry="28"
        fill="#f0ece4"
        opacity="0.92"
      />
      <path
        d="M100 188 C130 170,165 178,200 174 S255 168,295 180 Q310 188,300 196 Q260 208,200 208 Q140 208,100 196 Z"
        fill="#e8e4dc"
        opacity="0.95"
      />
      <path
        d="M130 183 C165 175,195 179,225 177 S265 174,285 180"
        fill="none"
        stroke="#d0ccc4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* 醤油 */}
      <ellipse
        cx="200"
        cy="184"
        rx="14"
        ry="3.5"
        fill="#3d1d06"
        opacity="0.5"
      />
      {/* 刻みネギ(白ねぎ寄り) */}
      <g>
        <ellipse cx="170" cy="178" rx="5" ry="2" fill="#b9d8a6" />
        <ellipse cx="170" cy="178" rx="3.5" ry="1.3" fill="#f4faec" />
        <ellipse cx="230" cy="180" rx="5" ry="2" fill="#b9d8a6" />
        <ellipse cx="230" cy="180" rx="3.5" ry="1.3" fill="#f4faec" />
        <ellipse cx="200" cy="192" rx="5" ry="2" fill="#b9d8a6" />
        <ellipse cx="200" cy="192" rx="3.5" ry="1.3" fill="#f4faec" />
      </g>
    </g>
  );
}

function TorikaraDonTopping() {
  return (
    <g>
      <Karaage cx={160} cy={175} rotate={-10} />
      <Karaage cx={212} cy={170} rotate={15} />
      <Karaage cx={262} cy={176} rotate={-5} />
      {/* レタス少々 */}
      <ellipse cx="125" cy="200" rx="22" ry="6" fill="#7ed352" opacity="0.65" />
      <ellipse cx="285" cy="200" rx="22" ry="6" fill="#7ed352" opacity="0.65" />
    </g>
  );
}

function Karaage({
  cx,
  cy,
  rotate,
}: {
  cx: number;
  cy: number;
  rotate: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <path
        d="M -24 -2 C -28 -18, -14 -26, 0 -24 C 16 -27, 28 -20, 28 -8
           C 32 8, 22 20, 8 22 C -8 24, -24 18, -26 8 C -30 4, -28 -2, -24 -2 Z"
        fill="#a85610"
      />
      <path
        d="M -20 -4 C -24 -16, -10 -22, 2 -20 C 14 -22, 24 -14, 24 -4
           C 26 6, 20 16, 6 18 C -8 20, -20 12, -22 4 Z"
        fill="#d68830"
      />
      <g fill="#e89838">
        <circle cx="-12" cy="-12" r="5" />
        <circle cx="2" cy="-18" r="5.5" />
        <circle cx="14" cy="-12" r="5" />
        <circle cx="22" cy="2" r="4" />
        <circle cx="14" cy="14" r="5" />
        <circle cx="-6" cy="16" r="5.5" />
        <circle cx="-20" cy="6" r="4" />
      </g>
      <g fill="#5a3010" opacity="0.5">
        <circle cx="-10" cy="-4" r="1.3" />
        <circle cx="6" cy="0" r="1.3" />
        <circle cx="18" cy="-6" r="1" />
        <circle cx="-2" cy="10" r="1.3" />
      </g>
    </g>
  );
}

function CurryDonTopping() {
  return (
    <g>
      <ellipse cx="200" cy="188" rx="130" ry="29" fill="#b8780a" />
      <ellipse cx="200" cy="186" rx="118" ry="24" fill="#cc8c10" />
      <path
        d="M115 185 C145 175,175 182,205 180 S250 175,285 183"
        fill="none"
        stroke="#e0a020"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="155" cy="182" r="9" fill="#e8a820" opacity="0.85" />
      <circle cx="178" cy="176" r="7" fill="#f0a825" opacity="0.8" />
      <rect
        x="206"
        y="177"
        width="15"
        height="10"
        rx="3"
        fill="#cc6010"
        opacity="0.8"
      />
      <circle cx="240" cy="179" r="8" fill="#d8a018" opacity="0.8" />
      <circle cx="260" cy="186" r="7" fill="#e8a820" opacity="0.75" />
      {/* 福神漬 */}
      <g fill="#c0392b">
        <ellipse cx="190" cy="195" rx="5" ry="2" />
        <ellipse cx="220" cy="198" rx="6" ry="2.5" />
        <ellipse cx="250" cy="196" rx="5" ry="2" />
      </g>
    </g>
  );
}

function OyakoDonTopping() {
  return (
    <g>
      {/* とろとろ卵のベース(濃い黄色) */}
      <ellipse cx="200" cy="186" rx="138" ry="31" fill="#f1c40f" />
      {/* 半熟の白身グラデ */}
      <path
        d="M 70 185 C 110 205, 180 200, 220 208 C 270 200, 310 210, 320 190 C 300 170, 90 170, 70 185 Z"
        fill="#ffeaa7"
        opacity="0.95"
      />
      {/* 濃い黄の半熟層 */}
      <path
        d="M 100 178 C 150 162, 210 185, 250 168 C 280 175, 310 162, 290 185 Z"
        fill="#f39c12"
        opacity="0.75"
      />

      {/* 鶏肉(照り焼き色・陰影付き・5切れ) */}
      <g fill="#d5a980" stroke="#b88355" strokeWidth="1.2">
        <path d="M 90 184 Q 108 162, 138 178 Q 124 200, 100 196 Z" />
        <path d="M 218 188 Q 244 168, 264 188 Q 244 210, 226 202 Z" />
        <path d="M 162 168 Q 188 154, 208 172 Q 188 190, 162 182 Z" />
        <path d="M 130 200 Q 158 190, 184 206 Q 158 220, 130 206 Z" />
        <path d="M 196 186 Q 222 174, 238 194 Q 218 206, 196 192 Z" />
      </g>

      {/* 半透明の玉ねぎ */}
      <g
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      >
        <path d="M 80 192 Q 100 178, 128 186" />
        <path d="M 268 192 Q 286 180, 304 186" />
        <path d="M 198 162 Q 216 154, 236 164" />
        <path d="M 152 172 Q 170 162, 188 170" />
      </g>

      {/* 卵のツヤ(ハイライト) */}
      <ellipse
        cx="155"
        cy="196"
        rx="28"
        ry="6"
        fill="#ffffff"
        opacity="0.45"
        transform="rotate(-10 155 196)"
      />
      <ellipse
        cx="252"
        cy="180"
        rx="22"
        ry="5"
        fill="#ffffff"
        opacity="0.45"
        transform="rotate(15 252 180)"
      />

      {/* 三つ葉(茎+三枚葉) */}
      <g fill="#2ecc71" stroke="#27ae60" strokeWidth="1">
        <path
          d="M 200 192 Q 192 174, 185 166"
          fill="none"
          stroke="#27ae60"
          strokeWidth="2.2"
        />
        <path d="M 185 166 Q 173 158, 170 166 Q 178 173, 185 166 Z" />
        <path d="M 185 166 Q 188 154, 198 158 Q 192 169, 185 166 Z" />
        <path d="M 185 166 Q 178 151, 186 152 Q 188 162, 185 166 Z" />
        <path
          d="M 218 184 Q 226 174, 234 174"
          fill="none"
          stroke="#27ae60"
          strokeWidth="1.8"
        />
        <path d="M 234 174 Q 226 167, 226 174 Q 230 179, 234 174 Z" />
        <path d="M 234 174 Q 242 170, 242 178 Q 234 180, 234 174 Z" />
      </g>

      {/* 刻み海苔 */}
      <g fill="#2c3e50">
        <rect
          x="140"
          y="200"
          width="12"
          height="2.5"
          transform="rotate(15 146 201)"
        />
        <rect
          x="250"
          y="186"
          width="15"
          height="3"
          transform="rotate(-25 257 188)"
        />
        <rect
          x="172"
          y="180"
          width="10"
          height="2.2"
          transform="rotate(40 177 181)"
        />
        <rect
          x="222"
          y="206"
          width="14"
          height="2.5"
          transform="rotate(-10 229 207)"
        />
        <rect
          x="188"
          y="196"
          width="11"
          height="2.6"
          transform="rotate(75 193 197)"
        />
      </g>
    </g>
  );
}

// 海老天 (丼に乗せる用): 衣はギザ縁、本体はバナナ型のしっかりした輪郭。
function EbiTempura({
  cx,
  cy,
  scale,
  rotate,
}: {
  cx: number;
  cy: number;
  scale: number;
  rotate: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
      {/* 衣本体 */}
      <path
        d="M -50 4
           Q -52 -8, -42 -14
           Q -28 -20, -10 -19
           Q 10 -19, 26 -16
           Q 40 -12, 46 -4
           Q 50 4, 44 10
           Q 26 16, 0 14
           Q -26 12, -42 10
           Q -52 8, -50 4 Z"
        fill="#e8a020"
      />
      {/* 衣の輪郭ギザ */}
      <g fill="#e8a020">
        <circle cx="-48" cy="0" r="4.5" />
        <circle cx="-38" cy="-12" r="5.5" />
        <circle cx="-22" cy="-19" r="5.5" />
        <circle cx="-2" cy="-20" r="5.5" />
        <circle cx="16" cy="-18" r="5" />
        <circle cx="32" cy="-13" r="5" />
        <circle cx="42" cy="-4" r="4.5" />
        <circle cx="40" cy="8" r="5" />
        <circle cx="20" cy="14" r="5" />
        <circle cx="-4" cy="15" r="5" />
        <circle cx="-28" cy="13" r="5" />
        <circle cx="-44" cy="10" r="4.5" />
      </g>
      {/* 明るい中間色 */}
      <path
        d="M -38 0
           Q -32 -10, -10 -13
           Q 12 -14, 28 -8
           Q 36 -2, 32 4
           Q 10 10, -16 8
           Q -36 6, -38 0 Z"
        fill="#f1c40f"
      />
      {/* ハイライト */}
      <path
        d="M -28 -4 Q -8 -8, 10 -6 Q 22 -4, 30 -1"
        fill="none"
        stroke="#fff3b0"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* しっぽ */}
      <g transform="translate(46 0) rotate(-8)">
        <path
          d="M 0 -2
             L 14 -10
             L 22 -4
             L 16 0
             L 22 6
             L 12 8
             L 10 16
             L 4 8
             L 0 14 Z"
          fill="#e74c3c"
          stroke="#a92414"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}

// タレを線状に少量だけかける(ご飯を覆わない)
function TenDonTare() {
  return (
    <g
      fill="none"
      stroke="#6a3408"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.65"
    >
      <path d="M 110 195 Q 150 202, 195 198 Q 240 194, 290 200" />
      <path d="M 130 208 Q 180 212, 230 208" opacity="0.55" />
    </g>
  );
}

function TenDonTopping() {
  return (
    <g>
      <TenDonTare />
      {/* えび天2本 */}
      <EbiTempura cx={155} cy={172} scale={1} rotate={-15} />
      <EbiTempura cx={220} cy={178} scale={1} rotate={10} />
      {/* 野菜天(かぼちゃ) */}
      <g transform="translate(285 178) rotate(20)">
        <ellipse cx="0" cy="0" rx="28" ry="20" fill="#d4900a" />
        <ellipse cx="0" cy="0" rx="22" ry="14" fill="#e8a820" />
        <g fill="#f1c40f">
          <circle cx="-12" cy="-8" r="4" />
          <circle cx="8" cy="-10" r="4" />
          <circle cx="14" cy="6" r="4" />
        </g>
        <ellipse cx="0" cy="3" rx="14" ry="5" fill="#1e8449" opacity="0.4" />
      </g>
    </g>
  );
}

function JoTenDonTopping() {
  return (
    <g>
      <TenDonTare />
      {/* えび天3本(大きめ) */}
      <EbiTempura cx={140} cy={172} scale={1.18} rotate={-18} />
      <EbiTempura cx={200} cy={166} scale={1.18} rotate={5} />
      <EbiTempura cx={262} cy={174} scale={1.18} rotate={-8} />
      {/* 葉物(青しそ) */}
      <path
        d="M 90 200 Q 110 188 130 196 Q 120 208 100 206 Z"
        fill="#1e824c"
        opacity="0.85"
      />
      <path
        d="M 270 202 Q 295 192 315 200 Q 305 212 282 210 Z"
        fill="#1e824c"
        opacity="0.85"
      />
    </g>
  );
}

function HirekatsuDonTopping() {
  return (
    <g>
      {/* 卵でとじた半熟感(下地) */}
      <ellipse
        cx="200"
        cy="190"
        rx="130"
        ry="28"
        fill="#f1c64a"
        opacity="0.85"
      />
      <path
        d="M 80 188 C 130 200, 200 200, 260 200 C 305 198, 320 190, 310 184 C 280 174, 110 174, 80 188 Z"
        fill="#ffeaa7"
        opacity="0.7"
      />
      {/* タレ */}
      <ellipse
        cx="200"
        cy="200"
        rx="120"
        ry="10"
        fill="#5a2e08"
        opacity="0.3"
      />

      {/* ヒレカツ切り身(4切れ並ぶ — 衣つきの厚切り) */}
      <HirekatsuSlice cx={130} cy={178} rotate={-6} />
      <HirekatsuSlice cx={177} cy={172} rotate={4} />
      <HirekatsuSlice cx={224} cy={172} rotate={-4} />
      <HirekatsuSlice cx={271} cy={178} rotate={6} />

      {/* 三つ葉 */}
      <g fill="#27ae60">
        <ellipse cx="195" cy="165" rx="6" ry="3" />
        <ellipse cx="220" cy="166" rx="6" ry="3" />
      </g>
    </g>
  );
}

function HirekatsuSlice({
  cx,
  cy,
  rotate,
}: {
  cx: number;
  cy: number;
  rotate: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      {/* 影 */}
      <ellipse cx="0" cy="22" rx="24" ry="5" fill="#000" opacity="0.18" />
      {/* 衣の外側(濃いきつね色) */}
      <path
        d="M -22 -16 Q -24 18, -18 20 Q 0 22, 18 20 Q 24 18, 22 -16 Q 0 -22, -22 -16 Z"
        fill="#a85618"
      />
      {/* 衣の明るい層 */}
      <path
        d="M -19 -13 Q -21 16, -16 18 Q 0 20, 16 18 Q 21 16, 19 -13 Q 0 -19, -19 -13 Z"
        fill="#d88a30"
      />
      {/* 肉の断面(ピンク) */}
      <path
        d="M -15 -9 Q -16 12, -12 14 Q 0 16, 12 14 Q 16 12, 15 -9 Q 0 -14, -15 -9 Z"
        fill="#f4c4a0"
      />
      <path
        d="M -12 -6 Q -13 10, -10 12 Q 0 13, 10 12 Q 13 10, 12 -6 Q 0 -10, -12 -6 Z"
        fill="#fdd9b8"
      />
      {/* 衣のサクサクテクスチャ(上面の縁) */}
      <g fill="#e8a838">
        <circle cx="-18" cy="-15" r="2.5" />
        <circle cx="-10" cy="-19" r="2.5" />
        <circle cx="0" cy="-20" r="3" />
        <circle cx="10" cy="-19" r="2.5" />
        <circle cx="18" cy="-15" r="2.5" />
        <circle cx="-20" cy="0" r="2" />
        <circle cx="20" cy="0" r="2" />
        <circle cx="-18" cy="14" r="2.5" />
        <circle cx="0" cy="18" r="2.5" />
        <circle cx="18" cy="14" r="2.5" />
      </g>
      {/* パン粉のハイライト */}
      <g fill="#fff3b0">
        <circle cx="-8" cy="-16" r="1.5" />
        <circle cx="8" cy="-16" r="1.5" />
        <circle cx="-15" cy="6" r="1.2" />
        <circle cx="15" cy="6" r="1.2" />
      </g>
    </g>
  );
}

function DonburiToppingElement({ kind }: { kind: DonburiKind }) {
  switch (kind) {
    case "kakiageDon":
      return <KakiageDonTopping />;
    case "yamakakeDon":
      return <YamakakeDonTopping />;
    case "torikaraDon":
      return <TorikaraDonTopping />;
    case "curryDon":
      return <CurryDonTopping />;
    case "oyakoDon":
      return <OyakoDonTopping />;
    case "tenDon":
      return <TenDonTopping />;
    case "joTenDon":
      return <JoTenDonTopping />;
    case "hirekatsuDon":
      return <HirekatsuDonTopping />;
  }
}

type Props = {
  spec: MenuVisualDonburi;
  label: string;
};

export function DonburiIllustration({ spec, label }: Props) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label}>
      <DonburiBowl />
      <Rice />
      <DonburiToppingElement kind={spec.donburiKind} />
    </svg>
  );
}

// セット表示用の内部コンポーネント (svgラッパーなし)
export function DonburiArtwork({ spec }: { spec: MenuVisualDonburi }) {
  return (
    <g>
      <DonburiBowl />
      <Rice />
      <DonburiToppingElement kind={spec.donburiKind} />
    </g>
  );
}
