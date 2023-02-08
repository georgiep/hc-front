// import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dynamic from "next/dynamic";

const DayPicker = dynamic(() => import('react-day-picker'))

const DatepickerSImple = (props) => {

    return (
        <DayPicker {...props}/>
    )
}

export default DatepickerSImple