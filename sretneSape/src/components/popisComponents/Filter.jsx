import ellipse from "../../assets/ellipse_radio.svg";

function Filter(props) {
  return (
    <div className="flex flex-col  gap-[60px] mt-16">
      <div className="flex flex-col gap-10">
        <p className="text-black-46  text-3xl font-pt-serif ">Filter:</p>
        <div className="flex flex-col items-start gap-4 font-pt-sans-narrow text-2xl">
          <label htmlFor="">
            <input
              type="radio"
              name="status"
              value=""
              checked={props.filterStatus === ""}
              onChange={(e) => props.postaviStatus(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer "
            />
            Svi
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="status"
              value="udomljen"
              checked={props.filterStatus === "udomljen"}
              onChange={(e) => props.postaviStatus(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer"
            />
            Udomljen
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="nije udomljen"
              checked={props.filterStatus === "nije udomljen"}
              onChange={(e) => props.postaviStatus(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer"
            />
            Nije udomljen
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-black-46 text-3xl font-pt-serif ">Vrsta:</p>
        <div className="flex flex-col items-start gap-4 font-pt-sans-narrow text-2xl">
          <label htmlFor="">
            <input
              type="radio"
              name="vrsta"
              value=""
              checked={props.filterVrsta === ""}
              onChange={(e) => props.postaviVrstu(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer"
            />
            Sve
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="vrsta"
              value="macka"
              checked={props.filterVrsta === "macka"}
              onChange={(e) => props.postaviVrstu(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer"
            />
            Macka
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="vrsta"
              value="pas"
              checked={props.filterVrsta === "pas"}
              onChange={(e) => props.postaviVrstu(e.target.value)}
              className=" w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer"
            />
            Pas
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
