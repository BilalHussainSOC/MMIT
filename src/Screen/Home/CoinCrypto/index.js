import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./index.css";
import logo1 from "../../../Image/logom.png";
import bgImg from "../../../Image/bg1.png";
// import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
// import coin from "../../Image/coin.png"

const CoinCrypto = () => {
  return (
    <div className="header_bg" style={{ marginTop: "-16%" }}>
      {/* <Grid container> */}
      {/* <Grid item lg={1} className="bg1_img">
          <img src={bgImg} alt="" />
        </Grid>  */}

      <Container style={{ paddingTop: "25%" }}>
        <Grid container>
          <Grid item lg={0.3}></Grid>

          <Grid item lg={4} md={4} sm={4} xs={3} >
            <img src={logo1} alt="" id="coin_img"  data-aos="zoom-in-down" style={{transition:'2s'}}/>
          </Grid>

          <Grid item lg={1} md={1} sm={2}></Grid>

          <Grid
            item
            lg={4.5}
            md={6}
            sm={6}
            xs={9}
            id="coin_text"
            style={{ marginTop: "13%", textAlign: "center" }}
          >
            <h1 style={{ color: "rgb(134,134,134)" }} id="coin_crypto_h1">
              <b id="responsive_header_text" >
              Hassle-free cryptocurrency for Beginners & veterans alike! <br></br>Safe & fun crypto investment for everyone.
                {/* A coin for crypto<br></br>Begginer!<br></br>For all those who
                <br></br>Wanna start<br></br>Aresh! */}
              </b>
            </h1>
            <p style={{ color: "white", textAlign: "justify",fontSize:'20px' }}>
            Enjoy the lowest fees, and the best field farming in the DeFi space
            </p>

            <Grid
              container
              style={{ backgroundColor: "gray", borderRadius: "8px" }}
            >
              <Grid item lg={8} xs={8}>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    paddingTop: "10px",
                    cursor: "pointer",
                    width:'100%',
                    paddingLeft:'20px'
                  }}
                />
              </Grid>

              <Grid item lg={1.8}></Grid>

              <Grid item lg={1} xs={4}>
                <Button
                  style={{
                    backgroundColor: "rgb(255,138,0)",
                    color: "white",
                    margin: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <b>Add</b>
                </Button>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item lg={1} style={{ marginBottom: "30px" }}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* </Grid> */}
    </div>
  );
};
export default CoinCrypto;
