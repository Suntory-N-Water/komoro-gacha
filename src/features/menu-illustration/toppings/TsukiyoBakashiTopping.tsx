// 月夜のばかし = 油揚げ(きつね)+天かす(たぬき)に月見卵が浮かぶ
import { KitsuneTopping } from "./KitsuneTopping";
import { TanukiTopping } from "./TanukiTopping";

export function TsukiyoBakashiTopping() {
  return (
    <g>
      {/* 天かすを敷きつめる(全面) */}
      <TanukiTopping />
      {/* 油揚げを手前左右に配置 */}
      <g transform="translate(0 4)">
        <KitsuneTopping />
      </g>
      {/* 月のような大きな黄身(中央やや上) */}
      <g transform="translate(200 178)">
        {/* 白身の薄い広がり */}
        <ellipse cx="0" cy="2" rx="42" ry="20" fill="#fffdf2" opacity="0.85" />
        <ellipse cx="0" cy="0" rx="32" ry="14" fill="#ffffff" opacity="0.9" />
        {/* 黄身(満月) */}
        <circle cx="0" cy="0" r="18" fill="#f1c40f" />
        <circle cx="0" cy="0" r="16" fill="#f39c12" opacity="0.5" />
        {/* ハイライト */}
        <ellipse cx="-5" cy="-5" rx="7" ry="4" fill="#fff3b0" opacity="0.85" />
        {/* 月のおぼろなにじみ */}
        <circle
          cx="0"
          cy="0"
          r="24"
          fill="none"
          stroke="#fff3b0"
          strokeWidth="2"
          opacity="0.4"
        />
      </g>
    </g>
  );
}
