import React from 'react'
import Footer from '../components/Footer'

const Beers = () => {
  return (
    <div>
      <div>
       <div className=" relative flex flex-col">
        <div class="relative   bg-cover bg-no-repeat bg-center  ">
          <img
            class=" h-[95vh] w-[100vw]"
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63913468f3c175ef98b3d2b3_beers_bg-p-2000.webp"
            alt=""
          />
        </div>
        <div class="absolute top-[200px] left-[100px] inset-0 h-[400px]">
          <img
            src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63913468046b17456a06d8e8_fresh_geist_beers.webp"
            alt="Center Image"
            class="max-w-full max-h-full"
          />
        </div>
       
      </div>

    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Beers