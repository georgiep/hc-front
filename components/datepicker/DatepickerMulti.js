import 'react-day-picker/lib/style.css';
// import useScroll from "../../hooks/useScroll";
import dynamic from "next/dynamic";

const DayPicker = dynamic(() => import('react-day-picker'))

const DatepickerMulti = (props) => {

    const { from, to, enteredTo } = props.state;

    // const { scrollY } = useScroll()
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: new Date() };
    const selectedDays = [from, { from, to: enteredTo }];

    return (
        <div className={'datepicker-container'}>
            <div className={`rpt-close-book-calendar-v ${props.show || 'hidden'}`} onClick={props.close} />
            <div className={`rpt-book-calendar rpt-book-calendar--multi datepicker-container ${props.show || 'hidden'}`}>
                <div className={'triangle'}></div>
                <DayPicker
                    className="Range"
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayMouseEnter={props.handleDayMouseEnter}
                    numberOfMonths={props.numberOfMonths || 2}
                    onDayClick={props.handleDayClick}
                />
                <style jsx global>{`

                .rpt-close-book-calendar-v{
                   position: fixed;
                    width: 200vw;
                    height: 200vh;
                    z-index: -1;
                    background: transparent;
                    opacity: 0;
                    border-radius: 5px;
                    left: -100vw;
                    top: -100vh;
                    @media (max-width: 1000px) {
                        display: none;
                    }
                }
                
                .datepicker-container{
                    //margin: 0 !important;
                    padding: 0 !important;
                    @media (max-width: 1000px) {
                        height: 100%;
                        overflow: auto;
                        position: relative;
                    }
                }
                
                .promo-code-input{
                    padding: 0;
                    margin: 0;
                    border: 0;
                    background: transparent;
                }
                .rpt-book-calendar {
                  position: absolute;
                  z-index: 9999999;
                  background: #FFF;
                  box-shadow: none;
                  border-radius: 0;
                  left: 235px;
                  margin-top: 98px;
                  border: 1px solid #A5BFE8;
                   @media (max-width: 1000px) {
                      left: 0;
                      margin-top: 0;
                      border-radius: 0;
                      border: 0;
                      position: relative;
                   }
                  .triangle{
                     position: absolute;
                     top: -9px;
                     margin-left: 64px;
                  }
                  
                  @media (max-width: 992px) {
                     left: 0;
                  }
                  @media (max-width: 600px) {
                    left: 4px;
                  }
                
                  &--multi {
                    .DayPicker:not(.DayPicker--interactionDisabled)
                      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
                      //background-color: #4A90E2 !important;
                    }
                
                    .DayPicker:not(.DayPicker--interactionDisabled)
                      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside)
                      > div:hover {
                      padding: 5px 5px !important;
                      //background: transparent !important;
                      position: relative;
                      margin: 0 !important;
                    }
                
                    .DayPicker:not(.DayPicker--interactionDisabled)
                      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside)
                      > div:hover
                      > .cell-container--date {
                      padding: 9px 9px;
                      border-radius: 0;
                      border: 1px solid #168ef1;
                      color: #168ef1;
                      font-weight: 700;
                      background: #fff;
                      z-index: 1;
                      position: relative;
                    }
                
                    .DayPicker
                      .DayPicker-wrapper
                      .DayPicker-Months
                      .DayPicker-Month
                      .DayPicker-Day.DayPicker-Day--selected:hover {
                      //background: transparent !important;
                      color: #000 !important;
                    }
                
                    .DayPicker .DayPicker-Day--start span {
                      position: absolute;
                      width: 23px;
                      height: 35px;
                      top: 0;
                      right: 0;
                      background: rgba(33, 175, 228, 0.2);
                    }
                
                    .DayPicker .DayPicker-Day--end span {
                      position: absolute;
                      width: 23px;
                      height: 35px;
                      top: 0;
                      left: 0;
                      background: rgba(33, 175, 228, 0.2);
                    }
                
                    .DayPicker {
                      .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                        //background: #4A90E2 !important;
                      }
                
                      .DayPicker-wrapper {
                        .DayPicker-Months {
                          .DayPicker-Month {
                            .DayPicker-Day {
                              min-width: 47px;
                              margin: 5px 0;
                              padding: 0;
                              max-width: 47px;
                              max-height: 47px;
                              width: 47px !important;
                              height: 47px !important;
                
                              &.DayPicker-Day--start,&.DayPicker-Day--end{ 
                                background: #A5BFE8 !important;
                                color: #fff !important;
                              }
                            
                            }
                          }
                        }
                      }
                    }
                  }
                  @media (max-width: 600px) {
                    left: 0;
                    height: calc(100% - 193px);
                    overflow: auto;
                  }
                  .DayPicker {
                    
                    box-shadow: 0 5px 22px rgb(0 0 0 / 17%);
                    border-radius: 0;
                    .DayPicker-wrapper {
                      position: relative;
                      flex-direction: row;
                      padding-bottom: 1em;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                      user-select: none;
                      .DayPicker-Months {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        min-width: 684px;
                        @media (max-width: 1000px) {
                             min-width: 320px;
                       }
                        @media (max-width: 767px) {
                          min-width: 320px;
                        }
                        .DayPicker-Month {
                          border-spacing: 0;
                          border-collapse: collapse;
                          -webkit-user-select: none;
                          -moz-user-select: none;
                          -ms-user-select: none;
                          user-select: none;
                          display: block;
                          margin: 0 24px;
                          @media (max-width: 1000px) {
                                margin: 0;
                          }
                          @media (max-width: 767px) {
                            margin: 0;
                          }
                          .DayPicker-Day {
                            display: table-cell;
                            border-radius: 0;
                            vertical-align: middle;
                            text-align: center;
                            cursor: pointer;
                            width: 31px;
                            height: 31px;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 16px;
                            letter-spacing: 0;
                            border: 1px dotted rgba(227, 228, 239, 0.8);
                
                            &--today {
                              color: inherit;
                            }
                            &--selected {
                              color: #000;
                            }
                            &.DayPicker-Day--disabled {
                              background: #fafafa;
                              border-radius: 0;
                              pointer-events: none;
                
                              .cell-container--price {
                                > span {
                                  color: #dce0e0 !important;
                                }
                              }
                            }
                            &:hover {
                              //background: blue !important;
                              //color: #000 !important;
                            }
                            &.DayPicker-Day--outside {
                              &:hover {
                                //background: #FFF !important;
                                color: #FFF !important;
                              }
                            }
                            .date-container-price-booked {
                              background: #fafafa;
                              border-radius: 0;
                              pointer-events: none;
                            }
                            .date-container-price {
                              color: red;
                            }
                          }
                          .DayPicker-Weekdays {
                            display: table-header-group;
                            margin-top: 1em;
                            .DayPicker-WeekdaysRow {
                              display: table-row;
                              .DayPicker-Weekday {
                                display: table-cell;
                                text-align: center;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 17px;
                                letter-spacing: 0;
                                padding: 9px;
                                color: #168eea;
                                padding-bottom: 18px;
                              }
                              .DayPicker-Weekday abbr[title] {
                                border-bottom: none;
                                text-decoration: none;
                                color: #a0a0a0;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 17px;
                                letter-spacing: 0;
                                text-align: center;
                              }
                            }
                          }
                          .DayPicker-Caption {
                            display: table-caption;
                            font-size: 15px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 18px;
                            letter-spacing: 0em;
                            width: 100%;
                            padding: 25px 0 17px 0;
                            text-align: left;
                            color: #323b43;
                            > div {
                              font-size: 15px;
                              font-style: normal;
                              font-weight: 700;
                              line-height: 18px;
                              text-align: center;
                              color: #323b43;
                            }
                          }
                        }
                        .DayPicker-Month:nth-child(1) {
                          margin-right: 0;
                          @media (max-width: 1000px) {
                            margin-left: 0;
                          }
                          @media (max-width: 600px) {
                            margin-left: 0;
                          }
                        }
                      }
                      .DayPicker-NavBar {
                        position: absolute;
                        width: 100%;
                        left: 0;
                        height: 44px;
                        top: 5px;
                        .DayPicker-NavButton--prev {
                          left: 14px;
                          margin-right: 1.5em;
                          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgBhdA7CgIxEAbgmQQrG4+0C2KjhUfYWpttxHJiqY2CWIuH0EbB9QjewFPYCI7OgLLL5jFF8id8DJkABIpWu4Jo3ZNsvGC5dQi8x27n6kUKEEkystnoHgEFzSeHBgqBP4oBvUsBfTgaw5AoW51Pt2wwlJx9W43z/uhRXY73BpIlBe0vxKCttw3B1o+72XQBiE4yw7vU6XzTCETAkp+vXM4fdwBX30jh/lMAAAAASUVORK5CYII=);
                        }
                        .DayPicker-NavButton--next {
                          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgBhdExCsJAEIXhebOmsvFG0XRioUewT6FdykmqYCWi1sFLaBU0N/AKXsJCkdXdgCjsZv9imv0YFobok0g1kNVuSZ7YDPTvZ4DWUm5zL9Iv2lisIC6ozGjq4zVOJjcwzcAYxskYTX26/KEQVL9rfRDkSMr9HEpX7X91wRQIzBpdW0gjz7O0QAjYbSHwRV3A1J5F6YUPmHr2LXqO+BFNJUsP5OgNXBBXBb2j3RwAAAAASUVORK5CYII=);
                        }
                      }
                    }
                  }
                
                  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                    position: initial !important;
                    background: #EDF2FA !important;
                  }
                  
                }
                
                .rpt-close-book-calendar {
                  position: fixed;
                  left: 0;
                  top: 80px;
                  width: 100%;
                  height: calc(100% - 80px);
                  z-index: 1;
                  background: #fff;
                  opacity: 0.95;
                  border-radius: 5px;
                  @media (max-width: 1000px) {
                    top: 110px;
                  }
                }
                
                .is-multi {
                  @media (max-width: 1000px) {
                    .rpt-book-calendar {
                      top: 100px !important;
    
                    }
                    .rpt-close-book-calendar {
                      top: 100px !important;
                      height: calc(100% - 100px) !important;
                    }
                  }
                }
            
              
            `}</style>
            </div>
        </div>
    )
}

export default DatepickerMulti