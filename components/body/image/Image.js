import ImageLoader from 'components/commons/image/ImageLoader'
const Image = ({data}) => {
    const {css, image, layout, width, height, center, ...props} = data

    return(
        <div style={{maxWidth: css.maxWidth, height: height, width: width , margin: center ? '0 auto' : ''}} >
            <ImageLoader src={image} layout={layout} {...props}/>
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