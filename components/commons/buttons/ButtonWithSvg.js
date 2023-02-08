import React from 'react'

const ButtonWithSvg = ({ styles, text, Svg }) => {
  return (
    <button className="btn-container" style={styles} type="button">
      <div className="text-container">{text}</div>
      <div className="svg-container">
        <Svg/>
      </div>
      <style jsx>
        {`
          .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
          }
          .text-container {
            display: flex;
            justify-content: center;
            align-items: center;

            font-family: Kepler Std;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;

            color: #000000;
          }
          .svg-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 18px;
          }
        `}
      </style>
    </button>
  )
}

export default ButtonWithSvg
