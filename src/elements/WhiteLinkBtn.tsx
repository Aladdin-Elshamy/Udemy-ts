interface IProps {
  text: string;
  url: string;
  width: string;
  textAlign?: string;
}
export default function WhiteLinkBtn({
  text,
  url,
  width,
  textAlign = "",
}: IProps) {
  return (
    <a
      href={url}
      className={`${width} ${textAlign} hover:bg-gray-200 bg-transparent border block font-bold border-black px-4 py-2 text-sm`}
    >
      {text}
    </a>
  );
}
