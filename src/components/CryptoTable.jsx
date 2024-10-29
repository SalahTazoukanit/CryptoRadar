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
      {/* <div className="flex flex-col"> */}
      <div className="flex md:gap-24">
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
        {coinsData.slice(0, rangeNumber).map((coin, index) => (
          <div key={coin}>
            <CoinLine coin={coin} index={index} />
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};
export default CryptoTable;
