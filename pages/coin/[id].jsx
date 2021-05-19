import { Card, CardContent, Grid } from "@material-ui/core";
import Layout from "../../components/Layout/Layout";

const SingleCoin = ({ coin }) => {
  console.log(coin);
  return (
    <Layout>
      <Grid
        item
        container
        style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}
      >
        <Card
          style={{
            minWidth: "320px",
            background: "#ffffff40",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={coin.image.large}
              alt={coin.name}
              style={{ width: "150px" }}
            />
          </CardContent>
          <CardContent>
            <h1>{coin.name}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <p>{coin.symbol}</p>
              <p style={{ marginLeft: "6px" }}>
                - {coin.market_data.current_price.usd}
              </p>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Layout>
  );
};

export default SingleCoin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
