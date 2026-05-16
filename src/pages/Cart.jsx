import { ArrowLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import menu from "../data/menu";
import formatRupiah from "../functionHelper/formatRupiah";
import { useNavigate } from "react-router";
import Checkout from "./Checkout";

export default function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    const simpan = localStorage.getItem("checkout");
    return simpan ? JSON.parse(simpan) : [];
  });

  // hapus
  const handleRemmoveItem = (cartId) => {
    const hasil = data.filter((item) => item.cartId !== cartId);
    setData(hasil);
    localStorage.setItem("checkout", JSON.stringify(hasil));
  };

  // update qty
  const updateQty = (cartId, type) => {
    const hasil = data
      .map((item) => {
        if (item.cartId === cartId) {
          if (type === "add") {
            return { ...item, qty: item.qty + 1 };
          }
          if (type === "minus") {
            return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
          }
        }
        return item;
      })
      .filter((item) => item.qty > 0);
    setData(hasil);
    localStorage.setItem("checkout", JSON.stringify(hasil));
  };

  // subtotal sebelum ongkir
  const subtotalSebelumOngkir = data.reduce((total, item) => {
    return (total += item.harga * item.qty);
  }, 0);

  // ongkir
  const ongkir = 7000;

  // subtotal setelah ongkir
  const totalSetelahOngkir = subtotalSebelumOngkir + ongkir;

  return (
    <div className="min-h-screen ">
      <button className="bg-white p-3 rounded-lg" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      <div className="grid grid-cols-[2fr_1fr] gap-2 mt-2 ">
        <div>
          <div className=" rounded-2xl p-5  bg-slate-50 ">
            <div className="left  flex flex-col gap-3  rounded-2xl  ">
              <h1 className="text-2xl font-semibold  mb-3">Keranjang</h1>
              {data.map((item) => {
                // subtotal per produk
                const subtotal = item.qty * item.harga;
                // subtotal tanpa ongkir

                return (
                  <div className="bg-white flex justify-between rounded-2xl overflow-hidden  ">
                    {/* left */}
                    <div className="flex  gap-5 ">
                      <img
                        src={item.gambar}
                        className="h-full w-[200px] object-cover "
                        alt=""
                      />
                      <div className="p-3">
                        <h2 className="font-semibold">{item.nama}</h2>
                        {/* variant & lalapan */}
                        <div className="mt-3">
                          {/* variant */}
                          {item.variant && (
                            <div>
                              <span className="text-sm text-gray-500">
                                Level Pedas :
                              </span>
                              <div className="text-xs ml-5 ">
                                <li>{item.variant}</li>
                              </div>
                            </div>
                          )}

                          {/* lalapan */}
                          {item.lalapan.length > 0 && (
                            <div>
                              <span className="text-sm text-gray-500">
                                Lalapan :
                              </span>
                              <div className="text-xs ml-5 ">
                                <li>{item.lalapan.join(", ")}</li>
                              </div>
                            </div>
                          )}

                          {/* catatan */}
                          {item.catatan && (
                            <div>
                              <span className="text-sm text-gray-500">
                                Catatan :
                              </span>
                              <div className="text-xs ml-5 ">
                                <li>{item.catatan}</li>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex gap-10 p-5">
                      <div className="flex flex-col justify-between items-center py-5">
                        <h2 className="text-emerald-600 font-semibold text-xl">
                          {formatRupiah(subtotal)}
                        </h2>
                        <div className="flex gap-2 items-center rounded-lg overflow-hidden border border-slate-200">
                          <button
                            className="px-2 bg-slate-100"
                            onClick={() => updateQty(item.cartId, "minus")}>
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="px-2 bg-slate-100"
                            onClick={() => updateQty(item.cartId, "add")}>
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="text-gray-500"
                          onClick={() => handleRemmoveItem(item.cartId)}>
                          <Trash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" py-5 px-2 mt-5 border-t border-slate-300">
              <h2 className="text-xl font-semibold">Rekomendasi Untuk Kamu</h2>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {menu.slice(0, 5).map((item) => {
                  return (
                    <div className="rounded-lg  bg-white overflow-hidden">
                      <img
                        src={item.gambar}
                        className="w-full h-[130px] object-cover w"
                        alt=""
                      />
                      <div className="p-3  flex gap-2 flex-col">
                        <span className="text-sm font-semibold">
                          {item.nama}
                        </span>
                        <div className="flex justify-between">
                          <span className="text-sm font-semibold text-emerald-600">
                            {formatRupiah(item.harga)}
                          </span>
                          <button onClick={()=> navigate(`/menu/${item.id}`)} className="text-gray-600 bg-gray-200 px-2 rounded-lg font-bold">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* subtotal */}
          <div className="mt-5  px-5 py-3 rounded-2xl bg-slate-50">
            <h2 className=" font-semibold">Ringkasan Pesanan</h2>
            <div className="mt-1 grid grid-cols-[3fr_1fr] gap-10">
              <div className=" p-2 flex flex-col gap-1  text-sm">
                <div className="flex justify-between">
                  <label className="w-24">Subtotal :</label>
                  <span className=" text-emerald-600">
                    {formatRupiah(subtotalSebelumOngkir)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <label className="w-24">Ongkir :</label>
                  <span className=" ">{formatRupiah(ongkir)}</span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 justify-center ">
                <span className="text-xl font-semibold">Total :</span>
                <span className="text-emerald-600 font-semibold text-xl">
                  {formatRupiah(totalSetelahOngkir)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* cekout */}
        <Checkout/>
      </div>
    </div>
  );
}
