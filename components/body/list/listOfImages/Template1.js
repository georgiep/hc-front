import React from 'react'

const Template1 = ({ data }) => {

    const { items, css } = data

    return (
        <>
            <div className={'d-flex my-5'}>
               <div className={'text-center w-100 primary-white title-case-primary'}>Hotel Latest Awards</div>
            </div>
            <div className={'d-flex flex-wrap flex-row align-items-center justify-content-center'}>
                {items && items.map((item,i) => {
                    return  <div key={i} style={{ height: '100%', minWidth: '200px'}} className={'text-center'}>
                            <img src={item}/>
                    </div>
                })}
            </div>
        </>
    )
}

export default Template1
