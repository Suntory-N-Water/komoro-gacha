import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AMOUNT_LEVELS,
  type AmountLevel,
  NOODLE_CHOICES,
  type NoodleChoice,
} from "../../domain/menu";
import { staticMenuCatalogRepository } from "../../infrastructure/staticMenuCatalog";
import {
  type DrawMenuOutput,
  drawMenu,
  type SelectableGachaOption,
} from "../../usecase/gacha";
import ChoiceGroup from "./ChoiceGroup";
import ResultOverlay, { type GachaPhase } from "./ResultOverlay";

type GachaAppProps = {
  readonly selectableOptions: ReadonlyArray<SelectableGachaOption>;
};

export default function GachaApp({ selectableOptions }: GachaAppProps) {
  const [amountLevel, setAmountLevel] = useState<AmountLevel>("ふつう");
  const [noodleChoice, setNoodleChoice] = useState<NoodleChoice>("そば");
  const [phase, setPhase] = useState<GachaPhase>("idle");
  const [output, setOutput] = useState<DrawMenuOutput | null>(null);
  const timers = useRef<Array<number>>([]);
  const selectableKeys = useMemo(
    () =>
      new Set(
        selectableOptions
          .filter((option) => option.selectable)
          .map((option) => `${option.amountLevel}:${option.noodleChoice}`),
      ),
    [selectableOptions],
  );

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => {
      window.clearTimeout(timer);
    });
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  async function startGacha() {
    clearTimers();
    setPhase("drop");
    setOutput(null);

    const drawOutput = await drawMenu(
      { amountLevel, noodleChoice },
      {
        menuCatalogRepository: staticMenuCatalogRepository,
        random: { next: () => Math.random() },
      },
    );

    timers.current.push(
      window.setTimeout(() => {
        setPhase("open");
        timers.current.push(
          window.setTimeout(() => {
            setOutput(drawOutput);
            setPhase("result");
          }, 680),
        );
      }, 1500),
    );
  }

  function backToChoices() {
    clearTimers();
    setPhase("idle");
    setOutput(null);
  }

  return (
    <main className="relative mx-auto flex h-dvh max-w-107.5 flex-col overflow-hidden bg-[#f4ead8] font-serif text-[#1e1208] shadow-2xl shadow-[#8a5f2d]/10">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(180,150,100,0.06)_80px)]" />

      <header className="relative z-10 shrink-0 border-b border-[#d4c4a8] bg-linear-to-b from-[#eddfc8] to-[#f4ead8] px-7 pt-13 pb-5 text-center">
        <p className="mb-1.5 pl-[0.55em] text-[11px] font-medium tracking-[0.55em] text-[#7a5230]">
          小諸そば
        </p>
        <h1 className="pl-[0.18em] text-[28px] leading-none font-black tracking-[0.18em]">
          メニューガチャ
        </h1>
        <div className="mt-3.5 flex items-center gap-2">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#c4a878]" />
          <div className="h-1 w-1 rounded-full bg-[#7a5230]" />
          <div className="h-1 w-1 rounded-full bg-[#3d6b4a]" />
          <div className="h-1 w-1 rounded-full bg-[#7a5230]" />
          <div className="h-px flex-1 bg-linear-to-r from-[#c4a878] to-transparent" />
        </div>
      </header>

      <section
        className="relative z-10 flex flex-1 flex-col justify-center gap-7 px-5.5"
        aria-label="ガチャ条件"
      >
        <ChoiceGroup
          label="量"
          options={AMOUNT_LEVELS}
          selected={amountLevel}
          size="amount"
          isSelectable={(value) =>
            selectableKeys.has(`${value}:${noodleChoice}`)
          }
          onSelect={setAmountLevel}
        />
        <ChoiceGroup
          label="種別"
          options={NOODLE_CHOICES}
          selected={noodleChoice}
          size="noodle"
          isSelectable={(value) =>
            selectableKeys.has(`${amountLevel}:${value}`)
          }
          onSelect={setNoodleChoice}
        />
      </section>

      <div className="relative z-10 shrink-0 px-6 pt-5 pb-13">
        <button
          type="button"
          disabled={phase !== "idle"}
          onClick={() => {
            void startGacha();
          }}
          className="w-full animate-button-pulse rounded-[14px] border-2 border-[#3d6b4a] bg-[#3d6b4a] p-5 pl-[0.55em] text-xl font-bold tracking-[0.55em] text-[#f4ead8] shadow-[0_4px_20px_rgba(61,107,74,0.25)] outline-none transition active:translate-y-px disabled:cursor-wait disabled:opacity-75"
        >
          引　く
        </button>
      </div>

      <ResultOverlay
        phase={phase}
        output={output}
        onBack={backToChoices}
        onReroll={() => {
          void startGacha();
        }}
      />
    </main>
  );
}
