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

const Form4 = () => {

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
                <section className='row no-gutters availability-form w-100 pointer'>
                    <div className={"availabilty-checkin"}>
                        <div onClick={() => setShow(!show)}>
                            <div>Arrival Date</div>
                            <div>
                                <span><Calendar/></span>
                                <span>{day.selectedDay && formatDateDMY(day.selectedDay)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"availabilty-checkin"}>
                        <div onClick={() => setShow(!show)}>
                            <div>Departure Date</div>
                            <div>
                                <span><Calendar/></span>
                                <span>{day.selectedDay && formatDateDMY(day.selectedDay)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"availabilty-number-of-adults"}>
                        <div>Guests</div>
                        <div>
                            <span>
                                <Persons/>
                            </span>
                            <span>
                                <Select items={items} arrow={false}/>
                            </span>
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
                     z-index: 10;
                   }
                   .availability-form{
                     max-width: 920px;
                     background: #fff;
                     display: flex;
                     flex-wrap: wrap;
                     justify-content: center;
                     padding: 56px 0 38px 0;
                     background: #fff;
                     position: absolute;
                     bottom: 0;
                     right: 0;
                   }
                   
                   .availability-form > div{
                     border-bottom: 1px solid #000000;
                   }
                   
                   .availability-form > div:nth-child(1){
                     flex: 0 0 198px;
                     margin-right: 25px;
                   }
                   
                   .availability-form > div:nth-child(2){
                     flex: 0 0 198px;
                     margin-right: 25px;
                   }
                   
                   .availability-form > div:nth-child(3){
                     flex: 0 0 147px;
                     margin-right: 56px;
                   }
                   
                   .availability-form > div:nth-child(4){
                     flex: 0 0 188px;
                     border-bottom: 0;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(1){
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
                        min-width: 188px;                     
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

export default Form4