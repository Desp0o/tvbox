import React from "react";

import FirstScreen from "../../components/mianScreenBG/firstScreen";
import FiveReasons from "./fiveReasons/fiveReasons";

export default function Main(){
    return(
        <>
        <FirstScreen />
        <FiveReasons />
        <div className="black"></div>
        </>
    )
}