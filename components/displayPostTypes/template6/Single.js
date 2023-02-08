import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import { ArrowElegant } from "components/commons/svgs";
import Text2 from "components/commons/Text2/Text2";

const Single = ({ item, css, number, position }) => {
  let { image, name, info, details, link } = item;

  return (
    <>
      <PrefetchLink api={link.api} pathname={link.pathname}>
        <div className={"w-100 f-l wrapper"}>
          <div
            className={`image w-70 position-relative ${
              position === "right" ? "f-r" : "f-l"
            }`}
          >
            <div className={"bg-items position-absolute w-100 h-100"} />

            {image && (
              <ImageLoader
                src={image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                type="relative"
              />
            )}
          </div>

          <div
            className={`
                        item-inner 
                        mw-40 
                        w-100 
                        center-top-absolute-position 
                        position-absolute ${
                          position === "right" ? "abs-l" : "abs-r"
                        }`}
          >
            {number && (
              <div className="d-table">
                <div className={"line position-relative d-table-cell"}>
                  <span className={"position-absolute w-100"} />
                </div>
                <div className={"d-table-cell separator"} />
                <div className="d-table-cell room-number">
                  {number < 10 ? "0" + number : number}
                </div>
              </div>
            )}

            {name && (
              <div className="name">
                <Text2
                  titleStyle={css.name.class}
                  text={name}
                  tag={css.name.element}
                />
              </div>
            )}

            {details && (
              <div className={"f-l w-100 details"}>
                <ul className={"f-l position-relative"}>
                  <div
                    className={
                      "line-separator f-l position-absolute top w-auto"
                    }
                  />

                  {details.map((detail, i) => (
                    <li className={"d-inline-block f-l"} key={i}>
                      <div className={"f-l"}>
                        <Text2
                          titleStyle={css.details.class}
                          text={detail}
                          tag={css.details.element}
                        />
                      </div>
                      <div className={"separator-detail d-inline-block f-l"}>
                        /
                      </div>
                    </li>
                  ))}

                  <div
                    className={
                      "line-separator f-l position-absolute bottom w-auto"
                    }
                  />
                </ul>
              </div>
            )}

            {info && (
              <div className={"f-l w-100 info"}>
                <Text2
                  titleStyle={css.info.class}
                  text={info}
                  tag={css.info.element}
                />
              </div>
            )}

            <div className={"f-l d-flex align-items-center pb-24"}>
              <span
                className={"arrow-elegant d-inline-block position-relative"}
              >
                <b className={"d-inline-block position-relative"}>
                  <ArrowElegant />
                </b>
              </span>
              <span className={"link pl-20"}>
                <Text2
                  titleStyle={css.link.class}
                  text={link.text}
                  tag={css.link.element}
                />
              </span>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .item-inner {
              background: red;
              z-index: 1;
              padding: 50px;
            }

            .image {
              height: 480px;
            }

            .bg-items {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0) 100%
              );
              z-index: 1;
            }

            .line {
              width: 72px;
            }

            .line span {
              top: 50%;
              height: 1px;
              background-color: ${css.name ? css.name.color : "#ffffff"};
            }

            .separator {
              width: 10px;
            }

            .separator-detail {
              padding: 0 7px;
              color: ${css.details ? css.details.color : "#ffffff"};
            }

            .arrow-elegant {
              background: #f4f6f9;
              width: 53px;
              height: 53px;
              border-radius: 50%;
            }

            .arrow-elegant b {
              top: 18px;
              left: 17px;
            }

            .name {
              max-width: 335px;
              padding-bottom: 30px;
              padding-top: 42px;
            }

            .details {
              padding-bottom: 40px;
            }

            .info {
              max-width: 297px;
              padding-bottom: 44px; 
            }
            .wrapper {
              padding: 62px 0px;
            }

          `}
        </style>
      </PrefetchLink>
    </>
  );
};

export default Single;
