import { Paragraph, Title } from "@/components/atoms/Typography";
import Image from "next/image";

export const CardDevice = ({ image, device, description }) => {
  return (
    <div className="flex  flex-col gap-[30px] p-[50px] rounded-xl border border-black-15 bg-custom-gradient">
      <div className="flex items-center gap-4 self-stretch">
        <div className=" p-4 flex justify-center items-center rounded-xl border border-black-12 bg-black-8">
          <Image src={image} alt={device} />
        </div>
        <Title level={4}>{device}</Title>
      </div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
