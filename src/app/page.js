import { Asked, Category, Devices, Hero } from "@/router";

export default function Home() {
  return (
    <section>
      <Hero />
      <Category />
      <Devices />
      <Asked />
    </section>
  );
}
