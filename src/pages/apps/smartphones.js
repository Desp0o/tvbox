
import { useRef, useState, useEffect } from "react"
import "./smartphones.css"
import FooterBanner from '../../components/footerBanner/footerBanner'

import android from '../../components/images/android.png'
import apple from '../../components/images/ios_icon.png'
import windows from '../../components/images/Windows_icon.png'
import androidPhone from '../../components/images/android_phone.png'
import iphone from '../../components/images/iphone.png'
import windowsPhone from '../../components/images/windows.png'
import playStore from '../../components/images/playstore_icon.png'
import appStore from '../../components/images/appstore.png'
import windowsStore from '../../components/images/windows_phone_store.png'

const iosDB = [

    {
        index: 0,
        title:'MYVIDEO TV აპლიკაცია ANDROID-ის ტელეფონებისათვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი ტელეფონის მენიუდან შედით Play Store-ში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააინსტალირეთ',
        image: `${androidPhone}`,
        store: `${playStore}`,
        link1: 'https://play.google.com/store/apps/details?id=ge.myvideo.hlsstremreader',
        link2: '',
        download: 'გადმოწერე'
    },

    {
        index: 1,
        title:'MYVIDEO TV აპლიკაცია APPLE-ის ტელეფონებისათვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი ტელეფონის მენიუდან შედით App Store-ში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააინსტალირეთ',
        image: `${iphone}`,
        store: `${appStore}`,
        link1: 'https://apps.apple.com/us/app/myvideo-mobile-tv/id551311534',
        link2: 'https://apps.apple.com/us/app/myvideo-mobile-tv-hd/id557524762',
        download: 'გადმოწერე iPhone-ისთვის'
    },

    {
        index: 2,
        title:'MYVIDEO TV აპლიკაცია WINDOWS-ის ტელეფონებისათვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი ტელეფონის მენიუდან შედით Phone Store-ში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააინსტალირეთ',
        image: `${windowsPhone}`,
        store: `${windowsStore}`,
        link1: 'https://apps.microsoft.com/store/detail/myvideoge/9NBLGGH4P1WG?hl=en-us&gl=us',
        link2: '',
        download: 'გადმოწერე'
    },
]

export default function SmartPhonesApp(){

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])

    const appleRef = useRef()

    const scrollToRef1 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block active_block')
        setBlock2('ios_block')
        setBlock3('ios_block')
        setNum(0)
    };

    const scrollToRef2 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block')
        setBlock2('ios_block active_block')
        setBlock3('ios_block')
        setNum(1)
    };

    const scrollToRef3 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block active_block')
        setNum(2)
    };

    const [block1, setBlock1] = useState('ios_block active_block')
    const [block2, setBlock2] = useState('ios_block')
    const [block3, setBlock3] = useState('ios_block')
    const [num, setNum] = useState(0)

    const isoDbItem = iosDB[num]

    const block1Handler = ()=> {
        setBlock1('ios_block active_block')
        setBlock2('ios_block')
        setBlock3('ios_block')
        setNum(0)
    }

    const block2Handler = ()=> {
        setBlock1('ios_block')
        setBlock2('ios_block active_block')
        setBlock3('ios_block')
        setNum(1)
    }

    const block3Handler = ()=> {
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block active_block')
        setNum(2)
    }

    return(
        <>
            <div className="smartphones">

                <div className="firstSection_smartPhones">
                    
                    <p className="smartPhone_Title">აპლიკაცია SMART ტელეფონებისათვის</p>


                    <div className="iosType">
                        
                        <div className="ios_item" onClick={scrollToRef1}>
                            <img src={android} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef2}>
                            <img src={apple} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef3}>
                            <img src={windows} className="ios_item_img" alt="smartphone logo" />
                        </div>

                    </div>
                </div>

                <div className="secondSection_smartPhones">

                    <div className={block1} onClick={block1Handler}>
                        <img src={android} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block2} onClick={block2Handler}>
                        <img src={apple} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block3} onClick={block3Handler}>
                        <img src={windows} alt="ios block" className="ios_blok_img" />
                    </div>
                </div>

                <div className="sectionThird_smartPhones">

                    <div className={num === 1 ? 'sectionThird_smartPhones_inner rowReverse' : 'sectionThird_smartPhones_inner'}>

                        <div ref={appleRef} className="sectionThird_smartPhones_inner_leftSide">
                            <p className="os_title">{isoDbItem.title}</p>

                            <div className="os_second_title_text">
                                <p className="os_second_title">{isoDbItem.question}</p>
                                <p className="os_second_text">{isoDbItem.answer}</p>
                            </div>

                            <div>
                                <a href={isoDbItem.link1} target="_blank" rel="noreferrer">
                                    <div className="smartPhones_btn">
                                        <p>{isoDbItem.download}</p>
                                        <img src={isoDbItem.store} alt="store icon" className="storeImage"/>
                                    </div>
                                </a>    

                                    {
                                        isoDbItem.link2 !== '' ?
                                            <a href={isoDbItem.link2} target="_blank" rel="noreferrer">
                                                <div className="smartPhones_btn btn_second">
                                                    <p>გადმოწერე iPad-ისთვის</p>
                                                    <img src={isoDbItem.store} alt="store icon" className="storeImage"/>
                                                </div>
                                            </a>
                                        : ''    
                                    }
                                
                            </div>

                        </div>

                        
                        <div className="sectionThird_smartPhones_inner_rightSide">
                            <img src={isoDbItem.image} alt="mobile type" className="mobilePhone_type" />
                        </div>

                    </div>

                </div>

                <FooterBanner />
            </div>
        </>
    )
}