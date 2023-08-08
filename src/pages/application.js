import { Link } from "react-router-dom"

import "./application.css"

import appLogo from '.././components/images/appsLogo.png'
import smartPhone from '../components/images/smartphone.png'
import smartTv from '../components/images/smarttv.png'
import otherBox from '../components/images/otherBox.png'

const devicesDB = [
    {
        title: 'აპლიკაცია SMART ტელეფონებისთვის',
        desc: 'მოწყობილობა ნებისმიერი ტელეფონებისთვის',
        image: `${smartPhone}`,
        link: '/pages/apps/smartphones'
    },

    {
        title: 'აპლიკაცია SMART ტელევიზორებისთვის',
        desc: 'Sony, Samsung, Hisense და სხვა smart ტელევიზორებისთვის',
        image: `${smartTv}`,
        link: '/'
    },

    {
        title: 'აპლიკაცია სხვა ბოქსებისთვის',
        desc: 'სხვადასხვა მწარმოებლის Android ბოქსებისთვის',
        image: `${otherBox}`,
        link: '/'
    },
]

export default function Application(){
    return(
        <>
            <div className="application">

                <img src={appLogo} alt="applogo" className="appLogo" />

                <div className="appsForDevices">
                    {devicesDB.map((item,index)=>{
                        return(
                            <Link to={item.link} key={index}>
                                <div className="forDeivceItem">
                                    <p className="deviceItemTitle">{item.title}</p>
                                    <p className="deviceItemDesc">{item.desc}</p>
                                    <div className="appImageDiv">
                                        <img src={item.image} alt="appitemloog" className="appItemLogo" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </>
    )
}