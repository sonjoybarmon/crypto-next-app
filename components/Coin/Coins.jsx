import React from "react";
import CoinList from "./CoinList";

const Coins = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      {data?.map((el) => (
        <CoinList
          key={el.id}
          name={el.name}
          id={el.id}
          price={el.current_price}
          symbol={el.symbol}
          marketcap={el.market_cap}
          volume={el.total_volume}
          image={el.image}
          priceChange={el.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default Coins;
