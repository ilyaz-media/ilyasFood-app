import { FaClock, FaLocationArrow, FaLocationCrosshairs, FaLocationDot, FaRegClock } from "react-icons/fa6";

export default function Info() {
  return (
    <div className=" m-3 lg:m-10  ">
        <div className="grid lg:grid-cols-2 gap-5">
      <div className="p-10 rounded-lg bg-white rounded-lg shadow-lg">
        <h2 className="font-semibold flex gap-5">
          {" "}
          <FaRegClock size={30} />
          Jam operasional
        </h2>
        <div className="mt-5 flex flex-col gap-2 p-2">
          <p>setiap hari</p>
          <h1 className="text-3xl font-bold">09.00-22.00 WIB</h1>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-5">
        <h2 className="font-semibold flex gap-3 items-center">
          <FaLocationCrosshairs size={30} /> Lokasi kami
        </h2>
          <p className=" text-sm mt-2">Sukamurni, Cilawu, Garut Regency, West Java 44181</p>
        </div>

        <div className="">
          <div className="h-[120px] bg-cyan-500 mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31657.034433571884!2d107.91763139999999!3d-7.339373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1778222275807!5m2!1sen!2sid"
              width="100%"
              height="100%"
          
            />
          </div>
        </div>
      </div>
        </div>
        <div className="bg-white p-5 mt-5 rounded-lg grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
            <div className="pr-10 ">
                <h2 className="font-semibold text-2xl">Lapar? <span className="text-emerald-600">Pesan Sekarang !</span></h2>
                <p className=" mt-2 text-sm lg:text-base">Nikmati berbagai hidangan favorit anda di rumah dengan mudah</p>
            </div>
            <div className="p-1 flex justify-center items-center">
                <button className="text-white bg-emerald-600 px-10 py-3 rounded-lg shadow-lg">Pesan sekarang</button>
            </div>
        </div>
    </div>
  );
}
