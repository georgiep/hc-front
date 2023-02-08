import React, {useState} from "react";
import {Line} from "components/svgs/Line";

const IncrementDecrementComponent = ({min,max,start,action}) => {

    const [option,setOption] = useState(start ? parseInt(start) : 2)

    const click = (dir) => {
        if(dir === 'remove' && option > min) setOption(option - 1)
        if(dir === 'add' && option < max) setOption(option + 1)
        if(action) action()
    }

    return(
        <div className={"select-container pointer"} >

            <div className={"minus position-relative d-inline-block"} onClick={() => click('remove')}>
                <span className={"position-absolute center-l-t-absolute-position"} />
            </div>

            <div className={"d-inline-block option-number"}>
                <span>{option && option}</span>
            </div>

            <div className={"plus position-relative d-inline-block"} onClick={() => click('add')}>
                <span className={"position-absolute center-l-t-absolute-position"} />
                <span className={"position-absolute"} />
            </div>

            <style jsx>{`
                .minus,.plus{
                    width: 21px;
                    height: 21px;
                    top: 3px;
                }
                
                .select-container {
                    max-width: 300px;
                    margin: 0 auto;
                    text-align: center;
                }
                
                .minus span,.plus span{
                   width: 21px;
                   height: 1px;
                   background: #000000;
                }
                
                .plus span:nth-child(2){
                   transform: rotate(90deg);
                   top: 10px;
                   left: 1px;
                }
                
                .option-number{
                    font-family: SF Pro Display;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 23px;
                    letter-spacing: 0.03em;
                    text-align: center;
                    min-width: 88px;
                }
  
            `}</style>
        </div>
    )
}

export default IncrementDecrementComponent