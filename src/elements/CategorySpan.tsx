interface IProps {
  title: string;
  padding?: string;
}
export default function CategorySpan({ title, padding = "px-4 pb-1" }: IProps) {
  return (
    <span className={`${padding} block font-bold text-sm text-gray-500`}>
      {title}
    </span>
  );
}
