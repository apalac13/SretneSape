function Filter(props) {
  return (
    <div className="flex flex-col gap-[60px] mt-16">
      <div className="flex flex-col gap-10">
        <p className="text-black-46  text-3xl font-pt-serif ">Filter:</p>
        <div className="flex flex-col items-start gap-4 font-pt-sans-narrow text-2xl">
          <label htmlFor="">
            <input
              type="radio"
              name="status"
              value="svi"
              checked={props.filterStatus === "svi"}
              onChange={(e) => props.postaviStatus(e.target.value)}
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
            />
            Udomljen
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="nije udomljen"
              checked={props.filterStatus === "nije udomljen"}
              onChange={(e) => props.postaviStatus(e.target.value)}
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
              value="sve"
              checked={props.filterVrsta === "sve"}
              onChange={(e) => props.postaviVrstu(e.target.value)}
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
            />
            Pas
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
