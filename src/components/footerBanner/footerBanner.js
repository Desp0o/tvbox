import "./footerBanner.css"
import callIcon from '../../components/images/call_icon.webp'
import fbIcon from '../../components/images/fb_icon.webp'
import mailIcon from '../../components/images/mail_icon.webp'
import fbLike from "../../components/images/fb_like.webp"


export default function FooterBanner(){
    return(
        <>
            <div className="footerBanner">
                <div className="footerBanner_inner">
                    <div className="banner_block">
                        <img src={callIcon} alt="banner block icon" className="banner_icons" loading="lazy"/>
                        <p>322 422223</p>
                    </div>

                    <div className="banner_block">
                        <img src={fbIcon} alt="banner block icon" className="banner_icons" loading="lazy"/>

                        <div className="banner_links">
                            <a href="https://www.facebook.com/tvmyvideo" className="banner_links_inner" target="_blank" rel="noreferrer">
                                <img src={fbLike} alt="facebook group" className="fblike_icon" loading="lazy"/>
                                <p>მოიწონეთ ჩვენი გვერდი</p>
                            </a>
                        </div>
                        
                    </div>

                    <div className="banner_block">
                        <img src={mailIcon} alt="banner block icon" className="banner_icons" loading="lazy"/>
                        <a href="mailto:tvbox@myvideo.ge" >TVBOX@MYVIDEO.GE</a>
                    </div>
                </div>
            </div>
        </>
    )
}