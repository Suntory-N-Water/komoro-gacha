export default function MenuPhotoPlaceholder() {
  return (
    <div
      className="mb-5.5 flex aspect-4/3 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#d4c4a8] bg-[repeating-linear-gradient(-45deg,#f0e4cc_0,#f0e4cc_8px,#f4ead8_8px,#f4ead8_16px)]"
      role="img"
      aria-label="メニュー写真の仮枠"
    >
      <div
        className="font-mono text-xs tracking-widest text-[#c4a878]"
        aria-hidden="true"
      >
        [ menu photo ]
      </div>
      <div
        className="font-mono text-[9px] tracking-[0.06em] text-[#d4bc98]"
        aria-hidden="true"
      >
        後で差し替え
      </div>
    </div>
  );
}
