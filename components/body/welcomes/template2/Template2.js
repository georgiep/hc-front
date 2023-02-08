import ImageLoader from "components/commons/image/ImageLoader";
import Text2 from "components/commons/Text2/Text2";

const Template2 = ({ data }) => {
  const { heading, image, css } = data;

  return (
    <section className="welcome position-relative w-100 f-l">
      <div className="welcome-container position-relative w-100">
        <div className={"welcome-inner"}>
          <div className="row">
            <div className="col-xl-12 col-sm-12">
              {heading && (
                <div className="title text-center">
                  <Text2
                    tag={css.heading.element}
                    titleStyle={`${css.heading.class} ${css.heading.color}`}
                    text={heading}
                  />
                </div>
              )}
              {image && (
                <div className="image">
                  <ImageLoader
                    src={image}
                    alt="Hotel"
                    layout="fill"
                    objectFit="contain"
                    type={"relative"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .welcome-inner {
            max-width: 1440px;
            margin: 0 auto;
            padding: 60px 0 99px 0;
          }
          .welcome-container {
            background-color: #ffffff;
          }

          .title {
            max-width: 823px;
            margin: 0 auto;
            padding: 0;
          }

          .image {
            width: 195px;
            margin: 0 auto;
            height: 150px;
          }
        `}
      </style>
    </section>
  );
};

export default Template2;
