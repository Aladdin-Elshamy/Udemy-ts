import BlackLinkBtn from "../elements/BlackLinkBtn";
import WhiteLinkBtn from "../elements/WhiteLinkBtn";
import BusinessFeatList from "./BusinessFeatList";

export default function UdemyBusiness() {
  return (
    <section className="container flex flex-col gap-8 md:gap-0 md:flex-row justify-around py-14 items-center">
      <div className="order-last md:order-first flex flex-col gap-6">
        <img src="./images/assets/asset 11.svg" className="w-52" alt="" />
        <h3 className="text-2xl text-center md:text-left md:text-3xl font-bold">
          Upskill your team with Udemy Business
        </h3>
        <BusinessFeatList />
        <div className="flex gap-4 flex-col md:flex-row">
          <BlackLinkBtn
            text="Get Udemy Business"
            url="#"
            width="w-full md:w-auto"
            textAlign="text-center md:text-left"
          />
          <WhiteLinkBtn
            text="Learn more"
            url="#"
            width="w-full md:w-auto"
            textAlign="text-center md:text-left"
          />
        </div>
      </div>
      <div className="order-first md:order-last w-full md:w-1/2">
        <img src="./images/Udemy-banner-lg.jpg" alt="" />
      </div>
    </section>
  );
}
