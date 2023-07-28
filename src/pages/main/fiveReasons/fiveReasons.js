import "./fiveReasons.css"

import titleImage from "../../../components/images/tvboxNewBlue.webp"

export default function FiveReasons(){
    return(
        <>
            <div className="fiveReasons_inner">
                <div className="fiveReasons_title">
                    <img src={titleImage} alt="title" className="titleImage"/>
                    <p>5 მიზეზი თუ რატომ MYVIDEO TV BOX!</p>
                </div>
            </div>
        </>
    )
}