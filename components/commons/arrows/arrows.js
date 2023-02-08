import {SliderArrowRight} from 'components/svgs/SliderArrowRight'
import {SliderArrowLeft} from 'components/svgs/SliderArrowLeft'

export function NextArrow(props) {
  const { style, onClick, color = white } = props

  return (
    <div className="next-arrow" style={{ ...style }} onClick={onClick}>
      <SliderArrowRight cnf={{ color: color }} />
      <style jsx>
        {`
          .next-arrow {
            font-size: 0;
            line-height: 0;
            position: absolute;
            top: 30%;
            display: block;
            padding: 0;
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            cursor: pointer;
            color: transparent;
            border: none;
            outline: none;
            background: transparent;
            right: -65px;
            border-radius: 50%;
          }
          .next-arrow::hover {
            color: transparent;
            outline: none;
            background: transparent;
            background: brown;
          }
          .next-arrow::focus {
            color: transparent;
            outline: none;
            background: transparent;
          }
        `}
      </style>
    </div>
  )
}

export function PrevArrow(props) {
  const { style, onClick, color = white } = props
  return (
    <div className="prev-arrow" style={{ ...style }} onClick={onClick}>
      <SliderArrowLeft cnf={{ color: color }} />
      <style jsx>
        {`
          .prev-arrow {
            font-size: 0;
            line-height: 0;
            position: absolute;
            top: 30%;
            display: block;
            padding: 0;
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            cursor: pointer;
            color: transparent;
            border: none;
            outline: none;
            background: transparent;
            left: -65px;
            border-radius: 50%;
          }
          .prev-arrow::hover {
            color: transparent;
            outline: none;
            background: transparent;
            background: brown;
          }
          .prev-arrow::focus {
            color: transparent;
            outline: none;
            background: transparent;
          }
        `}
      </style>
    </div>
  )
}

export function NextArrowHighlight(props) {
  const { onClick } = props
  return (
    <div className="next-arrow-hl" onClick={onClick}>
      <SliderArrowRight cnf={{ color: 'black' }} />
      <style jsx>
        {`
          .next-arrow-hl {
            font-size: 0;
            line-height: 0;
            top: 231px;
            display: block;
            padding: 0;
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            cursor: pointer;
            color: transparent;
            border: none;
            outline: none;
            background: transparent;
            right: 40px;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .next-arrow-hl::hover {
            color: transparent;
            outline: none;
            background: transparent;
            background: brown;
          }
          .next-arrow-hl::focus {
            color: transparent;
            outline: none;
            background: transparent;
          }
        `}
      </style>
    </div>
  )
}
