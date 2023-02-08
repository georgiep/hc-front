import React, {useContext, useEffect} from "react";
import {AvailabilityStateContext} from "context/AvailabilityContext";
import {useDatepickerMulti} from "components/datepicker/hooks/useDatepickerMulti";
import Text2 from "components/commons/Text2/Text2";
import {Guests} from "components/datepicker/Guests/Guests";
import FormInput from './FormInput'
import {CreateQueryParams,getInitialState,style} from './_helpers'
import {formatDateString} from 'helpers/dates'
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

const MobileView = ({action}) => {

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


    const [state, {handleDayMouseEnter,updateSlider,handleOpenClick,handleSelectClick,handleDayClick,handleFocus,handleBlur,updateSelect}] = useDatepickerMulti(getInitialState(hotelOccupancy),AvailabilityContext)

    const reset = () => {
        handleOpenClick({})
        action()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleOpenClick({select: true})
    }

    const label = Object.keys(state.guests.options).reduce((item, key) => {
        return item + parseInt(state.guests.options[key].value)
    }, 0)

    const GuestLabel = parseInt(label) > 1 ? 'GUESTS' : 'GUEST'

    const show = Object.values(state.view).some((item)=> item)

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

    useEffect(() => {
        handleOpenClick({select: true})
    },[])

    const formAction = state.selected ? CreateQueryParams(state.params,state.selected.value) :  CreateQueryParams(state.params,'https://aquavistahotels.reserve-online.net/')

    return <>
        {

                <>
                    <div onClick={reset} className={'close-picker-mobile'}></div>
                    <form className={'d-flex flex-wrap flex-column form-container form-container--mobile'} action={formAction} target={'_blank'}>
                        <input type="hidden" name="adults" value={`${state.params.adults}`} />
                        <input type="hidden" name="children" value={`${state.params.children}`} />
                        <input type="hidden" name="checkin" value={`${state.params.checkin}`} />
                        <input type="hidden" name="checkout" value={`${state.params.checkout}`} />
                        <input type="hidden" name="currency" value={`${state.params.currency}`} />
                        <input type="hidden" name="rooms" value="1" />
                        <FormInput mobile label={'HOTEL - location'} hideClass={'d-none'} active={state.view.select} action={{onClick: () => handleOpenClick({select: !state.view.select})}}>
                            <Select
                                inputId="select-input"
                                onChange={handleSelectClick}
                                // defaultValue={null}
                                options={options}
                                className="react-select-container promo-heading-text secondary-light font-500"
                                classNamePrefix="react-select"
                                menuIsOpen={state.view.select}
                                components={defaultComponents}
                                value={Selected}
                                styles={style}
                            />
                        </FormInput>

                        <FormInput mobile label={'CHECK IN - CHECK OUT'} hideClass={'d-none'} active={state.view.datepicker} action={{onClick: () => handleOpenClick({datepicker: !state.view.datepicker})}}>
                            <Text2 text={`${formatDateString(state.from)}-${formatDateString(state.enteredTo || state.to)}`} tag={'div'} titleStyle={'promo-heading-text text-center secondary-light font-500'}/>
                        </FormInput>

                        {
                            state.view.guests ||  state.view.promoCode ?
                                <div className={'d-flex'}>
                                    <div className={'flex-grow-1'}>
                                        <FormInput mobile label={'GUESTS'} hideClass={''} active={state.view.guests} action={{onClick: () => handleOpenClick({guests: true})}}>
                                            <Text2 text={label + ' ' +GuestLabel} tag={'div'} titleStyle={'promo-heading-text text-center secondary-light font-500'}/>
                                        </FormInput>
                                    </div>
                                    <div>
                                        <FormInput mobile label={'Promo code'} hideClass={''} active={state.view.promoCode} action={{onClick: () => handleOpenClick({promoCode: true})}}>
                                            <input type={'text'} placeholder={'write'} id={'promoCode-input'} className={'promo-heading-text text-center secondary-light font-500 promo-code-input'}/>
                                        </FormInput>
                                    </div>
                                </div> : null
                        }

                        <div className={'form-content'}>

                            <div className={`flex-column ${state.view.guests || state.view.promoCode ? 'd-flex' : 'd-none'}`}>
                                <Guests
                                    actions={
                                        {
                                            onSliderChange: (param) => updateSlider(param),
                                            onOpen: () => handleOpenClick({guests: !state.view.guests}),
                                        }
                                    }
                                    noLabel={true}
                                    view = {state.view.guests || state.view.promoCode}
                                    {...state.guests}
                                />
                            </div>
                            <div className={`flex-column select-component ${state.view.select ? 'd-flex' : 'd-none'}`}>

                            </div>
                            <div className={`flex-column form-picker h-100 calendar ${state.view.datepicker ? 'd-flex' : 'd-none'}`} >
                                <DatepickerMulti close={handleOpenClick} show={state.view.datepicker} handleDayMouseEnter={handleDayMouseEnter} handleDayClick={handleDayClick} state={state}/>
                            </div>
                        </div>

                        <div className={'d-flex form-control-actions'}>
                            {
                                state.view.select ?
                                    <>
                                        <div onClick={reset}>
                                            <button className={'button-fill w-100'}>CANCEL</button>
                                        </div>
                                        <div className={'header-scrolling'} onClick={() => handleOpenClick({datepicker: !state.view.datepicker})}>
                                            <button className={'button-fill w-100'}>NEXT</button>
                                        </div>
                                    </>
                                    : null
                            }
                            {
                                state.view.datepicker ?
                                    <>
                                        <div onClick={() => handleOpenClick({select: !state.view.select})}>
                                            <button className={'button-fill w-100'}>CANCEL</button>
                                        </div>
                                        <div className={'header-scrolling'} onClick={() => handleOpenClick({guests: !state.view.guests})}>
                                            <button className={'button-fill w-100'}>NEXT</button>
                                        </div>
                                    </>
                                    : null
                            }
                            {
                                state.view.guests ||  state.view.promoCode ?
                                    <>
                                        <div onClick={() => handleOpenClick({datepicker: !state.view.datepicker})}>
                                            <button className={'button-fill w-100'}>CANCEL</button>
                                        </div>
                                        <div className={'header-scrolling'}>
                                            <button className={'button-fill w-100'}>SEARCH</button>
                                        </div>
                                    </>
                                    : null
                            }
                        </div>

                    </form>

                </>
        }
        <style jsx>{datepickerStyle}</style>
    </>


}

export default MobileView