import Navigacija from "./Navigacija";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Unos(props) {
  return (
    <div>
      <Navigacija item={"unos"} />
      <div className="mt-36 mb-56 ">
        <h1 className="text-black-46 text-5xl font-pt-sans-narrow mb-20  ">
          Unos nove životinje
        </h1>
        <div className="flex justify-center">
          <form action="" className=" w-[800px]">
            <div className="flex  justify-between font-pt-sans-narrow mb-10">
              <div className="flex flex-col  gap-8">
                <div htmlFor="" className="flex flex-col gap-1 items-start">
                  <label htmlFor="ime" className=" text-3xl">
                    Ime:
                  </label>
                  <input
                    type="text"
                    id="ime"
                    className="w-[400px] h-[40px] bg-gray-50 border border-black-45 rounded"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start ">
                  <p className="text-3xl">Vrsta:</p>
                  <div className="flex gap-3 text-2xl ">
                    <label htmlFor="pas">
                      <input
                        type="radio"
                        id="pas"
                        className=" w-6 h-6 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer "
                      />
                      Pas
                    </label>
                    <label htmlFor="macka">
                      <input
                        type="radio"
                        id="macka"
                        className=" w-6 h-6 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer "
                      />
                      Mačka
                    </label>
                    <label htmlFor="ostalo">
                      <input
                        type="radio"
                        id="ostalo"
                        className=" w-6 h-6 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer "
                      />
                      Ostalo
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="godine" className="text-3xl">
                    Godine:
                  </label>
                  <input
                    type="text"
                    id="godine"
                    className="w-[400px] h-[40px] bg-gray-50 border border-black-45 rounded"
                  />
                </div>
                <div className="flex flex-col items-start ">
                  <label htmlFor="opis" className="text-3xl">
                    Opis:
                  </label>
                  <textarea
                    name="opis"
                    id="opis"
                    cols="40"
                    rows="9"
                    className="text-2xl  bg-gray-50 border border-black-45 rounded"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-12 text-3xl">
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="w-6 h-6  " />
                  <label htmlFor="">Čipiran</label>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p>Pregled:</p>
                  <input
                    type="date"
                    className="text-2xl bg-gray-50 border border-black-45 rounded"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-[50px] border border-red-51 bg-red-51 text-gray-61 font-pt-sans-narrow text-xl"
            >
              SPREMI
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Unos;
