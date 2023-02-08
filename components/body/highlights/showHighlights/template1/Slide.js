import React from 'react'
import ImageLoader from '../../../../commons/image/ImageLoader'
import { CircleArrowRightRed } from '../../../../commons/svgs'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";

const Slide = ({ highlight , css }) => {
  let { button, id, photo, title } = highlight

  return (
      <PrefetchLink pathname={button.pathname} api={button.api}>
        <div className="slide">
          <div className="image">
            <ImageLoader
                src={photo}
                layout="fill"
                objectFit='cover'
                objectPosition='center'
                type = 'relative'
            />
          </div>
          <Text2 titleStyle={css.slider-title.class} text={title} tag={css.slider-title.element} />
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
