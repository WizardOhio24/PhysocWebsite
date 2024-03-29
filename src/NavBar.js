import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./App.css";

/*<Typography variant="h6" className="NotDisplayOnSmallScreens">
  <a href="#Sponsors" className="Nav-button">
    Sponsors
</a>
</Typography>*/

class NavBar extends Component {
  render() {
    return (
      <div
        style={{ width: "100%", background: "transparent", boxShadow: "none", "position": "fixed", "margin": "0px 0px" }}
        color="#00ff00"
      >
        <Toolbar className="Nav-bar" style={{margin: "0"}}>
          <Typography variant="h6" style={{ color: "#bf616a" }}>
            <a href="#TopPage" className="Nav-button" style={{ color: "#bf616a" }}>
              Physoc
              </a>
          </Typography>
          <div style={{ flexGrow: "1" }} />

          <Typography variant="h6" className="NotDisplayOnSmallScreens">
            <a href="#AboutUs" className="Nav-button">
              About
          </a>
          </Typography>

          <Typography variant="h6" className="NotDisplayOnSmallScreens">
            <a href="#UpcomingEvents" className="Nav-button">
              Events
          </a>
          </Typography>
          <Typography variant="h6" className="NotDisplayOnSmallScreens">
            <a href="#ContactUs" className="Nav-button">
              Contact Us
          </a>
          </Typography>

          <Typography variant="h6">
            <a href="http://www.iop.org/" style={{ "color": "#bf616a" }} className="Nav-button">
            IOP
          </a>
          </Typography>

          <Typography variant="h6">
            <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }} className="Nav-button">
              Facebook
          </a>
          </Typography>
        </Toolbar>
      </div >
    );
  }
}

export default NavBar;
/*
          <Typography variant="h6" className="NotDisplayOnSmallScreens">
            <a href="#OurCommittee" className="Nav-button">
              Committee
          </a>
          </Typography>
*/