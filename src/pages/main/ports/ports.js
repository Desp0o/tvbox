import "./ports.css"

import mowyobiloba from '../../../components/images/mowyobiloba.webp'

export default function Ports() {
    return(
        <>
            <div className="ports">
                <p className="device_title">პორტები</p>

                <div className="mowyobiloba">
                    <img src={mowyobiloba} alt="hardware ports" className="mowyobiloba_image"/>
                </div>
            </div>
        </>
    )
}