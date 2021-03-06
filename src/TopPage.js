
import React, { Component } from "react";
import "./App.css";

class TopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quarkColors: ["BlueQuark3", "GreenQuark3", "RedQuark3"],
            quarkElements: []
        }
        for (var i = 0; i < 12; i++) {
            this.state.quarkElements.push(
                <img
                    className="Quark"
                    src={"images/" + this.state.quarkColors[Math.round(Math.random() * 2)] + ".svg"}
                    alt=""
                    style={{
                        width: `calc(5% + ${(Math.random()) * 3}%)`,
                        top: `calc(10% + ${(Math.random()) * 80}%)`,
                        left: `calc(10% + ${(Math.random()) * 80}%)`,
                        animationDelay: `calc(-${Math.random() * 120}s)`
                    }}
                />)
        }
    }

    render() {
        return (
            <header className="App-header" id="TopPage">

                {this.state.quarkElements}

                <img src="images/RedQuark3.svg" alt="Physoc Logo" width="20%" style={{ position: "relative", zIndex: "2", marginTop: "80px" }} />

                <img
                    src="images/NEONPhysics3.svg"
                    alt="Physoc"
                    style={{
                        marginBottom: "1%",
                        width: "50%",
                        zIndex: "2"
                    }}
                />

                <img
                    src="images/NEONTGUPS2.svg"
                    alt="The Glasgow University Physics Society"
                    className="neon"
                    style={{ marginBottom: "0px", "width": "80%", zIndex: "2" }}
                />
            </header>
        )
    }
}

export default TopPage;

//<img src="images/PhysocNewLogoWhiteNoText2.svg" alt="Physoc Logo" width="35%" style={{ position: "relative", zIndex: "2" }} />
/*

        return (
            <header className="App-header" id="TopPage">

                {this.state.quarkElements}

                <img src="images/RedQuark3.svg" alt="Physoc Logo" width="20%" style={{ position: "relative", zIndex: "2", marginTop: "50px" }} />

                <img
                    src="images/NEONPhysics3.svg"
                    alt="Physoc"
                    style={{
                        marginBottom: "3%",
                        width: "50%",
                        zIndex: "2"
                    }}
                />

                <img
                    src="images/NEONTGUPS2.svg"
                    alt="The Glasgow University Physics Society"
                    className="neon"
                    style={{ marginBottom: "0px", "width": "80%", zIndex: "2" }}
                />
            </header>
        )
*/