import axios from "axios";
import { useState, useEffect } from "react";
import PercentChange from "./PercentChange";
import Filters from "./Filters";

const LeftHeader = () => {
  const [headerData, setHeaderData] = useState([]);

  const getData = () => {
    axios.get(`https://api.coingecko.com/api/v3/global`).then((response) => {
      setHeaderData(response.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify gap-10 md:gap-20 md:w-1/2">
        <div className="flex flex-col gap-5">
          <div className="container flex flex-col justify-center items-center gap-5  rounded-md p-5 bg-[#1E2329]">
            <div>
              <img className="w-48" src="/crypto-radar.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Crypto-Monnaies :{" "}
                {headerData.active_cryptocurrencies &&
                  headerData.active_cryptocurrencies.toLocaleString()}
              </p>
              <p>Marché : {headerData.markets && headerData.markets}</p>
            </div>
          </div>
          <div className="container flex flex-col justify-center items-center gap-5 rounded-md p-5 bg-[#1E2329]">
            <div className="flex flex-col gap-2">
              <p>
                Global Market Cap :
                <PercentChange
                  percent={headerData.market_cap_change_percentage_24h_usd}
                />
              </p>
              <p>
                BTC dominance :{" "}
                {headerData.market_cap_percentage &&
                  headerData.market_cap_percentage.btc.toFixed(2) + "%"}
              </p>
              <p>
                ETH dominance :{" "}
                {headerData.market_cap_percentage &&
                  headerData.market_cap_percentage.eth.toFixed(2) + "%"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-5">
          <h1 className="text-yellow1">
            SUIVEZ LES TENDANCES <br />
            ET MAÎTRISEZ LE MARCHÉ.
          </h1>
          <div>
            <Filters />
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftHeader;
