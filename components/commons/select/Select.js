import React, {useState} from "react";
import {Arrow_down} from 'components/svgs/Arrow_down'

const Select = ({items,action,arrow}) => {

    const [option,setOption] = useState(items ? items[0] : '')
    const [show,setShow] = useState(false)

    const click = (i) => {
        setOption(items[i])
        setShow(false)
        if(action) action()
    }

    return(
        <div className={"position-relative select-container pointer"} onClick={() => setShow(!show)}>
            <div className={"position-relative"} >
                <span>{option && option}</span>
                {
                    arrow &&
                      <span className={"select-arrow position-absolute"}><Arrow_down/></span>
                }
            </div>
            {
                show &&
                <div className={"position-absolute select-options-container"}>
                    {items && items.map( (opt,i) => {
                        return(
                            <div key={i} onClick={() => click(i)}>
                                {opt}
                            </div>
                        )
                    })}
                </div>
            }
            <style jsx>{`
                .select-container{
                   background: #FFF;
                }
                .select-options-container{
                   background: #FFF; 
                }
                .select-options-container > div{
                   padding: 20px;
                }
                .select-arrow{
                   right: 40px;
                   top: -1px;
                }
            `}</style>
        </div>
    )
}

export default Select