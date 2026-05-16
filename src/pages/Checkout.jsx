import formatRupiah from "../functionHelper/formatRupiah";

export default function Checkout() {
  const data = JSON.parse(localStorage.getItem("checkout"));

  return (
    <div className="bg-slate-50 rounded-2xl px-5 py-5 h-fit">
      <h2 className="text-xl font-semibold">Checkout</h2>

      <div className="flex flex-col gap-5 mt-5">

        {/* alamat pengirirman */}
        <div>
          <div className="flex justify-between items-center text-sm">
            <h2 className="">Alamat pengiriman</h2>
            <button className="p-2 border border-emerald-600 rounded-lg text-xs text-emerald-600">
              Ubah Alamat
            </button>
          </div>
          <div className="bg-white p-10 mt-2 rounded-lg "></div>
        </div>

        {/* waktu pengiriman */}
        <div>
          <div className="flex justify-between items-center text-sm">
            <h2 className="">Waktu pengiriman</h2>
            <button className="p-2 border border-emerald-600 rounded-lg text-xs text-emerald-600">
              Ubah waktu
            </button>
          </div>
          <div className="bg-white p-10 mt-2 rounded-lg "></div>
        </div>

        {/* rincian pesanan */}
        <div>
          <div className="flex justify-between items-center text-sm py-2">
            <h2 className="">Rincian pesanan</h2>
          </div>
          <div className="  mt-2 rounded-lg flex flex-col gap-3 ">
            {data.map((item) => {
              return (
                <div className="bg-white rounded-lg flex items-center justify-between gap-2 p-2">
                  <div className="flex gap-2 min-h-[50px]">
                    <img
                      src={item.gambar}
                      className="h-full rounded-lg object-cover w-[100px]"
                      alt=""
                    />
                    <div className="py-2 flex flex-col gap-1 ">
                      <span className="text-sm font-bold">{item.nama}</span>

                      <div className="text-gray-700 flex flex-col">
                        {item.variant && (
                          <span className="text-xs">• {item.variant}</span>
                        )}
                        {item.lalapan?.length > 0 && (
                          <span className="text-xs">
                            • {item.lalapan.join(", ")}
                          </span>
                        )}
                        {item.catatan && (
                          <span className="text-xs">• {item.catatan}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold text-emerald-600 text-sm">
                    {formatRupiah(item.harga)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* metode pembayaran */}
        <div>
          <div className="flex justify-between items-center text-sm">
            <h2 className="">Metode Pembayaran</h2>
          </div>
          <div className="bg-white p-10 mt-2 rounded-lg "></div>
        </div>
        {/* tombol */}
        <button className="py-2 rounded-lg text-white bg-emerald-600">Checkout</button>
      </div>
    </div>
  );
}
