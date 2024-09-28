import LinkBtn from "../elements/LinkBtn";
import { ISlide } from "../interfaces";
import SlideBox from "../ui/SlideBox";

export default function MobSlide({ image, imageIndex, index }: ISlide) {
  return (
    <div
      className="w-full flex-shrink-0 flex-grow-0"
      style={{
        transform: `translateX(-${imageIndex * 100}%)`,
      }}
      key={image.title + image.url[0]}
    >
      <img
        src={image.url[0]}
        alt={image.title}
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
        }}
        className="transition-all duration-300 object-cover object-right w-full flex-shrink-0 flex-grow-0 block"
      />
      {index === 0 && (
        <SlideBox
          title="Stuck in neutral?"
          description="Accelerate your future with lessons from McLaren Racing."
          version="mobile"
        >
          <LinkBtn
            href="#"
            className="max-w-[420px] font-semibold px-4 py-2 w-4/5"
            align="center"
          >
            Take the course
          </LinkBtn>
        </SlideBox>
      )}
      {index === 1 && (
        <SlideBox
          title="Skills that drive you forward"
          description="Technology and the world of work change fast — with us, you're faster. Get the skills to achieve goals and stay competitive."
          version="mobile"
        >
          <div className="flex flex-col items-start gap-2">
            <LinkBtn
              href="#"
              className="max-w-[420px] block font-semibold w-4/5"
              align="center"
            >
              Plan for Individuals
            </LinkBtn>
            <LinkBtn
              href="#"
              className="max-w-[420px] block font-semibold w-4/5"
              align="center"
              variant="white"
            >
              Plans for Organizations
            </LinkBtn>
          </div>
        </SlideBox>
      )}
    </div>
  );
}
