import LeftHeader from "../components/LeftHeader";
import Chart from "../components/Chart";
import axios from "axios";
import { useEffect, useState } from "react";
import Crypto from "../components/CryptoTable";

const Homepage = () => {
  const [coinsData, setCoinsData] = useState([]);

  const getAllData = () => {
    axios.get(`https://api.coinpaprika.com/v1/tickers`).then((response) => {
      setCoinsData(response.data.slice(0, 200));
    });
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10 my-5 mx-10">
        <header className="flex flex-col gap-10 md:flex-row  ">
          <LeftHeader />
          <Chart coinsData={coinsData} />
        </header>
        <Crypto coinsData={coinsData} />
      </div>
    </>
  );
};
export default Homepage;
