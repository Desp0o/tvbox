import "./channelsModal.css"
import { ModalContext } from "../modalContext"
import { useContext } from "react"

import close from "../images/closeX.webp"
import ChannelsModalComponent from "./channelsModalComponent"
import { channelsDB, abroadChannelsDB } from "./channelDB"
import { useState } from "react"

export default function ChannelsModal(){

        const {modalClass, setModalClass} = useContext(ModalContext)
        const [subscribePrices, setSubscripePrices] = useState('subscribe_prices')
        const [mainPackages, setMainPackages] = useState('channelColumn')

        const modalHandler = ()=> {
            document.body.style.overflow='auto'

            setModalClass('channels_modal_closed')
                document.body.style.overflow='auto'
        }

    return(
        <>
            <div className={modalClass}>
                <img src={close} alt="close icon" className="close_icon" onClick={modalHandler}/>


            <div  className={subscribePrices}>

                
                {/* ქართული პაკეტი */}
                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber="107"
                        channelName="არხი"
                        subscribePrice="3"
                        title='ქართული არხები'
                    />

                    <div className="channel_list_inModal">

                        {channelsDB.map((channel, index) => {
                            return(
                                <div className="item_outter" key={index}>
                                    <div className={channel.isBasePack === true ? 'channel_list_item' : 'channel_list_item_faded'}>
                                        {/* არხის სახელი და იქონი */}
                                        <div className="channel_item_name_cover">
                                            <img src={channel.icon} alt='' className="channelLogo" />
                                            <p>{channel.name}</p>
                                        </div>

                                        {/* თავსებადობა */}
                                        <div className="channel_item_devices">
                                            <div className="device_little_block">
                                                {channel.tv ? <img src={channel.tv} alt="tv" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.desktop ? <img src={channel.desktop} alt="desktop" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.mobile ? <img src={channel.mobile} alt="mobile" className="" /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* ერთი ცალი არხი */}
                        
                    </div>
                </div>

                {/* ულტრა */}
                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber={channelsDB.length}
                        channelName="არხი"
                        subscribePrice="20"
                        title='ულტრა პაკეტი'
                    />

                    <div className="channel_list_inModal">

                        {channelsDB.map((channel, index) => {
                            return(
                                <div className="item_outter" key={index}>
                                    <div className='channel_list_item'>
                                        {/* არხის სახელი და იქონი */}
                                        <div className="channel_item_name_cover">
                                            <img src={channel.icon} alt='' className="channelLogo" />
                                            <p>{channel.name}</p>
                                        </div>

                                        {/* თავსებადობა */}
                                        <div className="channel_item_devices">
                                            <div className="device_little_block">
                                                {channel.tv ? <img src={channel.tv} alt="tv" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.desktop ? <img src={channel.desktop} alt="desktop" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.mobile ? <img src={channel.mobile} alt="mobile" className="" /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* ერთი ცალი არხი */}
                        
                    </div>
                </div>

                {/* უცხოეთი */}
                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber={abroadChannelsDB.length - 8}
                        channelName="არხი"
                        subscribePrice="20"
                        title="საზღვარგარეთ"
                    />

                    <div className="channel_list_inModal">

                        {abroadChannelsDB.map((channel, index) => {
                            return(
                                <div className="item_outter" key={index}>
                                    <div className={channel.isBasePack === true ? 'channel_list_item' : 'channel_list_item_faded'}>
                                        {/* არხის სახელი და იქონი */}
                                        <div className="channel_item_name_cover">
                                            <img src={channel.icon} alt='' className="channelLogo" />
                                            <p>{channel.name}</p>
                                        </div>

                                        {/* თავსებადობა */}
                                        <div className="channel_item_devices">
                                            <div className="device_little_block">
                                                {channel.tv ? <img src={channel.tv} alt="tv" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.desktop ? <img src={channel.desktop} alt="desktop" className="" /> : ''}
                                            </div>

                                            <div className="device_little_block">
                                                {channel.mobile ? <img src={channel.mobile} alt="mobile" className="" /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* ერთი ცალი არხი */}
                        
                    </div>
                </div>

            </div>

            </div>
        </>
    )
}