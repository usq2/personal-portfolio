import { Icon } from "@iconify/react";
import type { IconProps } from "../../types/logo.types";

export default function AWSLogo({ height, width }: IconProps) {
  return <Icon icon="logos:aws-s3" width={width} height={height} />;
}
