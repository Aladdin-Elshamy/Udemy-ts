interface IProps {
  title: string;
}
export default function SlideBoxHeader({ title }: IProps) {
  return <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>;
}
