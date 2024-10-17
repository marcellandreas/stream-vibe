import { Devices_data } from "@/assets/data";
import { Paragraph, Title } from "../atoms/Typography";
import Image from "next/image";

export function Devices() {
  return (
    <>
      <section className="container mx-auto flex flex-col gap-[60px] relative py-40">
        <div className="flex px-5 text-center md:text-left flex-col gap-[10px] flex-1 md:w-4/5">
          <Title level={3}>
            We Provide you streaming experience across various devices.
          </Title>
          <Paragraph>
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </Paragraph>
        </div>
        {/* Cards */}
        <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-[30px]  ">
          {/*  card */}
          {Devices_data.map((device) => (
            <CardDevice
              key={device.id}
              image={device.image}
              device={device.device}
              description={device.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const CardDevice = ({ image, device, description }) => {
  return (
    <div className="flex  flex-col gap-[30px] p-[50px] rounded-xl border border-black-15 bg-custom-gradient">
      <div className="flex items-center gap-4 self-stretch">
        {/* icon */}
        <div className=" p-4 flex justify-center items-center rounded-xl border border-black-12 bg-black-8">
          <Image src={image} alt={device} />
        </div>
        <Title level={4}>{device}</Title>
      </div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
