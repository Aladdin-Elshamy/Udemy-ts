import LinkBtn from "../elements/LinkBtn";
import { ISlide } from "../interfaces";
import SlideBox from "../ui/SlideBox";

export default function DeskSlide({ image, imageIndex, index }: ISlide) {
  return (
    <div
      style={{
        transform: `translateX(-${imageIndex * 100}%)`,
        backgroundImage: `url(${image.url[1]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="transition-all duration-300 object-cover object-center w-full flex-shrink-0 flex-grow-0 block"
    >
      {/* First Box */}
      {index === 0 && (
        <SlideBox
          title="Stuck in neutral?"
          description="Accelerate your future with lessons from McLaren Racing."
          width="w-96"
        >
          <LinkBtn
            href="#"
            className="p-4 block font-semibold text-base"
            align={"center"}
          >
            Take the course
          </LinkBtn>
        </SlideBox>
      )}
      {/* Second Box */}
      {index === 1 && (
        <SlideBox
          width="w-[450px]"
          title="Skills that drive you forward"
          description="Technology and the world of work change fast — with us, you're faster. Get the skills to achieve goals and stay competitive."
        >
          <div className="flex items-center gap-2">
            <LinkBtn
              href="#"
              className="p-4 block font-semibold text-base"
              align={"center"}
            >
              Plan for Individuals
            </LinkBtn>
            <LinkBtn
              href="#"
              className="p-4 block font-semibold text-base"
              align={"center"}
              variant={"white"}
            >
              Plans for Organizations
            </LinkBtn>
          </div>
        </SlideBox>
      )}
    </div>
  );
}
