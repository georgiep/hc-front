import React from 'react'

const HeaderButton = ({ data }) => {

      let { backgroundColor, color, text, url } = data

      const handleClick = () => {
        window.open(url, '_blank')
      }

      return (
        <>
          <button onClick={() => handleClick()} className="button">
            <span className="button-text">{text}</span>
          </button>
          <style jsx>{`
            .button {
              width: 144px;
              height: 52px;
              cursor: pointer;
              outline: none;
              border: none;
              margin-right:58px;
              background-color: ${backgroundColor};
            }
            .button-text {
              font-style: normal;
              font-weight: bold;
              font-size: 12px;
              line-height: 14px;
              text-align: center;
              letter-spacing: 0.03em;
              color: ${color};
            }
          `}</style>
        </>
      )
}

export default HeaderButton
