export default function Chip({ style, title, logo }) {
  return (
    <span className={`chip  ${style}`}>
      {logo}
      {title}
    </span>
  );
}
