"use client";
import { useEffect, useState } from "react";
import { Paragraph, Title } from "../atoms/Typography";
import { CardPlan } from "../molecules/Card/CardPlan";

export function Plan() {
  const Plan = [
    {
      id: 1,
      title: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      type: "month",
      price: 9.99,
    },
    {
      id: 2,
      title: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      type: "month",
      price: 9.99,
    },
    {
      id: 3,
      title: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      type: "month",
      price: 9.99,
    },
    {
      id: 4,
      title: "Basic Plan 2",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      type: "year",
      price: 9.99,
    },
  ];
  const [tabActive, setTabActive] = useState(false);

  const [dataPlan, setDataPlan] = useState([]);

  useEffect(() => {
    if (!tabActive) {
      const filterdata = Plan.filter((item) => item.type === "month");
      setDataPlan(filterdata);
    } else if (tabActive) {
      const filterdata = Plan.filter((item) => item.type === "year");
      setDataPlan(filterdata);
    }
  }, [tabActive]);

  return (
    <>
      <section className="container mx-auto flex flex-col gap-[60px] relative py-40">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col gap-[10px]">
            <Title level={3}>Choose the plan that's right for you</Title>
            <Paragraph>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </Paragraph>
          </div>
          <div className="p-2 border border-black-15 rounded-lg">
            <button
              onClick={() => setTabActive(false)}
              className={`px-6 py-4 rounded-lg ${
                !tabActive ? " bg-black-12" : ""
              }  `}
            >
              monthly
            </button>
            <button
              onClick={() => setTabActive(true)}
              className={`px-6 py-4 rounded-lg ${
                tabActive ? " bg-black-12" : ""
              }  `}
            >
              yearly
            </button>
          </div>
        </div>
        {!tabActive ? (
          <section className="flex gap-5 flex-w min-h-[20vh]">
            {dataPlan.map((data) => (
              <CardPlan
                key={data.id}
                title={data.title}
                description={data.description}
                price={data.price}
                type={data.type}
              />
            ))}
          </section>
        ) : (
          <section className="flex gap-5 flex-w min-h-[20vh]">
            {dataPlan.map((data) => (
              <CardPlan
                key={data.id}
                title={data.title}
                description={data.description}
                price={data.price}
                type={data.type}
              />
            ))}
          </section>
        )}
      </section>
    </>
  );
}
