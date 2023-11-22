import Image from 'next/image'

import HubungiKami from "@/app/components/HubungiKami/HubungiKami"
import Carousel from "@/app/components/Carousel/Carousel"
import Design from "@/app/components/Design/Design"
import Head from "next/head"
import Link from "next/link"
import TentangKami from "@/app/components/TentangKami/TentangKami"

export default function Home() {
  return (
    <>
    <Head>
      <title>BMT Bandung Membrane team</title>
    </Head>
      <div className="hideung">
        <div className="container-all " id="Home">

          <Carousel />
        </div>
         <Design />
        <TentangKami />
        <p className="titik" id="hubungikami"></p>
        <br />
        <br />
        <HubungiKami />
                
       
      </div>


    </>

  )
}


