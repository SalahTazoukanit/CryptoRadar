import axios from "axios";
import { useState, useEffect } from "react";
import PercentChange from "./PercentChange";

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
      <div className="container flex flex-col justify-center items-center gap-5 md:w-1/5 my-5 mx-10 rounded-md p-5 bg-[#1E2329]">
        <div>
          <img className="w-48" src="/crypto-radar.png" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Crypto-Monnaies : <span></span>
            {headerData.active_cryptocurrencies &&
              headerData.active_cryptocurrencies.toLocaleString()}
          </p>
          <p>Marché : {headerData.markets && headerData.markets}</p>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center gap-5 md:w-1/5 my-5 mx-10 rounded-md p-5 bg-[#1E2329]">
        <div className="flex flex-col gap-2">
          <p>
            Global Market Cap :
            <PercentChange
              percent={headerData.market_cap_change_percentage_24h_usd}
            />
          </p>
        </div>
      </div>
    </>
  );
};
export default LeftHeader;
