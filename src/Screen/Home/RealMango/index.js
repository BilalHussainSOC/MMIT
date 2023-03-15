import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import realImg1 from "../../../Image/MangoRealImgs/bgvt1.jpg";
import realImg2 from "../../../Image/MangoRealImgs/bgvt2.jpg";
import realImg3 from "../../../Image/MangoRealImgs/bgvt3.jpg";
import realImg4 from "../../../Image/MangoRealImgs/bgvt4.jpg";
import realImg5 from "../../../Image/MangoRealImgs/bgvt5.jpg";
import realImg6 from "../../../Image/MangoRealImgs/bgvt6.jpg";
import realImg7 from "../../../Image/MangoRealImgs/bgvt7.jpg";
import realImg8 from "../../../Image/MangoRealImgs/Capture 01.PNG";
import realImg9 from "../../../Image/MangoRealImgs/Capture.PNG";
import "./index.css";

const RealMango = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(54,54,54)",
        borderBottom: "1px solid white",
      }}
      id="is_Real"
    >
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} className="Real_Mango_text" data-aos="fade-up" style={{transition:'2s'}}>
            <h2>
              <b>The people behind Mango Man: </b>
            </h2>
            <h3>
            Our community and team met at Crypto Expo Dubai  <br></br>2022
              
            </h3>
          </Grid>
        </Grid>
        <Grid container className="mango_real_img">
          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg1} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg2} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg3} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg4} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg5} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg6} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg8} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={12} className="real_mango_img">
            <img src={realImg9} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RealMango;
