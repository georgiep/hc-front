import Carousel from './Carousel'
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Template1 = ({ data }) => {
    let { offers, title, button, css } = data

    return (
        <div className="container-outer w-100">
            <div className="container-inner">
                <div className="container-inner-carousel">
                    <div className="header">
                        <div className="title">
                            <Text2 titleStyle={css.title.class} text={title} tag={css.title.element}/>
                        </div>
                        <div className="all-specials">
                            <Button2 button={button} buttonStyle={`${css.allRooms.class} btn underline-on-hover`} />
                        </div>
                    </div>
                    <div>
                        <Carousel offers={offers} css={css} />
                    </div>
                </div>
            </div>
            <style jsx>{`
            .container-outer {
              background: #fffbef; // dynamic
            }
            .container-inner {
              max-width: 1440px; // dynamic
              margin: auto;
              padding: 0; // dynamic
            }
            .container-inner-carousel {
              max-width: 1085px; // dynamic
              margin: auto;
              padding: 0; // dynamic
            }
            .header {
              display: flex;
              padding: 63px 0 83px 0; // dynamic
              margin: 0; // dynamic
              justify-content: space-between;
            }
            .all-specials {
              margin: 23px 27px 0 0; // dynamic
              padding: 0; // dynamic
            }
          `}</style>
        </div>
    )
}

export default Template1
