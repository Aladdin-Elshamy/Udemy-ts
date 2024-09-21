interface IProps {
  text: string;
  url: string;
  width?: string;
  textAlign?: string;
}
export default function BlackLinkBtn({
  text,
  url,
  width = "",
  textAlign = "",
}: IProps) {
  return (
    <a
      href={url}
      className={`${width} ${textAlign} hover:opacity-70 border block w-fit font-bold border-black px-4 py-2 text-sm bg-black text-white`}
    >
      {text}
    </a>
  );
}
