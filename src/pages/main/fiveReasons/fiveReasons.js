import "./fiveReasons.css"

import titleImage from "../../../components/images/tvboxNewBlue.webp"

import free from "../../../components/images/ufaso.webp"
import play from "../../../components/images/playIcon.webp"
import roadmap from "../../../components/images/roadmap.webp"
import hdmonitor from "../../../components/images/hdMonitor.webp"
import finger from "../../../components/images/finger.webp"

const featureArr = [
    {
        img : `${free}`,
        num : 1,
        title: 'ქართული არხები უფასოდ',
        desc: 'საბაზისო პაკეტი მოგეწოდებათ უფასოდ, სააბონენტო გადასახადის გარეშე'
    },

    {
        img : `${play}`,
        num : 2,
        title: 'გადახვევა დაპაუზება',
        desc: 'ყველა არხზე მოქმედებს მინიმუმ 14 დღიანი გადახვევა დაპაუზების ფუნქცია'
    },

    {
        img : `${roadmap}`,
        num : 3,
        title: 'წაიღე სადაც გინდა',
        desc: 'მუშაობს ყველგან სადაც ინტერნეტია (უცხოეთშიც)'
    },

    {
        img : `${hdmonitor}`,
        num : 4,
        title: 'ციფრული ხარისხი',
        desc: 'ყველა არხი მოგეწოდებათ ციფრულ ხარისხში (HD არხები HD ხარისხში)'
    },

    {
        img : `${finger}`,
        num : 5,
        title: 'მოხერხებული მენიუ',
        desc: 'არსებულ ალტერნატივებთან შედარებით მისი ფუნქციონალი ბევრად მოხერხებულია'
    },
]

export default function FiveReasons(){
    return(
        <>
            <div className="fiveReasons_inner">
                <div className="fiveReasons_title">
                    <img src={titleImage} alt="title" className="titleImage"/>
                    <p>5 მიზეზი თუ რატომ MYVIDEO TV BOX!</p>
                </div>

                <div className="features">

                    {featureArr.map((block, index) => {
                        return(
                                <div className="featureBlock" key={index}>
                                    <div className="featureBlock_inner">
                                        

                                        <div className="block_upper">
                                           <p className="feat_number">{block.num}</p>
                                            <div className="featureBlock_circle">
                                                <img src={block.img} alt="fetures" />
                                            </div>

                                            <p>{block.title}</p>
                                        </div>

                                        <p>{block.desc}</p>
                                    </div>
                                </div>
                        )
                    })}

                    
                    
                </div>
            </div>
        </>
    )
}