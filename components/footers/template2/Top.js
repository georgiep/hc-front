import React from 'react'

//  Components
import ButtonWithSvg from '../../commons/buttons/ButtonWithSvg'
import Info from './Info'
import { ArrowElegant } from '../../commons/svgs'
import ImageLoader from 'components/commons/image/ImageLoader'

const Top = ({data}) => {
  
  let btnStyle = {
    background: '#dbb37e',
    width: '196px',
    height: '52px',
    color: 'black',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <div className="container-outer position-relative">
      <div className={"bg-image w-100"}>
        <ImageLoader
            src={'/images/footer1.webp'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            type="absolute"
        />
      </div>

      <div className="container-inner">
        <div className="title">ARE YOU INTERESTED?</div>
        <div className="subtitle">In case of any questions, please contact us</div>
        <div className="contact-btn-container">
          <ButtonWithSvg styles={btnStyle} text={'Contact us'} Svg={ArrowElegant} />
        </div>
      </div>
      <Info />
      <style jsx>{`
        .bg-image{
          z-index: -1;
        }
        .container-outer {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 560px;
          width: 100%;
          padding-bottom: 100px;
          background: linear-gradient( 359.51deg, rgba(44, 42, 39, 0.9) 0.31%, rgba(44, 42, 39, 0) 99.46%);
        }
        .container-inner {
          heigh: inherit;
          width: 100%;
          max-width: 1440px;
        }
        .title {
          font-family: Chronicle Display;
          font-style: normal;
          font-weight: normal;
          font-size: 42px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          padding-top: 92px;
        }
        .subtitle {
          font-family: SF Pro Display;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 18px;
          text-align: center;
          color: #fff;
          margin-top: 14px;
        }
        .contact-btn-container {
          display: flex;
          justify-content: center;
          margin-top: 35px;
        }
      `}</style>
    </div>
  )
}

export default Top
