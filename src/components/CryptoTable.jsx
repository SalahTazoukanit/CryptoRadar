import { useState } from "react";
import CoinLine from "./CoinLine";

const CryptoTable = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(50);

  const [orderBy, setOrderBy] = useState("");

  const listHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "7j",
    "1m",
    "1y",
    "ATH",
  ];

  return (
    <>
      <div className="flex md:gap-24 table-header">
        <div className="flex">
          <span className="w-20">
            Top{" "}
            <input
              className="bg-transparent w-10"
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            className="w-40"
            type="range"
            name=""
            value={rangeNumber}
            min="1"
            max="200"
            onChange={(e) => setRangeNumber(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-9 w-full">
          {listHeader.map((element) => (
            <div key={element} className="flex ">
              <input
                className="hidden peer"
                type="radio"
                id={element}
                name="listHeader"
                defaultChecked={
                  element === orderBy || element === orderBy + "reverse"
                    ? true
                    : false
                }
              />
              <label
                className="peer-checked:text-green1 hover:cursor-pointer hover:opacity-50 px-2 rounded-md "
                htmlFor={element}
                onClick={() => {
                  if (orderBy === element) {
                    setOrderBy(element + "reverse");
                  } else {
                    setOrderBy(element);
                  }
                }}
              >
                {element}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {coinsData
          .slice(0, rangeNumber)
          .sort((a, b) => {
            switch (orderBy) {
              case "Prix":
                return b.quotes.USD.price - a.quotes.USD.price;
              case "Prixreverse":
                return a.quotes.USD.price - b.quotes.USD.price;
              case "MarketCap":
                return b.quotes.USD.market_cap - a.quotes.USD.market_cap;
              case "MarketCapreverse":
                return a.quotes.USD.market_cap - b.quotes.USD.market_cap;
              case "Volume":
                return b.quotes.USD.volume_24h - a.quotes.USD.volume_24h;
              case "Volumereverse":
                return a.quotes.USD.volume_24h - b.quotes.USD.volume_24h;
              case "1h":
                return (
                  b.quotes.USD.percent_change_1h -
                  a.quotes.USD.percent_change_1h
                );
              case "1hreverse":
                return (
                  a.quotes.USD.percent_change_1h -
                  b.quotes.USD.percent_change_1h
                );
              case "1j":
                return (
                  b.quotes.USD.percent_change_24h -
                  a.quotes.USD.percent_change_24h
                );
              case "1jreverse":
                return (
                  a.quotes.USD.percent_change_24h -
                  b.quotes.USD.percent_change_24h
                );
              case "7j":
                return (
                  b.quotes.USD.percent_change_7d -
                  a.quotes.USD.percent_change_7d
                );
              case "7jreverse":
                return (
                  a.quotes.USD.percent_change_7d -
                  b.quotes.USD.percent_change_7d
                );
              case "1m":
                return (
                  b.quotes.USD.percent_change_30d -
                  a.quotes.USD.percent_change_30d
                );
              case "1mreverse":
                return (
                  a.quotes.USD.percent_change_30d -
                  b.quotes.USD.percent_change_30d
                );
              case "1y":
                return (
                  b.quotes.USD.percent_change_1y -
                  a.quotes.USD.percent_change_1y
                );
              case "1yreverse":
                return (
                  a.quotes.USD.percent_change_1y -
                  b.quotes.USD.percent_change_1y
                );
            }
          })
          .map((coin, index) => (
            <CoinLine key={coin.id} coin={coin} index={index} />
          ))}
      </div>
    </>
  );
};
export default CryptoTable;
