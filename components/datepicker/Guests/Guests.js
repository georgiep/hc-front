import React, {useState} from "react";
import {guestsStyle} from "components/datepicker/Guests/guests_style";

export const Guests = ({ actions, min, max, allowed, params, options, view, noLabel }) => {


    const { onOpen, onSliderChange } = actions

    const [state, setState] = useState({
        guestsLabel: 'Guests',
        guestValue: 0,
    })


    const action = () => {
        onOpen()
    }

    let label = Object.keys(options).reduce((item, key) => {
        return item + parseInt(options[key].value)
    }, 0)

    return (
        <div className={'guests'}>
            <div
                className={`d-flex flex-column guests-status w-100 ${
                    'guestsOpen' ? 'active' : ''
                }`}
            >
                <div onClick={action}>
                    <div
                        className={'d-flex flex-align-center rpt-primary-dark'}
                        onClick={action}
                    >

                        {
                            !noLabel && <span className={'promo-heading-text text-center secondary-light font-500 w-100'}>
                          {label} {parseInt(label) > 1 ? 'GUESTS' : 'GUEST'}
                        </span>
                        }


                    </div>
                </div>
            </div>

            {view && (
                <>
                    <div className={'triangle'}></div>
                    <div className={'time-options h-auto guests-options'}>
                        <Options
                            close={action}
                            active={state.guestValue}
                            max={max}
                            onChange={onSliderChange}
                            params={params}
                            options={options}
                        />
                    </div>
                    <div className={'bg-opacity'} onClick={action} />
                </>
            )}
            <style jsx>{guestsStyle}</style>
        </div>
    )
}

const Options = ({ close, active, max, onChange, params, options }) => {

    const { persons, rooms, occupancy } = max
    const roomsValue =  1

    let optionsArr = options

    const minPersons = () => {
        return (
            1 >=
            Object.keys(optionsArr).reduce((item, key) => {
                return item + parseInt(optionsArr[key].value)
            }, 0)
        )
    }

    return (
        <div className={'options-values rpt-main-text-body rpt-primary-dark'}>
            <div className={'close-options'} onClick={close} />

            {Object.keys(optionsArr).map((item, i) => {
                let keyName = optionsArr[item].key
                let plusObj = {},
                    minusObj = {}
                plusObj[keyName] = optionsArr[item].value + 1
                minusObj[keyName] = optionsArr[item].value - 1
                let maxAction = () =>( occupancy <= Object.keys(optionsArr).reduce((item, key) => {
                    return item + parseInt(optionsArr[key].value)
                }, 0) || max[keyName] <= optionsArr[keyName].value)

                return (
                    <React.Fragment key={i}>
                        <OptionsSelect
                            actionPlus={() => onChange({ ...plusObj })}
                            actionMinus={() => onChange({ ...minusObj })}
                            placeholder={optionsArr[item].placeholder}
                            value={optionsArr[item].value}
                            max={maxAction()}
                            min={optionsArr[item].value === 0 ? true : minPersons()}
                            allowed={optionsArr[item].allowed}
                        />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

const OptionsSelect = ({
                           allowed,
                           actionPlus,
                           actionMinus,
                           placeholder,
                           value,
                           max,
                           min,
                       }) => {
    return (
        allowed && (
            <div className={'d-flex justify-content-between flex-align-center'}>
                <div className={'rpt-main-text-body'}>{placeholder}</div>
                <div className={'d-flex rpt-text-titles- flex-align-center'}>
                    <button
                        type="button"
                        disabled={min}
                        onClick={actionMinus}
                        className={'options-values--circle options-values--circle--minus'}
                    >
                        -
                    </button>
                    <div className={'text-center options-values--option-value'}>
                        {value}
                    </div>
                    <button
                        type="button"
                        disabled={max}
                        onClick={actionPlus}
                        className={'options-values--circle options-values--circle--plus'}
                    >
                        +
                    </button>
                </div>
            </div>
        )
    )
}