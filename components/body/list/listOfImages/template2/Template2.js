import React from 'react'

const Template2 = ({ data }) => {

    const { items, css, heading } = data

    return (
        <>
            {
                heading && <div className={'d-flex my-5'}>
                    <div className={`text-center w-100 ${css.heading.color} ${css.heading.class}`}>{heading}</div>
                </div>
            }

            <div className={'d-flex flex-wrap flex-row align-items-center justify-content-center'}>
                {items && items.map((item,i) => {
                    return  <div key={i} style={{ height: '100%', minWidth: '200px', flex: 1}} className={'text-center'}>
                        <div>
                            <img src={item.image}/>
                        </div>
                        <div  className={'text-center'} style={{margin: '0 auto',paddingTop: '20px',maxWidth: '200px'}}>
                            {
                                item.heading
                            }
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Template2
