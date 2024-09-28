import LinkBtn from "../elements/LinkBtn";
import BusinessFeatList from "../ui/BusinessFeatList";

export default function UdemyBusiness() {
  return (
    <section className="container flex flex-col gap-8 md:gap-16 lg:gap-24 lg:flex-row justify-around py-14 items-center">
      <div className="order-last lg:order-first flex flex-col gap-6">
        <img src="./images/assets/asset 11.svg" className="w-52" alt="" />
        <h3 className="text-2xl text-center md:text-left md:text-3xl font-bold">
          Upskill your team with Udemy Business
        </h3>
        <BusinessFeatList />
        <div className="flex gap-4 flex-col md:flex-row">
          <LinkBtn
            href="#"
            align="center"
            variant="black"
            className="md:text-left md:w-fit"
          >
            Get Udemy Business
          </LinkBtn>
          <LinkBtn
            href="#"
            align="center"
            variant="white"
            className="md:text-left md:w-fit"
          >
            Learn more
          </LinkBtn>
        </div>
      </div>
      <div className="order-first lg:order-last w-full lg:w-1/2">
        <img src="./images/Udemy-banner-mobile.jpg" alt="" />
      </div>
    </section>
  );
}
