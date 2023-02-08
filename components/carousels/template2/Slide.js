import ImageLoader from 'components/commons/image/ImageLoader'
import { CircleArrowRightRed } from 'components/commons/svgs'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";

const Slide = ({ item , css }) => {
  let { button, id, image, title } = item

  return (
      <PrefetchLink pathname={button.pathname} api={button.api} link={true}>
        <div className="slide">
          {
            image &&
            <div className="image">
              <ImageLoader
                  src={ image }
                  layout="fill"
                  objectFit='cover'
                  objectPosition='center'
                  type = 'relative'
              />
            </div>
          }
          {
            title &&
            <Text2 titleStyle={css.title.class} text={title} tag={css.title.element}/>
          }
          <div className="pointer">
            <CircleArrowRightRed />
          </div>
          <style jsx>
            {`
              .slide {
                width: 332px;
                margin-right: 40px;
              }
              .image {
                margin: 0 0 40px 0;
                height: 462px;
              }
              .info {
                margin: 0 0 17px 0;
                padding: 0;
              }
            `}
          </style>
        </div>
      </PrefetchLink>
  )
}

export default Slide
