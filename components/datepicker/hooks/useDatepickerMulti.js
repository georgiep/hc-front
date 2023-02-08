import React, {
    useReducer
} from 'react'
import {DateUtils} from 'react-day-picker'
import {formatDateYYYY} from 'helpers/dates'

const resetView = () => {
    return {
        select: false,
        datepicker: false,
        guests: false,
        promoCode: false
    }
}


const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
const reducer = (state, action) => {
    switch (action.type) {
        case 'updateSlider':
            return {
                ...state,
                guests: {
                    ...state.guests,
                    options:{
                        ...state.guests.options,
                        [Object.keys(action.payload)[0]]: {
                            ...state.guests.options[Object.keys(action.payload)[0]],
                            value: Object.values(action.payload)[0]
                        }
                    }
                },
                params:{
                    ...state.params,
                    [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
                }
            }
        case 'handleOpen':
            return {
                ...state,
                view: {
                    ...resetView(),
                    ...action.payload
                },
            }
        case 'handleSelect':
            return {
                ...state,
                view: {
                    ...state.view,
                    ...resetView(),
                    datepicker: true
                },
                guests: {
                    ...state.guests,
                    allowed: {
                        adults: true,
                        children: action.payload.children_allowed,
                        infants: action.payload.infants_allowed,
                        rooms: true
                    },
                    min: {
                        persons: 1,
                        rooms: 1,
                        stay: 1
                    },
                    max: {
                        children: action.payload.children,
                        infants: action.payload.infants,
                        occupancy: action.payload.occupancy,
                        persons: action.payload.persons,
                        rooms: 5,
                        stay: 30
                    },
                    label: 2,
                    options: {
                        adults: {
                            default: 2,
                            placeholder: 'ADULTS',
                            key: 'adults',
                            value: 2,
                            allowed: true,
                        },
                        children: {
                            default: 2,
                            placeholder: 'CHILDREN',
                            key: 'children',
                            value: 0,
                            allowed: action.payload.children_allowed,
                        },
                        infants: {
                            default: 0,
                            placeholder: 'INFANTS',
                            key: 'infants',
                            value: 0,
                            allowed: action.payload.infants_allowed,
                        },
                    },
                },
                selected: action.payload.selected,
                params: {
                    adults: 2,
                    checkin: new Date(),
                    checkout: tomorrow,
                    children: 0,
                    currency: "EUR",
                    infants: 0,
                    rooms: 1
                }
            }
        case 'updateSelect':
            return {
                ...state,
                view: {
                    ...state.view,
                    ...resetView(),
                    datepicker: false
                },
                guests: {
                    ...state.guests,
                    allowed: {
                        adults: true,
                        children: action.payload.children_allowed,
                        infants: action.payload.infants_allowed,
                        rooms: true
                    },
                    min: {
                        persons: 1,
                        rooms: 1,
                        stay: 1
                    },
                    max: {
                        children: action.payload.children,
                        infants: action.payload.infants,
                        occupancy: action.payload.occupancy,
                        persons: action.payload.persons,
                        rooms: 5,
                        stay: 30
                    },
                    label: 2,
                    options: {
                        adults: {
                            default: 2,
                            placeholder: 'ADULTS',
                            key: 'adults',
                            value: 2,
                            allowed: true,
                        },
                        children: {
                            default: 2,
                            placeholder: 'CHILDREN',
                            key: 'children',
                            value: 0,
                            allowed: action.payload.children_allowed,
                        },
                        infants: {
                            default: 0,
                            placeholder: 'INFANTS',
                            key: 'infants',
                            value: 0,
                            allowed: action.payload.infants_allowed,
                        },
                    },
                },
                selected: action.payload.selected,
                params: {
                    adults: 2,
                    checkin: new Date(),
                    checkout: tomorrow,
                    children: 0,
                    currency: "EUR",
                    infants: 0,
                    rooms: 1
                }
            }
        case 'handleDayClick':
            return {
                ...state,
                view: {
                    ...resetView(),
                    datepicker: true
                },
                selected: action.payload
            }
        case 'handleFirstDayClick':
            return {
                ...state,
                from: action.payload,
                to: null,
                enteredTo: null,
                params: {
                    ...state.params,
                    checkin: formatDateYYYY(action.payload),
                }
            }
        case 'handleSecondDayClick':
            return {
                ...state,
                to: action.payload,
                enteredTo: action.payload,
                view: {
                    ...resetView(),
                    guests: true
                },
                params: {
                    ...state.params,
                    checkout:  formatDateYYYY(action.payload),
                }
            }
        case 'handleMouseEnter':
            return {
                ...state,
                enteredTo: action.payload,
            }
        case 'handleResetClick':
            return {
                ...state,
                from: action.payload,
                to: null,
                enteredTo: null,
            }
        case 'handleFocus':
            return {
                ...state,
                view: {
                    ...resetView(),
                    select: true
                }
            }
        case 'handleBlur':
            return {
                ...state,
                view: {
                    ...resetView(),
                },
            }


        default:
            return state
    }
}

export const useDatepickerMulti = (initialState,AvailabilityContext) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleDayMouseEnter = (day) => {
        const { from, to } = state;
        if (!isSelectingFirstDay(from, to, day)) {
            dispatch({type: 'handleMouseEnter', payload: day})
        }
    }

    const updateSlider = (payload) => {
        dispatch({type: 'updateSlider', payload: payload})
    }

    const handleOpenClick = (payload) => {
        if(payload.select){
            setTimeout(()=>{
                if(document.querySelector("#select-input")){
                    document.querySelector("#select-input").focus();
                }
            },200)
        }
        if(payload.promoCode){
            if(document.querySelector("#promoCode-input")){
                document.querySelector("#promoCode-input").focus();
            }
        }

        dispatch({type: 'handleOpen', payload: payload})
    }

    const handleSelectClick = (payload) => {
        let hotelOccupancy
        Object.keys(AvailabilityContext).map(item => {
            if(AvailabilityContext[item].book_now === payload.value){
                hotelOccupancy = AvailabilityContext[item]
            }
        })
        const Payload = {
            selected: payload,
            ...hotelOccupancy
        }
        dispatch({type: 'handleSelect', payload: Payload})
    }

    const updateSelect = (payload) => {
        let hotelOccupancy
        Object.keys(AvailabilityContext).map(item => {
            if(AvailabilityContext[item].book_now === payload.value){
                hotelOccupancy = AvailabilityContext[item]
            }
        })
        const Payload = {
            selected: payload,
            ...hotelOccupancy
        }
        dispatch({type: 'updateSelect', payload: Payload})
    }

    const handleDayClick = (day) => {

        const { from, to } = state;

        if (from && to && day >= from && day <= to) {
            dispatch({type: 'handleResetClick', payload: day})
            return;
        }

        if (isSelectingFirstDay(from, to, day)){
            dispatch({type: 'handleFirstDayClick', payload: day})
        } else {
            dispatch({type: 'handleSecondDayClick', payload: day})
        }

    }

    const handleFocus = () => {
        dispatch({type: 'handleFocus', payload: null})
    }

    const handleBlur = () => {
        if(state.view.select){
            dispatch({type: 'handleBlur', payload: null})
        }
    }

    return  [
        state,
        {
            handleDayMouseEnter: handleDayMouseEnter,
            updateSlider: updateSlider,
            handleOpenClick: handleOpenClick,
            handleSelectClick: handleSelectClick,
            handleDayClick: handleDayClick,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            updateSelect: updateSelect
        }
    ]
}


const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
}
