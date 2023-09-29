import "./channelsModal.css"
import { ModalContext } from "../modalContext"
import { useContext, useMemo, useState } from "react"

import close from "../images/closeX.webp"
import ChannelsModalComponent from "./channelsModalComponent"
import { channelsDB, setantaDb } from "./channelDB"
import SingleChannelComponent from "../singleChannelComponent/singleChannelComponent"

export default function ChannelsModal(){
        const {modalClass, setModalClass} = useContext(ModalContext)

        const [mainPackages, setMainPackages] = useState('channelColumn')
        const [sportPackages, setSportPackages] = useState('channelColumn displayNone')
        const [packageNameClass1, setPackageNameClass1] = useState('packageNameClass_Active')
        const [packageNameClass2, setPackageNameClass2] = useState('packageNameClass_Passive')
        const [subscribePrices, setSubscribePrices] = useState('subscribe_prices')

        const mainPackageHandler = () => {
            setMainPackages('channelColumn')
            setSportPackages('channelColumn displayNone')
            setPackageNameClass1('packageNameClass_Active')
            setPackageNameClass2('packageNameClass_Passive')
            setSubscribePrices('subscribe_prices')
        }

        const sportPackageHandler = () => {
            setMainPackages('channelColumn displayNone')
            setSportPackages('channelColumn')
            setPackageNameClass1('packageNameClass_Passive')
            setPackageNameClass2('packageNameClass_Active')
            setSubscribePrices('subscribe_prices subscribe_prices_flex_start')
        }

        const modalHandler = ()=> {
            document.body.style.overflow='auto'
            setModalClass('channels_modal_closed')
                document.body.style.overflow='auto'
        }

        const mappedChannelsDB = useMemo(()=>{
            return channelsDB.map((channel, index) => {
                return(
                    <SingleChannelComponent 
                        key={index}
                        isFaded={channel.isFaded}
                        icon={channel.icon}
                        name={channel.name}
                        tv={channel.tv}
                        desktop={channel.desktop}
                        mobile={channel.mobile}
                    />
            )})
        },[])

        const mappedChannelsUltra = useMemo(()=>{
            return channelsDB.map((channel, index) => {
                return(
                    <SingleChannelComponent 
                        key={index}
                        icon={channel.icon}
                        name={channel.name}
                        tv={channel.tv}
                        desktop={channel.desktop}
                        mobile={channel.mobile}
                    />
            )})
        },[])

        const setantaSports = useMemo(()=>{
            return setantaDb.map((channel, index) => {
                return(
                    <SingleChannelComponent 
                        key={index}
                        icon={channel.icon}
                        name={channel.name}
                        tv={channel.tv}
                        desktop={channel.desktop}
                        mobile={channel.mobile}
                    />
            )})
        },[])

        const abroadChannels = useMemo(()=>{
            return channelsDB.slice(0, 108).map((channel, index) => {
                return(
                    <SingleChannelComponent 
                        key={index}
                        icon={channel.icon}
                        isAbroad={channel.isAbroad}
                        name={channel.name}
                        tv={channel.tv}
                        desktop={channel.desktop}
                        mobile={channel.mobile}
                    />
            )})
        },[])


    return(
        <>
            <div className={modalClass}>
                <img src={close} alt="close icon" className="close_icon" onClick={modalHandler}/>

               <div className="packages">
                    <p className={packageNameClass1} onClick={mainPackageHandler}>ძირითადი</p>
                    <p className={packageNameClass2} onClick={sportPackageHandler}>სპორტული</p>
               </div>   

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
                            {mappedChannelsDB}
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
                            {mappedChannelsUltra}
                        </div>
                    </div>

                    {/* უცხოეთი */}
                    <div className={mainPackages}>
                        <ChannelsModalComponent 
                            channelNumber={abroadChannels.length - 8}
                            channelName="არხი"
                            subscribePrice="20"
                            title="საზღვარგარეთ"
                        />

                        <div className="channel_list_inModal">
                            {abroadChannels}
                        </div>
                    </div>

                    {/* სეტანტა */}
                    <div className={sportPackages}>
                        <ChannelsModalComponent 
                            channelNumber='3'
                            channelName="არხი"
                            subscribePrice="5"
                            title="სეტანტა სპორტი"
                        />

                        <div className="channel_list_inModal">
                            {setantaSports}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
