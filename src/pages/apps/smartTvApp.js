
import { useRef, useState, useEffect } from "react"
import "./smartphones.css"
import "./smartTvApp.css"
import FooterBanner from '../../components/footerBanner/footerBanner'

import samsung from '../../components/images/samsung_logo.png'
import samsungTV from '../../components/images/samsung_tv.png'
import sony from '../../components/images/sony_logo.png'
import sonyTv from '../../components/images/sony_tv.png'
import hisense from '../../components/images/hisense_logo.png'
import hisenseTv from '../../components/images/hisense_tv.png'
import philpis from '../../components/images/philips_logo.png'
import philipsTv from '../../components/images/philips_tv.png'
import noMark from '../../components/images/no_icon.png'
import yesMark from '../../components/images/yes_icon.png'


const iosDB = [

    {
        index: 0,
        title:'MYVIDEO TV აპლიკაცია SAMSUNG -ის სმარტ ტელევიზორებისთვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი Smart ტელევიზორიდან შედით აპლიკაციების მარკეტში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააყენეთ.',
        image: `${samsungTV}`,
        copability: [
            
            {
                year: '2012 წლამდე გამოსული მოდელები',
                mark: `${noMark}`,
            },
            {
                year: '2013-2014 წლის მოდელები',
                mark: `${yesMark}`
            },
            {
                year: '2015-16 წლის მოდელები',
                mark: `${noMark}`
            }
            
        ]  
    },

    {
        index: 1,
        title:'MYVIDEO TV აპლიკაცია SONY-ის სმარტ ტელევიზორებისთვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი Smart ტელევიზორიდან შედით აპლიკაციების მარკეტში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააყენეთ.',
        image: `${sonyTv}`,
        copability: [
            
            {
                year: '2014 წლამდე გამოსული მოდელები',
                mark: `${noMark}`,
            },
            {
                year: 'მოდელები 2015 წლიდან (Android TV)',
                mark: `${yesMark}`
            }
            
        ]
    },

    {
        index: 2,
        title:'MYVIDEO TV აპლიკაცია HISENSE-ის სმარტ ტელევიზორებისთვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი Smart ტელევიზორიდან შედით აპლიკაციების მარკეტში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააყენეთ.',
        image: `${hisenseTv}`,
        copability: ''
    },

    {
        index: 3,
        title:'MYVIDEO TV აპლიკაცია PHILIPS-ის სმარტ ტელევიზორებისთვის',
        question :'როგორ დავაყენოთ აპლიკაცია',
        answer:'თქვენი Smart ტელევიზორიდან შედით აპლიკაციების მარკეტში, მოძებნეთ MYVIDEO-ს აპლიკაცია და დააყენეთ.',
        image: `${philipsTv}`,
        copability: [
            
            {
                year: '2014 წლამდე გამოსული მოდელები',
                mark: `${noMark}`,
            },
            {
                year: 'მოდელები 2015 წლიდან (Android TV)',
                mark: `${yesMark}`
            }
            
        ]
    },
]

export default function SmartTvApp(){

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])

    const appleRef = useRef()

    const scrollToRef1 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block active_block')
        setBlock2('ios_block')
        setBlock3('ios_block')
        setBlock4('ios_block')
        setNum(0)
    };

    const scrollToRef2 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block')
        setBlock2('ios_block active_block')
        setBlock3('ios_block')
        setBlock4('ios_block')
        setNum(1)
    };

    const scrollToRef3 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block active_block')
        setBlock4('ios_block')
        setNum(2)
    };

    const scrollToRef4 = () => {
        appleRef.current?.scrollIntoView({behavior: 'smooth'});
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block')
        setBlock4('ios_block active_block')
        setNum(3)
    };

    const [block1, setBlock1] = useState('ios_block active_block')
    const [block2, setBlock2] = useState('ios_block')
    const [block3, setBlock3] = useState('ios_block')
    const [block4, setBlock4] = useState('ios_block')
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
        setBlock4('ios_block')
        setNum(1)
    }

    const block3Handler = ()=> {
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block active_block')
        setBlock4('ios_block')
        setNum(2)
    }

    const block4Handler = ()=> {
        setBlock1('ios_block')
        setBlock2('ios_block')
        setBlock3('ios_block')
        setBlock4('ios_block active_block')
        setNum(3)
    }

    return(
        <>
            <div className="smartphones">

                <div className="firstSection_smartTvApp">
                    
                    <p className="smartPhone_Title">აპლიკაცია SMART ტელეფონებისათვის</p>


                    <div className="iosType">
                        
                        <div className="ios_item" onClick={scrollToRef1}>
                            <img src={samsung} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef2}>
                            <img src={sony} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef3}>
                            <img src={hisense} className="ios_item_img" alt="smartphone logo" />
                        </div>

                        <div className="ios_item" onClick={scrollToRef4}>
                            <img src={philpis} className="ios_item_img" alt="smartphone logo" />
                        </div>

                    </div>
                </div>

                <div className="secondSection_smartPhones">

                    <div className={block1} onClick={block1Handler}>
                        <img src={samsung} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block2} onClick={block2Handler}>
                        <img src={sony} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block3} onClick={block3Handler}>
                        <img src={hisense} alt="ios block" className="ios_blok_img" />
                    </div>

                    <div className={block4} onClick={block4Handler}>
                        <img src={philpis} alt="ios block" className="ios_blok_img" />
                    </div>
                </div>

                <div className="sectionThird_smartPhones">

                    <div className={isoDbItem.index % 2 !== 0 ? 'sectionThird_smartPhones_inner rowReverse' : 'sectionThird_smartPhones_inner'}>

                        <div ref={appleRef} className="sectionThird_smartPhones_inner_leftSide">
                            <p className="os_title">{isoDbItem.title}</p>

                            {
                            isoDbItem.copability !== ''

                            ? 
                                <div className="copability_outter">
                                    
                                    {
                                        isoDbItem.copability.map((item, index) => {
                                            return( 
                                                <div className={index === isoDbItem.copability.length - 1 ? 'marksYear' : 'marksYear noBottomBorder'} key={index}>
                                                    <p>{item.year}</p>
                                                    <div className="markDiv">
                                                        <img src={item.mark} alt="chekc mark" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            :

                            ''
                        }

                            <div className="os_second_title_text">
                                <p className="os_second_title">{isoDbItem.question}</p>
                                <p className="os_second_text">{isoDbItem.answer}</p>
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