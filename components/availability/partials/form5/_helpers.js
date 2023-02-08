import {formatDateYYYY} from 'helpers/dates'
export const getInitialState  = (hotel) => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return {
        from: new Date(),
        to: tomorrow,
        enteredTo: tomorrow,
        checkInLabel: 'Check-In',
        checkOutLabel: 'Check-Out',
        view: {
            select: false,
            datepicker: false,
            guests: false,
            promoCode: false
        },
        guests: {
            allowed: {
                adults: true,
                children: hotel ? hotel.children_allowed : false,
                infants: hotel ? hotel.infants_allowed : false,
                rooms: true
            },
            min: {
                persons: 1,
                rooms: 1,
                stay: 1
            },
            max:{
                children: hotel ? hotel.children : 4,
                infants: hotel ? hotel.infants : 4,
                occupancy: hotel ? hotel.occupancy : 4,
                persons: hotel ? hotel.persons : 4,
                rooms: 5,
                stay: 30
            },
            label: 2,
            options: {
                adults: {
                    default: 2,
                    placeholder:  'ADULTS',
                    key: 'adults',
                    value: 2,
                    allowed: true,
                },
                children: {
                    default: 2,
                    placeholder: 'CHILDREN',
                    key: 'children',
                    value: 0,
                    allowed: hotel ? hotel.children_allowed : false,
                },
                infants: {
                    default: 0,
                    placeholder: 'INFANTS',
                    key: 'infants',
                    value: 0,
                    allowed: hotel ? hotel.infants_allowed : false,
                },
            }
        },
        params: {
            adults: 2,
            checkin: formatDateYYYY(new Date()),
            checkout: formatDateYYYY(tomorrow),
            children: 0,
            currency: "EUR",
            infants: 0,
            rooms: 1
        },
        selected: hotel ? { label: hotel.title, value: hotel.book_now } : null
    };
}


export function CreateQueryParams(params,value){
    let q = ''
    Object.keys(params).map(item => {
        if(params[item]){
            q += `${item}=${params[item]}&`
        }
    })
    return value + '?' + q
}


export const style = {
    control: base => ({
        ...base,
        border: 0,
        // This line disable the blue border
        boxShadow: "none"
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            fontSize: '12px',
            fontFamily: 'Gotham Greek !important'
        };
    },
};