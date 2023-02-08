import React, {useContext, useEffect} from "react";
import {AvailabilityStateContext} from "context/AvailabilityContext";
import {useDatepickerMulti} from "components/datepicker/hooks/useDatepickerMulti";
import Text2 from "components/commons/Text2/Text2";
import {Guests} from "components/datepicker/Guests/Guests";
import {formatDateString} from 'helpers/dates'
import {CreateQueryParams,getInitialState,style} from './_helpers'
import FormInput from './FormInput'
import dynamic from "next/dynamic";
import {components} from "react-select";
import {datepickerStyle} from "components/datepicker/styles/datepicker_style";

const DatepickerMulti = dynamic(() => import("components/datepicker/DatepickerMulti"))
const Select = dynamic(() => import("react-select"))

function Option({ innerProps, ...props }) {
    const onClick = e => {
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation()
        innerProps.onClick(e);
    };

    props.innerProps = { ...innerProps, onClick };
    return <components.Option {...props} />;
}

const defaultComponents = {
    Option
};
const DesktopView = () => {

    const AvailabilityContext = useContext(AvailabilityStateContext)

    let hotelOccupancy = null

    Object.keys(AvailabilityContext).map(item => {
        if(window.location.href.includes(item)){
            hotelOccupancy = AvailabilityContext[item]
        }
    })

    const options = Object.values(AvailabilityContext).map(item => {
        return { value: item.book_now, label: item.title}
    })

    const [state, {handleDayMouseEnter,updateSlider,handleOpenClick,handleSelectClick,handleDayClick,handleBlur,updateSelect}] = useDatepickerMulti(getInitialState(hotelOccupancy),AvailabilityContext)

    let Selected = !hotelOccupancy ? state.selected : (hotelOccupancy ? { label: hotelOccupancy.title, value: hotelOccupancy.book_now } : { label: '', value: ''})

    if(!Selected && hotelOccupancy){
        Selected = { label: '', value: ''}
    }

    const effect = Selected || { label: '', value: ''}
    useEffect(()=>{
        if(Selected && hotelOccupancy){
            updateSelect(Selected)
        }
    },[effect.label])

    const formAction = state.selected ? CreateQueryParams(state.params,state.selected.value) :  CreateQueryParams(state.params,'https://aquavistahotels.reserve-online.net/')

    return <>
        <form className={'d-flex flex-wrap form-container'} action={formAction} target={'_blank'}>
            <input type="hidden" name="adults" value={`${state.params.adults}`} />
            <input type="hidden" name="children" value={`${state.params.children}`} />
            <input type="hidden" name="checkin" value={`${state.params.checkin}`} />
            <input type="hidden" name="checkout" value={`${state.params.checkout}`} />
            <input type="hidden" name="currency" value={`${state.params.currency}`} />
            <input type="hidden" name="rooms" value="1" />
            <FormInput label={'HOTEL - location'} active={state.view.select} action={{onClick: () => handleOpenClick({select: !state.view.select})}}>

                <Select
                    inputId="select-input"
                    onChange={handleSelectClick}
                    options={options}
                    className="react-select-container promo-heading-text secondary-light font-500"
                    classNamePrefix="react-select"
                    menuIsOpen={state.view.select}
                    components={defaultComponents}
                    value={Selected}
                    styles={style}
                />

            </FormInput>

            <FormInput
                input={<DatepickerMulti close={handleOpenClick} show={state.view.datepicker} handleDayMouseEnter={handleDayMouseEnter} handleDayClick={handleDayClick} state={state}/>}
                label={'CHECK IN - CHECK OUT'} active={state.view.datepicker}
                className={"form-picker calendar"}
                action={{onClick: () => handleOpenClick({datepicker: !state.view.datepicker})}}
            >
                <Text2 text={`${formatDateString(state.from)}-${formatDateString(state.enteredTo || state.to)}`} tag={'div'} titleStyle={'promo-heading-text text-center secondary-light font-500'}/>
            </FormInput>

            <FormInput
                label={'HOW MANY GUESTS ?'} active={state.view.guests}
                action={{onClick: () => handleOpenClick({guests: !state.view.guests})}}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <Guests
                        actions={
                            {
                                onSliderChange: (param) => updateSlider(param),
                                onOpen: () => handleOpenClick({guests: !state.view.guests}),
                            }
                        }
                        view = {state.view.guests}
                        {...state.guests}
                    />
                </div>
            </FormInput>

            <FormInput
                label={'Promo code'} active={state.view.promoCode}
                action={{onClick: () => handleOpenClick({promoCode: !state.view.promoCode})}}
                className={"form-promo"}
            >
                <input type={'text'} id={'promoCode-input'} placeholder={'write'} className={'promo-heading-text text-center secondary-light font-500'}/>
            </FormInput>

            <div className={'d-flex justify-content-center align-items-center check-availability'}>
                <button className={'button-fill'}>SEARCH</button>
            </div>

        </form>
        {
            state.view.select || state.view.promoCode ?
                <div onClick={() => handleOpenClick({})} className={'close-picker-mobile'}></div> : null
        }
        <style jsx>{datepickerStyle}</style>
    </>
}

export default DesktopView