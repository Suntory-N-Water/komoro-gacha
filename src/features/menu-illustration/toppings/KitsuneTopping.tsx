// きつね = 甘辛く煮た油揚げ(三角に切った2枚)
export function KitsuneTopping() {
  return (
    <g>
      {/* 影 */}
      <ellipse
        cx="200"
        cy="200"
        rx="80"
        ry="10"
        fill="#000000"
        opacity="0.18"
      />

      <Aburaage cx={170} cy={172} rotate={-12} />
      <Aburaage cx={240} cy={170} rotate={8} />
    </g>
  );
}

function Aburaage({
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
      {/* 三角形の油揚げ (煮汁の色) */}
      <path d="M -38 18 L 38 18 L 0 -28 Z" fill="#7a3e0c" />
      {/* 表面 (照り) */}
      <path d="M -33 13 L 33 13 L 0 -22 Z" fill="#a85820" />
      <path d="M -28 8 L 28 8 L 0 -17 Z" fill="#c87830" />
      {/* 切り口の縁(濃い) */}
      <path
        d="M -38 18 L 38 18 L 0 -28 Z"
        fill="none"
        stroke="#5a2a08"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* 表面のざらつき(油揚げの繊維) */}
      <g stroke="#6a3010" strokeWidth="1" strokeLinecap="round" opacity="0.45">
        <line x1="-20" y1="6" x2="20" y2="6" />
        <line x1="-15" y1="0" x2="15" y2="0" />
        <line x1="-10" y1="-6" x2="10" y2="-6" />
      </g>
      {/* ツヤ(光沢) */}
      <ellipse cx="-8" cy="-2" rx="12" ry="3" fill="#ffce8a" opacity="0.5" />
    </g>
  );
}
