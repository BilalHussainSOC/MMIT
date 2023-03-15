import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import logo from "../../Image/logom.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./index.css";
const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Grid container>
          <Grid item lg={2.5}  className="header_top"></Grid>

          <Grid item lg={9} md={9} xs={11} style={{ marginTop: "50px" }}>
            <Grid container className="header_top_main">
              <Grid item lg={1.5} xs={2} className="Header_Top_img">
                <img src={logo} alt="" />
              </Grid>

              <Grid item lg={8} xs={9.5} className="header_top_h1">
                <h1
                  style={{
                    borderBottom: "3px solid black",
                    width: "65%",
                    paddingTop: "30px",
                  }}
                  id="header_m_h1"
                >
                  <b>Mango Man Intelligent</b>
                </h1>
              </Grid>
            </Grid>
          </Grid>
          <Container maxWidth="md" style={{ marginTop: "10px" }}>
            <nav
              class="navbar navbar-expand-lg navbar-light"
              style={{ borderRadius: "20px", backgroundColor: "rgb(55,55,54)" }}
            >
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    class="navbar-toggler-icon"
                    style={{ backgroundColor: "lightgray" }}
                  ></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a
                        class="nav-link"
                        aria-current="page"
                        href="#"
                        style={{ color: "white" }}
                      >
                        <b>HOME</b>
                      </a>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a class="nav-link" href="#" style={{ color: "white" }}>
                        <Link
                          to="#about_mango"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <b>STACK</b>
                        </Link>
                      </a>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a class="nav-link" href="#" style={{ color: "white" }}>
                        <Link
                          to="#is_Real"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <b>TOKENOMICS</b>
                        </Link>
                      </a>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a class="nav-link" href="#" style={{ color: "white" }}>
                        <Link
                          to="#our_benefits"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <b>WHITEPAPER</b>
                        </Link>
                      </a>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a class="nav-link" href="#" style={{ color: "white" }}>
                        <Link
                          to="#journay_Mango"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <b>ROAD MAP</b>
                        </Link>
                      </a>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "35px" }}>
                      <a class="nav-link" href="#" style={{ color: "white" }}>
                        <Link
                          to="#we_Avialable"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <b>BUY MMIT</b>
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Container>
        </Grid>
      </BrowserRouter>
    </div>
  );
};

export default Header;
