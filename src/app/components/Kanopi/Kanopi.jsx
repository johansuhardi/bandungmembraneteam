import Image from "next/image"
import gambarkanopi1 from "@/app/canopy-membrane1.jpg"
import gambarkanopi2 from "@/app/tentang-canopy-membrane.jpg"
const Kanopi = () => {
    return (
<div id="Kanopi">
    <div className="pambungkusjudulkanopi">
    <div className="judulkanopi">Canopy</div>
    </div>
    <br />
    <br />
    <br />
    <div className="textgambarkanopi flex">
    <div className="gambarkanopi">
    <Image src={gambarkanopi1} width={2000} height={3000} className="rounded-xl gambar1kanopi" alt="..."/>
    </div>
    <div className="textkanopi">
   <p className="judultextkanopi">Canopy Membrane</p>
   <br />
   <br />
   <p className="text-left">Kanopi adalah sebutan lain dari istilah yang sering digunakan dalam bidang bangunan. Kanopi merupakan rangka dan atap yang biasanya dipasang di beranda depan rumah ataupun bangunan. Kanopi terdiri atas 2 jenis yaitu: kanopi baja ringan dan kanopi besi hollow.</p>
   <br />
   <p className="text-left">    Canopy membrane (Kanopi Membrane ) merupakan salah satu inovasi dari kanopi konvensional yang mana bentuknya sangat monoton dan terlihat kaku. Walaupun demikian, Kanopi membrane dari waktu ke waktu semakin banyak diminati oleh orang-orang terutama untuk beberapa wilayah kota besar.</p>
    </div >
    </div>
    <br />
    <br />
    <br />
    <div className="textgambarkanopi flex">
    <div className="gambarkanopi">
    <Image src={gambarkanopi2} width={2000} height={3000} className="rounded-xl gambar1kanopi"/>
    </div>
    <div className="textkanopi">
   <p className="judultextkanopi">Tentang Canopy Membrane</p>
   <br />
   <br />
   <p className="text-left">Tidak sepert kanopi konvensional yang sudah ada sejak dulu, canopy membrane memberikan nilai lebih dari pada kanopi konvensional yang sudah ada sejak dulu. Selain karena semua fiturnya sudah terbackup oleh Kanopi membrane, dari segi kekuatan kain maupun konstruksinya juga sudah melewati tahap pengujian.</p>
   <br />
   <p className="text-3xl judulpenjelascanopy">Kelebihan Canopy Membrane</p>
   <br />
   <p className="text-left">
   <p> ✔ Mudah Dalam Perawatan</p>
   <p> ✔ Ramah Lingkungan</p>
   <p> ✔ Desain Futuristik & Modern</p>
   <p> ✔ Daya Tahan Lama Hingga 5 - 15 Tahun</p>
   <p> ✔ ahan Terhadap Segala Kondisi Cuaca</p>
   </p>
    </div >
    </div>
</div>
    )
}

export default Kanopi