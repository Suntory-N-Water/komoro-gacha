import type { DrawMenuOutput } from "../../usecase/gacha";
import Capsule from "./Capsule";
import MenuPhotoPlaceholder from "./MenuPhotoPlaceholder";

type GachaPhase = "idle" | "drop" | "open" | "result";

type ResultOverlayProps = {
  readonly phase: GachaPhase;
  readonly output: DrawMenuOutput | null;
  readonly onBack: () => void;
  readonly onReroll: () => void;
};

export default function ResultOverlay({
  phase,
  output,
  onBack,
  onReroll,
}: ResultOverlayProps) {
  if (phase === "idle") {
    return null;
  }

  const showResult = phase === "result";
  const result = output?.status === "hit" ? output.result : null;
  const menuItem = result?.menuItem;
  const hotColdColor =
    menuItem?.hotCold === "温"
      ? "#c06840"
      : menuItem?.hotCold === "冷"
        ? "#4888c0"
        : "#b4a088";
  const hotColdLabel =
    menuItem?.hotCold === "温"
      ? "温　あたたかい"
      : menuItem?.hotCold === "冷"
        ? "冷　つめたい"
        : "-";
  const modifierLabel =
    result === null
      ? ""
      : result.modifiers
          .map((modifier) => (modifier === "いなり" ? "+いなり" : modifier))
          .join("　");

  return (
    <div
      className="absolute inset-0 z-50 flex animate-overlay-in flex-col items-center overflow-y-auto bg-[#f4ead8]"
      aria-hidden="false"
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(180,150,100,0.06)_80px)]" />

      <div className="relative z-10 flex h-50 shrink-0 items-end justify-center pt-14 pb-4">
        <Capsule open={phase === "open" || phase === "result"} />
      </div>

      {!showResult ? (
        <div className="relative z-10 animate-blink-wait pb-5 pl-[0.45em] text-[11px] tracking-[0.45em] text-[#b4a088]">
          抽選中...
        </div>
      ) : (
        <section
          className="relative z-10 w-full max-w-92 animate-result-rise px-5.5 pb-12"
          aria-live="polite"
        >
          <div className="mb-4.5 flex justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4c4a8] bg-[#faf3e8] px-3.5 py-1">
              <div
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: hotColdColor }}
              />
              <span className="text-[11px] tracking-[0.14em] text-[#8a7a6a]">
                {hotColdLabel}
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border border-[#d4c4a8] bg-[#faf3e8] px-3.5 py-1">
              <span className="text-[11px] tracking-[0.12em] text-[#8a7a6a]">
                {menuItem?.category ?? ""}
              </span>
            </div>
          </div>

          <MenuPhotoPlaceholder />

          <div className="mb-3 text-center">
            <h2 className="text-[32px] leading-[1.3] font-black tracking-[0.06em] text-wrap-balance">
              {menuItem?.name ?? "候補なし"}
            </h2>
          </div>

          {modifierLabel === "" ? (
            <div className="h-7" />
          ) : (
            <div className="mb-7 text-center">
              <span className="inline-block rounded-full border border-[#3d6b4a] bg-[#faf3e8] px-5 py-1 text-[13px] font-medium tracking-[0.14em] text-[#3d6b4a]">
                {modifierLabel}
              </span>
            </div>
          )}

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 rounded-[10px] border border-[#d4c4a8] bg-[#faf3e8] p-3.5 text-sm tracking-widest text-[#8a7a6a] transition active:translate-y-px"
            >
              ← 戻る
            </button>
            <button
              type="button"
              onClick={onReroll}
              className="flex-2 rounded-[10px] border-2 border-[#3d6b4a] bg-[#3d6b4a] p-3.5 text-sm font-bold tracking-[0.18em] text-[#f4ead8] shadow-[0_4px_16px_rgba(61,107,74,0.22)] transition active:translate-y-px"
            >
              もう一回
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export type { GachaPhase };
