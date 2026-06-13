// かき揚げ: 鮮やかな揚げ色、具材(エビ・人参・三つ葉)を明確に見せる
export function KakiageTopping() {
  return (
    <g transform="translate(225 160)">
      {/* 油染み(下) */}
      <ellipse cx="5" cy="20" rx="65" ry="28" fill="#e67e22" opacity="0.22" />
      <ellipse cx="0" cy="15" rx="55" ry="20" fill="#000000" opacity="0.12" />

      {/* 衣の土台(重なるサクサク表現) */}
      <g>
        <circle cx="-35" cy="5" r="30" fill="#d35400" opacity="0.75" />
        <circle cx="35" cy="10" r="30" fill="#d35400" opacity="0.75" />
        <circle cx="0" cy="-20" r="33" fill="#f1c40f" />
        <circle cx="-25" cy="-15" r="30" fill="#f1c40f" />
        <circle cx="25" cy="-10" r="30" fill="#f1c40f" />
        <circle cx="-15" cy="15" r="32" fill="#f1c40f" />
        <circle cx="20" cy="15" r="30" fill="#f1c40f" />
        <circle cx="0" cy="5" r="33" fill="#f1c40f" />
      </g>

      {/* 中央の明るいサクサク部分 */}
      <g fill="#ffeaa7">
        <circle cx="-15" cy="-8" r="20" />
        <circle cx="15" cy="-5" r="20" />
        <circle cx="0" cy="8" r="23" />
        <circle cx="-20" cy="10" r="16" />
        <circle cx="20" cy="8" r="16" />
      </g>

      {/* 人参(オレンジの千切り) */}
      <g fill="#e67e22" stroke="#a04010" strokeWidth="1">
        <rect
          x="-35"
          y="-12"
          width="26"
          height="6"
          rx="2"
          transform="rotate(15 -22 -9)"
        />
        <rect
          x="-10"
          y="-22"
          width="22"
          height="5.5"
          rx="2"
          transform="rotate(-30 1 -19)"
        />
        <rect
          x="12"
          y="-12"
          width="28"
          height="6.5"
          rx="2"
          transform="rotate(45 26 -9)"
        />
        <rect
          x="-22"
          y="12"
          width="26"
          height="6"
          rx="2"
          transform="rotate(-10 -9 15)"
        />
        <rect
          x="5"
          y="8"
          width="24"
          height="6"
          rx="2"
          transform="rotate(25 17 11)"
        />
      </g>

      {/* 三つ葉(緑) */}
      <g fill="#27ae60" stroke="#145a32" strokeWidth="1">
        <rect
          x="-22"
          y="-18"
          width="18"
          height="7"
          rx="2"
          transform="rotate(55 -13 -14)"
        />
        <rect
          x="12"
          y="-22"
          width="22"
          height="6"
          rx="2"
          transform="rotate(-15 23 -19)"
        />
        <rect
          x="-30"
          y="5"
          width="20"
          height="6.5"
          rx="2"
          transform="rotate(-45 -20 8)"
        />
        <rect
          x="12"
          y="12"
          width="20"
          height="7"
          rx="2"
          transform="rotate(60 22 16)"
        />
      </g>

      {/* 小エビ(ピンクの曲がった形) */}
      <g stroke="#ff7675" strokeWidth="6.5" strokeLinecap="round" fill="none">
        <path d="M -15 -3 A 9 9 0 0 1 0 -11" />
        <path d="M 8 2 A 11 11 0 0 1 22 14" />
        <path d="M -8 18 A 7 7 0 0 1 5 22" />
      </g>
      <g
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      >
        <path d="M -13 -5 A 9 9 0 0 1 -2 -9" />
        <path d="M 10 4 A 11 11 0 0 1 20 12" />
      </g>

      {/* 油の輝き */}
      <g fill="#fffdeb">
        <circle cx="-40" cy="2" r="3.5" />
        <circle cx="-30" cy="-22" r="4" />
        <circle cx="30" cy="-18" r="3.5" />
        <circle cx="38" cy="5" r="4" />
        <circle cx="28" cy="22" r="3.5" />
        <circle cx="-22" cy="26" r="4" />
        <circle cx="0" cy="-30" r="3" />
        <circle cx="-3" cy="30" r="3" />
      </g>
      <g fill="#f1c40f">
        <circle cx="-38" cy="-8" r="2.5" />
        <circle cx="34" cy="-8" r="2.5" />
        <circle cx="22" cy="-22" r="2.5" />
        <circle cx="-12" cy="-28" r="2.5" />
        <circle cx="12" cy="28" r="2.5" />
      </g>
    </g>
  );
}
