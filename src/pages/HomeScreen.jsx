import React from "react";
import Device from "./main/device/device";
import Ports from "./main/ports/ports";
import Parameters from "./main/parameters/parameters";
import FooterBanner from "../components/footerBanner/footerBanner";
import FiveReasons from "./main/fiveReasons/fiveReasons";
import FirstScreen from "../components/mianScreenBG/firstScreen"

export default function HomeScreen(){
    return(
        <>
        <div className="homePage">
        <FirstScreen />
            <FiveReasons />
            <Device />
            <Ports />
            <Parameters />
            <FooterBanner />
        </div>
        </>
    )
}