import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../modalContext"
import NavLink from "./NavLink"
import "./navbar.css"

import myVideoLogo from '../images/myvideoLogo.webp'
import callIcon from "../images/call_icon.webp"
import menuBars from "../images/menu.webp"
import menuX from "../images/closeX.webp"
import NavbarDashboard from "./navbarDashboard"


export default function Navbar(){

    const [navClass, setNavClass] = useState('navbar')
    const {setModalClass} = useContext(ModalContext)
    const [hamburgerMenu, setHamburgerMenu] = useState(menuBars)
    const [burgerBoolean, setBurgerBoolean] = useState(false)
    const [dashboard, setDashboard] = useState('dashboard_closed')
    const [scrollY, setScrollY] = useState(window.scrollY)

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);

        document.body.style.overflow='auto'

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []); 
    
      useEffect(() => {
        if(scrollY > 20){
            setNavClass('navbar navbarBG')
        }else{
            setNavClass('navbar')
        }
      }, [scrollY]);

    const burgerHandler = ()=> {
        if(!burgerBoolean){
            setBurgerBoolean(true)
            setHamburgerMenu(menuX)
            setDashboard('dashboard_opened')
            document.body.style.overflow='hidden'
        }else{
            setBurgerBoolean(false)
            setHamburgerMenu(menuBars)
            setDashboard('dashboard_closed')
            document.body.style.overflow='auto'
        }

        
    }

    const closeDashboard = ()=> {
        setDashboard('dashboard_closed')
        setBurgerBoolean(false)
        setHamburgerMenu(menuBars)
        document.body.style.overflow='auto'
    }

    const handleButtonClick = () => {
        window.location.href = `tel:0322490049`;
    };

    const modalHandler = ()=> {
        document.body.style.overflow='hidden'
        setModalClass('channels_modal_opened')
    }

    const closeModal = ()=>{
        document.body.style.overflow='auto'
        setModalClass('channels_modal_closed')
    }

    return(
        <>
            <div className={navClass}>
                <div className="navbar_inner">
                    <div className="navbar_Left">
                        <Link to="/">
                            <img src={myVideoLogo} alt="myvideo Logo" className="myvideo_logo" loading="lazy"/>
                        </Link>
                    </div>

                    <div className="navbar_Right">
                        <div className="navbar_menu">
                            <NavLink linkName="მთავარი" link='/' cliclAction={closeModal} />
                            <NavLink linkName="მოწყობილობა" link='/pages/devicePage' cliclAction={closeModal} />
                            <NavLink linkName="არხები" cliclAction={modalHandler} />
                            <NavLink linkName="გადახდის მეთოდები" link='/pages/payment' cliclAction={closeModal} />
                            <NavLink linkName="კითხვები" link='/pages/faq' cliclAction={closeModal} />
                            <NavLink linkName="აპლიკაცია" link='/pages/application' cliclAction={closeModal} />

                            <div className="call_block" onClick={handleButtonClick}>
                                <img src={callIcon} alt="call icon" className="call_icon" loading="lazy"/>
                                <p>322 490049</p>
                            </div>
                        </div>
                    </div>

                    <img src={hamburgerMenu} alt="burger menu icon" className="hamburgerMenu" loading="lazy" onClick={() => {burgerHandler(); closeModal();}}/>
                </div>
            </div>

            <NavbarDashboard
                dashboard={dashboard}
                closeDashboard={closeDashboard}
                handleButtonClick={handleButtonClick}
                myVideoLogo={myVideoLogo}
                callIcon={callIcon}
                modalHandler={modalHandler}
            />
        </>
    )
}