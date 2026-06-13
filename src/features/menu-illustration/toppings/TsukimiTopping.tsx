// 月見 = 生卵
export function TsukimiTopping() {
  return (
    <g>
      {/* 卵白 */}
      <ellipse
        cx="205"
        cy="170"
        rx="55"
        ry="28"
        fill="#f5f0e8"
        opacity="0.95"
      />
      {/* 卵黄 */}
      <circle cx="205" cy="170" r="18" fill="#f9ca24" />
      <circle cx="200" cy="165" r="7" fill="#ffeaa7" opacity="0.75" />
    </g>
  );
}
