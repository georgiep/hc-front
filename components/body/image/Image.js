import ImageLoader from 'components/commons/image/ImageLoader'
const Image = ({data}) => {
    const {css, image, layout, width, height, center, ...props} = data

    return(
        <div className={'overflow-hidden position-relative'} style={{maxWidth: css.maxWidth, height: height, width: width , margin: center ? '0 auto' : ''}} >
            <ImageLoader src={image.src} alt={image.alt} layout={layout} {...props}/>
            <style jsx>{`
               div{
                 margin: ${css.margin};
                 padding: ${css.padding};
               }
            `}
            </style>
        </div>
    )
}

export default Image