import { Paragraph, Title } from "@/components/atoms/Typography";

export function CardPlan({ title, description, type, price }) {
  return (
    <div className="flex p-10 justify-between flex-col gap-10 flex-1 border border-black-15 bg-black-10 rounded-lg">
      <div className="flex flex-col gap-3">
        <Title level={4}>{title}</Title>
        <Paragraph className="text-gray-300">{description}</Paragraph>
      </div>
      <div className=" text-[30px]">
        ${price}
        <span className=" text-d-paragraph">/{type}</span>
      </div>
      <div className="flex gap-1">
        <button className=" py-[14px] px-5 flex justify-center items-center flex-1 rounded-md border border-black-15 bg-black-8">
          Start Free Trial
        </button>
        <button className=" py-[14px] px-5 flex justify-center items-center flex-1 rounded-md bg-red-45">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
