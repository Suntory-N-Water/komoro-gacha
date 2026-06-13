import { resolveMenuVisualSpec } from "./resolveMenuVisualSpec";
import { DonburiIllustration } from "./DonburiIllustration";
import { NoodleIllustration } from "./NoodleIllustration";
import { SeiroIllustration } from "./SeiroIllustration";
import { SetIllustration } from "./SetIllustration";
import type { MenuVisualSpec } from "./menuVisualSpec";

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
