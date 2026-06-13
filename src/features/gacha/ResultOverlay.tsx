import { useEffect, useRef } from "react";
import type { DrawMenuOutput } from "../../usecase/gacha";
import { MenuIllustration } from "../menu-illustration/MenuIllustration";
import Capsule from "./Capsule";

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
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const showResult = phase === "result";

  useEffect(() => {
    if (phase !== "idle" && !showResult) {
      overlayRef.current?.focus();
    }
  }, [phase, showResult]);

  useEffect(() => {
    if (showResult) {
      headingRef.current?.focus();
    }
  }, [showResult]);

  useEffect(() => {
    if (!showResult) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onBack();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onBack, showResult]);

  if (phase === "idle") {
    return null;
  }

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
  // 「親子丼セット(大・うどんせいろ)」を主役の品名と括弧注記に分割し、中黒の途中で割れないようにする
  const rawName = menuItem?.name ?? "候補なし";
  const noteIndex = rawName.search(/[((]/);
  const baseName = noteIndex === -1 ? rawName : rawName.slice(0, noteIndex);
  const noteName = noteIndex === -1 ? "" : rawName.slice(noteIndex);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-50 flex animate-overlay-in flex-col items-center overflow-y-auto bg-[#f4ead8]"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={showResult ? "抽選結果" : "抽選中"}
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(180,150,100,0.06)_80px)]" />

      <div className="relative z-10 flex h-50 shrink-0 items-end justify-center pt-14 pb-4">
        <Capsule open={phase === "open" || phase === "result"} />
      </div>

      {!showResult ? (
        <div
          className="relative z-10 animate-blink-wait pb-5 pl-[0.45em] text-[11px] tracking-[0.45em] text-[#b4a088]"
          role="status"
          aria-live="polite"
        >
          抽選中...
        </div>
      ) : (
        <section
          className="relative z-10 w-full max-w-92 animate-result-rise px-5.5 pb-[calc(3rem+env(safe-area-inset-bottom))]"
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

          <div className="mb-5.5 aspect-square w-full overflow-hidden rounded-xl">
            <MenuIllustration
              menuId={menuItem?.id ?? ""}
              label={menuItem?.name ?? "メニューイラスト"}
            />
          </div>

          <div className="mb-3 text-center">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-[32px] leading-[1.3] font-black tracking-[0.06em] text-wrap-balance outline-none focus-visible:ring-2 focus-visible:ring-[#3d6b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4ead8]"
            >
              {baseName}
              {noteName !== "" && (
                <span className="mt-1.5 block text-[19px] font-bold tracking-[0.04em] text-[#7a5230]">
                  {noteName}
                </span>
              )}
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
              className="min-h-11 flex-1 cursor-pointer rounded-[10px] border border-[#d4c4a8] bg-[#faf3e8] p-3.5 text-sm tracking-widest text-[#8a7a6a] outline-none transition active:translate-y-px focus-visible:ring-2 focus-visible:ring-[#3d6b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4ead8]"
            >
              ← 戻る
            </button>
            <button
              type="button"
              onClick={onReroll}
              className="min-h-11 flex-2 cursor-pointer rounded-[10px] border-2 border-[#3d6b4a] bg-[#3d6b4a] p-3.5 text-sm font-bold tracking-[0.18em] text-[#f4ead8] shadow-[0_4px_16px_rgba(61,107,74,0.22)] outline-none transition active:translate-y-px focus-visible:ring-2 focus-visible:ring-[#3d6b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4ead8]"
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
