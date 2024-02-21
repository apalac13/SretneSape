function UrediPodatke({ zivotinja, promjenaPodatka }) {
  return (
    <div className="flex flex-col gap-3 items-start w-[400px]">
      <label htmlFor="" className="flex gap-2 items-end">
        <p className="font-pt-serif text-4xl">Ime:</p>
        <input
          type="text"
          name="ime"
          value={zivotinja.ime}
          onChange={promjenaPodatka}
          className=" font-pt-sans-narrow text-3xl "
        />
      </label>
      <label htmlFor="" className="flex gap-2 items-end">
        <p className="font-pt-serif text-4xl">Vrsta:</p>
        <input
          type="text"
          name="vrsta"
          value={zivotinja.vrsta}
          onChange={promjenaPodatka}
          className=" font-pt-sans-narrow text-3xl "
        />
      </label>
      <label htmlFor="" className="flex gap-2 items-end">
        <p className="font-pt-serif text-4xl">Status:</p>
        <input
          type="text"
          name="status"
          value={zivotinja.status}
          onChange={promjenaPodatka}
          className=" font-pt-sans-narrow text-3xl "
        />
      </label>
      <label htmlFor="" className="flex flex-col gap-3 ">
        <p className="self-start font-pt-serif text-4xl">Opis:</p>
        <textarea
          type="text"
          name="opis"
          value={zivotinja.opis}
          onChange={promjenaPodatka}
          cols={60}
          className=" text-start font-pt-sans-narrow "
        />
      </label>
    </div>
  );
}

export default UrediPodatke;
