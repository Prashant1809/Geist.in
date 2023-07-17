import React from "react";

const Footer = () => {
  return (
    <div class="bg-black">
      <div class="max-w-[1200px] mx-auto flex flex-col gap-10 pb-10 pt-24">
        {/* <!-- section 1 --> */}
        <div class="flex flex-col xl:gap-[100px] md:flex-row gap-[40px] px-5">
          {/* <!-- left section --> */}
          <div class="flex flex-col gap-[24px] md:w-[50%] w-[100%] xl:w-[20%]">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/6383062e9f78ed0b27d8c2f5_White.svg"
                alt=""
              />
            </div>

            <div class="text-white text-[23px] flex gap-7">
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* <!-- right section --> */}
          <div class="md:w-[75%] flex justify-around flex-wrap">
            <div class="w-[50%] xl:w-fit">
              <ul class="text-white flex flex-col gap-[10px] leading-[30px] font-[400] font-['ggSans']">
                <li>
                  <a href="" class="hover:underline">
                    The Geist Spirit
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Geist Experiences
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Our Craft Beers
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-[50%] xl:w-fit">
              <ul class="text-white flex flex-col gap-[10px] leading-[30px] font-[400] font-['ggSans']">
                <li>
                  <a href="" class="hover:underline">
                    Find Geist on Tap
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Find Geist in Stores
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Visit Geist Brewing Co.
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-[50%] xl:w-fit">
              <ul class="text-white flex flex-col gap-[10px] leading-[30px] font-[400] font-['ggSans']">
                <li>
                  <a href="" class="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Returns & Refund Policy
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- section 2--> */}

        <div className="flex gap-11">
          <div className=" ">
            <div class=" md:mr-auto">
              <button
                type="submit"
                class="inline-block rounded  px-6  font-medium text-2xl uppercase leading-normal text-neutral-50 
          transition duration-150 ease-in-out "
              >
                Subscribe
              </button>
            </div>
            <div class="relative md:mb-6 flex gap-3">
              <input
                type="text"
                class="peer block py-2  border-2 border-white w-full rounded leading-[1.6] text-white outline-none
           transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <button className=" border px-5 bg-orange-600 border-orange-600 rounded-md"></button>
            </div>
          </div>
          <div>
            <div className="text-white  mb-2 flex place-content-end gap-3 text-xs">
              <div>terms</div>
              <div> privacy</div>
              <div>shipping Policy</div>
            </div>
            <div class="flex   md:flex-row items-center pt-2 border-t-2 border-white"></div>
            <div className="flex justify-center items-center">
              <p className="text-white ">
                Please Drink Responsibly. © Beerworks Restaurants and
                Microbrewery Pvt. Ltd. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
