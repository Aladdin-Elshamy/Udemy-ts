import Description from "../elements/Description";
import LinkBtn from "../elements/LinkBtn";

interface IProps {
  description: string;
  button: string;
}
export default function PopContent({ description, button }: IProps) {
  return (
    <div className="pt-8 z-40">
      <div className="bg-white p-4 flex flex-col gap-4 max-w-xs shadow-lg border">
        <Description>{description}</Description>
        <LinkBtn href="#" align={"center"} className="p-4">
          {button}
        </LinkBtn>
      </div>
    </div>
  );
}
