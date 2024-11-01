import React, { useState } from "react";
import PercentChange from "./PercentChange";
import CoinChart from "./CoinChart";

const CoinLine = ({ coin, index }) => {
  const [displayCoinChart, setDisplayCoinChart] = useState(false);

  const mrkCapFormatter = (num) => {
    let newNum = String(num).split("").slice(0, -6);
    return Number(newNum.join(""));
  };

  return (
    <>
      <div className="flex items-center gap-20">
        <div className="flex md:w-80 py-2 text-sm">
          <div className="flex w-50 text-left gap-2">
            <p>{index + 1}</p>
            <div
              onClick={() => setDisplayCoinChart(!displayCoinChart)}
              className="infos hover:cursor-pointer"
            >
              <img className="w-8" src="/chart.png" alt="chart icon" />
              <div className="absolute w-1/2 z-10 opacity-90" id={coin.name}>
                {displayCoinChart && (
                  <CoinChart
                    coin={coin}
                    coinId={coin.id}
                    coinName={coin.name}
                  />
                )}
              </div>
            </div>
            <h4 className="text-sm">{coin.name.slice(0, 8)}</h4>
            <span> - {coin.symbol}</span>
            <div className="flex justify-center items-center border rounded-full border-yellow1">
              <a
                target="blank"
                href={`https://coinpaprika.com/it/coin/${coin.id}`}
              >
                <img className="w-4" src="/public/i.png" alt="info symbol" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 w-full">
          <p>{coin.quotes.USD.price.toFixed()} $</p>
          <p className="opacity-60">
            {mrkCapFormatter(coin.quotes.USD.market_cap).toLocaleString()} M$
          </p>
          <p className="opacity-60">{coin.quotes.USD.volume_24h.toFixed()} $</p>
          <p className=" hidden md:block">
            <PercentChange percent={coin.quotes.USD.percent_change_1h} />
          </p>
          <p className="">
            <PercentChange percent={coin.quotes.USD.percent_change_24h} />
          </p>
          <p className=" hidden md:block">
            <PercentChange percent={coin.quotes.USD.percent_change_7d} />
          </p>
          <p className="">
            <PercentChange percent={coin.quotes.USD.percent_change_30d} />
          </p>
          <p className=" hidden md:block">
            <PercentChange percent={coin.quotes.USD.percent_change_1y} />
          </p>
          {coin.quotes.USD.percent_from_price_ath > -3 ? (
            <p> ATH !</p>
          ) : (
            <PercentChange percent={coin.quotes.USD.percent_from_price_ath} />
          )}
        </div>
      </div>
    </>
  );
};

export default CoinLine;
