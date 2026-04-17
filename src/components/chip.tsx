import type { ChipProps } from "../types/logo.types";

export default function Chip({ style, title, logo }: ChipProps) {
  return (
    <span className={`chip  ${style}`}>
      {logo}
      {title}
    </span>
  );
}
