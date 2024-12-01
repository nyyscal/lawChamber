import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Program from "../components/Program";
import Title from "../components/Title";
import Testimonials from "../components/Testimonial";
import Overview from "../components/Overview";
import Newsletter from "../components/Newsletter";
import Gap from "../components/Gap.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Gap />
      <Info />
      <Title subTitle="Our Services" title="PRACTICE AREAS" />
      <Program />
      <Title subTitle="Our Views" title="Why trust us?" />
      <Overview />
      <Title subTitle="Testimonials" title="What our client says?" />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
