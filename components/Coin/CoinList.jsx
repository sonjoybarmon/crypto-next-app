import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
const CoinList = ({
  key,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Container>
      {/* <Link href="/coin/[id]" as={`/coin/${id}`}> */}
      <Card style={{ width: "100%", margin: "7px 0", padding: "15px" }}>
        <Grid container item spacing={1}>
          <Grid item md={2} sm={2} xl={6}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                component="img"
                image={image}
                alt={name}
                style={{ width: "30px", height: "auto" }}
              />
              <Typography variant="h6" style={{ marginLeft: "6px" }}>
                {name}
              </Typography>
            </div>
          </Grid>
          <Grid item md={1} sm={1} xl={6}>
            <Typography variant="h6">{symbol}</Typography>
          </Grid>
          <Grid item md={2} sm={2} xl={6}>
            <Typography variant="h6">${price}</Typography>
          </Grid>
          <Grid item md={3} sm={3} xl={6}>
            <Typography variant="h6">${volume}</Typography>
          </Grid>
          <Grid item md={1} sm={1} xl={6}>
            {priceChange < 0 ? (
              <Typography
                variant="h6"
                style={{
                  color: "#f00606",
                }}
              >
                {priceChange.toFixed(2)}%
              </Typography>
            ) : (
              <Typography
                variant="h6"
                style={{
                  color: " #13c783",
                }}
              >
                {priceChange.toFixed(2)}%
              </Typography>
            )}
          </Grid>
          <Grid item md={3} sm={3} xl={6}>
            <Typography variant="h6">Mkt Cap: ${marketcap}</Typography>
          </Grid>
        </Grid>
      </Card>

      {/* </Link> */}
    </Container>
  );
};

export default CoinList;
