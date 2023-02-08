import React from 'react'

//  Components
import Top from './Top'
import Bottom from './Bottom'
import { footerData } from '../../../public/data/dummyData'

const Template2 = ({ page, index }) => {

  let {top, center, bottom} = footerData
  
  return (
    <section className="footer w-100 f-l">
      <Top data={top}/>
      <Bottom />
      <style jsx>{`
        .footer {
           background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  )
}

export default Template2
