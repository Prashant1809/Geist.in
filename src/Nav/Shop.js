import React from "react";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <div className=" relative shadow-md bg-pink-100 h-[100vh] w-[100vw] flex flex-col">
        <div class="relative   bg-cover bg-no-repeat bg-center  ">
         
        </div>
        <div class="absolute top-[250px] inset-0 h-28 flex  items-center justify-center">
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63c7b3b043ebcf8ae21259af_Coming-01.svg"
            alt="Center Image"
            class="max-w-full h-[300px]"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
