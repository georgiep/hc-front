import Carousel from './Carousel'
import Text2 from "components/commons/Text2/Text2";

const Template1 = ({data}) => {
  let { highlights, title, subtitle , css } = data

  return (
    <div className="container-outer w-100">
      <div className="container-inner">
        <div className="title">
            <Text2 titleStyle={css.title.class} text={title} tag={css.title.element} />
        </div>
        <div className="subtitle">
            <Text2 titleStyle={css.subtitle.class} text={subtitle} tag={css.subtitle.element} />
        </div>
        <Carousel highlights={highlights} css={css} />
      </div>
      <style jsx>{`
        .container-outer {
          background: #fff;
        }
        .container-inner {
          max-width: 1440px;
          margin: auto;
          padding: 50px 0 50px 171px;
        }
        .title{
          padding: 0;
          margin: 0;
        }
        .subtitle{
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Template1
