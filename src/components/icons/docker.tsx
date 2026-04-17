import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function DockerLogo({ height, width }: IconProps) {
  return <Icon icon="mdi:docker" width={width} height={height} />;
}
