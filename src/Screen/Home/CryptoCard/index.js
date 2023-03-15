import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cryptoCard from "../../../Image/crypto_card.png";
import cartImg from "../../../Image/chart.png";
import "./index.css";

const CryptoCard = () => {
  return (
    <div>
      <div className="bg_img">
        <Container>
          <Grid
            container
            style={{
              paddingTop: "30px",
              paddingBottom: "20px",
              justifyContent: "center",
            }}
          >
            <Grid item lg={4} md={4} sm={4} xs={12} className="crypto_card_img">
              <img src={cryptoCard} alt="" data-aos="zoom-in" style={{transition:'2s'}} />
            </Grid>
            <Grid item lg={1} md={1} sm={1}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={5}
              xs={12}
              className="crypto_text"
              style={{ marginTop: "-20px" }}
            >
              <h3
                style={{
                  color: "white",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  fontFamily: "Times New Roman, Times, serif",
                }}
              >
                Mangoman Crypto Card
              </h3>
              <div
                style={{
                  borderBottom: "2px solid white",
                  width: "80%",
                  marginTop: "-35px",
                }}
              ></div>
              <p>The application will allow you to:</p>
              <ul className="crypto_ui">
                <li>Buy Cryptocurrencies</li>
                <li> Send Cryptocurrencies</li>
                <li>Exchange Cryptocurrencies</li>
              </ul>
              <p><b>Available on iOS and Android</b></p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        {/* public sale */}
        <Grid container style={{ marginTop: "60px", marginBottom: "20px" }}>
          <Grid item lg={5} md={5} sm={5} xs={12} className="chart_img">
            <img src={cartImg} alt="" />
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid
            item
            lg={4.5}
            md={5}
            sm={5.8}
            xs={12}
            className="publiv_sale_card"
          >
            <Grid container className="public_sale_main" data-aos="fade-up"
     data-aos-duration="3000" >
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={8}
                className="public_sale_child"
              >
                <p style={{ fontWeight: "600" }}>
                  <b>Public Sale</b>
                </p>
                <p
                  style={{
                    marginTop: "-24px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b> Phase-1</b>
                </p>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b>Apr 13 - May 16</b>
                </p>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b>
                    Token Supply<br></br>PageMaker including vers
                  </b>
                </p>
              </Grid>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={8}
                className="public_sale_child"
              >
                <p style={{ fontWeight: "600" }}>
                  <b>Public Sale</b>
                </p>
                <p
                  style={{
                    marginTop: "-24px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b> Phase-1</b>
                </p>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b>Apr 13 - May 16</b>
                </p>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  <b>
                    Token Supply<br></br>PageMaker including vers
                  </b>
                </p>
              </Grid>
            </Grid>
            <Grid container style={{ justifyContent: "center" }}>
              <Grid
                item
                lg={10}
                xs={11.5}
                className="total_supply"
                style={{ marginTop: "20px" }}
              >
                <p style={{ paddingTop: "15px" }}>
                  Total Supply-2,100,000,000,000 MMI
                </p>
              </Grid>
            </Grid>
            <p
              style={{ textAlign: "center", color: "white", marginTop: "20px" }}
            >
              Simply dummy text of the printing
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CryptoCard;
