import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function ObserveLogo({ height, width }: IconProps) {
  return (
    <Icon icon="ph:magnifying-glass-light" width={width} height={height} />
  );
}
