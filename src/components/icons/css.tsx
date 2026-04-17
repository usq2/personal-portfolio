import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function CSSLogo({ height, width }: IconProps) {
  return (
    <Icon icon="fluent:document-css-24-filled" width={width} height={height} />
  );
}
