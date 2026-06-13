// たぬき = 天かす(揚げ玉): 麺面全体を覆うほど盛りに盛る
export function TanukiTopping() {
  return (
    <g>
      {/* 薄い黄色の下地(天かすの量感) */}
      <ellipse
        cx="200"
        cy="188"
        rx="130"
        ry="26"
        fill="#f4d27a"
        opacity="0.45"
      />
      {TENKASU_POSITIONS.map((p) => (
        <TenkasuChunk
          key={`${p.cx}-${p.cy}`}
          cx={p.cx}
          cy={p.cy}
          rotate={p.rotate}
          scale={p.scale ?? 1}
        />
      ))}
    </g>
  );
}

const TENKASU_POSITIONS = [
  { cx: 92, cy: 178, rotate: -10, scale: 1.1 },
  { cx: 112, cy: 168, rotate: 18 },
  { cx: 134, cy: 174, rotate: -22, scale: 1.1 },
  { cx: 154, cy: 164, rotate: 8 },
  { cx: 176, cy: 170, rotate: 35, scale: 1.05 },
  { cx: 198, cy: 162, rotate: -12 },
  { cx: 220, cy: 168, rotate: 22, scale: 1.1 },
  { cx: 244, cy: 162, rotate: -28 },
  { cx: 266, cy: 168, rotate: 14, scale: 1.05 },
  { cx: 288, cy: 174, rotate: -8 },
  { cx: 308, cy: 180, rotate: 20 },

  { cx: 100, cy: 192, rotate: 28 },
  { cx: 122, cy: 186, rotate: -16, scale: 1.1 },
  { cx: 146, cy: 188, rotate: 40 },
  { cx: 168, cy: 182, rotate: -32, scale: 1.05 },
  { cx: 188, cy: 188, rotate: 5 },
  { cx: 210, cy: 184, rotate: -42 },
  { cx: 232, cy: 188, rotate: 25, scale: 1.05 },
  { cx: 256, cy: 184, rotate: -14 },
  { cx: 280, cy: 188, rotate: 32, scale: 1.1 },
  { cx: 302, cy: 192, rotate: -22 },

  { cx: 112, cy: 204, rotate: 12, scale: 1.05 },
  { cx: 138, cy: 202, rotate: -30 },
  { cx: 164, cy: 206, rotate: 18, scale: 1.05 },
  { cx: 188, cy: 204, rotate: -10 },
  { cx: 214, cy: 208, rotate: 38 },
  { cx: 240, cy: 204, rotate: -20, scale: 1.1 },
  { cx: 266, cy: 208, rotate: 5 },
  { cx: 290, cy: 204, rotate: -32 },
];

function TenkasuChunk({
  cx,
  cy,
  rotate,
  scale = 1,
}: {
  cx: number;
  cy: number;
  rotate: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M -7 -2 L -3 -6 L 2 -5 L 5 -8 L 8 -3 L 7 2 L 5 6 L 1 7 L -3 5 L -6 6 L -8 2 Z"
        fill="#c48810"
      />
      <path
        d="M -5 -1 L -1 -4 L 3 -3 L 5 -6 L 6 -1 L 6 3 L 3 5 L 0 5 L -4 4 L -6 1 Z"
        fill="#e8a828"
      />
      <circle cx="-3" cy="-2" r="1.5" fill="#fff3b0" opacity="0.75" />
      <circle cx="2" cy="0" r="1.2" fill="#fff3b0" opacity="0.6" />
      <circle cx="3" cy="3" r="0.8" fill="#7a4a08" opacity="0.6" />
    </g>
  );
}
