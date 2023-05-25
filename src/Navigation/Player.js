import React from "react";
import '../css/Player.css'
import Body from "../Screens/Body";
import Sidebar from "../Screens/Sidebar";
import Footer from "../Screens/Footer";

const Player = ({ }) => {

    return (
        <>
            <div className="player">
                <div className="player_body">
                    <Sidebar />
                    <Body />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Player