import ImageLoader from 'components/commons/image/ImageLoader'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Slide = ({ item, css }) => {

  let { button, image, title } = item

  return (
     <PrefetchLink pathname={button.pathname} api={button.api}>
          <div className="slide">
              {
                  image &&
                  <div className="image position-relative">
                      <ImageLoader
                          src={image}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          type="relative"
                      />
                  </div>
              }

              {
                  title &&
                  <div className="info">
                      <Text2 titleStyle={css.title.class} text={title} tag={css.title.element}/>
                  </div>
              }
              <div className="text-button pointer text-capitalize">
                  <Button2 button={button} buttonStyle={`${css.itemButton.class} underline-on-hover`}/>
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
                  .image{
                    width: 290px;
                    height: 280px;
                  }
                `}
              </style>
          </div>
      </PrefetchLink>
  )
}

export default Slide
