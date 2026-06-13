// おろし = 大根おろし(白い山状)
export function OroshiTopping() {
  return (
    <g>
      {/* 大根おろしの山 */}
      <ellipse cx="200" cy="172" rx="65" ry="20" fill="#f4f0ea" opacity="0.9" />
      <path
        d="M155 178 Q175 158,200 155 Q225 158,245 178 Q230 188,200 190 Q170 188,155 178 Z"
        fill="#ece8e0"
        opacity="0.95"
      />
      {/* テクスチャ */}
      <ellipse cx="195" cy="167" rx="30" ry="8" fill="#fff" opacity="0.4" />
      {/* ポン酢の赤 (少量) */}
      <circle cx="210" cy="170" r="3" fill="#c0392b" opacity="0.6" />
      <circle cx="198" cy="174" r="2" fill="#c0392b" opacity="0.5" />
    </g>
  );
}
