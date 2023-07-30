import React from "react";

import FirstScreen from "../../components/mianScreenBG/firstScreen";
import FiveReasons from "./fiveReasons/fiveReasons";
import Device from "./device/device";

export default function Main(){
    return(
        <>
        <FirstScreen />
        <FiveReasons />
        <Device />
        </>
    )
}