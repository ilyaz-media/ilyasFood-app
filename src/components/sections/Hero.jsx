import { ArrowRight } from "lucide-react";
import heroImg from '../../assets/hero.png'
import minuman from '../../assets/minuman.png'

export default function Hero() {
  return (
    <section className="p-2 lg:p-10 w-[97%] rounded-lg  bg-gradient-to-br from-emerald-100 to-white m-2 lg:m-5 grid grid-cols-1 lg:grid-cols-2  ">
      <div className="p-5 flex flex-col gap-3 lg:gap-5 justify-center ">
        <h1 className=" text-3xl lg:text-5xl font-semibold leading-tight text-emerald-900">
          Rasa Lezat,
          <br /> Harga Bersahabat
        </h1>
        <p className="text-sm lg:text-xl lg:leading-7 lg:pr-20">
          Nikmati berbagai hidangan terbaik kami yang dimasak dengan bumbu
          pilihan dan penuh cinta.
        </p>

        <div className=" flex flex-col lg:flex-row gap-2  mt-2">
          <button className="py-3 px-5  flex items-center gap-5 rounded-lg bg-emerald-600 text-white">
            Lihat Menu <ArrowRight />{" "}
          </button>
          <button className="px-5 py-3 text-start rounded-lg bg-white text-emerald-600">
            Hubungi kami
          </button>
        </div>
      </div>
      <div className="relative ">
        <img src={heroImg} className="h-full w-full object-contain" alt="" />
      </div>
    </section>
  );
}
