import React from "react";
import { Banner } from "../components/Banner";
import { Features } from "../components/Features";
import { Categories } from "../components/Categories";
import { About } from "../components/About";
import { ValueProps } from "../components/ValueProps";
import { Stats } from "../components/Stats";
import { Brands } from "../components/Brands";
import { Clients } from "../components/Clients";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Categories />
      <About />
      <ValueProps />
      <Stats />
      <Brands />
      <Clients />
      <Testimonials />
    </main>
  );
}
