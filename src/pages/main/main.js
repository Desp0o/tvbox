import React from "react";

import FirstScreen from "../../components/mianScreenBG/firstScreen";
import FiveReasons from "./fiveReasons/fiveReasons";
import Device from "./device/device";
import Ports from "./ports/ports";
import Parameters from "./parameters/parameters";
import FooterBanner from "../../components/footerBanner/footerBanner";

export default function Main(){
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