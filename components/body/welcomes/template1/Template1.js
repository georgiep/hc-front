import React from 'react'
import ImageLoader from 'components/commons/image/ImageLoader'
import Text2 from 'components/commons/Text2/Text2'

function resolveImageStyle (imgProps) {

}
const Template1 = ({ data }) => {
  let { title, text, images, message, role, fullname, css, colors } = data
  let { backgroundImage, primaryImage } = images

  let imageStyleProps = {
    layout:'fill',
    type:"relative"
  }
  let imageStyleProps2 = {
    width: '500',
    height: '500',
    type:"relative"
  }

  return (
    <section className="welcome position-relative">
      <ImageLoader
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        type="absolute"
      />
      <div className="welcome-container position-relative w-100">
        <div className={"welcome-inner"}>
          <div className="row">
            <div className="col-xl-6 col-sm-12">
                {
                    title &&
                    <div className="title">
                        <Text2
                            tag={css.title.element}
                            titleStyle={`${css.title.class} ${css.title.color}`}
                            text={title}/>
                    </div>
                }
                {
                    text &&
                    <div className="text">
                        <Text2
                            tag={css.text.element}
                            titleStyle={`${css.text.class} ${css.text.color}`}
                            text={text}/>
                    </div>
                }

            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="primary-image position-relative">
                <ImageLoader
                    src={primaryImage}
                    alt="Picture of the author"
                    layout='fill'
                    type="relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .welcome-inner{
             max-width: 1440px;
             margin: 0 auto;
             padding: 60px 0 99px 0;
          }
          .welcome-container {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .title {
             padding: 0 120px 0 0;
             margin: 0;
          }
          .text {
            padding: 50px 120px 0 92px;
            margin: 0;
          }   
          .primary-image{
            height: 600px;
            max-width: 434px;
            left: 50px;
            right: 0;
            top: 0;
            bottom: 0;
          }
        `}
      </style>
    </section>
  )
}

export default Template1
