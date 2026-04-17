import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function MongoLogo({ height, width }: IconProps) {
  return <Icon icon="logos:mongodb-icon" width={width} height={height} />;
}
