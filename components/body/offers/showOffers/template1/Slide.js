import ImageLoader from 'components/commons/image/ImageLoader'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Slide = ({ offer, css }) => {
  let { button, image, title } = offer

  return (
      <PrefetchLink pathname={offer.button.pathname} api={offer.button.api}>
          <div className="slide">
              <div className="image">
                  <ImageLoader src={image} width={290} height={280} type="relative" />
              </div>
              <div className="info">
                  <Text2 titleStyle={css.info.class} text={title} tag={css.info.element}/>
              </div>
              <div className="text-button pointer text-capitalize">
                  <Button2 button={button} buttonStyle={`${css.button.class} underline-on-hover`} />
              </div>
              <style jsx>
                 {`
                  .slide {
                    margin-right: 40px; //dynamic
                    padding-bottom: 10px;
                  }
                  .info {
                    margin: 40px 0 17px 0;
                    padding: 0;
                  }
                `}
              </style>
          </div>
      </PrefetchLink>
  )
}

export default Slide
