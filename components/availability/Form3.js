import dynamic from 'next/dynamic'
import React, {useState} from 'react';
import Select from "components/commons/select/Select";
import IncrementDecrementComponent from 'components/commons/select/IncrementDecrementComponent'
import {formatDateDMY} from "helpers/formatDate";
import {Calendar,Persons} from "components/commons/svgs"
const DatepickerSimple = dynamic(() => import("components/datepicker/DatepickerSimple"))

const items = [
    1,
    2,
    3,
    4,
    5,
]

const Form3 = () => {

    const [show,setShow] = useState(false)

    const [day,setDay] = useState({
        selectedDay: '05/28/2021',
        departureDay: '06/28/2021'
    })

    const handleDayClick = (day) => {
        setDay({ selectedDay: day });
        setShow(false)
    }

    return (
        <>
            <div className={"position-relative availability-form-container"} onMouseLeave={() => setShow(false)}>
                <section className='row no-gutters availability-form center-absolute-position w-100 pointer'>
                    <div className={"availabilty-checkin"}>
                        <div onClick={() => setShow(!show)}>
                            <div>Date Check-in</div>
                            <div>
                                <span>{day.selectedDay && formatDateDMY(day.selectedDay)}</span>
                                <span><Calendar/></span>
                            </div>
                        </div>
                    </div>
                    <div className={"availabilty-checkin"}>
                        <div onClick={() => setShow(!show)}>
                            <div>Date Check-out</div>
                            <div>
                                <span>{day.selectedDay && formatDateDMY(day.selectedDay)}</span>
                                <span><Calendar/></span>
                            </div>
                        </div>
                    </div>
                    <div className={"availabilty-number-of-adults"}>
                        <div>Adults</div>
                        <div className={"availabilty-number-of-adults-select"}>
                            <div>
                                <Select items={items} arrow={true}/>
                            </div>
                        </div>
                    </div>
                    <div className={"availability-book"}>
                        <div className={"availability-button d-inline-block"}>
                            <div>CHECK RATES</div>
                        </div>
                    </div>
                    {show && <div className={"datepicker position-absolute"}>
                        <Datepicker
                            action={
                                {
                                    handleDayClick: handleDayClick
                                }
                            }
                            state={day}
                        />
                    </div>}
                </section>
                <style jsx>{`
                   .availability-form-container{
                     z-index: 1;
                   }
                   .availability-form{
                     max-width: 100%;
                     background: #fff;
                     display: flex;
                     flex-wrap: wrap;
                     justify-content: center;
                     padding: 62px 0 40px 0;
                     background: #fff;
                     position:absolute;
                     bottom: 0;
                   }
                   
                   .availability-form > div{
                     border: 1px solid #808A94;
                   }
                   
                   .availability-form > div:nth-child(1){
                     flex: 0 0 227px;
                     margin-right: 28px;
                   }
                   
                   .availability-form > div:nth-child(2){
                     flex: 0 0 227px;
                     margin-right: 28px;
                   }
                   
                   .availability-form > div:nth-child(3){
                     flex: 0 0 124px;
                     margin-right: 28px;
                   }
                   
                   .availability-form > div:nth-child(4){
                     flex: 0 0 169px;
                     border-bottom: 0;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(1){
                        font-family: SF Pro Display;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 16px;
                        letter-spacing: 0.07em;
                        text-align: left;
                        position: relative;
                        top: -25px;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(2){
                      font-family: SF Pro Display;
                      font-size: 15px;
                      font-style: normal;
                      font-weight: 300;
                      line-height: 18px;
                      letter-spacing: 0.03em;
                      text-align: left;
                      padding-top: 6px;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(2) > span:nth-child(1){
                       padding-right: 17px;
                       position: relative;
                       top: 2px;
                       padding-left: 21px;
                       font-family: SF Pro Display;
                       font-size: 16px;
                       font-style: normal;
                       font-weight: 300;
                       line-height: 19px;
                       letter-spacing: 0.03em;
                       text-align: left;
                       opacity: 0.5;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(2) > span:nth-child(2){
                       float: right;
                       padding-right: 30px;
                       padding-top: 3px;
                   }
                   

                   .availabilty-number-of-adults > div:nth-child(1){
                       font-family: SF Pro Display;
                       font-size: 13px;
                       font-style: normal;
                       font-weight: 600;
                       line-height: 16px;
                       letter-spacing: 0.07em;
                       text-align: left;
                       position: relative;
                       top: -20px;
                   }
                   .availabilty-number-of-adults > div:nth-child(2) > span{
                      display: inline-block;
                   }
                   .availabilty-number-of-adults > div:nth-child(2) > span:nth-child(2){
                      padding-left: 11px;
                      position: absolute;
                      top: 7px;
                   }
                   
                   .availabilty-number-of-adults > div:nth-child(2){
                       padding-top: 6px;
                       position: relative;
                   }
                            
                   .availability-button{
                        background: #7C6042;
                        padding: 23px 0;
                        font-size: 30px;
                        color: #fff;
                        margin: 0;
                        min-width: 169px;                     
                   }
                   
                   .availability-button > div{
                       font-family: SF Pro Display;
                       font-size: 14px;
                       font-style: normal;
                       font-weight: 500;
                       line-height: 17px;
                       letter-spacing: 0em;
                       text-align: center;
                   }
                   
                   .datepicker{
                     background: #fff;
                   }
                   
                   .availabilty-number-of-adults-select{
                     opacity: 0.5;
                   }
                   
                   .availabilty-number-of-adults-select > div{
                      margin-left: 21px;
                      position: relative;
                      top: 3px;
                   }
                   
                `}</style>
            </div>
        </>
    );
}

const Datepicker = ({action,state}) => {

    return (
        <DatepickerSimple
            onDayClick={action.handleDayClick}
            selectedDays={state.selectedDay}
        />
    )
}

export default Form3