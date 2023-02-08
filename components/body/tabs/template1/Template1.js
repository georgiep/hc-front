import dynamic from "next/dynamic";
import React, { useState } from 'react'
import Text2 from 'components/commons/Text2/Text2'
const CommonsAmenities = dynamic(() => import('components/body/amenities/template1/Template1'))

const Template1 = ({ data }) => {

    const { items, css, heading } = data

    const [show,setShow] = useState(0)

    return (
        <>
            {
                heading && <div className={`${css.heading.color} ${css.heading.class} mb-4`}>
                    {heading}
                </div>
            }

            <div className={'tabs cursor-pointer'}>
                {items && items.map((item,i) => {
                    return  <div className={'tab position-relative'} key={`tab-${i}`} onClick={() => setShow(show === i ? -1 : i)}>
                        <div className={'tab-title'}>
                            <Text2 text={item.title} tag={css.title.element} titleStyle={`${css.title.color} ${css.title.class}`} />
                        </div>
                        {<div className={`${show === i ? '' : 'hidden'} tab-description`}>
                            {
                                item.description && <Text2 text={item.description} tag={css.description.element} titleStyle={`${css.description.color} ${css.description.class}`} />
                            }
                            {
                                item.amenities && <CommonsAmenities data={{items: item.amenities, css: css.amenities, icon: item.icon}} />
                            }
                        </div>}
                        {show === i ? <div className={'arrow up'} />: <div className={'arrow down'} />}
                    </div>
                })}
            </div>
            <style jsx>{`
               .tabs{
                 border-top: 1px solid #04456D;
               }
               .tab{
                  border-bottom: 1px solid #04456D;
                  padding: 20px;
               }
               
               .tab-description{
                  padding: 20px 0 10px 0;
               }
               
               .arrow {
                  border: solid #A5BFE8;
                  border-width: 0 1px 1px 0;
                  display: inline-block;
                  padding: 3px;
                  position: absolute;
                  right: 21px;
                  top: 29px;
                }
                
                .up {
                  transform: rotate(-135deg);
                  -webkit-transform: rotate(-135deg);
               }
                
               .down {
                  transform: rotate(45deg);
                  -webkit-transform: rotate(45deg);
               }

          `}</style>
        </>
    )
}

export default Template1
