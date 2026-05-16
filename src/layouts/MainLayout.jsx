import { Outlet } from "react-router";
import SideBar from "../components/UI/SideBar";
import Navbar from "../components/UI/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div>
    <Navbar openBar={openBar} setOpenBar={setOpenBar} />
    <div className="flex">
      <SideBar openBar={openBar} setOpenBar={setOpenBar} />
      <main className=" w-full ml-0 p-2 lg:p-5 lg:ml-[15%] bg-gradient-to-b from-white to-white">
        {openBar  && <div onClick={()=> setOpenBar(false)} className=" fixed bg-black/50 inset-0 z-10 "></div> }
        <Outlet />
      </main>
    </div>
    </div>

  );
}
