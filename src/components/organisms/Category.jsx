"use client";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Paragraph, Title } from "../atoms/Typography";
import { ImageHeroOne } from "@/assets/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
export function Category() {
  const sliderRef = useRef(null);
  const category = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Romance",
    "Musical",
    "Animation",
    "Documentary",
    "Biography",
    "Crime",
    "Mystery",
    "Western",
    "Historical",
    "War",
    "Family",
    "Noir",
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <section className=" container mx-auto flex flex-col gap-[60px] relative">
        <div className="flex items-center justify-center  gap-20 self-stretch">
          <div className="flex flex-col gap-[10px] flex-1">
            <Title level={2}>Explore our wide variety of categories</Title>
            <Paragraph>
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </Paragraph>
          </div>
          <div className="flex p-3 items-center gap-3 bg-black-6 border border-black-12 rounded-xl">
            <button
              className="flex p-[10px] gap-[10px] rounded-md border border-black-12 bg-black-10"
              onClick={handlePrev}
            >
              <FaLongArrowAltLeft size={36} />
            </button>
            <button
              className="flex p-[10px] gap-[10px] rounded-md border border-black-12 bg-black-10"
              onClick={handleNext}
            >
              <FaLongArrowAltRight size={36} />
            </button>
          </div>
        </div>

        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {category.map((category, index) => (
              <CardCategory key={index}>
                {index + 1}. {category}
              </CardCategory>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export const CardCategory = ({ children }) => {
  return (
    <section className="flex w-[234px] p-6 flex-col flex-1 rounded-xl border border-black-15  bg-black-10">
      <div className="h-[210px] w-full grid grid-cols-2 gap-1 relative">
        {ImageHeroOne.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="flex h-[100px] items-center justify-center bg-white"
          >
            <Image
              src={image}
              alt={`film ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        <div className="fade-out-bottom " />
      </div>
      <div className="flex justify-between pt-1">
        <span className="flex items-center self-stretch">{children}</span>
        <GoArrowRight size={18} />
      </div>
    </section>
  );
};
