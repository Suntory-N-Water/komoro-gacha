// いか天: 細長い短冊状の天ぷら(横長)
export function IkaTenTopping() {
  return (
    <g transform="translate(205 170)">
      {/* 影 */}
      <ellipse cx="0" cy="14" rx="100" ry="8" fill="#000000" opacity="0.15" />

      {/* 衣 (細長い長方形) */}
      <g transform="rotate(-4)">
        <rect x="-95" y="-12" width="190" height="22" rx="10" fill="#d4900a" />
        <rect x="-90" y="-9" width="180" height="16" rx="7" fill="#e8a820" />
        {/* イカの白身が見えるライン */}
        <line
          x1="-80"
          y1="-2"
          x2="80"
          y2="-2"
          stroke="#f8f0e0"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1="-78"
          y1="3"
          x2="78"
          y2="3"
          stroke="#f8f0e0"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* サクサクの突起 */}
        <g fill="#f6c34a">
          <circle cx="-78" cy="-8" r="3" />
          <circle cx="-55" cy="-10" r="3.5" />
          <circle cx="-30" cy="-9" r="3" />
          <circle cx="-5" cy="-10" r="3.5" />
          <circle cx="22" cy="-9" r="3" />
          <circle cx="48" cy="-10" r="3.5" />
          <circle cx="72" cy="-8" r="3" />
        </g>
        {/* ハイライト */}
        <ellipse
          cx="-30"
          cy="-5"
          rx="40"
          ry="2.5"
          fill="#fff9db"
          opacity="0.5"
        />
      </g>
    </g>
  );
}
