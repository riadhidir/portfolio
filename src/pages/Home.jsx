import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import img from "../assets/home.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row flex-nowrap  bg-[#222222]   h-[75.8vh] px-10 gap-4">
        <div className=" aspect-square  scale-75  rounded-full bg-[#444444] shadow-2xl group hover:scale-[85%] transition ease-in-out delay-150 duration-700 ">
          <img
            className=" h-full rounded-full scale-[94%] object-cover "
            src={img}
            alt=""
          />
        </div>
        <div className="basis-3/5   flex flex-col justify-center gap-3   ">
          <p className="text-[rgba(255,255,255,0.5)]">
            full stack developer
          </p>
          <p className="text-white text-6xl font-bold">Riad idir</p>
          <p className="text-white">
            Do you need to create a website? When creating the
            website, I provide overall design from design to
            implementation. I also make sure that everything runs
            exactly as it should. If my portofilo experience would
            interest you very much - write me!
          </p>
          <div className="flex gap-2 ">
            <Link
              className="text-white border-2 hover:border-blue-600  border-white  rounded-full shadow-2xl px-5 py-1 bg-[#333333]"
              to="/"
            >
              portfolio
            </Link>
            <Link
              className="text-white border-2 hover:border-blue-600  border-white  rounded-full shadow-2xl px-5 py-1 bg-[#333333] "
              to="/"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* <div className=''>
      <img src={img} alt="" srcset="" />
    </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
