import gambarMembrane1 from "@/app/th.jpg"
import gambarMembrane2 from "@/app/tentang-membrane-layang.webp"
import Image from "next/image"

const Membrane = () => {
    return (
        <div id="Membrane">
             <div className="pambungkusjudulkanopi">
    <div className="judulkanopi">Tenda Membrane</div>
    </div>
    <br />
    <br />
    <br />
    <div className="textgambarkanopi flex">
    <div className="gambarkanopi">
    <Image src={gambarMembrane1} width={2000} height={3000} className="rounded-xl gambar1kanopi" alt="..."/>
    </div>
    <div className="textkanopi">
   <p className="judultextkanopi">Tenda Membrane</p>
   <br />
   <br />
   <p className="text-left">Tenda membrane adalah tenda yang terbuat dari kain dengan material khusus. Jenis tenda ini mempunyai serat kain yang cukup kuat. Sehingga tahan terhadap guyuran air hujan maupun sengatan panas matahari. Tenda membrane memberikan kesan modern untuk tempat seperti Mall, Cafe, Rekreasi, Carport Rumah, Lapangan Futsal, Lapangan Tenis dan sebagainya. Tenda membrane juga memiliki nilai seni yang tinggi karena desain atap membrane yang di kerjakan oleh tim berpengalaman.</p>
   <br />
   <p className="text-left">BMT Bandung Membrane Team adalah perusahaan tensile membrane terbesar di Indonesia. Dengan menggunakan Cutting Software kami mampu menghasilkan karya desain kerumitan tinggi untuk hasil yang maksimal. Pemilihan kontruksi membrane dan bahan tidak bisa di aplikasikan sembarangan, kami telah menyediakan bahan pilihan terbaik dengan desain atap membrane yang di kerjakan oleh tim.</p>
    </div >
    </div>
    <br />
    <br />
    <br />
    <div className="textgambarkanopi flex">
    <div className="gambarkanopi">
    <Image src={gambarMembrane2} width={2000} height={3000} className="rounded-xl gambar1kanopi"/>
    </div>
    <div className="textkanopi">
   <p className="judultextkanopi">Tentang Tenda Membrane</p>
   <br />
   <br />
   <p className="text-left">Tenda membrane ini mempunyai berbagai macam kelebihan yang tidak terdapat pada jenis material atap yang lainnya. Salah satu kelebihannya yaitu mengenai estetika atau seni keindahan dari sebuah bangunan. Bahan membrane ini sangat fleksibel untuk dibuat menjadi sebuah bentuk atap yang sangat eye catching dan atraktif.</p>
   <br />
   <p className="text-3xl judulpenjelascanopy">Kelebihan Tenda Membrane</p>
   <br />
   <p className="text-left">
   <p> ✔ Tidak mudah rusak</p>
   <p> ✔ Dapat dibentuk dengan berbagai model dan banyak pilihan warna</p>
   <p> ✔ Memiliki banyak jenis yang berkualitas</p>
   <p> ✔ Perawatan yang mudah</p>
   <p> ✔ Memiliki model yang modern dan estetis</p>
   </p>
    </div >
    </div>
        </div>
    )
}

export default Membrane
