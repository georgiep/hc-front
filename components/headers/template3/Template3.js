import {useContext, useEffect, useState} from "react";
import {CloseMenuSvg,BurgerMenuSvg} from "components/svgs/burgers/burgerMenuSvg";
import PrefetchLink from 'components/links/PrefetchLink'
import LineSeparator from "components/body/separators/LineSeparator";
import ImageLoader from "components/commons/image/ImageLoader";
import useScroll from "../../../hooks/useScroll";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
import breakpointContext from "context/BreakpointContext";
import {AvailabilityStateContext} from "context/AvailabilityContext";
import {useRouter} from "next/router";

const createMenuListAnimation = (length) => {

    let animation = ` .header-menu-layout-three .menu.open li{animation:fadeInRight .3s ease forwards}@keyframes fadeInRight{0%{opacity:0;left:20%}100%{opacity:1;left:0}}`
    Array(length).fill(0).forEach((item,i)=>{
        animation += `.header-menu-layout-three .menu.open li:nth-of-type(${i}) {animation-delay: ${i * 0.1}s;}`
    })
    return animation
}

let animation = createMenuListAnimation(11)

const Template3 = () => {


    const {tabletDown} = useContext(breakpointContext)

    const {scrollY} = useScroll()

    const [open,setOpen] = useState(false)

    const [scroll,setScroll] = useState(false)

    const [showSubMenu,setShowSubMenu] = useState(-1)

    const toggleMenu = () =>{

        if(!open){
            document.documentElement.style.overflowY = 'hidden'
        }else{
            document.documentElement.style.overflowY = 'auto'
        }
        setOpen(!open)
    }

    if(scrollY > 100){
        if(!scroll){
            setScroll(true)
        }
    }else{
        if(scroll){
            setScroll(false)
        }
    }

    const toggleSubMenu = (e,i) => {
        e.preventDefault();
        e.stopPropagation()
        if(i === showSubMenu){
            return setShowSubMenu(-1)
        }
        setShowSubMenu(i)
    }

    const AvailabilityContext = useContext(AvailabilityStateContext)

    const [url,setUrl] = useState('https://aquavistahotels.reserve-online.net/')

    const Router = useRouter()
    useEffect(()=>{
        let exist = false
        Object.keys(AvailabilityContext).map(item => {
            if(window.location.href.includes(item)){
                setUrl(AvailabilityContext[item].book_now)
                exist = true
            }
        })
        if(!exist){
            setUrl('https://aquavistahotels.reserve-online.net/')
        }
        return () => {
            setShowSubMenu(-1)
            setOpen(false)
        }
    },[Router.asPath])

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <header className={'header-menu-layout-three'}>
            <div className={`menu-top d-flex flex-nowrap justify-content-between ${scroll ? 'header-scrolling' : ''}`}>
                <div className={'burger-menu'} onClick={toggleMenu}><BurgerMenuSvg/></div>

                {
                    Router.asPath === '/' ?  <div className={'logo'} style={{width: '150px',height: '66px'}} onClick={scrollToTop}>
                        <ImageLoader src={'https://code.rateparity.com/aquavistahotels.com/2022/07/Logo.svg'} priority={true} layout={'fill'}/>
                    </div> : <PrefetchLink pathname={'/'}>
                        <div className={'logo'} style={{width: '150px',height: '66px'}}>
                            <ImageLoader src={'https://code.rateparity.com/aquavistahotels.com/2022/07/Logo.svg'} priority={true} layout={'fill'}/>
                        </div>
                    </PrefetchLink>
                }

                <div className={'book-now'}><a href={url} target={'_blank'}><button className={'button-fill'}>BOOK NOW</button></a></div>
            </div>
            <div className={!open ? 'menu' : 'menu open'} >
                <div className={'close-menu'} onClick={toggleMenu}><CloseMenuSvg/></div>
                <div className={'main-menu'}>
                    <ul>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/'} api={''}>HOME</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div>
                                <PrefetchLink pathname={'/destinations'} api={''}>HOTELS</PrefetchLink>
                                <div className={'arrow-ms'} onClick={(e) => toggleSubMenu(e,1)}>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L5 5L10 0H0Z" fill="#808A94"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={'line'}>
                                <LineSeparator color={'#04456D'}/>
                            </div>
                            <div className={`sub-menu ${ showSubMenu === 1 ? 'd-block' : ''}`}>
                                <ul>
                                    <li>
                                        <PrefetchLink pathname={'/hotels-in-santorini'} api={''}>HOTELS IN SANTORINI</PrefetchLink>
                                    </li>
                                    <li>
                                        <PrefetchLink pathname={'/hotels-in-paros'} api={''}>HOTELS IN PAROS</PrefetchLink>
                                    </li>
                                    <li>
                                        <PrefetchLink pathname={'/hotels-in-naxos'} api={''}>HOTELS IN NAXOS</PrefetchLink>
                                    </li>
                                    <li>
                                        <PrefetchLink pathname={'/hotels-in-mykonos'} api={''}>HOTELS IN MYKONOS</PrefetchLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/special-offers'} api={''}>SPECIAL OFFERS</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div>
                                <PrefetchLink pathname={'/blog'} api={''}>BLOG</PrefetchLink>
                                <div className={'arrow-ms'} onClick={(e) => toggleSubMenu(e,5)}>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L5 5L10 0H0Z" fill="#808A94"/>
                                    </svg>
                                </div>
                            </div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/about-us'} api={''}>ABOUT US</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/join-the-aqua-vista-family'} api={''}>JOIN THE AQUA VISTA FAMILY</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/exhibitions'} api={''}>EXHIBITIONS</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/awards'} api={''}>AWARDS</PrefetchLink></div>
                        </li>
                        <li className={'menu-link primary-dark'} onClick={toggleMenu}>
                            <div><PrefetchLink pathname={'/contact'} api={''}>CONTACT</PrefetchLink></div>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx global>
                {`
                    @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                        ul.three-col {
                            -moz-column-count: 1;
                            -webkit-column-count: 1;
                            column-count: 1;
                        }
                    }
                `}
            </style>
            <style jsx global>
                {`
                
                .logo-scrolling{
                   margin-top: -3px !important;
                }
                  .menu-top.header-scrolling{
                     background: #FFF;
                   //  background: linear-gradient(180deg, #F1F3FE 0%, rgba(243, 245, 255, 0.98) 23.44%, rgba(243, 245, 255, 0.68) 46.88%, rgba(243, 245, 255, 0) 100%);
                  }
                  
                  .header-scrolling .button-fill{
                    background: #04456D !important;
                  }
                  
                  .close-menu{
                     padding: 15px;
                     cursor: pointer;
                     margin-left: 10px;
                     position: relative;
                     left: 11px;
                     top: 13px;
                  }
                  
                  .line{
                       display: none;
                  }
                  
                  
                  .arrow-ms{
                    position: absolute;
                    right: 0;
                    top: 0;
                  }  
                  
                  
               
                   .sub-menu{
                        display: none;
                        position: absolute;
                        margin-left: 500px;
                        margin-top: -29px;
                        width: 50vw;
                        background: #fff;
                        padding-left: 25px;
                    }
                    
                    

                    
                   .main-menu{
                      padding-left: 167px;
                      padding-top: 100px;
                      display: inline-block;
                   }
                   
                   .menu-top{
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      z-index: 101;
                      cursor: pointer;
                      padding: 15px 20px;
                      background: linear-gradient(180deg, rgba(249, 243, 238, 0.8) 0%, rgba(249, 243, 238, 0) 100%);
                   }
                   
                   .menu-top .burger-menu{
                      margin-right: auto;
                      padding: 10px;
                      // margin-left: -10px;
                      margin-top: 7px;
                   }
                   
                   .menu-top .logo{
                        margin-top: -10px;
                        -webkit-transform: translateX(-50%);
                        -ms-transform: translateX(-50%);
                        transform: translateX(-50%);
                        left: 50%;
                        position: absolute;
                   }
                   
                   .menu-top .book-now{
                        margin-left: auto;
                   }
                  
                   .menu{
                      position: fixed;
                      background: white;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 0;
                      opacity: 0;
                      visibility: hidden;
                      transition: opacity .3s, visibility .3s, height .3s;
                      overflow: hidden;
                      z-index: 999;
                   }
                   
                   .menu.open {
                        opacity: 1;
                        visibility: visible;
                        height: 100%;
                   }
                               
                   .menu li{
                      display: block;
                      min-height: 50px;
                      position: relative;
                      opacity: 0;
                   }
                   
        
                      .main-menu li:hover > div:nth-child(1){
                              font-weight: 500 !important;
                      }
                      .sub-menu li:hover > div:nth-child(1){
                           font-weight: 500 !important;
                      }
                       .sub-menu li:hover{
                           font-weight: 500 !important;
                      }
                       .main-menu li:hover > .sub-menu{
                           display: block;
                       }
                       .main-menu li:hover > .line{
                            display: block;
                            padding: 100px 20px;
                            position: absolute;
                            -webkit-transform: translateX(100%);
                            -ms-transform: translateX(100%);
                            transform: translateX(100%) translateY(-50%);
                            width: 100%;
                            top: 13px;
                            left: 0;
                       }
        
                   @media only screen and (max-width: 600px) {
                     .book-now {
                        display: none;
                     }
                   }
                   .arrow-ms{
                      display: none;
                    }
                   @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                   
                        .arrow-ms{
                          display: block;
                        }
                        .sub-menu{
                            position: relative;
                            margin-left: 0;
                            margin-top: 0;
                            width: 100%;
                        }
                        
                        .line{
                            display: none;
                            padding: 10px 0;
                            position: relative;
                            -webkit-transform: initial;
                            -ms-transform: initial;
                            transform: initial;
                            width: 100%;
                            top: 0;
                            left: 0;
                        }
                        
                        .main-menu {
                            width: 100%;
                            padding-left: 15px;
                            padding-right: 15px;
                         }
                         
                         .menu li{
                            min-height: auto;
                            padding: 10px;
                         }
                    }
                    
                    
                   
                 
                `}
            </style>
            <style>
                {animation}
            </style>
        </header>
    )
}

export default Template3

