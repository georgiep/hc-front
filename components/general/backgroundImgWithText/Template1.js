import ImageLoader from "components/commons/image/ImageLoader";
import Text2 from "components/commons/Text2/Text2";

const Template1 = ({ data }) => {
  let { title, image, css } = data;

  return (
    <section className="general-background-image-with-text position-relative">
      {image && (
        <ImageLoader
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          type="absolute"
        />
      )}

      <div className="general-background-image-with-text-container position-relative w-100">
        <div className={"general-background-image-with-text-container-inner"}>
          <div className="row">
            <div className="col-xl-12 col-sm-12">
              <div className="title text-center">
                {title && (
                  <Text2
                    titleStyle={css.title.class}
                    text={title}
                    tag={css.title.element}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .general-background-image-with-text-container-inner {
            max-width: 1440px;
            margin: 0 auto;
            padding: 60px 0 99px 0;
          }
          .general-background-image-with-text-container {
            background-color: rgba(0, 0, 0, 0.2);
          }
          .title {
            padding: 240px 0 240px 0;
            margin: 0;
          }
          .primary-image {
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
  );
};

export default Template1;
