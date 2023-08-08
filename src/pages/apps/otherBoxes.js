
import { useRef, useState } from "react"
import "./smartphones.css"
import './otherBoxes.css'
import FooterBanner from '../../components/footerBanner/footerBanner'

import nexus from '../../components/images/nexus_icon.png'
import nexusBox from '../../components/images/nexus_box.png'
import otherBox from '../../components/images/other_tv.png'
import playStore from '../../components/images/playstore_icon.png'
import windowsStore from '../../components/images/windows_phone_store.png'

const iosDB = [

    {
        index: 0,
        title:'MYVIDEO TV აპლიკაცია NEXUS-ის ბოქსებისთვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი ტელევიზორის მენიუდან შედით Play Store-ში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააინსტალირეთ',
        image: `${nexusBox}`,
        store: `${playStore}`,
        link1: 'https://play.google.com/store/apps/details?id=ge.myvideo.hlsstremreader',
        link2: '',
        download: 'გადმოწერე'
    },

    {
        index: 1,
        title:'MYVIDEO TV-აპლიკაცია ANDROID-ის სხვა ბოქსებისთვის',
        question :'აღნიშნულ მოწყობილობებზე აპლიკაციის გამართულ მუშაობასთან დაკავშირებით კომპანია არ იღებს პასუხისმგებლობას და, შესაბამისად, არ უწევს ტექნიკურ მხარდაჭერას.',
        answer:'აპლიკაციის დაყენება შესაძლებელია სხვადასხვა მწარმოებლების ANDROID ბოქსებზე ANDROID 4.2 ვერსიიდან',
        image: `${otherBox}`,
        store: ``,
        link1: 'http://goo.gl/uaDutz',
        link2: '',
        download: 'გადმოწერე'
    },
]

export default function OtherTvBoxes(){

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

    const block3Handler = ()=> {
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block active_block')
        setNum(1)
    }

    return(
        <>
            <div className="smartphones">

                <div className="firstSection_smartPhones">
                    
                    <p className="smartPhone_Title">აპლიკაცია სხვა ბოქსებისთვის</p>


                    <div className="iosType">
                        
                        <div className="ios_item" onClick={scrollToRef1}>
                            <img src={nexus} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef2}>
                            <p className="other_device_title">სხვა ბოქსი</p>
                        </div>

                    </div>
                </div>

                <div className="secondSection_smartPhones">

                    <div className={block1} onClick={block1Handler}>
                        <img src={nexus} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block3} onClick={block3Handler}>
                        <p className="other_device_title">სხვა ბოქსი</p>
                    </div>
                </div>

                <div className="sectionThird_smartPhones">

                    <div className='sectionThird_smartPhones_inner'>

                        <div ref={appleRef} className="sectionThird_smartPhones_inner_leftSide">
                            <p className="os_title">{isoDbItem.title}</p>

                            <div className="os_second_title_text">
                                <p className={isoDbItem.index === 1 ? 'os_second_title redWarning' : 'os_second_title'}>{isoDbItem.question}</p>
                                <p className="os_second_text">{isoDbItem.answer}</p>
                            </div>

                            <div>
                                <a href={isoDbItem.link1} target="_blank" rel="noreferrer">
                                    <div className={isoDbItem.store !== '' ? 'smartPhones_btn' : 'smartPhones_btn centerDiv'}>
                                        <p>{isoDbItem.download}</p>
                                        {isoDbItem.store !== '' ?
                                            <img src={isoDbItem.store} alt="store icon" className="storeImage"/>
                                            :
                                            ''
                                        }
                                    </div>
                                </a>    

                                    {
                                        isoDbItem.link2 !== '' ?
                                            <a href={isoDbItem.link2} target="_blank" rel="noreferrero">
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