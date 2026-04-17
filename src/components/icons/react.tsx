import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function ReactLogo({ height, width }: IconProps) {
  return <Icon icon="lineicons:react" width={width} height={height} />;
}
