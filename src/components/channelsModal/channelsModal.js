import "./channelsModal.css"
import { ModalContext } from "../modalContext"
import { useContext } from "react"

import close from "../images/closeX.webp"
import ChannelsModalComponent from "./channelsModalComponent"
import { channelsDB, abroadChannelsDB, silkDb } from "./channelDB"
import { useState } from "react"

export default function ChannelsModal(){

        const {modalClass, setModalClass} = useContext(ModalContext)
        const [subscribePrices, setSubscripePrices] = useState('subscribe_prices')
        const [packageName1, setPackageName1] = useState('packageName1')
        const [packageName2, setPackageName2] = useState('packageName2 inactive')
        const [mainPackages, setMainPackages] = useState('channelColumn')
        const [addon, setAddon] = useState('displayNone')

        const package1Handler = ()=> {
            setPackageName1('packageName1')
            setPackageName2('packageName2 inactive') 
            setMainPackages('channelColumn')   
            setAddon('displayNone')
            setSubscripePrices('subscribe_prices')
        }

        const package2Handler = ()=> {
            setPackageName1('packageName1 inactive')
            setPackageName2('packageName2')    
            setMainPackages('displayNone')
            setAddon('channelColumn addonColumn')
            setSubscripePrices('subscribe_prices subscribe_prices_addon')
        }

        const modalHandler = ()=> {
            setModalClass('channels_modal_closed')
                document.body.style.overflow='auto'
        }

    return(
        <>
            <div className={modalClass}>
                <img src={close} alt="close icon" className="close_icon" onClick={modalHandler}/>

                <div className="choosePackage">
                    <p className={packageName1} onClick={package1Handler}>ძირითადი</p>
                    <p className={packageName2} onClick={package2Handler}>დამატებითი</p>
                </div>

            <div  className={subscribePrices}>

                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber="74"
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
                
                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber="79"
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

                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber="161"
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

                <div className={mainPackages}>
                    <ChannelsModalComponent 
                        channelNumber="66"
                        channelName="არხი"
                        subscribePrice="20"
                        title="საზღვარგარეთ"
                    />

                    <div className="channel_list_inModal">

                        {abroadChannelsDB.map((channel, index) => {
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

                <div className={addon}>
                    <ChannelsModalComponent 
                        channelNumber="100"
                        channelName="არხი"
                        subscribePrice="5"
                        title="საზღვარგარეთ"
                    />

                    <div className="channel_list_inModal">

                        {silkDb.map((channel, index) => {
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