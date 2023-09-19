import { Link } from "react-router-dom"
import { useEffect } from "react"

import "./application.css"

import appLogo from '.././components/images/appsLogo.webp'
import smartPhone from '../components/images/smartphone.webp'
import smartTv from '../components/images/smarttv.webp'
import otherBox from '../components/images/otherBox.webp'

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
        link: '/pages/apps/smartTvApp'
    },

    {
        title: 'აპლიკაცია სხვა ბოქსებისთვის',
        desc: 'სხვადასხვა მწარმოებლის Android ბოქსებისთვის',
        image: `${otherBox}`,
        link: '/pages/apps/otherBoxes'
    },
]

export default function Application(){

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])

    return(
        <>
            <div className="application">

                <img src={appLogo} alt="applogo" className="appLogo" loading="lazy"/>

                <div className="appsForDevices">
                    {devicesDB.map((item,index)=>{
                        return(
                            <Link to={item.link} key={index}>
                                <div className="forDeivceItem">
                                    <p className="deviceItemTitle">{item.title}</p>
                                    <p className="deviceItemDesc">{item.desc}</p>
                                    <div className="appImageDiv">
                                        <img src={item.image} alt="appitemloog" className="appItemLogo" loading="lazy"/>
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