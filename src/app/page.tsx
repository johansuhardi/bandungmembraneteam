import Image from 'next/image'
import Navbar from "@/app/Utilities/Navbar/Navbar"
import HubungiKami from "@/app/components/HubungiKami/HubungiKami"
import Carousel from "@/app/components/Carousel/Carousel"
import Design from "@/app/components/Design/Design"
import Head from "next/head"
import Link from "next/link"
import TentangKami from "@/app/components/TentangKami/TentangKami"
import Kanopi from "@/app/components/Kanopi/Kanopi"
import Membrane from "@/app/components/Membrane/Membrane"


export default function Home() {
  return (
    <>
    <Head>
      <title>BMT Bandung Membrane team</title>
    </Head>
      <div className="hideung">
        <div className="container-all " id="Home">
        <Navbar />
        
          <Carousel />
        </div>
        <div id="galery" >
         <Design />
        </div>
        <TentangKami />
        <p className="titik" id="hubungikami"></p>
        <br />
        <br />
        <HubungiKami />
         <Kanopi />   
         <br />    
         <br />    
         <br />    
         <Membrane />       
       
      </div>


    </>

  )
}


