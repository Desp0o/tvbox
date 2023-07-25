import { Link } from "react-router-dom"

import "./navbar.css"

import myVideoLogo from '../images/myvideoLogo.webp'
import callIcon from "../images/call_icon.webp"


export default function Navbar(){

    const handleButtonClick = () => {
        window.location.href = `tel:0322490049`;
    };

    return(
        <>
            <div className="navbar">
                <div className="navbar_Left">
                    <img src={myVideoLogo} alt="myvideo Logo" className="myvideo_logo"/>
                </div>

                <div className="navbar_Right">
                    <div className="navbar_menu">
                        <Link><p>მთავარი</p></Link>

                        <Link><p>მოწყობილობა</p></Link>

                        <Link><p>არხები</p></Link>

                        <Link><p>გადახდის მეთოდები</p></Link>

                        <Link><p>კითხვები</p></Link>

                        <Link><p>აპლიკაცია</p></Link>

                        <div className="call_block" onClick={handleButtonClick}>
                            <img src={callIcon} alt="call icon" className="call_icon" />
                            <p>322 490049</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}