export default function InputField({ type, name, value, onChange }) {
  return (
    <label
      htmlFor={name}
      className="flex max-[1022px]:flex-col max-[1022px]:items-start items-end justify-between w-full text-4xl px-2"
    >
      <p className=" max-[1022px]:text-3xl ">{name}:</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="max-w-[500px] max-sm:w-full h-12  bg-gray-50 border border-black-45"
        required
      />
    </label>
  );
}
