import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="  ">
     
      <div className=" relative flex flex-col">
        <div class="relative   bg-cover bg-no-repeat bg-center  ">
          <img
            class=" h-[100vh] w-[100vw]"
            src="https://uploads-ssl.webflow.com/6303baac8e0dfd72828a2e07/646f1a20e34ab9f01d139300_Geist-WebsiteBanner-TheGeistCrowler-02.webp"
            alt=""
          />
        </div>
        <div class="absolute top-[230px] inset-0 h-28 flex  items-center justify-center">
          <img
            src="https://uploads-ssl.webflow.com/6303baac8e0dfd72828a2e07/646f1935e7321b061e549867_TheGeistCrowler-Lettering.svg"
            alt="Center Image"
            class="max-w-full max-h-full"
          />
        </div>
        <div className="absolute top-[500px] left-[650px]">
          <button className=" px-16 text-white p-2  border border-orange-600 rounded-md  bg-orange-600">
            {" "}
            <NavLink to="/learn">Learn more</NavLink>
          </button>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <div>
          <img src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63ca6176a8dd6bdedabbe1ab_meet.webp" />
        </div>
        <div>
          <p>
            {" "}
            We’re an Indian craft beer brand that makes fresh and
            planet-friendly craft beer, now available in Bangalore and
            Hyderabad. Since 2017, we’ve been brewing a range of global craft
            beer styles. We set up South India’s first distribution craft
            brewery by transforming a once abandoned plywood factory set amid
            the fields of Nimbekaipura – (literal translation: the village of
            lemons) into a brewer’s paradise.
          </p>
          <button className=" px-5 p-2 border border-blue-500 rounded-md  bg-orange-300">
            <NavLink to="/about">read more</NavLink>
          </button>
        </div>
      </div>
      {/* section 3 */}
      <div>
        <div className="flex flex-col bg-orange-400 h-[500px]">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/644107150bae935cbc75d247_Check%20out%20our%20Range.webp"
              alt=""
            />
          </div>
          <div>
            <h2>
              We brew a variety of international craft beer varieties including
              wheat beers, IPAs, stouts, lagers and more
            </h2>
          </div>
          <div className="flex flex-row gap-3">
            <NavLink to="#">
              <img
                src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/64410a9589018e21174a6be3_Geist-Home-Beer-1%201.webp"
                alt=""
              />
            </NavLink>
            <NavLink to="#">
              <img
                src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/64410a95ae030777e42bea00_Geist-Home-Beer-2%201.webp"
                alt=""
              />
            </NavLink>

            <NavLink to="#">
              <img
                src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/64410a96b2af2d5d595e0511_Geist-Home-Beer-3%201.webp"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="flex flex-col justify-center items-center ">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/636cc895653cb2f3aff46d71_Get%20the%20Full%20Experience.svg"
            alt=""
          />
        </div>
        <div className="flex h-[400px]  ">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63b505528991facd3dd93046_geist.webp"
              alt=""
            />
          </div>
          <div>
            <p>
              In 2020, we set up our flagship beer garden restaurant nestled
              under the shade of a 100-year-old Banyan tree beside our
              production brewery. Our menus are curated and designed to offer
              homestyle cooking favourites from India and around the world –
              comfort food with a special Geist twist that pairs best with our
              beer! Today, we proudly operate multiple Geist Brewing Co.
              locations around Bangalore.
            </p>
          </div>
        </div>
      </div>

      {/* section 5 */}

      <div className="flex items-center justify-center">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63ca60439ae75974ce2199e1_omr.webp"
            alt=""
          />
          <h1>Geist Brewing Co. OMR</h1>
          <NavLink to="#">
            <h2>OLD MADRAS ROAD, HOSKOTE</h2>
          </NavLink>
        </div>
        <div>
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63ca6043be845a0e4c2ae2d3_rajaji.webp"
            alt=""
          />
          <h1>Geist Brewing Co. Rajajinagar</h1>
          <NavLink to="#">
            <h2>ORION MALL, RAJAJINAGAR</h2>
          </NavLink>
        </div>
        <div>
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63ca60437a50873779c1481f_hennur.webp"
            alt=""
          />
          <h1>Geist Brewing Co. Hennur</h1>
          <NavLink to="#">
            <h2>BHARTIYA MALL OF BENGALURU, HENNUR</h2>
          </NavLink>
        </div>
      </div>
      {/* section 6 */}
      <div className="flex items-center justify-center">
        <NavLink to="/ontap">
          <div>
            <img
              className="h-[300px]"
              src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/633c035f7194854400836726_image%205.webp"
              alt=""
            />
          </div>
        </NavLink>
        <NavLink to="/stores">
          <div>
            <img
              className="h-[300px]"
              src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63b50c60d3a5520eeed5e865_geist%20beer.webp"
              alt=""
            />
          </div>
        </NavLink>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
