interface IProps {
  title: string;
}
export default function TopicTitle({ title }: IProps) {
  return (
    <a
      href="#"
      className="text-link text-sm md:text-base underline font-bold pt-4"
    >
      {title}
    </a>
  );
}
