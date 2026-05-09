import { ArrowRight } from 'lucide-react';
import imgMakanan from '../../assets/hero.png'
import imgMinuman from '../../assets/minuman.png'

export default function Promotion() {
  return (
    <section className=" rounded-lg bg-gradient-to-b from-emerald-100 to-white m-3 lg:m-10 lg:p-10 p-5">
        <h2 className="font-semibold">🔥 Promo Hari ini</h2>
        <div className="mt-5 grid  lg:grid-cols-2 gap-2">
            <div className="lg:p-10 flex flex-col justify-center gap-3">
                <h1 className="text-2xl lg:text-4xl font-bold leading-tight">Paket Hemat <br /><span className="text-emerald-500">Makin nikmat</span></h1>

                <p className="lg:text-xl">Hemat lebih banyak dengan pilihan paket spesial kami.</p>
                <button className='w-fit px-5 flex gap-2 py-2 rounded-lg text-white bg-emerald-600'>Pilih paket <ArrowRight/></button>
            </div>
            <div className=" relative">
                <img src={imgMakanan} alt="" />
                <img src={imgMinuman} className='absolute top-[8%] h-[150px] lg:h-[250px] right-[5%]' alt="" />
            </div>
        </div>
    </section>
  );
}
