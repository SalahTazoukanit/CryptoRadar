import React from "react";

const CoinLine = ({ coin, index }) => {
  const mrkCapFormatter = (num) => {
    let newNum = String(num).split("").slice(0, -6);
    return Number(newNum.join(""));
  };
  return (
    <>
      <div className="flex items-center gap-20">
        <div className="flex md:w-80 py-2 border-b border-gray text-sm">
          <div className="flex w-50 text-left gap-2">
            <p>{index + 1}</p>
            <div className="infos hover:opacity-50 hover:cursor-pointer">
              <img className="w-8" src="/public/chart.png" alt="chart icon" />
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
        <div className="grid grid-cols-9 w-full border-b border-gray">
          <p>{coin.quotes.USD.price.toFixed(2)}</p>
          <p>
            {mrkCapFormatter(coin.quotes.USD.market_cap).toLocaleString()} M$
          </p>
          <p>{coin.quotes.USD.volume_24h.toLocaleString()}</p>
          <p className=" hidden md:block">
            {coin.quotes.USD.percent_change_1h.toFixed(2)}%
          </p>
          <p className="">{coin.quotes.USD.percent_change_24h.toFixed(2)}%</p>
          <p className=" hidden md:block">
            {coin.quotes.USD.percent_change_7d.toFixed(2)}%
          </p>
          <p className="">{coin.quotes.USD.percent_change_30d.toFixed(2)}%</p>
          <p className=" hidden md:block">
            {coin.quotes.USD.percent_change_1y.toFixed(2)}%
          </p>
          <p className="">{coin.quotes.USD.percent_change_1y.toFixed(2)}%</p>
        </div>
      </div>
    </>
  );
};

export default CoinLine;
