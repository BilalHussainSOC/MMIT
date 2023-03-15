import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import growImg from "../../../Image/growth.png";
import "./index.css";

const Benefits = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(54,54,54)",
        paddingBottom: "30px",
        borderBottom: "1px solid white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "30px",
          paddingBottom: "30px",
          fontFamily: "Times New Roman, Times, serif",
        }}
        id="our_benefits"
      >
        Our Benefits
      </h1>

      <Container>
        <Grid container className="benefits_main">
          <Grid
            item
            lg={5}
            md={5}
            sm={5}
            xs={12}
            className="benefits_text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>Auto Burn Mechanism</h3>
            <p>
              The "auto burn mechanism" permanently removes a percentage of
              tokens with each on-chain transaction, using a portion of
              redistributed tokens to add to a "dead wallet" that holds over 41%
              of the supply.
            </p>
          </Grid>

          <Grid
            item
            lg={5}
            md={5}
            sm={5}
            xs={12}
            className="benefits_text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>Auto Reflection</h3>
            <p>
              Our meme token is unique in that we don't rely on auto
              reflections, which means we don't take extra taxes for our own
              gain. Instead, we are entirely community-driven and prioritize
              transparency.
            </p>
          </Grid>

          <Grid
            item
            lg={5}
            md={5}
            sm={5}
            xs={12}
            className="benefits_text"
            // data-aos="fade-up"
            // data-aos-duration="3000"
          >
            <h3>Locked Liquidity</h3>
            <p>
              Most of the initial Mango Man tokens are either locked or burned,
              which means they are highly secure.
            </p>
          </Grid>

          <Grid
            item
            lg={5}
            md={5}
            sm={5}
            xs={12}
            className="benefits_text"
            // data-aos="fade-up"
            // data-aos-duration="6000"
          >
            <h3>Charity Wallet</h3>
            <p>
              We have set up a specific charity wallet to receive redistributed
              tokens, which are then used to support our charity partners.
            </p>
          </Grid>
        </Grid>

        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={5} md={6} sm={8} xs={12} className="grow_img">
            <img src={growImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Benefits;
