import type { NoodleKind } from "../menuVisualSpec";

type Props = {
  noodleKind: NoodleKind;
  clipId: string;
};

// そば: 細め(stroke 4.5)・濃いブラウン / うどん: 太め(stroke 8)・クリーム色
export function Noodles({ noodleKind, clipId }: Props) {
  const isSoba = noodleKind === "soba";
  const c1 = isSoba ? "#6b5b4f" : "#f1ead8";
  const c2 = isSoba ? "#8d7d71" : "#fbf6e6";
  const w = isSoba ? 4.5 : 8;

  return (
    <g clipPath={`url(#${clipId})`} fill="none" strokeLinecap="round">
      <path
        d="M72 174 C100 164,132 169,160 177 S220 190,250 182 S304 166,336 173"
        stroke={c1}
        strokeWidth={w}
      />
      <path
        d="M68 181 C94 171,126 176,154 184 S212 196,242 188 S298 172,334 179"
        stroke={c2}
        strokeWidth={w}
      />
      <path
        d="M72 188 C102 178,132 182,160 191 S220 203,252 194 S308 179,336 186"
        stroke={c1}
        strokeWidth={w}
      />
      <path
        d="M76 195 C106 186,138 190,166 198 S224 208,254 201 S306 186,332 193"
        stroke={c2}
        strokeWidth={w}
      />
      <path
        d="M78 202 C106 194,138 197,168 205 S226 214,256 207 S304 194,328 201"
        stroke={c1}
        strokeWidth={w}
      />
      <path
        d="M88 168 C118 176,146 182,176 179 S232 167,266 170 S312 182,325 189"
        stroke={c2}
        strokeWidth={w}
      />
      <path
        d="M84 208 C112 200,144 204,174 212 S232 220,262 213 S306 202,322 207"
        stroke={c2}
        strokeWidth={w}
      />
    </g>
  );
}
