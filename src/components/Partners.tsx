import PartnersLogos from "../ui/PartnersLogos";

export default function Partners() {
  return (
    <section className="bg-gray-100 py-14 md:mt-16">
      <div className="container">
        <p className="text-gray-500 text-lg pb-5 text-center">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </p>
        <PartnersLogos />
      </div>
    </section>
  );
}
