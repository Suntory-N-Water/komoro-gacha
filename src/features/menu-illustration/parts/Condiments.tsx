// 刻みねぎ(青ねぎ・小口切り)と七味
export function Condiments() {
  return (
    <g>
      {/* ねぎ(緑色の小口切り) — 麺全体に散らす */}
      <NegiSlice cx={102} cy={172} rotate={-12} r={9} />
      <NegiSlice cx={128} cy={166} rotate={10} r={10} />
      <NegiSlice cx={150} cy={178} rotate={-6} r={8.5} />
      <NegiSlice cx={122} cy={192} rotate={6} r={9.5} />
      <NegiSlice cx={170} cy={170} rotate={18} r={8} />
      <NegiSlice cx={188} cy={196} rotate={-22} r={9} />
      <NegiSlice cx={220} cy={172} rotate={8} r={8.5} />
      <NegiSlice cx={244} cy={198} rotate={-12} r={9.5} />
      <NegiSlice cx={278} cy={172} rotate={14} r={9} />
      <NegiSlice cx={300} cy={188} rotate={-8} r={8.5} />
      <NegiSlice cx={156} cy={204} rotate={20} r={9} />
      <NegiSlice cx={206} cy={210} rotate={-16} r={9.5} />
      <NegiSlice cx={266} cy={208} rotate={10} r={9} />

      {/* 七味 */}
      <circle cx="192" cy="184" r="1.6" fill="#e74c3c" />
      <circle cx="198" cy="190" r="1.4" fill="#111111" />
      <circle cx="212" cy="180" r="1.5" fill="#e74c3c" />
      <circle cx="220" cy="186" r="1.3" fill="#111111" />
      <circle cx="234" cy="180" r="1.4" fill="#e74c3c" />
      <circle cx="226" cy="194" r="1.2" fill="#111111" />
    </g>
  );
}

type NegiSliceProps = {
  cx: number;
  cy: number;
  rotate: number;
  r: number;
};

function NegiSlice({ cx, cy, rotate, r }: NegiSliceProps) {
  // 白ねぎ寄り: 外側は淡い緑、内側はほぼ白
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <ellipse cx="0" cy="0" rx={r} ry={r * 0.42} fill="#b9d8a6" />
      <ellipse cx="0" cy="0" rx={r * 0.78} ry={r * 0.32} fill="#f4faec" />
      <ellipse
        cx="-0.4"
        cy="-0.2"
        rx={r * 0.4}
        ry={r * 0.16}
        fill="#ffffff"
        opacity="0.9"
      />
    </g>
  );
}
