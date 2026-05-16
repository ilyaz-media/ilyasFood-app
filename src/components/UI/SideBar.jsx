import { ClipboardList, Home, Phone, User, Utensils } from "lucide-react";
import { useState } from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

export default function SideBar({openBar,setOpenBar}) {


  const menu = [
    {
      nama: "Home",
      icon: Home,
      path: "/",
    },
    {
      nama: "Menu",
      icon: Utensils,
      path: "/",
    },
    {
      nama: "Pesanan Saya",
      icon: ClipboardList,
      path: "/",
    },
    {
      nama: "Tentang Kami",
      icon: User,
      path: "/",
    },
    {
      nama: "Contact",
      icon: Phone,
      path: "/",
    },
  ];

  return (
    <aside className={`fixed transition-all duration-300    ${openBar ? 'left-0':'-left-[100%]'} lg:left-0  lg:flex w-[200px] z-[20]  h-screen p-8 flex flex-col  bg-slate-50 justify-between`}>
      <div className="flex flex-col gap-10">
        <div className="text-2xl font-bold">
          Ilyas <span className="text-emerald-500">Food</span>
        </div>
        <div className="flex flex-col gap-10 text-sm  mt-5 ">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                to={item.path}
                className="flex font-semibol gap-5  items-center">
                <Icon size={20} /> {item.nama}
              </Link>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <div className="footer flex flex-col gap-2">
        <div className="flex gap-2">
          <FaInstagram size={30} />
          <FaFacebook size={30} />
          <FaWhatsapp size={30} />
        </div>
        <div className="text-xs">2026 ilyasFood © All right reserved</div>
      </div>
    </aside>
  );
}
