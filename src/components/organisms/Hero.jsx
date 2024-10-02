import {
  ImageHeroFour,
  ImageHeroOne,
  ImageHeroThree,
  ImageHeroTwo,
} from "@/assets/data";
import Image from "next/image";

import ICON from "../../assets/icons/Icon.svg";
import { Paragraph, Title } from "../atoms/Typography";

export function Hero() {
  return (
    <>
      <section className="flex flex-col items-center gap-[-64px] ">
        <div className="flex flex-col items-center gap-5 self-stretch h-4/5 relative overflow-hidden">
          <ImageContainer dataImages={ImageHeroOne} />
          <ImageContainer dataImages={ImageHeroTwo} />
          <ImageContainer dataImages={ImageHeroThree} />
          <ImageContainer dataImages={ImageHeroFour} />
          <div className="fade-out-top" />
          <div className="fade-out-bottom " />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={ICON} alt="icon hero" width={""} height={""} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-12 flex-col w-4/5 md:w-3/5 relative -translate-y-20 md:-translate-y-36">
          <div className="flex flex-col gap-[14px] text-center">
            <Title level={1}>The Best Streaming Experience</Title>
            <Paragraph className="text-gray-600">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </Paragraph>
          </div>

          <button className="flex py-[18px] px-[24px] gap-4 rounded-lg bg-red-45">
            Start Watching Now
          </button>
        </div>
        <hr className=" pb-64 " />
      </section>
    </>
  );
}

export const ImageContainer = ({ dataImages }) => {
  return (
    <section className=" min-w-full ">
      <div className="flex items-start justify-between  gap-5 md:flex-1 md:self-stretch   ">
        {dataImages.map((image, index) => (
          <div className="rounded-xl w-[130px] h-[180px] md:w-[180px] md:h-[210px]  bg-cover bg-no-repeat bg-grey-60 bg-opacity-50">
            <Image
              className="rounded-xl"
              src={image}
              key={index}
              alt={`Hero image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
