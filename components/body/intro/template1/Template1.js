import React from 'react'
import Text2 from "components/commons/Text2/Text2";
import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import dynamic from "next/dynamic";
const SimpleMap = dynamic(() => import("components/maps/SimpleMap"))
const ImageList = dynamic(() => import('components/body/list/listOfImages/Template1'))

const Template1 = ({ data }) => {

    const { items, css, images, map, component } = data


    console.log(images)
    return (
        <>
            <div className={'intro-container-template-1 position-relative'}>
                <div className={'position-absolute bg-shadow bg-shadow--left w-100 h-100'}></div>
                <div className={'container p-0'}>
                    <div className={'d-flex w-100 flex-row py-5'}>
                        <div className={'col p-0'}>

                            <div className={'me-5 py-5'}>
                                <div className={'mb-4'}>
                                    <Text2
                                        tag={'div'}
                                        titleStyle={`title-primary primary-white`}
                                        text={'WELCOME TO NIN&BAU'}
                                    />
                                </div>

                                <Text2
                                    tag={'div'}
                                    titleStyle={`text-primary primary-white`}
                                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque'}
                                />
                            </div>

                            {images && <div><ImageList data={{items: images,css:{align:'left',minWidth: 'auto', spacing:'p-2'}}}/></div>}

                        </div>
                        <div className={'col p-0'}>
                            {
                                component === 'map' ? <SimpleMap data={map}/> : <>
                                    <ImageLoader
                                        src={'/public/hotels/nian&pau/images/hero.jpg'}
                                        alt={'alt'}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        type="relative"/>
                                    <div className={'position-relative button-link'}>
                                        <PrefetchLink pathname={''}>
                                            <button className={'button-primary text-uppercase'}>Explore Psiri</button>
                                        </PrefetchLink>
                                    </div>
                                </>
                            }


                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                    .bg-shadow{
                        background: #000000;
                        left: 0;
                        top: 0;
                        border-bottom-right-radius: 50px;
                        max-width: calc(50% + 300px);
                    }
                    .button-link{
                        top: -100px;
                        right: 20px;
                        text-align: right;
                    }
                `}
            </style>
        </>
    )
}

export default Template1

