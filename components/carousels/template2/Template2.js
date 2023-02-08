import Carousel from './Carousel'
import Text2 from "components/commons/Text2/Text2";

const Template2 = ({data}) => {
  let { items, heading, subHeading , css } = data

  return (
    <div className="container-outer w-100">
      <div className="container-inner">
          {
              heading &&
              <div className="heading">
                  <Text2 titleStyle={css.heading.class} text={heading} tag={css.heading.element}/>
              </div>
          }

          {
              subHeading &&
              <div className="subHeading">
                  <Text2 titleStyle={css.subHeading.class} text={subHeading} tag={css.subHeading.element}/>
              </div>
          }

          {
              items &&
              <Carousel items={items} css={css} />
          }

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
        .heading{
          padding: 0;
          margin: 0;
        }
        .subHeading{
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Template2
