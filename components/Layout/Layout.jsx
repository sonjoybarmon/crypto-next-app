import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const Layout = ({ children }) => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <Link
          href="/"
          style={{
            cursor: "pointer",
          }}
        >
          <Typography variant="h3" color="initial">
            CRYPTO-BTC
          </Typography>
        </Link>
      </nav>
      <div>{children}</div>
      <footer>
        <Typography
          variant="subtitle1"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          Copyright 2021 All Rights Reserved By sonjoybarmon19@gmail.com
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
