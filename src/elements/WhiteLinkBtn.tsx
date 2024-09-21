interface IProps {
  text: string;
  url: string;
}
export default function WhiteLinkBtn({ text, url }: IProps) {
  return (
    <a
      href={url}
      className="hover:bg-gray-200 bg-transparent border block w-fit font-bold border-black px-4 py-2 text-sm"
    >
      {text}
    </a>
  );
}
