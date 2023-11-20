import Link from "next/link"
import Image from "next/image"
import whatsapp from "@/app/whatsapp1.png"

const Tombolkembali = () => {
    return (
        <div>

        <div className="p-3 rounded fixed bottom-5 right-5 flex text-center">
           
            <Link href="https://wa.me/085691451094 " >
                <center>
           <p className="text-white font-bold shadow">Hubungi Kami</p> 
               
                <Image
                    src={whatsapp}
                    alt="Author image"
                    width="9px"
                    height="4px" 
                    />

                </center>
            </Link>
        </div>
        </div>

    )
}

export default Tombolkembali