import { useState, useEffect } from "react";
import { ResponsiveContainer, Treemap } from "recharts";

const Chart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]); // graphique qu'on va passer au TreeMap

  useEffect(() => {
    let chartData = []; // tableaux provisoire

    if (coinsData.length > 0) {
      for (let i = 0; i < 5; i++) {
        chartData.push({
          name:
            coinsData[i].symbol +
            " " +
            coinsData[i].quotes.USD.market_cap_change_24h +
            "%",
          size: coinsData[i].quotes.USD.market_cap,
          fill: null,
        });
      }
    }
    console.log(chartData);
    setDataArray(chartData);
  }, [coinsData]);

  return (
    <>
      <div className="md:w-1/2 hidden md:block  bg-[#1E2329] border-[#F0B90B] rounded-xl">
        <ResponsiveContainer className="rounded-xl overflow-hidden">
          <Treemap
            data={dataArray}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#F0B90B"
            fill="#1E2329"
          />
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Chart;
