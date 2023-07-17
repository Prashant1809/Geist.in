import React from 'react'
import Footer from '../components/Footer'

const Ontap = () => {
  return (
   
  <div>
      <div className=" relative bg-black flex flex-col">
    <div class="relative   bg-cover bg-no-repeat bg-center  ">
      <img
        class=" h-[95vh] w-[100vw]"
        alt=""
        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63913468f3c175ef98b3d2b3_beers_bg-p-2000.webp"
      />
    </div>
    <div class="absolute top-[250px] inset-0 h-28 flex  items-center justify-center">
      <img
        src=" https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63bb93533d3d7a21cd6dda0b_top.webp"
        alt="Center Image"
        class="max-w-full h-[250px]"
      />
    </div>
  </div>
  <div>
      <Footer/>
    </div>
  </div>
  )
}

export default Ontap