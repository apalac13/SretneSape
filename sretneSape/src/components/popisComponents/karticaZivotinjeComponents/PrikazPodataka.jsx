function PrikazPodataka({ zivotinja }) {
  const dataItems = [
    { label: "Ime", value: zivotinja.ime },
    { label: "Vrsta", value: zivotinja.vrsta },
    { label: "Status", value: zivotinja.status },
    { label: "Opis", value: zivotinja.opis },
  ];

  return (
    <div className="flex flex-col gap-3 items-start w-[400px] max-sm:w-full">
      {dataItems.map((item, index) =>
        item.label !== "Opis" ? (
          <div key={index} className="flex gap-2 items-end">
            <p className="font-pt-serif text-3xl">{item.label}: </p>
            <p className="font-pt-sans-narrow text-2xl">{item.value}</p>
          </div>
        ) : (
          <div key={index} className="flex flex-col gap-3 ">
            <p className="self-start font-pt-serif text-3xl">{item.label}: </p>
            <p className=" text-start font-pt-sans-narrow ">{item.value} </p>
          </div>
        )
      )}
    </div>
  );
}

export default PrikazPodataka;
