import React, {useEffect} from 'react'
import PrefetchLink from 'components/links/PrefetchLink'
import ImageLoader from 'components/commons/image/ImageLoader'
import HeaderButton from 'components/commons/buttons/HeaderButton'
import LangMenu from 'components/commons/LangMenu'
import useScroll from 'hooks/useScroll'

const Template1 = ({ data }) => {
  let { logo, menu, button } = data

  const {scrollY} = useScroll()

  return (
    <div className={`${scrollY > 0 && 'page-scrolling' || ''} navbar w-100 d-flex fixed-top`}>

          <PrefetchLink  pathname={logo.pathname} api={logo.api}>
              <div className="image d-flex justify-content-center h-100">
                  <ImageLoader
                      src={logo.path}
                      alt="Hotel Logo"
                      layout="fill"
                      objectFit="contain"
                      type={"relative"}
                  />
              </div>
          </PrefetchLink>


      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <ul className="list">
          {menu.map((item, idx) => {
            return (
              <li className="list-item position-relative" key={idx}>
                <PrefetchLink pathname={item.pathname} api={item.api}>
                  <span>{item.text}</span>
                </PrefetchLink>
                {
                  item.submenu &&
                  <div className={"submenu position-absolute"}>
                      {item.submenu.map((sub,i)=><div key={i}>
                          <PrefetchLink pathname={sub.pathname} api={sub.api}>
                              <span>{sub.text}</span>
                          </PrefetchLink>
                      </div>)}
                  </div>
                }
              </li>
            )
          })}
          <span className="list-item d-inline-block cursor-def">|</span>
          <li className="list-item">
            <LangMenu />
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center align-items-center ml-auto">
        <HeaderButton data={button} />
      </div>

      <style jsx>{`
        .page-scrolling{
         background: rgba(0,0,0,0.5);
        }
        .navbar {
          height: 76px;
        }
        .image {
          width: 193px;
          margin-left: 50px;
        }
        .list {
          list-style-type: none;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        .list-item {
          display: inline-block;
          margin-right: 30px;
          cursor: pointer;
          font-family: SF Pro Display;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
        
        .list-item:hover > .submenu {
          display: block;
        }

        .submenu{
           left: 0;
           background: rgba(0,0,0,0.5);
           padding: 20px;
           display: none;
        }

      `}</style>
    </div>
  )
}

export default Template1
