interface IProps {
  title: string;
}
export default function Subheader({ title }: IProps) {
  return (
    <h4 className="text-base md:text-lg pt-4 font-bold text-black">{title}</h4>
  );
}
