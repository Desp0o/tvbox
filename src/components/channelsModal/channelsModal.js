import "./channelsModal.css"
import { ModalContext } from "../modalContext"
import { useContext, useEffect } from "react"

import close from "../images/close.webp"
import ChannelsModalComponent from "./channelsModalComponent"

export default function ChannelsModal(){

        const {modalClass, setModalClass} = useContext(ModalContext)

        const modalHandler = ()=> {
            setModalClass('channels_modal_closed')
        }

    return(
        <>
            <div className={modalClass}>
                <img src={close} alt="close icon" className="close_icon" onClick={modalHandler}/>

            <div  className="subscribe_prices">
                <ChannelsModalComponent 
                    channelNumber="100"
                    channelName="ქართული არხი"
                    subscribePrice="0"
                />

                <ChannelsModalComponent 
                    channelNumber="105"
                    channelName="ქართული არხი"
                    subscribePrice="3"
                />

                <ChannelsModalComponent 
                    channelNumber="235"
                    channelName="ქართული არხი"
                    subscribePrice="20"
                />
            </div>

            </div>
        </>
    )
}