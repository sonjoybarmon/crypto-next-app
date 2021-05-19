import { Container, Grid } from "@material-ui/core";
import Head from "next/head";
import { useState } from "react";
import Coins from "../components/Coin/Coins";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ data }) {
  const [search, setSearch] = useState("");
  const allCoins = data?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    e.preventDefault();
  };

  return (
    <Layout>
      <Head>
        <title>Crypto -BTC App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Container>
            <Grid
              container
              spacing={1}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "30px 0",
              }}
            >
              <SearchBar
                type="text"
                placeholder="Search"
                onChange={handleChange}
              />
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Coins data={data} /> */}
              <Coins data={allCoins} />
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
