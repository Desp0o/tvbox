import React from 'react'
import "./singleChannelComponent.css"

export default function SingleChannelComponent({isFaded, isAbroad, icon, name, tv, desktop, mobile}) {
  return (
    <div className="item_outter">
        <div className={isFaded === true || isAbroad === false ? 'channel_list_item_faded' : 'channel_list_item'}>
            {/* არხის სახელი და იქონი */}
            <div className="channel_item_name_cover">
                <img src={icon} alt='' className="channelLogo" loading="lazy"/>
                <p>{name}</p>
            </div>

            {/* თავსებადობა */}
            <div className="channel_item_devices">
                <div className="device_little_block">
                    {tv ? <img src={tv} alt="tv" className="tv_icon_class" /> : <></>}
                </div>

                <div className="device_little_block">
                    {desktop ? <img src={desktop} alt="desktop" className="desktop_icon_class" /> : <></>}
                </div>

                <div className="device_little_block">
                    {mobile ? <img src={mobile} alt="mobile" className="mobile_icon_class" /> : <></>}
                </div>
            </div>
        </div>
    </div>
  )
}
