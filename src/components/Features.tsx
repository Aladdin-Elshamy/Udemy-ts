import LinkBtn from "../elements/LinkBtn";
import Subheader from "../elements/Subheader";
import TopicLearners from "../elements/TopicLearners";
import TopicTitle from "../elements/TopicTitle";
import Category from "../ui/Category";

export default function Features() {
  return (
    <section className="py-12 bg-gray-100 mt-4">
      <div className="container">
        <h3 className="text-2xl font-bold text-black">
          Featured topics by category
        </h3>
        <ul className="grid pt-2 gap-x-8 gap-y-2 md:gap-y-0 grid-cols-2 md:grid-cols-4">
          <li>
            <Subheader title="Development" />
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Python" />
                <TopicLearners learners="36,354,994" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Web Development" />
                <TopicLearners learners="11,415,615" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Machine Learning" />
                <TopicLearners learners="7,070,015" />
              </div>
            </Category>
          </li>
          <li>
            <Subheader title="Business" />
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Financial Analysis" />
                <TopicLearners learners="1,195,282" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="SQL" />
                <TopicLearners learners="5,977,561" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="PMP" />
                <TopicLearners learners="1,733,398" />
              </div>
            </Category>
          </li>
          <li>
            <Subheader title="IT and Software" />
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Amazon AWS" />
                <TopicLearners learners="6,123,456" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Ethical Hacking" />
                <TopicLearners learners="10,931,066" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Cyber Security" />
                <TopicLearners learners="3,998,037" />
              </div>
            </Category>
          </li>
          <li>
            <Subheader title="Design" />
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Photoshop" />
                <TopicLearners learners="10,909,736" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Graphic Design" />
                <TopicLearners learners="3,381,052" />
              </div>
            </Category>
            <Category>
              <div className="flex flex-col gap-2">
                <TopicTitle title="Drawing" />
                <TopicLearners learners="2,410,849" />
              </div>
            </Category>
          </li>
          <div className="col-span-full mt-4 md:mt-8">
            <LinkBtn href="#" align="center" variant="white" width={"fit"}>
              Explore all topics
            </LinkBtn>
          </div>
        </ul>
      </div>
    </section>
  );
}
