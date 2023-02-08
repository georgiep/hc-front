import React, { useEffect, useState } from 'react'
import {
  CrossRound,
  BigCloud,
  FacebookSmall,
  InstagramSmall,
  PinterestSmall,
} from '../../commons/svgs'
import { footerData2 } from '../../../dummyData'

//  https://www.weatherapi.com/my/ --- https://www.weatherapi.com/api-explorer.aspx
//  usename steliosnteloss@gmail.com
//  password 6931557798a


const WEATHER_API_KEY = '544e60384dd840f592784243211705'
const CITY = 'London'

const Info = () => {
  let [temperatureInCelcius, setTemperatureInCelcius] = useState('')
  let { menu1, menu2 } = footerData2

  // useEffect(async () => {
  //   setTemperatureInCelcius(await fetchCurrentTemperatureInCelcius())
  // }, [])
  //
  // const fetchCurrentTemperatureInCelcius = async () => {
  //   let temp = await fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${CITY}&aqi=no`
  //   )
  //   let currentTemp = await temp.json()
  //   return currentTemp.current.temp_c
  // }

  return (
    <div className="info-container">
      <div className="d-cont">
        <ul className="menu-1-ul">
          <div className="cross-1">
            <CrossRound />
          </div>

          {menu1.map((item, idx) => {
            return (
              <li className="menu-item" key={idx}>
                {item.text}
              </li>
            )
          })}
        </ul>
        <ul className="menu-2-ul">
          <div className="cross-2">
            <CrossRound />
          </div>
          {menu2.map((item, idx) => {
            return (
              <li className="menu-item" key={idx}>
                {item.text}
              </li>
            )
          })}
        </ul>
        <div className="current-weather">
          <div className="w-title">Current weather</div>
          <div className="w-subtitle">NAFPLIO OLD TOWN</div>
          <div className="w-info">
            <div className="big-cloud">
              <BigCloud />
            </div>

            <div className="celsius">{temperatureInCelcius}</div>
            <div className="celsius-deg">&deg;C | &deg;F</div>
          </div>
        </div>
        <div className="connect-with-us">
          <div className="c-title">Connect with us</div>
          <div className="c-subtitle">SOCIAL MEDIA CHANNELS</div>
          <div className="c-info">
            <div className="social-icons">
              <FacebookSmall />
            </div>
            <div className="social-icons">
              <InstagramSmall />
            </div>
            <div className="social-icons">
              <PinterestSmall />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .info-container {
          position: relative;
          height: 250px;
          width: 100%; // w-100
          max-width: 1440px; // container?
          margin-top: 52px;
        }
        .cross-1 {
          position: absolute; // position -abns
          top: 55px;
        }
        .cross-2 {
          position: absolute;
          top: 55px;
        }
        .d-cont {
          display: flex; // ex
          flex-direction: row; // ex
          justify-content: space-around;
        }
        .menu-1-ul {
          margin-top: 100px;
        }
        .menu-2-ul {
          margin-top: 100px;
        }
        .menu-item {
          font-family: SF Pro Display; //dd
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 30px;
          color: #fff;
          cursor: pointer;
          opacity: 0.6;
          width: fit-content;
        }
        .current-weather {
          margin-top: 100px;
        }
        .big-cloud {
          margin-right: 15px;
        }
        .celsius {
          font-family: Chronicle Display; //dd
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 34px;
          color: #ffffff;
          margin-right: 10px;
        }
        .celsius-deg {
          font-family: Chronicle Display; //dd
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          line-height: 12px;
          color: #ffffff;
        }
        .connect-with-us {
          margin-top: 100px;
        }
        .w-title,
        .c-title {
          font-family: Chronicle Display; //dd
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
          margin-bottom: 14px;
        }
        .w-subtitle,
        .c-subtitle {
          font-family: SF Pro Display; //dd
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
        .w-info {
          display: flex; // d-flex
        }
        .c-info {
          display: flex;
          justify-content: space-around;
        }
        .social-icons {
          cursor: pointer; // uparxei?
        }
      `}</style>
    </div>
  )
}

export default Info
