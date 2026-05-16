import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import DetailMenu from "./pages/Detailmenu";
import ScrolToTop from "./functionHelper/ScrolTotop";

export default function App(){
    return <div className="font-poppins">
            <ScrolToTop/>
        <Routes>
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/menu"element={<Menu/>} />
                <Route path="/menu/:id" element={<DetailMenu/>} />
                <Route path="/cart" element={<Cart/>}/>
            </Route>
        </Routes>
    </div>
}