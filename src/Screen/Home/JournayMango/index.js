import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./index.css";
import treeImg from "../../../Image/mangoman1.png";

const JournayMaongo = () => {
  return (
    <div style={{ backgroundColor: "rgb(54,54,54)" }} id="journay_Mango">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "30px",
          paddingBottom: "30px",
          fontFamily: "Times New Roman, Times, serif",
        }}
        id="jounnay_text"
        className="animate__animated animate__backInDown  animate__delay-1s"
      >
        Journey Of Mango Man Intelligent
      </h1>
      <Container maxWidth="md">
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-1(Birth) </b>
            </h2>
            <ul>
              <li>Marketing for brand awarness</li>
              <li>Website Launch</li>
              <li>5000+ Telegram community</li>
              <li>Meme Creation </li>
              <li>Birth of mangoman </li>
            </ul>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={11.5}
            style={{ textAlign: "center" }}
          >
            <ArrowDownwardIcon style={{ color: "rgb(255,138,0)" }} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={5} md={5} sm={5}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
          <Grid ite lg={1} md={1} sm={1}></Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={12}
            className="phase_birth"
            id="journaey_phase"
          >
            <h2>
              <b>Phase-2(Seedlling) </b>
            </h2>
            <ul>
              <li>Influencer Promotion</li>
              <li>Coin Gecko Listing </li>
              <li>25000+ Telegram community</li>
              <li>25,000 Token Holders</li>
              <li>Third-Party Auditing</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <ArrowDownwardIcon
              id="journay_arrow1"
              style={{ color: "rgb(255,138,0)" }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-3(Seedlling) </b>
            </h2>
            <ul>
              <li>100,000 Token Holders</li>
              <li>1,00,000 Telegram members </li>
              <li>Air drop facility</li>
              <li>Influencer promotion </li>
              <li>community meme</li>
            </ul>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={11.5}
            style={{ textAlign: "center" }}
          >
            <ArrowDownwardIcon style={{ color: "rgb(255,138,0)" }} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={5} md={5} sm={5}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
          <Grid ite lg={1} md={1} sm={1}></Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            className="phase_birth"
            id="journaey_phase"
          >
            <h2>
              <b>Phase-4(Birth) </b>
            </h2>
            <ul>
              <li>1,50,000 Token Holders</li>
              <li>Immence marketing </li>
              <li>More meme</li>
              <li>Website Augmentation </li>
              <li>Fruit wallet tracker</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <ArrowDownwardIcon
              id="journay_arrow1"
              style={{ color: "rgb(255,138,0)" }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12} className="phase_birth">
            <h2>
              <b>Phase-5(Seedlling) </b>
            </h2>
            <ul>
              <li>3,00,000 Token Holders</li>
              <li>Mangoman swap unleashed </li>
              <li>NFT collection</li>
              <li>NFT marketing</li>
            </ul>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} className="tree_img">
            <img src={treeImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JournayMaongo;
