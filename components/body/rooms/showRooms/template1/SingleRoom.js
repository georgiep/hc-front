import ImageLoader from 'components/commons/image/ImageLoader'
import Heading from 'components/commons/headings/Heading'
import Button from 'components/commons/buttons/Button'

const SingleRoom = ({ room, css }) => {
    let { image, info, button } = room

    return (
        <>

            <div className="image w-100">
                <ImageLoader
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    type="relative"/>
            </div>

            <div className="info">
                <Heading
                    text={info}
                    headingLevel={'4'}
                    css={css.info} />
            </div>

            <div className="btn-text">
                <Button
                    buttonStyle={'btn-text underline-on-hover'}
                    button={button}
                    css={css.btnText}/>
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

export default SingleRoom
