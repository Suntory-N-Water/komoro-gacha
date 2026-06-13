import { useId } from "react";
import type { AmountLevel, NoodleChoice } from "../../domain/menu";

type ChoiceValue = AmountLevel | NoodleChoice;

type ChoiceGroupProps<T extends ChoiceValue> = {
  readonly label: string;
  readonly options: ReadonlyArray<T>;
  readonly selected: T;
  readonly size: "amount" | "noodle";
  readonly isSelectable: (value: T) => boolean;
  readonly onSelect: (value: T) => void;
  readonly disabled?: boolean;
};

export default function ChoiceGroup<T extends ChoiceValue>({
  label,
  options,
  selected,
  size,
  isSelectable,
  onSelect,
  disabled = false,
}: ChoiceGroupProps<T>) {
  const descriptionId = useId();

  return (
    <fieldset aria-describedby={descriptionId}>
      <legend className="mb-3 flex w-full items-center gap-2 pl-[0.55em] text-[10px] tracking-[0.55em] text-[#7a5230]">
        <span>{label}</span>
        <div className="h-px flex-1 bg-linear-to-r from-[#d4c4a8] to-transparent" />
      </legend>
      <p id={descriptionId} className="sr-only">
        選択できない項目は、現在の条件では抽選候補がない組み合わせです。
      </p>
      <div className={size === "amount" ? "flex gap-2" : "flex gap-2.5"}>
        {options.map((option) => {
          const active = option === selected;
          const selectable = isSelectable(option);
          const buttonDisabled = disabled || !selectable;

          return (
            <button
              key={option}
              type="button"
              disabled={buttonDisabled}
              aria-pressed={active}
              aria-label={
                selectable
                  ? `${label}: ${option}`
                  : `${label}: ${option}。現在の条件では候補がありません`
              }
              title={
                !disabled && !selectable
                  ? "現在の条件では候補がありません"
                  : undefined
              }
              onClick={() => {
                if (!active && !disabled) {
                  onSelect(option);
                }
              }}
              className={[
                "min-h-11 min-w-0 flex-1 rounded-[10px] border outline-none transition enabled:cursor-pointer active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65 focus-visible:ring-2 focus-visible:ring-[#3d6b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4ead8]",
                size === "amount"
                  ? "px-0.5 py-3 text-sm tracking-[0.04em]"
                  : "px-1 py-3.5 text-base tracking-wider",
                active
                  ? "border-[#3d6b4a] bg-[#3d6b4a] font-bold text-[#f4ead8] shadow-[0_2px_10px_rgba(61,107,74,0.2)]"
                  : "border-[#d4c4a8] bg-[#faf3e8] text-[#5a4a38] disabled:text-[#c8b898]",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
