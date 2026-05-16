import { ArrowRight, Award, BadgeCheck, ChefHat, Leaf, Users } from "lucide-react";
import heroImg from '../../assets/hero.png'

export default function Hero() {

const states =[
  {
    value: '5+',
    ket:'5 tahun berpengalaman',
    icon: BadgeCheck
  },
  {
    value: '99%',
    ket:'pelanggan puas',
    icon: Users
  },
  {
    value: '15k',
    ket:'pesanan selesai',
    icon: ChefHat
  },
]


  return (
    <section className="min-h-[70vh]   rounded-2xl overflow-hidden bg-gradient-to-br from-white to-white   grid grid-cols-1 lg:grid-cols-2  ">
      <div className=" py-10 px-5 flex flex-col gap-3 lg:gap-5 justify-center ">
        <h1 className=" text-3xl lg:text-5xl font-semibold leading-tight text-emerald-900">
          Rasa Lezat,
          <br /> Harga Bersahabat
        </h1>
        <p className="text-sm lg:text-base  lg:pr-40">
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
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 lg:p-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {states.map((item)=>{
            const Icon = item.icon
            return <div className=" flex gap-2  ">
                <Icon size={40} className="text-emerald-600"/>
                <div className="flex flex-col ">
                  <span className="text-3xl font-semibold ">{item.value}</span>
                  <span className="text-xs ">{item.ket}</span>
                </div>
            </div>
          })}
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-emerald-400 to-green-400 rounded-l-full  ">
        <img src={heroImg} className="h-full w-full object-contain" alt="" />
      
      </div>
    </section>
  );
}
