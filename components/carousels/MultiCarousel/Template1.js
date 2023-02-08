// import PrefetchLink from "components/links/PrefetchLink";
import React from 'react'
import dynamic from "next/dynamic";
import Text2 from 'components/commons/Text2/Text2'
const Carousel = dynamic(() => import("../template3/Template3"))
const Template1 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className="container-outer w-100">

                {items && items.map((item,i) =>{
                    return <div className={'container-carousel container-carousel--multi'} key={i}>
                        <div className={'carousel-title text-center'}>
                            <Text2 text={item.name} titleStyle={''} tag={'h2'}/>
                        </div>
                        <Carousel data={{items: item.items,css: css }}  />
                    </div>
                })}

                <style jsx>
                    {`
                      .container-carousel{
                        margin-bottom: 120px;
                      }
                      
                      .carousel-title{
                        padding: 20px 0;
                        margin-bottom: 30px;
                      }
                    `}
                </style>
            </div>
        </>

    )
}

export default Template1
