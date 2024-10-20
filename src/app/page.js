import { Asked, Category, Devices, Hero, Plan } from "@/router";

export default function Home() {
  return (
    <section>
      <Hero />
      <Category />
      <Devices />
      <Asked />
      <Plan />
    </section>
  );
}
