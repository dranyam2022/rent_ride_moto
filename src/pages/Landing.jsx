import React from "react";

const Landing = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-44 bg-[url('/src/assets/landing_moto.jpg')] bg-cover  bg-center bg-no-repeat px-5 py-14 text-white">
      <h1 className="text-4xl font-bold">
        Find and rent motorcycles and scooters.
      </h1>
      <button className="rounded-lg bg-[#3083FF] px-14 py-4 font-semibold">
        Let's Go!
      </button>
    </div>
  );
};

export default Landing;
