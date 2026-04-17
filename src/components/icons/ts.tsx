import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function TSLogo({ height, width }: IconProps) {
  return (
    <Icon icon="akar-icons:typescript-fill" width={width} height={height} />
  );
}
