import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./index.css";
import fruits_Image from "../../../Image/fruit_tree.png";
import awardImg from "../../../Image/mmitAward.png";
import bgImg from "../../../Image/png2.png";

const Product = () => {
  return (
    <div className="product_img" id="about_mango">
      <Grid container>
        <Grid item lg={12} xs={12} className="product_bg_img">
          <img src={bgImg} alt="" />
        </Grid>

        <Container style={{ marginTop: "-70%" }}>
          <Grid container>
            <Grid item lg={1.8} xs={2}></Grid>

            <Grid item lg={3.5} md={3.6} sm={3.6} xs={10} className="mango_img">
              <img
                src={fruits_Image}
                data-aos="zoom-in"
                style={{ transition: "3s" }}
              />
            </Grid>

            <Grid
              item
              lg={6.2}
              md={6.2}
              sm={6.2}
              xs={12}
              className="mango_text"
              style={{ marginTop: "40px" }}
            >
              <h1>
                <b>About Mango Man Intelligent</b>
              </h1>

              <p style={{ textAlign: "justify" }}>
                The ambition behind Mango Man meme coin is to be the best
                cryptocurrency for beginners. We deliver strongly on that
                promise.
              </p>
              {/* <div id="news">
                <p id="par">some news here some news here some news here </p>
              </div> */}
              {/* <p className="mango_text1">
                Praesent commodo enim arcu, at ultrices lacus volutpat eu. In in
                urna lacinia
              </p> */}

              {/* <h2>news-bar 1</h2> */}
              <div class="slideUp" id="news-bar" style={{ height: "40px" }}>
                <marquee
                  direction="left"
                  scrollamount="3"
                  behavior="scroll"
                  onmouseover="this.stop()"
                  onmouseout="this.start()"
                >
                  <a
                    href="#"
                    class="hvr-pop"
                    style={{ color: "white", marginTop: "-5px" }}
                  >
                    <b>
                      After being listed on Hotbit and PancakeSwap, we are now
                      going to be on XT.COM Deposit: Opened | Trading: 10:00 on
                      Sep. 1st, 2022 (UTC) | Withdrawal: 10:00 on Sep. 2nd, 2022
                      (UTC)
                    </b>
                  </a>
                </marquee>
              </div>
              <br />

              <p style={{ textAlign: "justify" }}>
                Being one of the most popular cryptocurrencies, Mango Man offers
                fun, smooth, secure & speedy transactions. Mango man is
                community driven and transparent. It distributes 5% of every
                transaction to EVERY Holder. Locked Liquidity and Auto Burn
                provide security for your investments. Mango Man is the ultimate
                coin for people who want a great, fun experience that doesn't
                sacrifice utility.
              </p>
              <Button
                style={{ backgroundColor: "gray", color: "white" }}
                id="btn_buy_now"
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>

          <Grid container style={{ paddingBottom: "50px" }}>
            <Grid item lg={3} md={3} sm={3}></Grid>

            <Grid
              item
              lg={7}
              md={7}
              sm={7}
              xs={7.5}
              style={{ marginTop: "30px" }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "black",
                  marginTop: "10px",
                }}
                id="winner"
              >
                With YOUR support, we won:
              </h3>
              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(224,54,0)",
                  // marginTop: "-10px",
                }}
                id="winner1"
              >
                <b>Crypto Expo Asia 2022</b>
              </h3>
            </Grid>
            <Grid
              item
              lg={1.3}
              md={1.3}
              sm={1.3}
              xs={3.8}
              className="mango_award"
            >
              <img src={awardImg} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Product;
