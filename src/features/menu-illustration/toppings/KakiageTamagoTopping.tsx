import { KakiageTopping } from "./KakiageTopping";

// かき揚げ + 半熟卵
export function KakiageTamagoTopping() {
  return (
    <g>
      <KakiageTopping />
      {/* 卵(かき揚げの左奥に半熟卵) */}
      <ellipse cx="160" cy="172" rx="22" ry="18" fill="#f5f0e8" />
      <circle cx="160" cy="172" r="11" fill="#f9ca24" />
      <circle cx="156" cy="169" r="4" fill="#ffeaa7" opacity="0.7" />
    </g>
  );
}
