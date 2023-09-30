import React from 'react'
import NavLink from './NavLink';

export default function NavbarDashboard({closeDashboard, dashboard, handleButtonClick, myVideoLogo, callIcon, modalHandler }) {
  return (
    <div className={dashboard}>
        <div className="menu_responsive">
                
                <NavLink link='/' cliclAction={closeDashboard} linkName='მთავარი' />
                <NavLink link='/pages/devicePage' cliclAction={closeDashboard} linkName='მოწყობილობა' />
                <NavLink cliclAction={()=>{closeDashboard(); modalHandler()}} linkName='არხები' />
                <NavLink link='/pages/payment' cliclAction={closeDashboard} linkName='გადახდის მეთოდები' />
                <NavLink link='/pages/faq' cliclAction={closeDashboard} linkName='კითხვები' />
                <NavLink link='/pages/application' cliclAction={closeDashboard} linkName='აპლიკაცია' />

                <div className="call_block" onClick={handleButtonClick}>
                    <img src={callIcon} alt="call icon" className="call_icon" loading="lazy"/>
                    <p>322 490049</p>
                </div>
        </div>

        <div className="dashboard_footer">
            <img src={myVideoLogo} alt="dashboard footer" className="myvideo_logo" loading="lazy"/>
            <p>MyVideo</p>
        </div>
    </div>
  )
}
