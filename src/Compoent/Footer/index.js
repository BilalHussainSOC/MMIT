import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo1 from "../../Image/logom.png";
import "./index.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "gray", marginTop: "-2px" }}>
      <Container>
        <Grid container className="footer_main">
          <Grid item lg={3.6} md={3.6} sm={3.6} xs={12} className="footer_text">
            <h3>Follow Us</h3>
            <Grid container style={{ marginTop: "30px" }}>
              <Grid item lg={1} md={1} sm={1.3} xs={1}>
                <InstagramIcon style={{ color: "black" }} />
              </Grid>
              <Grid item lg={1.3} md={1} sm={1.3} xs={1}>
                <FacebookIcon style={{ color: "black" }} />
              </Grid>
              <Grid item lg={1.3} md={1} sm={1.3} xs={1}>
                <TwitterIcon style={{ color: "black" }} />
              </Grid>
              <Grid item lg={1.3} md={1} sm={1.3} xs={1}>
                <LinkedInIcon style={{ color: "black" }} />
              </Grid>
            </Grid>

            <Grid container style={{ marginTop: "10px" }}>
              <Grid item lg={2} md={2.5} sm={2.5} xs={2} className="footer_logo">
                <img src={logo1} />
              </Grid>
              <Grid item lg={8}>
                <p
                  style={{
                    marginTop: "40px",
                    color: "black",
                    marginLeft: "-4%",
                  }}
                >
                  MangoMan Intelligent
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3.6} md={3.6} sm={3.6} xs={12} className="footer_text">
            <h3 id="footer_our_links">Our Links</h3>
            <ul style={{ marginTop: "30px" }}>
              <li>About MangoMan</li>
              <li>Buy Token</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Grid>
          <Grid item lg={3.6} md={3.6} sm={3.9} className="footer_text">
            <h3 id="footer_our_links">MangoMan Intelligent</h3>
            <p style={{ marginTop: "30px" }}>
              Mango Man Intelligent: The dcryptocurrency of fun and value! Join us now and become part of our community.
            </p>
            <p style={{ color: "black" }}>
              <b>Contact: </b>0317-453543
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
