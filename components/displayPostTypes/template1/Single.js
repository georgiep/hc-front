import ImageLoader from 'components/commons/image/ImageLoader'
import Text2 from "components/commons/Text2/Text2";
import Button2 from 'components/commons/buttons/Button2'

const Single = ({ item, css }) => {

    let { image, info, button } = item

    return (
        <>

            <div className="image w-100">
                {
                    image &&
                    <ImageLoader
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        type="relative"/>
                }
            </div>

            <div className="info">
                {
                    info &&
                    <Text2 titleStyle={css.info.class} text={info} tag={css.info.element}/>
                }
                
            </div>

            <div className="btn-text">

                {
                    button &&
                    <Button2 button={button} buttonStyle={`${css.btnText.class} underline-on-hover`}/>
                }

            </div>

            <style jsx>
                {`
                  .image {
                    height: 480px;
                  }
                  .info {
                    margin: 40px 0 17px 50px;
                  }
                  .btn-text {
                    margin: 0 0 73px 50px;
                  }
                `}
            </style>

        </>
    )
}

export default Single
