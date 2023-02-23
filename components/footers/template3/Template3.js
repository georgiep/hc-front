import Text2 from "components/commons/Text2/Text2";
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
import PrefetchLink from "components/links/PrefetchLink";
import CustomForm from "components/mailChimp/NewsLetters/Template1";

const Template3 = ({ page, index }) => {

    return (
        <footer>
            <div className="container-fluid footer-newsletters">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'offset-sm-0 offset-md-0 offset-lg-3 col-sm-12 col-md-12 col-lg-6 text-center'}>

                                    <Text2 tag="div" text={'Be the first to know...'} titleStyle={'primary-dark post-text-body'}/>
                                    <LineSeparator padding={'6px 0'} maxWidth={'100%'}/>
                                    <Text2 tag="div" text={'Subscribe to our newsletter and get special offers and discounts delivered directly to your inbox'} titleStyle={'primary-dark promo-small-text'}/>
                                    <LineSeparator padding={'15px 0'} maxWidth={'100%'}/>
                                    <div className="newsletter-form-input position-relative">
                                        <label>
                                            <CustomForm className={'primary-dark promo-text-third'}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-12 col-lg-4 details text-uppercase'}>
                                    <Text2 tag="div" text={'AQUA VISTA HOTELS'} titleStyle={'primary-white post-text-body'}/>
                                    <LineSeparator color={'#FFFFFF'} padding={'20px 0'} maxWidth={'100%'}/>
                                    <div>
                                        <Text2 tag="div" text={'Athens Office'} titleStyle={'primary-white promo-text-secondary'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <Text2 tag="div" text={'Kifisias Avenue 130, Athens, 11526 Athens | Greece |'} titleStyle={'primary-white promo-text-third'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <a className={'primary-white promo-text-third pe-2'} href={"tel:+30 210 721 32 53"}>T +30 210 721 32 53</a>
                                        <a className={'primary-white promo-text-third'} href={"fax:+30 210 722 48 43"}>F +30 210 722 48 43</a>
                                    </div>
                                    <div>
                                        <Text2 tag="div" text={'Santorini Office'} titleStyle={'primary-white promo-text-secondary'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <Text2 tag="div" text={'Fira-Pyrgos Road, 847 00 Santorini | Greece | '} titleStyle={'primary-white promo-text-third'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <a className={'primary-white promo-text-third pe-2'} href={"tel:+30 22860 28866"}>T +30 22860 28866</a>
                                    </div>
                                    <div>
                                        <Text2 tag="div" text={'London Office'} titleStyle={'primary-white promo-text-secondary'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <Text2 tag="div" text={'76 Rainier Apt. 43 Cherry Orchard Road CR0 6FD East Croydon, London London | UK | '} titleStyle={'primary-white promo-text-third'}/>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        <a className={'primary-white promo-text-third pe-2'} href={"tel:+44 (020) 32 861 904"}>T +44 (020) 32 861 904</a>
                                    </div>
                                </div>
                                <div className={'offset-md-0 offset-lg-2 col-md-12 col-lg-4 text-uppercase'}>
                                    {/*<Text2 />*/}
                                    <Text2 tag="div" text={'EXPLORE BY DESTINATION'} titleStyle={'primary-white post-text-body'}/>
                                    <LineSeparator color={'#FFFFFF'} padding={'20px 0'} maxWidth={'100%'}/>
                                    <div>
                                        <PrefetchLink pathname={'/hotels-in-santorini'}>
                                            <Text2 tag="div" text={'Santorini'} titleStyle={'primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                    </div>
                                    <LineSeparator padding={'5px 0'} maxWidth={'100%'}/>
                                    <div>
                                        <PrefetchLink pathname={'/hotels-in-mykonos'}>
                                            <Text2 tag="div" text={'Mykonos'} titleStyle={'primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                    </div>
                                    <LineSeparator padding={'5px 0'} maxWidth={'100%'}/>
                                    <div>
                                        <PrefetchLink pathname={'/hotels-in-naxos'}>
                                            <Text2 tag="div" text={'Naxos'} titleStyle={'primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                    </div>
                                    <LineSeparator padding={'5px 0'} maxWidth={'100%'}/>
                                    <div>
                                        <PrefetchLink pathname={'/hotels-in-paros'}>
                                            <Text2 tag="div" text={'Paros'} titleStyle={'primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                    </div>
                                    <LineSeparator padding={'25px 0'} maxWidth={'100%'}/>
                                    <Text2 tag="div" text={'BOOKING CENTER'} titleStyle={'primary-white post-text-body'}/>
                                    <LineSeparator color={'#FFFFFF'} padding={'20px 0'} maxWidth={'100%'}/>
                                    <div>
                                        {/*<Text2 tag="div" text={'T: +30 210 7213253'} titleStyle={'primary-white promo-text-third'}/>*/}
                                        <a className={'py-3 p-sm-0 pe-2 primary-white promo-text-third d-flex'} href={"tel:+30 210 7213253"}>T +30 210 7213253</a>
                                        <LineSeparator padding={'3px 0'} maxWidth={'100%'}/>
                                        {/*<Text2 tag="div" text={'reservations@aquavistahotels.com'} titleStyle={'primary-white promo-text-third'}/>*/}
                                        <a className={'primary-white promo-text-third py-3 p-sm-0 pe-2'} href={"mailto:reservations@aquavistahotels.com"}>reservations@aquavistahotels.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-md-12'}>
                                    <LineSeparator padding={'25px 0'} maxWidth={'100%'}/>
                                    <div className={'d-flex flex-wrap flex-row justify-content-between'}>
                                        <Text2 tag="div" text={'Copyright © 2016 - 2023 anyhotel All rights reserved'} titleStyle={'py-3 primary-white promo-text-third'}/>
                                        {/*<Text2 tag="div" text={'Terms of Use'} titleStyle={'primary-white promo-text-third'}/>*/}
                                        <PrefetchLink pathname={'/privacy-policy'}>
                                            <Text2 tag="div" text={'Privacy Policy'} titleStyle={'py-3 primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                        <Text2 tag="div" text={'Powered by Hotelier CMS'} titleStyle={'py-3 primary-white promo-text-third'}/>
                                        <PrefetchLink pathname={'/contact'}>
                                            <Text2 tag="div" text={'Keep in Touch'} titleStyle={'py-3 primary-white promo-text-third'}/>
                                        </PrefetchLink>
                                    </div>
                                    <LineSeparator padding={'10px 0'} maxWidth={'100%'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
               .newsletter-form-input::after{
                  content: "";
                  width: 8px;
                  height: 8px;
                  right: 0;
                  top: 14px;
                  border: solid #04456D;
                  border-width: 0 1px 1px 0;
                  display: inline-block;
                  padding: 3px;
                  transform: rotate(-45deg);
                  -webkit-transform: rotate(-45deg);
                  position: absolute;
               }
               
               input[type="email"]{
                border: 0;
                border-bottom-color: currentcolor;
                border-bottom-style: none;
                border-bottom-width: 0px;
                border-bottom: 1px solid #04456D;
                padding: 10px 2px;
                background: 0 0;
                font-size: 14px;
                font-weight: 400;
                width: 100%;              
               }
               
               input[type="submit"]{
                  position: absolute;
                  right: 10px;
                  top: 9px;
                  font-style: normal;
               }

               label{
                 width: 100%;
                 display: block;
               }
            
               .footer-newsletters{
                  background: #E2E9F9;
                  padding: 107px 0; 
               }
               
              .footer {
                   padding: 87px 0 20px 0;
                   background: #04456D;
              }
              
              .details > div{
                   padding-bottom: 20px;
                   padding-right: 0;
              }
              
                @media only screen and (max-width: ${mediaBreakPoints.sm}) {
                     .details{
                        margin-bottom: 40px;
                     }
                 }
              `}</style>
        </footer>

    )
}

export default Template3