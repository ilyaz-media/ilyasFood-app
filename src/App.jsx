import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App(){
    return <div className="font-poppins">
        <Routes>
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/produk"/>
            </Route>
        </Routes>
    </div>
}