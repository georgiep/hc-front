import Single from "./Single";
import React, {useEffect, useState, useRef} from "react";

const Template1 = ({ data }) => {
    let { items, css } = data;

    const [stateItems,setStateItems] = useState(items)
    const firstUpdate = useRef(true);

    const [popUp,setPopUp] = useState(false)
    const [maxItems,setMaxItems] = useState(4)

    const openPopUp = () => {
        setPopUp(!popUp)
    }
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setStateItems(items)
    }, [items]);

    const update = (val,filterIndex) => {
        const filterItems = items.filter( item =>{
            if(val === -1) {
                return item
            }
            if(item.hotelType[0] === val){
                return item
            }
        })
        const sortingItems = filterItems.sort( priceHigh );
        setStateItems([...sortingItems]);
        setMaxItems(4)
        const filterFields = [...document.querySelectorAll('.filtering-section div')];
        filterFields.forEach((item,i)=>{
            item.classList.remove('font-500')
        })
        filterFields[filterIndex].classList.add('font-500')


    }

    const sortingF = (val,filterIndex) => {
        const sortingItems = stateItems.sort( sort[val] );
        setStateItems([...sortingItems]);
        const filterFields = [...document.querySelectorAll('.sorting-section-items div')];
        filterFields.forEach((item,i)=>{
            item.classList.remove('font-500')
        })
        filterFields[filterIndex].classList.add('font-500')
        openPopUp()
    }

    const filteringValues = [...new Set(items.map(item => item?.hotelType ? item.hotelType[0] : null).filter(n => n))].sort()

    return (
        <div>

            {
                filteringValues.length > 0 &&
                <div className={'d-flex justify-content-between align-self-center my-4'}>
                    <div className={'sorting-section d-flex flex-wrap  position-relative'}>
                        <div className={'d-flex justify-content-center primary-dark cursor-pointer align-self-center'} onClick={openPopUp}><span>SORT BY</span> <span className={'d-flex align-self-center'}><ArrowDown/></span></div>
                        <div className={`popup-section position-absolute sorting-section-items flex-column ${!popUp ? 'd-none' : 'd-flex'}`}>
                            <div onClick={() => sortingF('AZ',0)} className={'font-500'}>
                                A-Z
                            </div>
                            <div onClick={() => sortingF('ZA',1)}>
                                Z-A
                            </div>
                            <div onClick={() => sortingF('LOW',2)}>
                                Price Low
                            </div>
                            <div onClick={() => sortingF('HIGH',3)}>
                                Price High
                            </div>
                            <div onClick={openPopUp} className={'popup-section-clear'}></div>
                        </div>
                    </div>
                    <div>
                        <div className={'button-cta heading-text-menu primary-dark cursor-pointer'} data-cta='map' data-ctadetails={'details'}>Show On Map</div>
                    </div>
                </div>

            }

            {
                filteringValues.length > 0 &&
                <div className={'d-flex mt-4 pt-4'}>
                    <div className={'filtering-section d-flex flex-wrap flex-item-right heading-text-menu primary-dark cursor-pointer'}>
                        <div onClick={() => update(-1,0)} className={'mx-2 mx-md-4 font-500'}>
                            All
                        </div>
                        {
                            filteringValues.map( (item,i) => {
                                return <div className={`${i !== filteringValues.length - 1 ? 'mx-2 mx-md-4' : 'ms-2 ms-md-4'} `} key={i} onClick={() => update(item,i + 1)}>
                                    {FilterLabels[item]}
                                </div>
                            })
                        }
                    </div>
                </div>
            }

            <div className="items-container-outer d-flex w-100 justify-content-center">
                <div className="items-container-inner w-100">
                    <div className="content row justify-content-center align-self-center gutters">
                        {stateItems &&
                            stateItems.map((item, index) => {
                                if(maxItems > index){
                                    return (
                                        <div key={index} className="col-md-12">
                                            <Single item={item} css={css} orderReverse={index % 2 !== 1}/>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                    {
                        maxItems < stateItems.length && <button className={'button-secondary f-r text-uppercase position-relative show-more-button'} onClick={() => setMaxItems(maxItems + 4)}>Show More</button>
                    }
                </div>
            </div>


            <style jsx>
                {`
                    .show-more-button{
                      top: -80px;
                    }
                   .flex-item-right{
                       margin-left: auto;
                   }
                   
                   .popup-section{
                        z-index: 1;
                        margin-top: 24px;
                        background: #fff;
                        border: 1px solid;
                        padding: 20px;
                        min-width: 136px;
                   }
                   
                     .popup-section > div{
                        margin-bottom: 10px;
                         z-index: 1;
                         position: relative;
                     }
                     
                    .popup-section > .popup-section-clear{
                      position: fixed;
                      left: 0;
                      top: 0;
                      width: 100vw;
                      height: 100vh;
                      z-index: 0;
                    }
                   
                      .items-container-outer {
                        background: #FFFFFF;
                      }
                      
                      .items-container-inner {
                        max-width: 1440px;
                        padding: 54px 0;
                      }
                      
                      .content {
                        padding: 50px 0 0 0;
                        margin: 0 0 0 0;
                      }
                      
                      .gutters > [class*="col-"] {
                        padding: 40px 0;
                      }
                      
                      //.gutters > [class*="col-"]:nth-last-child(1) {
                      //   padding: 40px 0 0 0;
                      // }
                      
                       .gutters > [class*="col-"]:nth-last-child(1) > .single-post-layout{
                         padding-bottom: 0;
                       }
                       
                      .filtering-section > div{
                         margin-left: 10px;
                      }
    
                      @media only screen and (max-width: 600px) {
                        .gutters > [class*="col-"] {
                            padding: 0 0 40px 0;
                         }
                      }
        
                    `}
            </style>
        </div>
    );
};

const ArrowDown = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M0.751347 0.462612C0.985549 0.229798 1.30236 0.0991211 1.6326 0.0991211C1.96283 0.0991211 2.27964 0.229798 2.51385 0.462612L7.00135 4.88761L11.4263 0.462612C11.6605 0.229798 11.9774 0.0991211 12.3076 0.0991211C12.6378 0.0991211 12.9546 0.229798 13.1888 0.462612C13.306 0.578815 13.399 0.717067 13.4625 0.869391C13.5259 1.02171 13.5586 1.1851 13.5586 1.35011C13.5586 1.51513 13.5259 1.67851 13.4625 1.83083C13.399 1.98316 13.306 2.12141 13.1888 2.23761L7.88885 7.53761C7.77264 7.65477 7.63439 7.74777 7.48207 7.81123C7.32974 7.87469 7.16636 7.90736 7.00135 7.90736C6.83633 7.90736 6.67295 7.87469 6.52063 7.81123C6.3683 7.74777 6.23005 7.65477 6.11385 7.53761L0.751347 2.23761C0.634186 2.12141 0.541193 1.98316 0.477732 1.83083C0.414271 1.67851 0.381598 1.51513 0.381598 1.35011C0.381598 1.1851 0.414271 1.02171 0.477732 0.869391C0.541193 0.717067 0.634186 0.578815 0.751347 0.462612Z" fill="#04456D"/>
        </svg>
    )
}

const sort = {
    LOW: priceLow,
    HIGH: priceHigh,
    AZ: compareAZ,
    ZA: compareZA
}

const FilterLabels = {
    38: 'Luxury',
    39: 'Superior',
    40: 'Quality',
    41: 'Villas'
}

function compareAZ( a, b ) {
    if ( a.title < b.title ){
        return -1;
    }
    if ( a.title > b.title ){
        return 1;
    }
    return 0;
}

function compareZA( a, b ) {
    if ( a.title < b.title ){
        return 1;
    }
    if ( a.title > b.title ){
        return -1;
    }
    return 0;
}

function priceLow( a, b ) {
    if ( parseFloat(a.min_price) < parseFloat(b.min_price) ){
        return -1;
    }
    if ( parseFloat(a.min_price) > parseFloat(b.min_price) ){
        return 1;
    }
    return 0;
}

function priceHigh( a, b ) {
    if ( parseFloat(a.min_price) < parseFloat(b.min_price) ){
        return 1;
    }
    if ( parseFloat(a.min_price) > parseFloat(b.min_price) ){
        return -1;
    }
    return 0;
}
export default Template1;
