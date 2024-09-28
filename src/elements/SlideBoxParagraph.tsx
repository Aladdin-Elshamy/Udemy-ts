interface IProps {
  description: string;
}
export default function SlideBoxParagraph({ description }: IProps) {
  return (
    <p className="font-medium md:w-auto md:py-3 md:max-w-80">{description}</p>
  );
}
