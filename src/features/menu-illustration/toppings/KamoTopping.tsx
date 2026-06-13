// 鴨 = 鴨肉の薄切りと長ねぎ
export function KamoTopping() {
  return (
    <g>
      {/* 鴨肉スライス */}
      <ellipse
        cx="165"
        cy="165"
        rx="30"
        ry="13"
        fill="#8b3a2a"
        transform="rotate(-10 165 165)"
      />
      <ellipse
        cx="163"
        cy="163"
        rx="25"
        ry="10"
        fill="#a8482e"
        transform="rotate(-10 163 163)"
      />
      <path
        d="M142 160 Q155 152,175 154 Q188 157,188 165 Q175 170,160 170 Q145 170,142 160 Z"
        fill="none"
        stroke="#7a3020"
        strokeWidth="1.5"
        opacity="0.4"
      />

      <ellipse
        cx="205"
        cy="162"
        rx="30"
        ry="13"
        fill="#8b3a2a"
        transform="rotate(5 205 162)"
      />
      <ellipse
        cx="205"
        cy="160"
        rx="25"
        ry="10"
        fill="#a8482e"
        transform="rotate(5 205 160)"
      />

      <ellipse
        cx="243"
        cy="166"
        rx="28"
        ry="12"
        fill="#8b3a2a"
        transform="rotate(-8 243 166)"
      />
      <ellipse
        cx="242"
        cy="164"
        rx="23"
        ry="9"
        fill="#a8482e"
        transform="rotate(-8 242 164)"
      />

      {/* 長ねぎ (焼きネギ) */}
      <rect
        x="148"
        y="177"
        width="50"
        height="8"
        rx="4"
        fill="#8fbc58"
        transform="rotate(5 173 181)"
      />
      <rect
        x="215"
        y="174"
        width="45"
        height="8"
        rx="4"
        fill="#8fbc58"
        transform="rotate(-3 237 178)"
      />
      <line
        x1="153"
        y1="180"
        x2="195"
        y2="183"
        stroke="#6a9040"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="220"
        y1="178"
        x2="257"
        y2="176"
        stroke="#6a9040"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </g>
  );
}
