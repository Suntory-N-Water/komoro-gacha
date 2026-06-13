import { DonburiIllustration } from "./DonburiIllustration";
import type { MenuVisualSpec } from "./menuVisualSpec";
import { NoodleIllustration } from "./NoodleIllustration";
import { resolveMenuVisualSpec } from "./resolveMenuVisualSpec";
import { SeiroIllustration } from "./SeiroIllustration";
import { SetIllustration } from "./SetIllustration";

type Props = {
  menuId: string;
  label: string;
};

export function MenuIllustration({ menuId, label }: Props) {
  let spec: MenuVisualSpec;
  try {
    spec = resolveMenuVisualSpec(menuId);
  } catch {
    return null;
  }

  if (spec.kind === "set") {
    return <SetIllustration spec={spec} label={label} />;
  }

  if (spec.kind === "donburi") {
    return <DonburiIllustration spec={spec} label={label} />;
  }

  if (spec.temperature === "seiro") {
    return <SeiroIllustration spec={spec} label={label} />;
  }

  return <NoodleIllustration spec={spec} label={label} />;
}
