import Single from "./Single";
import React from "react";
import PrefetchLink from "components/links/PrefetchLink"
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import('react-masonry-css'))
import {mediaBreakPoints} from "../../../../public/globalCss/mediaBreakPoints";

const breakpointColumnsObj = {
    default: 1,
    5000: 2,
    991: 1,
    700: 1,
    500: 1
};

const Template2 = ({ data }) => {
    let { items, css, link } = data;

    return (
        <>
            <div className="items-container-outer d-flex justify-content-center">
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
                          padding-left: 15px; /* gutter size */
                          background-clip: padding-box;
                        }
    
                        /* Style your items */
                        .my-masonry-grid_column > div {  
                          background: grey;
                          margin-bottom: 30px;
                        }
    
                        .my-masonry-grid_column:nth-child(1) {
                             margin-top: 30px;
                        }
                        
                        .my-masonry-grid_column:nth-child(odd) {
                              padding-right: 15px;
                        }
    
                        .post-item {
                            // width: 48%;
                            margin-bottom: 2%;
                            height: 500px;
                        }
    
                        @media only screen and (max-width: 600px) {
                          .my-masonry-grid{
                            margin-left: 0 !important;
                          }
    
                         .my-masonry-grid_column {
                           padding-left: 0 !important;
                         }
                         .post-item {
                            // width: 48%;
                            margin-bottom: 2%;
                            height: 385px;
                         }
                       }
    
                        @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                          .hover-items{
                              z-index: 1;
                          }
                        } 
                        
                        .sp-button{
                          margin-right: 15px;
                        }
                           
                    `}
                </style>
            </div>

            {
                link && <div className={'d-block sp-button'}>
                    <PrefetchLink pathname={link.pathname} api={''}>
                        <button className={'button-secondary f-r text-uppercase'}>
                            see all
                        </button>
                    </PrefetchLink>
                </div>
            }

        </>
    );
};

export default Template2;
