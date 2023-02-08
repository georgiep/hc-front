import Single from "./Single";
import React from "react";
import PrefetchLink from "components/links/PrefetchLink"
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import('react-masonry-css'))

const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1
};

const Template1 = ({ data }) => {
    let { items, css, link } = data;

    console.log(link)
    return (
        <div className="items-container-outer d-flex justify-content-center flex-column">

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {items &&
                    items.map((item, index) => {
                        return (
                            <div key={index} className="post-item">
                                <Single
                                    item={item}
                                    css={css}
                                />
                            </div>
                        );
                    })}
            </Masonry>
            {/*<div className="post-container" style={{"height":`${items.length * 262}px`}}>*/}
            {/*    {items &&*/}
            {/*        items.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <div key={index} className="post-item">*/}
            {/*                    <Single*/}
            {/*                        item={item}*/}
            {/*                        css={css}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*</div>*/}

            {
                link && <div className={'d-block'}>
                    <PrefetchLink pathname={link.pathname}>
                        <button className={'button-secondary f-r text-uppercase'}>
                            see all
                        </button>
                    </PrefetchLink>
                </div>
            }


            <style jsx global>
                {`

                    .my-masonry-grid {
                      display: -webkit-box; /* Not needed if autoprefixing */
                      display: -ms-flexbox; /* Not needed if autoprefixing */
                      display: flex;
                      margin-left: -30px; /* gutter size offset */
                      width: 100%;
                    }
                    .my-masonry-grid_column {
                      padding-left: 30px; /* gutter size */
                      background-clip: padding-box;
                    }
                    
                    /* Style your items */
                    .my-masonry-grid_column > div {  
                      
                      margin-bottom: 30px;
                    }
                    
                    .my-masonry-grid_column:nth-child(1) {
                         margin-top: 30px;
                    }
                 
                    .post-item {
                        // width: 48%;
                        margin-bottom: 2%;
                        // height: 500px;
                    }
                    
                    @media only screen and (max-width: 600px) {
                      .my-masonry-grid{
                        margin-left: 0 !important;
                      }
                      
                     .my-masonry-grid_column {
                       padding-left: 0 !important;
                     }
                   }
                   
                `}
            </style>
        </div>
    );
};

export default Template1;
