import React, {useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import dynamic from "next/dynamic";
const DesktopView = dynamic(() => import("components/availability/partials/form5/DesktopView"))
const MobileView = dynamic(() => import("components/availability/partials/form5/MobileView"))

const Form5 = () => {

    const {width} = useWindowDimensions()

    const [open,setOpen] = useState(false)

    return (
        <>
            {width > 1000 ? <DesktopView/> :
                (
                    <>
                        {
                            !open ?  <div className={'d-flex check-availability--mobile '} onClick={(e) =>  setOpen(true)}>
                                <button className={'button-dark'}>CHECK AVAILABILITY</button>
                            </div> : <MobileView action={() => setOpen(false)}/>
                        }
                    </>
                )
            }
            <style jsx>{`
                .check-availability--mobile button{
                       min-width: 262px !important;
                }            
                .check-availability--mobile{
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    margin: 0 auto;
                    z-index: 100;
                  }
            `}</style>
        </>
    )
}


export default Form5