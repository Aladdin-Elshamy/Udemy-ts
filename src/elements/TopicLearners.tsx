interface IProps {
  learners: string;
}
export default function TopicLearners({ learners }: IProps) {
  return (
    <p className="text-gray-500 text-xs md:text-sm">{learners} learners</p>
  );
}
