import { useId } from "react";

const Input = ({
  label,
  amount,
  onAmountChange,
  currency = "usd",
  onCurChange,
  options = [],
}) => {
  const id = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2 text-left">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          id={id}
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Select Currency</p>
        <select
          value={currency}
          onChange={(e) => onCurChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <img
          src={`https://flagsapi.com/${currency
            .slice(0, 2)
            .toUpperCase()}/flat/64.png`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/src/assets/globe.png";
          }}
          alt="flag"
          width={30}
        />
      </div>
    </div>
  );
};

export default Input;
