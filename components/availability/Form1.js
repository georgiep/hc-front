import dynamic from 'next/dynamic'
import React, {useState} from 'react';
import Select from "components/commons/select/Select";
import IncrementDecrementComponent from 'components/commons/select/IncrementDecrementComponent'
import {formatDateDMY} from "helpers/formatDate";
import {Calendar} from "components/commons/svgs"
const DatepickerSimple = dynamic(() => import("components/datepicker/DatepickerSimple"))

const items = [
    "Enjoy exclusive benefits",
    "Enjoy exclusive benefits 1",
    "Enjoy exclusive benefits 2",
    "Enjoy exclusive benefits 3",
    "Enjoy exclusive benefits 4",
]

const Form1 = () => {

    const [show,setShow] = useState(false)

    const [day,setDay] = useState({
        selectedDay: '05/28/2021'
    })

    const handleDayClick = (day) => {
        setDay({ selectedDay: day });
        setShow(false)
    }

    return (
        <>
            <div className={"position-relative availability-form-container"} onMouseLeave={() => setShow(false)}>
                <section className='row no-gutters availability-form position-absolute center-absolute-position w-100 pointer'>
                    <div className={"availabilty-book-directly"}>
                        <div>Book Directly</div>
                        <div>
                            <Select items={items} arrow={true}/>
                        </div>
                    </div>
                    <div className={"availabilty-checkin"}>
                        <div onClick={() => setShow(!show)}>
                            <div>CHECKIN</div>
                            <div>{day.selectedDay && formatDateDMY(day.selectedDay)}</div>
                            {/*<div><Calendar/></div>*/}
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
                    </div>
                    <div className={"availabilty-number-of-nights"}>
                        <div>Nº OF NIGHTS</div>
                        <div>
                            <IncrementDecrementComponent min={1} max={5} start={2}/>
                        </div>
                    </div>
                    <div className={"availability-book"}>
                        <div className={"availability-button d-inline-block"}>
                            <div>BOOK NOW</div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                
                   .availability-form-container{
                     z-index: 10;
                   }
                   .availability-form{
                     max-width: 1098px;
                     bottom: 20px;
                     background: #fff;
                     display: flex;
                     justify-content: space-between;
                     flex-wrap: wrap;
                     align-items: center;
                     justify-content: center;
                     padding: 18px 0px;
                     background: #fff;
                   }
                   
                   .availability-form > div{
                     border-right: 1px solid #DBDDEA;
                   }
                   
                   .availability-form > div:nth-child(1){
                     flex: 0 0 360px;
                   }
                   
                   .availability-form > div:nth-child(2){
                     flex: 0 0 248px;
                   }
                   
                   .availability-form > div:nth-child(3){
                     flex: 0 0 192px;
                   }
                   
                   .availability-form > div:nth-child(4){
                     flex: 0 0 297px;
                     border-right: 0;
                   }
                   
                   .availabilty-book-directly > div:nth-child(1){
                   
                        font-size: 19px;
                        font-style: normal;
                        font-weight: 200;
                        line-height: 23px;
                        letter-spacing: 0em;
                        text-align: left;
                        padding-left: 55px;
                       position: relative;
                        top: -3px;
                       
                   }

                   .availabilty-book-directly > div:nth-child(2){
                
                       font-size: 20px;
                       font-style: normal;
                       font-weight: 400;
                       line-height: 24px;
                       letter-spacing: 0em;
                       text-align: left;
                       padding-left: 55px;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(1){
             
                       font-size: 14px;
                       font-style: normal;
                       font-weight: 400;
                       line-height: 17px;
                       letter-spacing: 0.03em;
                       text-align: left;
                       padding-left: 35px;
                   }
                   
                   .availabilty-checkin > div > div:nth-child(2){
                       font-size: 19px;
                       font-style: normal;
                       font-weight: 400;
                       line-height: 23px;
                       letter-spacing: 0.03em;
                       text-align: left;
                       padding-left: 35px;
                      padding-top: 6px;
                   }
                   
                   .availabilty-number-of-nights > div:nth-child(1){
                       font-size: 14px;
                       font-style: normal;
                       font-weight: 400;
                       line-height: 17px;
                       letter-spacing: 0.03em;
                       text-align: left;
                       padding-left: 39px;
                   }
                   
                   .availabilty-number-of-nights > div:nth-child(2){
                       padding-left: 35px;
                       padding-top: 6px;
                   }
                            
                   .availability-button{
                       background: #000;
                        padding: 25px 0;
                        font-size: 30px;
                        color: #fff;
                        margin: 0;
                        min-width: 212px;                     
                       margin-left: 32px;
                   }
                   
                   .availability-button > div{
                       font-size: 13px;
                       font-style: normal;
                       font-weight: 500;
                       line-height: 16px;
                       letter-spacing: 0.03em;
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

export default Form1