import React from 'react'
import Footer from '../components/Footer'

const Experiences = () => {
  return (
   <div>
     <div className=" relative  flex flex-col">
    <div class="relative   bg-cover bg-no-repeat bg-center  ">
      <img
        class=" h-[95vh] w-[100vw]"
        alt=""        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63914f5fafc7b4caf25d68b1_wrist_section_img-p-2000.webp"

      />
    </div>
    <div class="absolute top-[250px] inset-0 h-28 flex  items-center justify-center">
  
      <img
        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/6371f6eda2ecca064ef818d5_Geist%20Experiences.svg"
        alt="Center Image"
        class="max-w-full max-h-full"
      />
    </div>
  </div>
  <div>
      <Footer/>
    </div>
   </div>

  )
}

export default Experiences