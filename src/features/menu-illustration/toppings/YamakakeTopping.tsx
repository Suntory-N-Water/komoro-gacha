// 山かけ = とろろ(白・半透明)
export function YamakakeTopping() {
  return (
    <g>
      {/* とろろ (白っぽい不定形の流れ) */}
      <ellipse
        cx="200"
        cy="172"
        rx="100"
        ry="22"
        fill="#f0ece4"
        opacity="0.88"
      />
      <path
        d="M140 168 C160 155,180 165,200 162 S240 155,265 165 Q280 170,270 178 Q250 185,200 182 Q160 182,140 175 Z"
        fill="#e8e4dc"
        opacity="0.9"
      />
      {/* とろろの流れ感 */}
      <path
        d="M155 172 C175 166,195 170,215 168 S245 165,260 170"
        fill="none"
        stroke="#d8d4cc"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M160 178 C180 174,200 176,220 174 S250 172,262 176"
        fill="none"
        stroke="#d8d4cc"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </g>
  );
}
