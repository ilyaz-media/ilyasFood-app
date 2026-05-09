import { Outlet } from "react-router";
import SideBar from "../components/UI/SideBar";
import Navbar from "../components/UI/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div>
    <Navbar openBar={openBar} setOpenBar={setOpenBar}/>
    <div className="flex">
      <SideBar openBar={openBar} setOpenBar={setOpenBar} />
      <main className=" w- ml-0 lg:ml-[15%] bg-slate-50">
        {openBar && <div onClick={()=> setOpenBar(false)} className=" fixed bg-black/50 inset-0 z-10 "></div> }
        <Outlet />
      </main>
    </div>
    </div>

  );
}
