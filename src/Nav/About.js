import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
  <div>
      <div className=" relative  flex flex-col">
    <div class="relative   bg-cover bg-no-repeat bg-center  ">
      <img
        class=" h-[95vh] w-[100vw]"
        alt=""        src="https://th.bing.com/th/id/R.264ca0912f069188589f25b47d04696d?rik=IhmCQgPnUBe5Vw&riu=http%3a%2f%2fwww.prettechtank.com%2fuploads%2f20179399%2fsmall%2fspirit-tank-farm26119962149.jpg&ehk=WW%2f2mM%2beNnB79F6DEQ4Ng7bPl0r9cKcy252yDJukVuo%3d&risl=&pid=ImgRaw&r=0"

      />
    </div>
    <div class="absolute top-[200px] inset-0 h-28 flex  items-center justify-center">
  
      <img
        src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/636cd068bc54c672ecb0ece0_The%20Geist%20Spirit.svg"
        alt="Center Image"
        class="max-w-full max-h-full"
      />
    </div>
  </div>
  <div>
      <Footer />
    </div>
  </div>
  )
}

export default About