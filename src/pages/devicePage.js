import { useEffect } from "react"
import FooterBanner from "../components/footerBanner/footerBanner"
import "./devicePage.css"
import Device from "./main/device/device"
import Parameters from "./main/parameters/parameters"
import Ports from "./main/ports/ports"

export default function DevicePage(){

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])

    return(
        <>
            <div className="devicePage">
                <div className="devicePage_inner">
                    <div className="devicePage_cover" />
                    <Device class='device_first_txt_bg' />
                    <Ports />
                    <Parameters />
                    <FooterBanner />
                </div>
            </div>
        </>
    )
}