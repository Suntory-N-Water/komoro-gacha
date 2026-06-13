// 鳥唐揚げ: ゴツゴツした不規則な塊(3個)、衣のサクサク感
export function TorikaraTopping() {
  return (
    <g>
      {/* 全体の影 */}
      <ellipse
        cx="200"
        cy="195"
        rx="80"
        ry="12"
        fill="#000000"
        opacity="0.18"
      />

      <KaraagePiece cx={158} cy={170} rotate={-8} scale={1} />
      <KaraagePiece cx={212} cy={166} rotate={12} scale={1.15} />
      <KaraagePiece cx={262} cy={172} rotate={-6} scale={1.05} />
    </g>
  );
}

type PieceProps = {
  cx: number;
  cy: number;
  rotate: number;
  scale: number;
};

function KaraagePiece({ cx, cy, rotate, scale }: PieceProps) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
      {/* 不規則な塊のシルエット */}
      <path
        d="M -22 -2 C -26 -16, -14 -24, 0 -22 C 14 -25, 26 -18, 26 -6
           C 30 6, 22 18, 8 20 C -6 22, -22 16, -24 6 C -28 2, -26 -2, -22 -2 Z"
        fill="#a85610"
      />
      {/* ハイライト面 */}
      <path
        d="M -18 -4 C -22 -14, -10 -20, 2 -18 C 14 -20, 22 -14, 22 -4
           C 24 4, 18 14, 6 16 C -6 18, -18 12, -20 4 Z"
        fill="#d68830"
      />
      {/* ゴツゴツした衣の突起 */}
      <g fill="#e89838">
        <circle cx="-14" cy="-10" r="4.5" />
        <circle cx="-2" cy="-16" r="5" />
        <circle cx="12" cy="-12" r="4.5" />
        <circle cx="20" cy="0" r="4" />
        <circle cx="14" cy="12" r="4.5" />
        <circle cx="-4" cy="14" r="5" />
        <circle cx="-18" cy="6" r="4" />
      </g>
      {/* 明るい衣ハイライト */}
      <g fill="#f6c878">
        <circle cx="-6" cy="-12" r="2.5" />
        <circle cx="8" cy="-8" r="2.5" />
        <circle cx="14" cy="4" r="2" />
        <circle cx="-12" cy="2" r="2" />
      </g>
      {/* 衣の細部 (パン粉感) */}
      <g fill="#5a3010" opacity="0.5">
        <circle cx="-10" cy="-4" r="1.2" />
        <circle cx="4" cy="0" r="1.2" />
        <circle cx="18" cy="-6" r="1" />
        <circle cx="-2" cy="8" r="1.2" />
        <circle cx="10" cy="-2" r="1" />
      </g>
    </g>
  );
}
