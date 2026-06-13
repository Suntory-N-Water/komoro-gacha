// 刻みねぎ(青ねぎ・小口切り)と七味
export function Condiments() {
  return (
    <g>
      {/* ねぎ(緑色の小口切り) — 中央付近に少量散らす */}
      <NegiSlice cx={158} cy={180} rotate={-8} r={8.5} />
      <NegiSlice cx={196} cy={172} rotate={14} r={9} />
      <NegiSlice cx={238} cy={184} rotate={-12} r={8.5} />
      <NegiSlice cx={180} cy={204} rotate={10} r={9} />
      <NegiSlice cx={224} cy={206} rotate={-6} r={8.5} />

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
