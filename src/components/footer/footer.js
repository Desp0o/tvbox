import "./footer.css"

import imedi from "../images/channels/imedi.webp"
import rustavi from "../images/channels/rustavi2.webp"
import setanta from "../images/channels/setanta.webp"
import maestro from "../images/channels/maestro.webp"
import gds from "../images/channels/gds.webp"
import tvpirveli from "../images/channels/tvpirveli.webp"

import { ModalContext } from "../modalContext"
import { useContext } from "react"

export default function Footer(){

    const channelArray = [imedi, rustavi, setanta, maestro, gds, tvpirveli]

    const {setModalClass} = useContext(ModalContext)

    const modalHandler = ()=> {
        setModalClass('channels_modal_opened')
            document.body.style.overflow='hidden'
    }


    return(
        <>
            <div className="footer" onClick={modalHandler}>
                <div className="channel_list">
                    <p>არხების სია</p>
                </div>

                <div className="channel_logos">
                    {channelArray.map( (channel, index) => {
                        return(
                            <img className="footer_channel_icons" src={channel} key={index} alt="channel footer logo" loading="lazy"/>
                        )
                    } )}
                </div>
            </div>

            
        </>
    )
}