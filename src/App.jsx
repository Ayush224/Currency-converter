import {  useState } from "react";
import Currency from "./hooks/Currency";
import Input from "./components/Input";
import { ArrowDownUp } from "lucide-react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const data = Currency(from);
  const options = Object.keys(data);

  const convert = () => {
    setConverted(amount * data[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted(amount);
    setAmount(converted);
  };

  return (
    <>
      <div className="h-screen text-4xl text-green-500 text-center bg-[url(/src/assets/currency.avif)] bg-cover bg-center uppercase">
        Currency converter
        <div className="flex flex-col flex-wrap ml-5 justify-center h-full max-w-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="flex flex-col gap-5 mb-15 relative"
          >
            <Input
              label="from"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              options={options}
              currency={from}
              onCurChange={(currency) => setFrom(currency)}
            />
            <button
              className="absolute right-1/2 top-20 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
              onClick={swap}
            >
              <ArrowDownUp />
            </button>
            <Input
              label="to"
              amount={converted}
              onAmountChange={(amount) => setConverted(amount)}
              options={options}
              currency={to}
              onCurChange={(currency) => setTo(currency)}
            />
            <button
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-xl cursor-poi  nter"
              type="submit"
            >
              Convert From {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
