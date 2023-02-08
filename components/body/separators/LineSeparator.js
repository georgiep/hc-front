import React from "react";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const LineSeparator = ({color,direction,maxWidth = '250px',padding=0,margin='0 auto'}) => {

    return(
        <>
            <div>
                <span style={{maxWidth: maxWidth}}/>
            </div>
            <style jsx>
                {`
                  div{
                    position: relative;
                    margin: ${margin};
                    padding: ${padding};
                  }
                  
                  span{
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    background: ${color};
                  }
                  
                  @media only screen and (max-width: ${mediaBreakPoints.sm}) {
                         span{
                            left: initial;
                            right: 0;
                            max-width: 220px !important;
                         }
                 }
                `}
            </style>
        </>

    )
}
export default LineSeparator

