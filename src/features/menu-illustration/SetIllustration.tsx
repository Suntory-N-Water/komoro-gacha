import { DonburiArtwork } from "./DonburiIllustration";
import type {
  MenuVisualDonburi,
  MenuVisualItem,
  MenuVisualNoodle,
  MenuVisualSpec,
} from "./menuVisualSpec";
import { NoodleArtwork } from "./NoodleIllustration";
import { SeiroArtwork } from "./SeiroIllustration";

function ItemArtwork({ item }: { item: MenuVisualItem }) {
  if (item.kind === "donburi") {
    return <DonburiArtwork spec={item as MenuVisualDonburi} />;
  }
  const noodle = item as MenuVisualNoodle;
  if (noodle.temperature === "seiro") {
    return <SeiroArtwork spec={noodle} />;
  }
  return <NoodleArtwork spec={noodle} />;
}

type Props = {
  spec: Extract<MenuVisualSpec, { kind: "set" }>;
  label: string;
};

export function SetIllustration({ spec, label }: Props) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label}>
      <g transform="translate(0 10) scale(0.8)">
        <ItemArtwork item={spec.primary} />
      </g>
      <g transform="translate(210 205) scale(0.5)">
        <ItemArtwork item={spec.secondary} />
      </g>
    </svg>
  );
}
