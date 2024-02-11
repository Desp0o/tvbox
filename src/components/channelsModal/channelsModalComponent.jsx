import "./channelsModal.css"

export default function ChannelsModalComponent(props){
    return(
        <>
            
                            <div className="price_block">
                                <div className="price_block_upper">
                                    <p>{props.title}</p>
                                </div>

                                <div className="price_block_below">

                                    <div className="channels_and_title">
                                        <p className="channel_number">{props.channelNumber}</p>
                                        <div className="channels_description">
                                            <p className="channels_name">{props.channelName}</p>
                                            <p className="channels_function">გადახვევა-დაპაუზებით</p>
                                        </div>
                                    </div>

                                    <div className="channels_price_perMonth">
                                        <div className="price_inGel">
                                            <p className="gel">{props.subscribePrice}</p>
                                            <p className="gel_symbol">₾</p>
                                        </div>

                                        <div className="per_month">
                                            <p>თვეში</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
        
        </>
    )
}