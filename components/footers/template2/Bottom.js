import React, { useState } from 'react'
import { ArrowRightRound, HotelierLogo } from '../../commons/svgs'

const Bottom = () => {
  const [email, setEmail] = useState('')

  const handleChange = evt => {
    setEmail(evt.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="bottom-cont">
      <div className="bottom-inner">
        <div className="b-title">Newsletter sign up</div>
        <div className="b-subtitle">SIGN UP FOR SPECIAL OFFERS</div>
        <div className="b-input-container">
          <form onSubmit={e => handleSubmit(e)}>
            <input
              className="b-input"
              placeholder="Enter your email"
              value={email}
              type="email"
              name="email"
              onChange={e => handleChange(e)}
            ></input>
            <button className="svg-pos" type="submit" value="Submit">
              <ArrowRightRound />
            </button>
          </form>
        </div>

        <div className="b-subtitle2">
          By submitting this form, I agree to havong my personal and contact information processed
        </div>
      </div>
      <div className="hotelier-logo">
        <HotelierLogo />
      </div>
      <style jsx>{`
        .bottom-cont {
          height: 204px;
          width: 100%;
          background-color: #2d2a26;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .bottom-inner {
          position: relative;
        }
        .b-title {
          font-family: Chronicle Display;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
          margin-bottom: 7px;
        }
        .b-subtitle {
          font-family: SF Pro Display;
          font-style: normal;
          font-weight: 300;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.06em;
          text-transform: capitalize;
          color: #ffffff;
          opacity: 0.6;
          margin-bottom: 40px;
        }
        .b-input-container {
          position: relative;
          width: 400px;
        }
        .b-input {
          padding: 5px;
          width: 358px;
          margin-bottom: 37px;
          border: none;
          border-bottom: 1px solid #534f4b;
          outline: none;
          color: #ffffff;
          opacity: 0.6;
          background-color: transparent;
        }
        .svg-pos {
          position: absolute;
          top: 0px;
          right: 41px;
          cursor: pointer;
          background-color: transparent;
          border: none;
          outline: none;
        }
        .b-subtitle2 {
          font-family: SF Pro Display;
          font-style: normal;
          font-weight: 300;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.06em;
          color: #ffffff;
        }
        .hotelier-logo {
        }
      `}</style>
    </div>
  )
}

export default Bottom
