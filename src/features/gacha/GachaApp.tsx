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

// 前回引いた条件を保持する localStorage キー
const LAST_CONDITION_KEY = "komoro-gacha:last-condition";

// 起動時に前回引いた条件を復元する。未保存・壊れた値・列挙外の値は null。
function loadLastCondition(): {
  amountLevel: AmountLevel;
  noodleChoice: NoodleChoice;
} | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(LAST_CONDITION_KEY) ?? "null",
    );
    const amountOk = (AMOUNT_LEVELS as readonly string[]).includes(
      parsed?.amountLevel,
    );
    const noodleOk = (NOODLE_CHOICES as readonly string[]).includes(
      parsed?.noodleChoice,
    );
    return amountOk && noodleOk ? parsed : null;
  } catch {
    return null;
  }
}

export default function GachaApp({ selectableOptions }: GachaAppProps) {
  const [amountLevel, setAmountLevel] = useState<AmountLevel>(
    () => loadLastCondition()?.amountLevel ?? "ふつう",
  );
  const [noodleChoice, setNoodleChoice] = useState<NoodleChoice>(
    () => loadLastCondition()?.noodleChoice ?? "そば",
  );
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
    // 最初の「引く」押下時のみ条件を保存する(リロールでは更新しない)
    if (phase === "idle" && typeof window !== "undefined") {
      window.localStorage.setItem(
        LAST_CONDITION_KEY,
        JSON.stringify({ amountLevel, noodleChoice }),
      );
    }

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
    <main
      className="relative mx-auto flex min-h-dvh w-full max-w-107.5 flex-col bg-[#f4ead8] font-serif text-[#1e1208] shadow-2xl shadow-[#8a5f2d]/10"
      aria-busy={phase !== "idle"}
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(180,150,100,0.06)_80px)]" />

      <header
        className="relative z-10 shrink-0 border-b border-[#d4c4a8] bg-linear-to-b from-[#eddfc8] to-[#f4ead8] px-7 pt-[calc(3.25rem+env(safe-area-inset-top))] pb-5 text-center"
        aria-hidden={phase !== "idle"}
      >
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
        aria-hidden={phase !== "idle"}
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
          disabled={phase !== "idle"}
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
          disabled={phase !== "idle"}
        />
        <p
          className="text-center text-[11px] tracking-[0.18em] text-[#8a7a6a]"
          aria-live="polite"
        >
          今日の条件: {amountLevel} / {noodleChoice}
        </p>
      </section>

      <div
        className="relative z-10 shrink-0 px-6 pt-5"
        aria-hidden={phase !== "idle"}
      >
        <button
          type="button"
          disabled={phase !== "idle"}
          aria-label={`${amountLevel}、${noodleChoice}でガチャを引く`}
          onClick={() => {
            void startGacha();
          }}
          className="min-h-16 w-full animate-button-pulse rounded-[14px] border-2 border-[#3d6b4a] bg-[#3d6b4a] p-5 pl-[0.55em] text-xl font-bold tracking-[0.55em] text-[#f4ead8] shadow-[0_4px_20px_rgba(61,107,74,0.25)] outline-none transition enabled:cursor-pointer active:translate-y-px disabled:cursor-wait disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-[#3d6b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4ead8]"
        >
          引　く
        </button>
      </div>

      <footer
        className="relative z-10 shrink-0 px-6 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))] text-center"
        aria-hidden={phase !== "idle"}
      >
        <p className="text-[9.5px] leading-relaxed text-[#a89880]">
          非公式アプリ。株式会社三ッ和・小諸そばとは一切関係ありません。
          <br />
          カロリー・メニュー情報は
          <a
            href="https://www.k-mitsuwa.co.jp/business/komoro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            小諸そば公式サイト
          </a>
          より引用。
        </p>
      </footer>

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
