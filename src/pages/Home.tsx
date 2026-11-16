import { Collect } from "./home/Collect";
import { Explore } from "./home/Explore";
import { Hero } from "./home/Hero";
import { Pro } from "./home/Pro";
import { CallToAction, Faq, More, Privacy } from "./home/Rest";
import { Showcase } from "./home/Showcase";
import { Stats } from "./home/Stats";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Showcase />
      <Explore />
      <Collect />
      <Pro />
      <More />
      <Privacy />
      <Faq />
      <CallToAction />
    </>
  );
}
