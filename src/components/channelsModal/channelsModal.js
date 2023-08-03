import "./channelsModal.css"
import { ModalContext } from "../modalContext"
import { useContext, useEffect } from "react"

import close from "../images/closeX.webp"
import ChannelsModalComponent from "./channelsModalComponent"
import { channelsDB } from "./channelDB"

export default function ChannelsModal(){

        const {modalClass, setModalClass} = useContext(ModalContext)

        const modalHandler = ()=> {
            setModalClass('channels_modal_closed')
                document.body.style.overflow='auto'
        }

    return(
        <>
            <div className={modalClass}>
                <img src={close} alt="close icon" className="close_icon" onClick={modalHandler}/>

            <div  className="subscribe_prices">

                <div className="channelColumn">
                    <ChannelsModalComponent 
                        channelNumber="100"
                        channelName="არხი"
                        subscribePrice="0"
                        title='საბაზისო პაკეტი'
                    />

                    <div className="channel_list_inModal">

                        {channelsDB.map((channel, index) => {
                            return(
                                <div className="item_outter" key={index}>
                                    <div className={channel.isFaded === false ? 'channel_list_item' : 'channel_list_item_faded'}>
                                        {/* არხის სახელი და იქონი */}
                                        <div className="channel_item_name_cover">
                                            <img src={channel.icon} alt='' className="channelLogo" loading="lazy" />
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
                
                <div className="channelColumn">
                    <ChannelsModalComponent 
                        channelNumber="100"
                        channelName="არხი"
                        subscribePrice="0"
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

                <div className="channelColumn">
                    <ChannelsModalComponent 
                        channelNumber="100"
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

                <div className="channelColumn">
                    <ChannelsModalComponent 
                        channelNumber="100"
                        channelName="არხი"
                        subscribePrice="20"
                        title="საზღვარგარეთ"
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

            </div>

            </div>
        </>
    )
}