import { useEffect, useState } from "react";

const Currency = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const value = fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
};

export default Currency;
