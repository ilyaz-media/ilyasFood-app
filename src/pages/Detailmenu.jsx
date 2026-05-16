import { useNavigate, useParams } from "react-router";
import menu from "../data/menu";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import formatRupiah from "../functionHelper/formatRupiah";


export default function DetailMenu() {
  const navigate = useNavigate();
  const { id } = useParams();
  const produk = menu.find((item) => item.id === Number(id));
  const [catatan, setCatatan] = useState("");
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState("sedang");
  const [lalapan, setLalapan] = useState([]);

  // variant
  const levels = [
    {
      nama: "tidak pedas",
      icon: "🌶️",
    },
    {
      nama: "sedang",
      icon: "🌶️",
    },
    {
      nama: "pedas",
      icon: "🌶️",
    },
  ];

  // checkbox
  const lalapanList = ["timun", "kol", "kemangi"];
  function handleCheckbox(item) {
    if (lalapan.includes(item)) {
      setLalapan(lalapan.filter((i) => i !== item));
    } else {
      setLalapan([...lalapan, item]);
    }
  }

 // subtotal
  const subtotal = produk.harga * qty

  // handleKeranjang
  function tambahProduk(produk) {
    const cart = JSON.parse(localStorage.getItem("checkout")) || [];
    const cekProduk = cart.find(
      (item) =>
        item.id === produk.id &&
        item.variant === variant &&
        JSON.stringify(item.lalapan.sort()) === JSON.stringify(lalapan.sort()) &&
        item.catatan === catatan
    );

    const cartId = Date.now();

    if (cekProduk) {
      cekProduk.qty += qty;
    } else {
      cart.push({ ...produk, cartId, qty, variant, lalapan, catatan,subtotal });
    }
    localStorage.setItem("checkout", JSON.stringify(cart));
    navigate("/cart");
  }

 

  

// const subttotal = produk.reduce((total,qty))

  return (
    <div className="w-full ">
      <div className=" flex items-center    rounded-2xl  mb-2">
        <button onClick={() => navigate(-1)} className="  p-3 bg-white rounded-lg">
          <ArrowLeft />
        </button>
      </div>
      <div className=" w-[100%]  grid grid-cols-[2fr_1fr] gap-2  w-full ">
        {/* left */}
        <div className="  border  rounded-2xl p-2 grid grid-cols-2">
          {/* left */}
          <div className="p-2">
            <img
              src={produk.gambar}
              className="lg:h-[500px]  object-cover w-full rounded-2xl"
              alt=""
            />
          </div>
          {/* right */}
          <div className="p-5 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{produk.nama}</h1>
              <h2 className="text-xl font-semibold text-emerald-600">
                {formatRupiah(produk.harga)}
              </h2>
              <p>{produk.ket}</p>
            </div>

            {/* keterangan */}
            <div className="px-2  py-2 border-t border-slate-400 mt-5">
              {/* variant */}
              <div className="mt-5 flex flex-col gap-3">
                <h2 className="font-semibold">Level pedas</h2>
                <div className=" flex gap-2 flex-wrap">
                  {levels.map((item) => {
                    return (
                      <button
                        key={item.nama}
                        onClick={() => setVariant(item.nama)}
                        className={`p-2  text-xs flex ${variant === item.nama ? "  bg-emerald-200  " : "bg-slate-100"}`}>
                        {item.icon}
                        {item.nama}
                      </button>
                    );
                  })}
                </div>
                <span className="mt-3 text-sm text-gray-700">
                  Level pedas : {variant}
                </span>
              </div>
              {/* lalapan */}
              <div className="flex flex-col gap-2"></div>
            </div>

            {/* lalapan */}
            <div className="px-2 py-2 ">
              <h2 className="font-semibold">Tambah lalapan</h2>
              <div className="  p-2 text-sm flex flex-col justify-center gap-3">
                {lalapanList.map((item) => {
                  return (
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value={item}
                        checked={lalapan.includes(item)}
                        onChange={() => handleCheckbox(item)}
                        className="w-5 h-5 accent-emerald-600 cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>
            {/* catatan */}
            <textarea
              name="catatan"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              placeholder="masukan catatan tambahan"
              className="bg-slate-50 outline-none border border-slate-300 text-sm p-5 w-full rounded-lg"></textarea>
          </div>
        </div>
        {/* right */}
        <div className="py-8 border px-5 bg-white  rounded-2xl h-fit">
          <h2 className=" font-semibold text-xl">Ringkasan Pesanan</h2>

          <div className=" rounded-lg p-3 mt-3 flex flex-col g">
            <div className="  flex gap-2 py-5  rounded-lg">
              <img src={produk.gambar} className="h-[80px]" alt="" />
              <div className="text-sm">
                <h2 className="font-bold">{produk.nama}</h2>
                <h2 className="font-semibold text-emerald-500">
                  {formatRupiah(produk.harga)}
                </h2>
                <div className="flex flex-col mt-2 gap-1">
                  {variant && (
                    <span className="text-xs text-gray-500">
                      Pedas : {variant}
                    </span>
                  )}
                  {lalapan?.length > 0 && (
                    <span className="text-xs text-gray-500">
                      Lalapan :{" "}
                      {lalapan.map((item) => {
                        return <span>{item}, </span>;
                      })}
                    </span>
                  )}
                  {catatan && <span className="text-xs text-gray-500">Catatan : {catatan}</span> }
                </div>
              </div>
            </div>
            {/* jumlah */}
            <div className="py-5 px-2 flex justify-between items-center ">
              <span className="font-bold">Jumlah : </span>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-2 rounded-l-md bg-slate-300">
                  -
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-2 rounded-r-md bg-slate-300">
                  +
                </button>
              </div>
            </div>

            {/* subtotal */}
            <div className="py-5 px-2 flex items-center justify-between  border-t border-gray-300">
              <span className="font-bold">Subtotal :</span>
              <span className="font-semibold text-emerald-500">
                {formatRupiah(subtotal)}
              </span>
            </div>
            <button
              onClick={() => tambahProduk(produk)}
              className="bg-emerald-600 text-white px-5 py-2 rounded-lg">
              Tambah Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
