import React from "react";
import Footer from "../components/Footer";

const Instores = () => {
  return (
  <div>
      <div className=" relative flex flex-col">
      <div class="relative   bg-cover bg-no-repeat bg-center  ">
        <img
          class=" h-[100vh] w-[100vw]"
          src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63c67cbaf765ef35a1f230a2_GBC-Rajajinagar-Location-25.webp"
          alt=""
        />
      </div>
      <div class="absolute top-[250px] inset-0 h-28 flex  items-center justify-center">
        <img
          src="https://uploads-ssl.webflow.com/6303baac8e0dfd72828a2e07/646f1935e7321b061e549867_TheGeistCrowler-Lettering.svg"
          alt="Center Image"
          class="max-w-full max-h-full"
        />
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Instores;
