import ImageLoader from "components/commons/image/ImageLoader";
import { ButtonArrow } from "components/commons/svgs";
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Template1 = ({ data }) => {
  const { items, css } = data;

  return (
    <section className={"items-container-all"}>
      {items &&
        items.map((item, i) => {
          return (
            <div className={"items-container"} key={i}>
              <div
                className={"items-container-inner d-flex flex-row w-100 col "}
              >
                <div className={"image flex-column position-relative"}>
                  {item.image && (
                    <ImageLoader
                      src={item.image}
                      alt="Picture of the author"
                      layout="fill"
                      type="relative"
                    />
                  )}

                  {item.offer && (
                    <div className="position-absolute w-100 h-100 abs-t abs-l">
                      <div
                        className={
                          "position-relative center-top-position d-flex justify-content-center"
                        }
                      >
                        <div className={"items-content"}>
                          <div>
                            <span>{item.offer.discount}</span>
                            <span>{item.offer.off}</span>
                          </div>
                          <div>{item.offer.valid}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={"content flex-column"}>
                  {item.subHeading && (
                    <Text2
                      titleStyle={css.subHeading.class}
                      text={item.subHeading}
                      tag={css.subHeading.element}
                    />
                  )}

                  {item.heading && (
                    <div className={"content-heading"}>
                      <Text2
                        titleStyle={css.heading.class}
                        text={item.heading}
                        tag={css.heading.element}
                      />
                    </div>
                  )}

                  {item.text && (
                    <Text2
                      titleStyle={css.text.class}
                      text={item.text}
                      tag={css.text.element}
                    />
                  )}

                  {item.link && (
                    <div className={"items-book"}>
                      <Button2 buttonStyle={`${css.link.class} f-r`}>
                        <a
                          href={item.link.pathname}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span>{item.link.text}</span>
                          <span className={"items-book-svg"}>
                            <ButtonArrow />
                          </span>
                        </a>
                      </Button2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      <style jsx>{`
        .image {
          flex: 0 0 393px;
          min-height: 262px;
        }

        .items-content {
          background: #ef3f60;
          padding: 13px 23px 23px 23px;
        }

        .items-content > div > span {
          color: #fff;
        }

        .content {
          padding-left: 60px;
        }

        .content-heading {
          padding: 10px 0 10px 0;
        }

        .items-content > div > span:nth-child(1) {
          font-family: SF Pro Display;
          font-size: 48px;
          font-style: normal;
          font-weight: 200;
          line-height: 57px;
          letter-spacing: 0em;
          text-align: center;
        }

        .items-content > div > span:nth-child(2) {
          font-family: SF Pro Display;
          font-size: 48px;
          font-style: normal;
          font-weight: 300;
          line-height: 57px;
          letter-spacing: 0em;
          text-align: center;
          margin-left: 10px;
        }

        .items-content > div:nth-child(2) {
          font-family: SF Pro Display;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: center;
          color: #fff;
          position: relative;
          padding-top: 5px;
        }

        .items-content > div:nth-child(2):after {
          background: none repeat scroll 0 0 transparent;
          bottom: -6px;
          content: "";
          display: block;
          height: 3px;
          left: 0;
          position: absolute;
          background: #fff;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 100%;
        }
        .items-container-inner {
          max-width: 940px;
          margin: 0 auto;
          padding: 45px 0 45px 0;
        }

        .items-book {
          margin-top: 10px;
        }
        .items-book a {
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0px;
        }
        .items-book-svg {
          position: relative;
          right: -20px;
        }
      `}</style>
    </section>
  );
};

export default Template1;
