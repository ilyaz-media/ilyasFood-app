import { ChefHat, Headset, Leaf, ShieldCheck } from "lucide-react";
import imgMenu1 from "../../assets/1.png";

export default function Menu() {
  const menu = [
    {
      nama: "Ayam penyet",
      harga: 20000,
      gambar: imgMenu1,
      ket: "Ayam goreng cryspi dengan sambal pedas khas.",
    },
    {
      nama: "Ayam penyet",
      harga: 20000,
      gambar: imgMenu1,
      ket: "Ayam goreng cryspi dengan sambal pedas khas.",
    },
    {
      nama: "Ayam penyet",
      harga: 20000,
      gambar: imgMenu1,
      ket: "Ayam goreng cryspi dengan sambal pedas khas.",
    },
    {
      nama: "Ayam penyet",
      harga: 20000,
      gambar: imgMenu1,
      ket: "Ayam goreng cryspi dengan sambal pedas khas.",
    },
  ];

  const statistik = [
    {
      judul: "Bahan Segar",
      ket: "Kami hanya menggunakan bahan berkualitas terbaik.",
      icon: Leaf,
    },
    {
      judul: "Bahan Segar",
      ket: "Kami hanya menggunakan bahan berkualitas terbaik.",
      icon: ChefHat,
    },
    {
      judul: "Bahan Segar",
      ket: "Kami hanya menggunakan bahan berkualitas terbaik.",
      icon: ShieldCheck,
    },
    {
      judul: "Bahan Segar",
      ket: "Kami hanya menggunakan bahan berkualitas terbaik.",
      icon: Headset,
    },
  ];

  return (
    <section className="rounded-lg min-h-screen p-5 lg:p-10  m-3 lg:m-5">
      <div className=" flex justify-between items-center">
        <h1 className=" text-xl lg:text-2xl font-bold">Menu Favorit</h1>
        <a href="" className="lg:text-xl text-xs text-emerald-600">
          Lihat Selengkapnya
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-2 mt-10">
        {menu.map((item) => {
          return (
            <div className="bg-white  overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.gambar}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-5 flex flex-col gap-2 ">
                <h2 className="font-semibold text-xl">{item.nama}</h2>
                <p className="text-sm">{item.ket}</p>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-emerald-600 text-xl">
                    Rp.{item.harga}
                  </h2>
                  <button className="font-bold text-2xl text-emerald-600 bg-slate-200 px-5 py-1 rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {statistik.map((item) => {
          const Icon = item.icon;
          return (
            <div className="bg-white  py-2 px-2 rounded-lg  flex items-center gap-3">
              <div className=" ">
                <Icon
                  className="p-2 bg-emerald-500 rounded-lg text-white"
                  size={50}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">{item.judul}</h2>
                <p className="text-xs">{item.ket}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
