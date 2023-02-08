import Text2 from "components/commons/Text2/Text2";
import React from "react";

const Label = ({label}) => {
    return  <Text2 text={label} tag={'div'} titleStyle={'promo-small-text text-uppercase text-center secondary-light'}/>
}

const FormInput = ({children,active,label,input,action,className,hideClass,mobile}) => {
    const hide = hideClass || ''
    return (
        <>
            <>
                <div className={`d-flex flex-column form-container-input ${className ? className : ''} ${active ? 'active' : hide}`} {...action}>
                    <Label label={label} />
                    <div className='separator'/>
                    {children}
                </div>
                {input}
            </>
            {!mobile ? <div className={'form-separator'}></div> : null}
        </>
    )
}

export default FormInput