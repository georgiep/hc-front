// import Slider from 'react-slick'
import ImageLoader from 'components/commons/image/ImageLoader'
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const FullScreenSlider = ({ data }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
  }

  return (
    <>
      <section className="row no-gutters full_screen_slider">
        <div className="col-md-12">
          <Slider {...settings}>
            {data &&
              data.images.map((image, i) => (
                <div key={i} className="full_screen_slider_img">
                  <ImageLoader
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    type="relative"
                  />
                </div>
              ))}
          </Slider>
        </div>
      </section>
      <style jsx>{`
        div :global(.full_screen_slider_img) {
          width: 100vw !important;
          height: 100vh !important;
        }
        .full_screen_slider {
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default FullScreenSlider
