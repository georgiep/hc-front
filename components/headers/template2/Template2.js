import Link from 'next/link'
import Image from 'next/image'

//  Components
import HeaderButton from '../../commons/buttons/HeaderButton'
import LangMenu from '../../commons/LangMenu'

const Template2 = ({ data }) => {
  let { logo, menu, submenu } = data
  const buttonList = submenu.filter(item => item.button !== undefined)
  const subMenuList = submenu.filter(item => item.button === undefined)

  return (
    <div className="navbar w-100 fixed-top">
      <div className="menu d-flex justify-content-center align-items-center offset-1">
        <ul className="list">
          {menu.map((item, idx) => {
            return (
              <li className="list-item" key={idx}>
                <Link href={item.pathname}>
                  <span>{item.text}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="image d-flex justify-content-center align-items-center flex-grow-1">
        <Image src={logo.path} alt="Hotel Logo" width={192} height={76} />
      </div>
      <div className="d-flex justify-content-center align-items-center ml-auto">
        <ul className="list">
          {subMenuList.map((item, idx) => {
            return (
              <li className="list-item" key={idx}>
                {item.text}
              </li>
            )
          })}
          <span className="list-item cursor-def">|</span>
          <li className="list-item">
            <LangMenu />
          </li>
        </ul>

        {buttonList.map((btn, idx) => {
          return <HeaderButton key={idx} data={btn.button} />
        })}
      </div>

      <style jsx>{`
        .navbar {
          overflow: hidden;
          height: 76px;
          display: flex;
        }
        .menu {
          margin-left: 50px;
        }
        .image {
          width: 150px;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .list {
          display: inline-block;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .list-item {
          display: inline;
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
        .cursor-def {
          cursor: default;
        }
      `}</style>
    </div>
  )
}

export default Template2
