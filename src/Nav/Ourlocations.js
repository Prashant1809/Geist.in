import React from 'react'
import Footer from '../components/Footer'

const Ourlocations = () => {
  return (
<div>
<div className=" relative bg-black flex flex-col">
    <div class="relative   bg-cover bg-no-repeat bg-center  ">
      <img
        class=" h-[95vh] w-[100vw]"
        alt=""
        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63be6ba23f5b758a3e5e1d99_OMR%20hero.webp"
      />
    </div>
    <div class="absolute top-[250px] inset-0 h-28 flex  items-center justify-center">
      <img
        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/63be62ef6c450ad363bbf458_GBC%20hero-p-800.png"
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

export default Ourlocations