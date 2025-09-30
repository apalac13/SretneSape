export default function Filter({
  filterStatus,
  postaviStatus,
  filterVrsta,
  postaviVrstu,
}) {
  const statusOptions = [
    { label: "Svi", value: "" },
    { label: "Udomljen", value: "udomljen" },
    { label: "Nije udomljen", value: "nije udomljen" },
  ];

  const vrstaOptions = [
    { label: "Sve", value: "" },
    { label: "Macka", value: "macka" },
    { label: "Pas", value: "pas" },
  ];

  const baseClass =
    "w-5 h-5 bg-gray-white-70 border border-solid border-black-45 rounded-full checked:bg-black-45 mr-2 cursor-pointer";

  return (
    <div className="flex flex-col gap-[60px] mt-16">
      {/* Status filter */}
      <div className="flex flex-col gap-10">
        <p className="text-black-46 text-3xl font-pt-serif">Filter:</p>
        <div className="flex flex-col items-start gap-4 font-pt-sans-narrow text-2xl">
          {statusOptions.map((opt) => (
            <label key={opt.value}>
              <input
                type="radio"
                name="status"
                value={opt.value}
                checked={filterStatus === opt.value}
                onChange={(e) => postaviStatus(e.target.value)}
                className={baseClass}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Vrsta filter */}
      <div className="flex flex-col gap-10">
        <p className="text-black-46 text-3xl font-pt-serif">Vrsta:</p>
        <div className="flex flex-col items-start gap-4 font-pt-sans-narrow text-2xl">
          {vrstaOptions.map((opt) => (
            <label key={opt.value}>
              <input
                type="radio"
                name="vrsta"
                value={opt.value}
                checked={filterVrsta === opt.value}
                onChange={(e) => postaviVrstu(e.target.value)}
                className={baseClass}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
