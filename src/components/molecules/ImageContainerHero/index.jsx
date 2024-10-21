import Image from "next/image";

export const ImageContainer = ({ dataImages }) => {
  return (
    <section className=" min-w-full ">
      <div className="flex items-start justify-between  gap-5 md:flex-1 md:self-stretch   ">
        {dataImages.map((image, index) => (
          <div
            key={index}
            className="rounded-xl w-[130px] h-[180px] md:w-[180px] md:h-[210px]  bg-cover bg-no-repeat bg-grey-60 bg-opacity-50"
          >
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
