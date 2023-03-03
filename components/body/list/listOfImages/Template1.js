import React from 'react'

const Align = {
    center: 'justify-content-center',
    left: 'justify-content-start',
    right: 'justify-content-end',
}
const Template1 = ({ data }) => {

    const { items, css } = data

    return (
        <>
            <div className={`d-flex flex-wrap flex-row align-items-center ${css?.align ? Align[css.align] : 'justify-content-center'}`}>
                {items && items.map((item,i) => {
                    return  <div key={i} style={{ height: '100%', minWidth: css?.minWidth ? css?.minWidth : '200px'}}
                                 className={`text-center ${css?.spacing ? css?.spacing : ''}`}>
                            <img src={item}/>
                    </div>
                })}
            </div>
        </>
    )
}

export default Template1
