import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}`
  // return `/public/${src}?w=${width}&q=${quality || 75}`
}

// const myLoader = ({ src, width, quality }) => {
//     if(src.includes('.svg') || src.includes('.png')) return src
//     return `/images?src=${src}&width=${width}`
// }

const ImageLoader = ({type, ...props}) => {
    let position = type === 'absolute' ? 'position-absolute' : 'position-relative'

    //priority prop preload image

    return (
        <div className={`${position} h-100 w-100`}>
            <Image
                loader={myLoader}
                placeholder="empty"
                alt={props.alt || ""}

                // priority={true}
                unoptimized={true}
                sizes="320 640 750"
                quality={100}
                layout="responsive"
                // blurDataURL={"data:image/jpeg;base64,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"}
                {...props}
            />
        </div>
    )
}
export default ImageLoader

{/*{...props.src.includes('.svg') && {"unoptimized": true }}*/}
{/*{...props.src.includes('.png') && {"unoptimized": true }}*/}