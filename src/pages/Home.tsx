import { Hero } from "./home/Hero";
import { Insights } from "./home/Insights";
import { CallToAction, Faq, More, Privacy } from "./home/Rest";
import { Showcase } from "./home/Showcase";
import { Stats } from "./home/Stats";
import { Walk } from "./home/Walk";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Showcase />
      <Walk />
      <Insights />
      <More />
      <Privacy />
      <Faq />
      <CallToAction />
    </>
  );
}
