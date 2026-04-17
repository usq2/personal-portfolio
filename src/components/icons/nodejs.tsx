import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function NodeLogo({ height, width }: IconProps) {
  return <Icon icon="devicon:nodejs" width={width} height={height} />;
}
