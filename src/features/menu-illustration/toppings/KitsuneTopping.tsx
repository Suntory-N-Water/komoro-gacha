// きつね = 甘辛く煮た油揚げ。赤いきつね風に薄く広く被せる。
export function KitsuneTopping() {
  return (
    <g>
      {/* 影 */}
      <ellipse
        cx="200"
        cy="220"
        rx="100"
        ry="10"
        fill="#000000"
        opacity="0.2"
      />

      {/* 油揚げ1枚を中央に大きく配置 */}
      <Aburaage cx={200} cy={185} rotate={-4} scale={1.1} />
    </g>
  );
}

function Aburaage({
  cx,
  cy,
  rotate,
  scale,
}: {
  cx: number;
  cy: number;
  rotate: number;
  scale: number;
}) {
  // 薄く広い台形(短冊状)で、麺面を覆うように寝かせて配置
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
      {/* 影 */}
      <path
        d="M -90 22 L 90 22 L 76 28 L -76 28 Z"
        fill="#3a1a06"
        opacity="0.4"
      />
      {/* 本体(平たい台形) */}
      <path d="M -92 -16 L 92 -16 L 84 22 L -84 22 Z" fill="#7a3e0c" />
      {/* 表面(照り) */}
      <path d="M -86 -12 L 86 -12 L 78 18 L -78 18 Z" fill="#a85820" />
      <path d="M -78 -8 L 78 -8 L 70 14 L -70 14 Z" fill="#c87830" />
      {/* 縁の線 */}
      <path
        d="M -92 -16 L 92 -16 L 84 22 L -84 22 Z"
        fill="none"
        stroke="#5a2a08"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* 表面のざらつき(油揚げの繊維・横方向) */}
      <g stroke="#6a3010" strokeWidth="1" strokeLinecap="round" opacity="0.45">
        <line x1="-66" y1="-4" x2="66" y2="-4" />
        <line x1="-60" y1="2" x2="60" y2="2" />
        <line x1="-54" y1="8" x2="54" y2="8" />
      </g>
      {/* ツヤ(光沢) */}
      <ellipse cx="-18" cy="-6" rx="36" ry="3.5" fill="#ffce8a" opacity="0.5" />
    </g>
  );
}
