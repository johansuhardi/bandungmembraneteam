import Image from "next/image" 
import gambar33 from "@/app/photo/33.jpeg"
const TentangKami = () => {
    return (
        <div className="text-white tentangkami " id="tentangkami">
          <div>
          <div className="italic tentangkami1">
            
          <center>
          <p className="lg ">Tentang Kami</p>
          <p className="sm">Bandung Membrane Team</p>
          </center>
          </div>
          <div className="tentangkami2">

          <p>Kami merupakan perusahaan spesialis pemasangan tenda membrane (tensile structure) </p>
          <p>yang telah berpengalaman dan memiliki tenaga ahli professional dan siap membantu dalam</p>
          <p> perencanaan hingga pemasangan di lokasi Anda. Tenaga ahli kami merupakan tim yang sudah</p>
           <p>berpengalaman di bidangnya mulai dari survey, desain dan pemasangan tenda membrane dengan</p>
          <p>  tingkat kesulitan yang berbeda-beda setiap lokasi.</p>
          <br />
          <p> durability, estetika serta keselamatan yang baik. Hasil pemasangan struktur atap membrane kami telah digunakan</p>
          <p>Keberhasilan kami dalam mengerjakan struktur atap membrane di beberapa lokasi prestisius yang membuktikan</p>
          <p>bahwa kami telah dipercaya dalam pemasangan tensile membrane dengan standar kekuatan konstruksi yang benar, </p>
          
          

          </div>
          </div>
          <div className="gambartentangkami">
         <Image src={gambar33} width={600} height={300}  alt="Hyperjump Logo"></Image> 
          </div>
        </div>
    )
}

export default TentangKami