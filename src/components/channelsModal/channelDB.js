import tv from '../images/tv.png'
import desktop from '../images/desktop.png'
import mobile from '../images/mobile.png'


import gpb from "../../components/images/channels/ChannelLogos/pirveliarkhi.png"
import gpbhd from "../../components/images/channels/ChannelLogos/pirveliarkhihd.png"
import teleskola from "../../components/images/channels/ChannelLogos/teleskola.png"
import rustavi2 from "../../components/images/channels/ChannelLogos/rustavi2.png"
import mtavariArkhi from "../../components/images/channels/ChannelLogos/mtavari.png"
import tvpirveli from "../../components/images/channels/ChannelLogos/tvpirveli.png"
import silkUniversal from "../../components/images/channels/ChannelLogos/silk_universal.png"
import silkDocu from "../../components/images/channels/ChannelLogos/silkdocu.png"
import silkholywood from "../../components/images/channels/ChannelLogos/silkholywood.png"
import silkkids from "../../components/images/channels/ChannelLogos/silkkids.png"
import silkcollection from "../../components/images/channels/ChannelLogos/silkcollection.png"
import silk1 from "../../components/images/channels/ChannelLogos/silk1.png"
import silk2 from "../../components/images/channels/ChannelLogos/silk2.png"
import silk3 from "../../components/images/channels/ChannelLogos/silk3.png"



export const channelsDB = [

    {
        icon: `${gpb}`,
        name: 'პირველი არხი',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile,
    },

    {
        icon: `${gpbhd}`,
        name: 'პირველი არხი HD',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile
    },

    {
        icon: `${teleskola}`,
        name: 'ტელესკოლა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${tvpirveli}`,
        name: 'პირველი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${rustavi2}`,
        name: 'რუსთავი 2',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${mtavariArkhi}`,
        name: 'მთავარი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silkUniversal}`,
        name: 'Silk უნივერსალი',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silkDocu}`,
        name: 'Silk დოკუმენტური',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silkholywood}`,
        name: 'Silk კინო ჰოლივუდი',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silkkids}`,
        name: 'Silk ქიდს',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silkcollection}`,
        name: 'Silk კინო კოლექცია',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silk1}`,
        name: 'Silk Sport HD 1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    
    {
        icon: `${silk2}`,
        name: 'Silk Sport HD 2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: `${silk3}`,
        name: 'Silk Sport HD 3',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/posttv.png',
        name: 'პოსTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/formula.png',
        name: 'ფორმულა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/euronewsGeorgia.png',
        name: 'Euronews Georgia',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/imedi.png',
        name: 'იმედი',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/gds.png',
        name: 'GDS',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/maestro.png',
        name: 'მაესტრო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/artarea.png',
        name: 'არტარეა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/palitra.png',
        name: 'Palitra News',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/kavkasia.png',
        name: 'კავკასია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bmg.jpg',
        name: 'BMG',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/gmc.png',
        name: 'GMC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_gms.png',
        name: 'GMS',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/marao.png',
        name: 'მარაო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/1stereo.png',
        name: '1 სტერეო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/comedy.png',
        name: 'კომედი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/agro.png',
        name: 'აგრო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/msuicbox.png',
        name: 'MUSIC BOX',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/starvision.png',
        name: 'სტარვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bbb.png',
        name: 'ბასტი ბუბუ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/ertsulovneba.png',
        name: 'ერთსულოვნება',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qartuli.png',
        name: 'ქართული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    
    {
        icon: './images/channels/tv_tvc.png',
        name: 'TVC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_puls.png',
        name: 'პულსი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_musictv.png',
        name: 'დარდიმანდი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_malltv.png',
        name: 'მოლი ტვ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_obiektivi.png',
        name: 'ობიექტივი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_trialeti.png',
        name: 'თრიალეთი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv24.png',
        name: 'TV 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_rioni.png',
        name: 'რიონი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_sdasutv.png',
        name: 'სდასუ TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_diatv.png',
        name: 'დია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_lilotv.png',
        name: 'L-TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_megatv.png',
        name: 'Mega TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tv25.png',
        name: 'TV 25',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_imervizia.png',
        name: 'იმერვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_gurjaani.png',
        name: 'გურჯაანი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qvemoqartli.png',
        name: 'TV 4',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_o2.png',
        name: 'O2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tvsaperavi.png',
        name: 'საფერავი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_pktv.png',
        name: 'PK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_batumitv.png',
        name: 'ბათუმი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_guriatv.png',
        name: 'გურია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_stereoplus.png',
        name: 'სტერეო+',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_toktv.png',
        name: 'TOK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_chadrakitv.png',
        name: 'ჭადრაკი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_kartuliarkhi.png',
        name: 'ქართული არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/girchi.png',
        name: 'გირჩი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_argotv.png',
        name: 'არგო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_gmtv.png',
        name: 'GMTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/greentv.png',
        name: 'Green TV - ჩხენკელი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/meteo.png',
        name: 'Meteo 24',
        isFaded: false,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/odishi.png',
        name: 'ოდიში TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tanamgzavri.png',
        name: 'თანამგზავრი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/georgianTimes.png',
        name: 'ჯორჯიან თაიმსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/altinfo.png',
        name: 'ალტ-ინფო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_erimedia.png',
        name: 'ერი მედია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv5geo.png',
        name: 'მეხუთე არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_agrogaremo.png',
        name: 'აგროგარემო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_drotv.png',
        name: 'სამეფო არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/abkhazia.png',
        name: 'აფხაზეთის ხმა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_monitoring.png',
        name: 'TV Monitoring',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_viasatsport.png',
        name: 'Viasat Sport',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viassat1000.png',
        name: 'Viasat 1000',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viassatAction.png',
        name: 'Viasat Action',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasatexp.png',
        name: 'Viasat Explorer',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasathist.png',
        name: 'Viasat History',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasatnat.png',
        name: 'Viasat Nature',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киномикс',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносвидание',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинохит',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносемья',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинопремьера',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинокомедия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносерия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Мужское кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Наше Новое кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Индийское Кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amedia1.png',
        name: 'Amedia 1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amedia2.png',
        name: 'Amedia 2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amediahit.png',
        name: 'Amedia HIT',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amediapremium.png',
        name: 'Amedia Premium HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_auto24.png',
        name: 'Авто 24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_autoplus.png',
        name: 'Авто плюс',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_365day.png',
        name: '365 дней',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_detskymir.png',
        name: 'Детский Мир',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_davinci.png',
        name: 'Da Vinci Learning',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_dw.png',
        name: 'Deutsche Welle',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_domashni.png',
        name: 'Домашний',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_nastaiashivremia.png',
        name: 'Настоящее время',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_laminor.png',
        name: 'ЛяМинор',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kuxnia.png',
        name: 'Кухня',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kvartal95.png',
        name: 'КВАРТАЛ 95',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/khl.png',
        name: 'KHL',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/khlprime.png',
        name: 'KHL Prime',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_illuzionplus.png',
        name: 'Иллюзион+',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_24techno.png',
        name: 'Т24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_hdlife.png',
        name: 'HD Life',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/tv_oruzhie.png',
        name: 'Оружие',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_bollywoodhd.png',
        name: 'Bollywood HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_nostalgy.png',
        name: 'Ностальгия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_perec.png',
        name: 'Перец',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mezzo.png',
        name: 'Mezzo',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_espressotv.png',
        name: 'Espresso TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_arirangworldtv.png',
        name: 'ARIRANG',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_1plus1international.png',
        name: '1+1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_radnoekino.png',
        name: 'Родное Кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_fenikspluskino.png',
        name: 'ФЕНИКС+КИНО',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/vegetarian.jpeg',
        name: 'Первый Вегетарианский',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_friday.png',
        name: 'ПЯТНИЦА',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/red.png',
        name: 'Red',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/RuTV.png',
        name: 'Ru TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_rusilluzion.png',
        name: 'Русский Иллюзион',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/scifi.png',
        name: 'Sci-Fi',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viasatruskoe.png',
        name: 'TV1000 Русское кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    

    {
        icon: './images/channels/uspeh.png',
        name: 'У​с​п​е​х',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_unikum.png',
        name: 'Уникум',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_ktoestkto.png',
        name: 'Кто есть Кто',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinoujas.png',
        name: 'Киноужас',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mir.png',
        name: 'Мир',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mir24.png',
        name: 'Мир 24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/NIKIjunior.png',
        name: 'NIKI Junior',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/NIKIkids.png',
        name: 'NIKI KIDS',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/Ictimai.png',
        name: 'Ictimai TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/mujskoi.jpg',
        name: 'Мужской',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/oce.png',
        name: 'OCE',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_ctctv.png',
        name: 'CTC',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/ICTV.png',
        name: 'ICTV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/ICTV2.jpg',
        name: 'ICTV2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/jivi.jpg',
        name: 'ЖИВИ!',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/kvn.jpg',
        name: 'КВН ТВ',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/newchannel.png',
        name: 'NEW Channel',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/galaxy.png',
        name: 'Тайны Галактики HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/m1.png',
        name: 'M1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/m2.png',
        name: 'M2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/malish.png',
        name: 'Малиш',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_matchplaneta.png',
        name: 'МатчПланета',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/bbc.png',
        name: 'BBC World News',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/boxtv.png',
        name: 'Бокс ТВ',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/CCTV.png',
        name: 'CCTV 4',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/Black.png',
        name: 'Black',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/evrokino.png',
        name: 'Еврокино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/zoopark.png',
        name: 'зоопарк',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    


    {
        icon: './images/channels/zagodnaiajizn.jpg',
        name: 'Загородная Жизнь',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    
    {
        icon: './images/channels/stb.png',
        name: 'CTB',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    

    {
        icon: './images/channels/zeetv.png',
        name: 'Zee TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    }
]

export const abroadChannelsDB = [
    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile,
    },

    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი HD',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile
    },
    {
        icon: './images/channels/teleskola.png',
        name: 'ტელესკოლა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_pirvelitv.png',
        name: 'პირველი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/rustavi2.png',
        name: 'რუსთავი 2',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/mtavari.png',
        name: 'მთავარი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/euronewsGeorgia.png',
        name: 'Euronews Georgia',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_stereoplus.png',
        name: 'სტერეო+',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_guriatv.png',
        name: 'გურია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_drotv.png',
        name: 'სამეფო არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_sdasutv.png',
        name: 'სდასუ TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/posttv.png',
        name: 'პოსTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/formula.png',
        name: 'ფორმულა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/imedi.png',
        name: 'იმედი',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/gds.png',
        name: 'GDS',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/maestro.png',
        name: 'მაესტრო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/artarea.png',
        name: 'არტარეა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/palitra.png',
        name: 'Palitra News',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/kavkasia.png',
        name: 'კავკასია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/gmc.png',
        name: 'GMC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/marao.png',
        name: 'მარაო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/1stereo.png',
        name: '1 სტერეო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/comedy.png',
        name: 'კომედი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/agro.png',
        name: 'აგრო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/msuicbox.png',
        name: 'MUSIC BOX',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/starvision.png',
        name: 'სტარვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bbb.png',
        name: 'ბასტი ბუბუ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/ertsulovneba.png',
        name: 'ერთსულოვნება',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_qartuli.png',
        name: 'ქართული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_puls.png',
        name: 'პულსი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_musictv.png',
        name: 'დარდიმანდი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_malltv.png',
        name: 'მოლი ტვ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_obiektivi.png',
        name: 'ობიექტივი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_trialeti.png',
        name: 'თრიალეთი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_tv24.png',
        name: 'TV 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_tv25.png',
        name: 'TV 25',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_qvemoqartli.png',
        name: 'TV 4',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/taltinfo.png',
        name: 'ალტ-ინფო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_batumitv.png',
        name: 'ბათუმი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bmg.jpg',
        name: 'BMG',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_tv5geo.png',
        name: 'მეხუთე არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_diatv.png',
        name: 'დია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_rioni.png',
        name: 'რიონი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvsaperavi.png',
        name: 'საფერავი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_tanamgzavri.png',
        name: 'თანამგზავრი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_monitoring.png',
        name: 'TV Monitoring',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_agrogaremo.png',
        name: 'აგროგარემო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_argotv.png',
        name: 'არგო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_toktv.png',
        name: 'TOK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/abkhazia.png',
        name: 'აფხაზეთის ხმა',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_pktv.png',
        name: 'PK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/odishi.png',
        name: 'ოდიში TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_o2.png',
        name: 'O2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_megatv.png',
        name: 'Mega TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_lilotv.png',
        name: 'L-TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_gurjaani.png',
        name: 'გურჯაანი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_imervizia.png',
        name: 'იმერვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/greentv.png',
        name: 'Green TV - ჩხენკელი  ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_gmtv.png',
        name: 'GMTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/girchi.png',
        name: 'გირჩი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/georgianTimes.png',
        name: 'ჯორჯიან თაიმსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_chadrakitv.png',
        name: 'ჭადრაკი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    {
        icon: './images/channels/tv_kartuliarkhi.png',
        name: 'ქართული არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
]