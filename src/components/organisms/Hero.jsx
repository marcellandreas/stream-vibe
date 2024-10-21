import {
  ImageHeroFour,
  ImageHeroOne,
  ImageHeroThree,
  ImageHeroTwo,
} from "@/assets/data";
import Image from "next/image";

import ICON from "../../assets/icons/Icon.svg";
import PLAY from "../../assets/icons/play.svg";
import { Paragraph, Title } from "../atoms/Typography";
import { ImageContainer } from "../molecules/ImageContainerHero";

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
            <Image src={PLAY} alt="button play" />
            <span>Start Watching Now</span>
          </button>
        </div>
      </section>
    </>
  );
}
