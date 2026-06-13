// えび天: 湾曲したボリュームある衣＋赤い尻尾。
// いらすとや風のシンプルな輪郭で、衣はギザ縁で表現。
export function EbiTenTopping() {
  return (
    <g transform="translate(200 178)">
      {/* 影 */}
      <ellipse cx="0" cy="28" rx="90" ry="11" fill="#000000" opacity="0.2" />

      {/* 衣本体: 緩いバナナ型カーブ + 縁ギザギザ */}
      <path
        d="M -82 6
           Q -84 -10, -70 -20
           Q -50 -30, -20 -28
           Q 10 -27, 40 -22
           Q 60 -18, 70 -8
           Q 76 -2, 74 6
           Q 72 14, 60 18
           Q 30 24, -10 22
           Q -50 20, -72 16
           Q -84 12, -82 6 Z"
        fill="#e8a020"
      />

      {/* 衣の縁 (サクサクの突起を輪郭沿いだけに) */}
      <g fill="#e8a020">
        <circle cx="-78" cy="0" r="6" />
        <circle cx="-66" cy="-14" r="7" />
        <circle cx="-46" cy="-24" r="8" />
        <circle cx="-22" cy="-28" r="7.5" />
        <circle cx="2" cy="-28" r="7.5" />
        <circle cx="24" cy="-26" r="7" />
        <circle cx="46" cy="-22" r="7" />
        <circle cx="62" cy="-14" r="6.5" />
        <circle cx="72" cy="-2" r="5.5" />
        <circle cx="68" cy="12" r="6" />
        <circle cx="48" cy="22" r="6.5" />
        <circle cx="20" cy="24" r="6.5" />
        <circle cx="-12" cy="24" r="6.5" />
        <circle cx="-42" cy="22" r="6.5" />
        <circle cx="-66" cy="18" r="6" />
      </g>

      {/* 衣の中間色(明るい黄) */}
      <path
        d="M -68 0
           Q -60 -14, -30 -18
           Q 10 -20, 40 -14
           Q 58 -10, 60 0
           Q 56 12, 30 14
           Q -10 16, -50 12
           Q -68 8, -68 0 Z"
        fill="#f1c40f"
      />

      {/* ハイライト */}
      <path
        d="M -50 -8 Q -20 -14, 10 -12 Q 35 -10, 52 -4"
        fill="none"
        stroke="#fff3b0"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* 焦げ目 */}
      <path
        d="M -40 4 Q -10 -2, 20 0 Q 40 2, 56 6"
        fill="none"
        stroke="#a05810"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* 尻尾 (赤い扇形・大きめ) */}
      <g transform="translate(72 0) rotate(-8)">
        <path
          d="M 0 -2
             L 22 -14
             L 32 -8
             L 24 -2
             L 34 6
             L 22 8
             L 20 18
             L 10 10
             L 4 18
             L 0 8 Z"
          fill="#e74c3c"
          stroke="#a92414"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M 4 0 L 20 -10 L 24 -4 L 18 0 L 22 6 L 14 6"
          fill="#ec7063"
          opacity="0.75"
        />
      </g>
    </g>
  );
}
