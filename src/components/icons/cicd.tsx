import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function CICDLogo({ height, width }: IconProps) {
  return (
    <Icon icon="eos-icons:pipeline-outlined" width={width} height={height} />
  );
}
