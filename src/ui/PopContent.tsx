import Description from "../elements/Description";
import BigButton from "../elements/BigButton";

interface IProps {
  description: string;
  button: string;
}
export default function PopContent({ description, button }: IProps) {
  return (
    <div className="pt-8">
      <div className="bg-white p-4 flex flex-col gap-4 max-w-xs shadow-lg border">
        <Description>{description}</Description>
        <BigButton>{button}</BigButton>
      </div>
    </div>
  );
}
