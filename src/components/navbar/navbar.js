import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../modalContext"

import "./navbar.css"

import myVideoLogo from '../images/myvideoLogo.webp'
import callIcon from "../images/call_icon.webp"
import menuBars from "../images/menu.webp"
import menuX from "../images/closeX.webp"


export default function Navbar(){

    const [modalClass, setModalClass] = useContext(ModalContext)
    const [hamburgerMenu, setHamburgerMenu] = useState(menuBars)
    const [burgerBoolean, setBurgerBoolean] = useState(false)
    const [dashboard, setDashboard] = useState('dashboard_closed')

    useEffect(()=>{



    },[burgerBoolean])

    const burgerHandler = ()=> {
        if(!burgerBoolean){
            setBurgerBoolean(true)
            setHamburgerMenu(menuX)
            setDashboard('dashboard_opened')
        }else{
            setBurgerBoolean(false)
            setHamburgerMenu(menuBars)
            setDashboard('dashboard_closed')
        }
    }

    const handleButtonClick = () => {
        window.location.href = `tel:0322490049`;
    };

    const modalHandler = ()=> {
        setModalClass('channels_modal_opened')
    }

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

                        <Link onClick={modalHandler}><p>არხები</p></Link>

                        <Link><p>გადახდის მეთოდები</p></Link>

                        <Link><p>კითხვები</p></Link>

                        <Link><p>აპლიკაცია</p></Link>

                        <div className="call_block" onClick={handleButtonClick}>
                            <img src={callIcon} alt="call icon" className="call_icon" />
                            <p>322 490049</p>
                        </div>
                    </div>
                </div>

                <img src={hamburgerMenu} alt="burger menu icon" className="hamburgerMenu" onClick={burgerHandler}/>
            </div>

            <div className={dashboard}>
            <div className="menu_responsive">
                        <Link><p>მთავარი</p></Link>

                        <Link><p>მოწყობილობა</p></Link>

                        <Link onClick={modalHandler}><p>არხები</p></Link>

                        <Link><p>გადახდის მეთოდები</p></Link>

                        <Link><p>კითხვები</p></Link>

                        <Link><p>აპლიკაცია</p></Link>

                        <div className="call_block" onClick={handleButtonClick}>
                            <img src={callIcon} alt="call icon" className="call_icon" />
                            <p>322 490049</p>
                        </div>
                    </div>
            </div>
        </>
    )
}