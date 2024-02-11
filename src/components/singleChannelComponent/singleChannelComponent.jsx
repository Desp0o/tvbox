import React from 'react'
import "./singleChannelComponent.css"

export default function SingleChannelComponent({isFaded, isAbroad, icon, name, tv, desktop, mobile}) {
  return (
    <div className="item_outter">
        <div className={isFaded === true || isAbroad === false ? 'channel_list_item_faded' : 'channel_list_item'}>
            {/* არხის სახელი და იქონი */}
            <div className="channel_item_name_cover">
                <img loading="lazy" src={icon} alt='' className="channelLogo"/>
                <p>{name}</p>
            </div>

            {/* თავსებადობა */}
            <div className="channel_item_devices">
                <div className="device_little_block">
                    {tv ? <img loading="lazy" src={tv} alt="tv" className="tv_icon_class" /> : <></>}
                </div>

                <div className="device_little_block">
                    {desktop ? <img loading="lazy" src={desktop} alt="desktop" className="desktop_icon_class" /> : <></>}
                </div>

                <div className="device_little_block">
                    {mobile ? <img loading="lazy" src={mobile} alt="mobile" className="mobile_icon_class" /> : <></>}
                </div>
            </div>
        </div>
    </div>
  )
}