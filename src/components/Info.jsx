import React from "react";
// Replace with the correct path to the image
import aboutImage from "../../public/image1.jpg";

const About = () => {
  return (
    <div className="bg-[#f5f5dc] py-10">
      <section className="container  mx-auto my-18 flex flex-col lg:flex-row items-center justify-between w-[90%] ">
        {/* Left Section: Image */}
        <div className="basis-full lg:basis-2/5">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full rounded-lg h-[400px]"
          />
        </div>

        {/* Right Section: Text */}
        <div className="basis-full lg:basis-7/12 lg:pl-12">
          <h3 className="font-semibold text-3xl text-[#212EA0] relative pl-4">
            <span className="absolute left-0 top-0 h-full w-[5px] bg-[#212EA0]"></span>
            About Us
          </h3>
          <h2 className="text-[35px] text-[#000F38] my-2 max-w-[400px]">
            Empowering Justice with Excellence
          </h2>
          <p className="text-[#141111] mb-4">
            At our law firm, we believe in delivering exceptional legal services
            tailored to meet the unique needs of our clients. Our team of
            experienced attorneys is committed to providing strategic counsel,
            innovative solutions, and unwavering advocacy. Whether you need
            assistance with corporate law, personal matters, or complex
            litigation, we prioritize your success and protection.
          </p>
          <p className="text-[#141111] mb-4">
            Our law firm company website is designed to provide easy access to
            essential legal services and information. Explore our expertise,
            meet our team, and connect with us to address your legal needs
            seamlessly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
