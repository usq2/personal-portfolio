import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function TailwindLogo({ height, width }: IconProps) {
  return <Icon icon="devicon:tailwindcss" width={width} height={height} />;
}
