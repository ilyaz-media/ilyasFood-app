import { FaTimes } from "react-icons/fa";
import { FaBars, FaCartShopping } from "react-icons/fa6";

export default function Navbar({ openBar, setOpenBar }) {
  return (
    <nav className="flex px-10 py-5 justify-between md:hidden fixed w-full bg-white items-center z-[10]">
      <div className="flex gap-3">
      <button onClick={()=> setOpenBar(!openBar)} className="">{openBar?<FaTimes/>:<FaBars/>}</button>
      <div>
        <h1 className="font-bold text-xl">Ilyas <span className="text-emerald-500">Food</span></h1>
      </div>
      </div>
      <button><FaCartShopping/></button>
    </nav>
  );
}
