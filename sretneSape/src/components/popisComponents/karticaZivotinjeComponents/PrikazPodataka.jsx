function PrikazPodataka({ zivotinja }) {
  return (
    <div className="flex flex-col gap-3 items-start w-[400px]  ">
      <div className="flex gap-2 items-end">
        <p className="font-pt-serif text-4xl">Ime: </p>
        <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.ime}</p>
      </div>
      <div className="flex gap-2 items-end ">
        <p className=" font-pt-serif text-4xl">Vrsta: </p>
        <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.vrsta}</p>
      </div>
      <div className="flex gap-2 items-end">
        <p className="font-pt-serif text-4xl">Status: </p>
        <p className=" font-pt-sans-narrow text-3xl ">{zivotinja.status}</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="self-start font-pt-serif text-4xl">Opis: </p>
        <p className=" text-start font-pt-sans-narrow ">{zivotinja.opis}</p>
      </div>
    </div>
  );
}

export default PrikazPodataka;
