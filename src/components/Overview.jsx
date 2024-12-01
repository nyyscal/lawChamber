import React from "react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-amber-100 flex flex-col md:flex-row w-[800] h-[800] items-center gap-6 p-6">
      {/* Left Side: Image */}
      <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
        <img
          className="object-contain"
          width={700}
          height={700}
          src="/overview.jpg"
          alt="Overview"
        />
      </div>

      {/* Right Side: Text */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-4 text-center font-mono">
        <h1 className="text-4xl font-bold mb-6 font-serif">
          Why Choose Our Law Firm?
        </h1>
        <ul className="space-y-4 text-left text-lg">
          <li>
            <b>Experience:</b> Over a decade of successful case outcomes.
          </li>
          <li>
            <b>Personalized Service:</b> Every client is unique, we treat you as
            such.
          </li>
          <li>
            <b>Transparent Pricing:</b> No hidden fees or unexpected charges.
          </li>
          <li>
            <b>Award-Winning Team:</b> Our attorneys have been recognized by
            legal bodies both locally and nationally.
          </li>
          <button
            className="px-3 py-3 rounded-2xl bg-[#212EA0] text-white font-serif "
            onClick={() => navigate("/services")}
          >
            Free Consultation
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
