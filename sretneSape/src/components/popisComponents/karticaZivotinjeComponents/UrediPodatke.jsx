export default function UrediPodatke({ zivotinja, promjenaPodatka }) {
  const inputFields = [
    { label: "Ime", name: "ime", value: zivotinja.ime },
    { label: "Vrsta", name: "vrsta", value: zivotinja.vrsta },
    { label: "Status", name: "status", value: zivotinja.status },
  ];

  return (
    <div className="flex flex-col gap-3 items-start w-[400px]">
      {inputFields.map((field, index) => (
        <label key={index} htmlFor="" className="flex gap-2 items-end">
          <p className="font-pt-serif text-4xl">{field.label}:</p>
          <input
            type="text"
            name={field.name}
            value={field.value}
            onChange={promjenaPodatka}
            className="font-pt-sans-narrow text-3xl"
          />
        </label>
      ))}
      <label htmlFor="" className="flex flex-col gap-3">
        <p className="self-start font-pt-serif text-4xl">Opis:</p>
        <textarea
          type="text"
          name="opis"
          value={zivotinja.opis}
          onChange={promjenaPodatka}
          cols={60}
          className="text-start font-pt-sans-narrow"
        />
      </label>
    </div>
  );
}
