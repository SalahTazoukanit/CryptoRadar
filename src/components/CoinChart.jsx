import React from "react";
import { useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

function CoinChart({ coin, coinName }) {
  const period = ["0", "1y", "1m", "7d", "1d", "1h"];
  const volume = [
    "0",
    coin.quotes.USD.percent_change_1y,
    coin.quotes.USD.percent_change_30d,
    coin.quotes.USD.percent_change_7d,
    coin.quotes.USD.percent_change_24h,
    coin.quotes.USD.percent_change_1h,
  ];

  // Combiner period et value dans un seul tableau d'objets
  const data = period.map((p, index) => ({
    period: p,
    volume: volume[index],
  }));

  useEffect(() => {}, [coin]);

  return (
    <>
      <div className="bg-gray p-5 rounded-xl w-full">
        <div className="mb-5">
          <h1 className="mb-5">{coinName}</h1>{" "}
          <span>Changements des quotes en %</span>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 0,
                right: 100,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1 " />
              <XAxis dataKey="period" />
              {/* Utiliser la clé 'period' pour l'axe des X */}
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="volume" // Utiliser la clé 'value' pour l'axe des Y
                stroke="gray"
                fill="yellow"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default CoinChart;
