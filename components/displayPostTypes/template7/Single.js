import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import { ArrowElegant } from "components/commons/svgs";
import Text2 from "components/commons/Text2/Text2";

const Single = ({ item, css, number, position }) => {
  let { image, name, info, details, smallInfo, link } = item;

  return (
    <>
      <div
        className={`w-100 f-l d-flex ${
          position === "right" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className={"image position-relative w-50 f-r"}>
          <div className={"w-100 h-100 f-l"}>
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

          <div className={"bg-image-holder position-absolute w-100"} />
        </div>

        <div className={`item-inner mw-60 w-50 f-l`}>
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
            <div className={"f-l w-100"}>
              <ul className={"f-l position-relative"}>
                <div
                  className={"line-separator f-l position-absolute top w-auto"}
                />

                {details.map((detail, i) => (
                  <li className={"d-inline-block f-l"} key={i}>
                    <div className={"f-l"}>
                      <Text2
                        titleStyle={css.detail.class}
                        text={detail}
                        tag={css.detail.element}
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

          {smallInfo && (
            <div className={"f-l w-100 info small"}>
              <Text2 titleStyle={css.info.class} text={smallInfo} tag={css.info.element}/>
            </div>
          )}

          {link && (
            <PrefetchLink pathname={link.pathname} api={link.api}>
              <div className={"f-l d-flex align-items-center w-100 read-more"}>
                <span
                  className={"arrow-elegant d-inline-block position-relative"}
                >
                  <b className={"d-inline-block position-relative"}>
                    <ArrowElegant />
                  </b>
                </span>
                <span className={"link"}>
                  <Text2 titleStyle={css.link.class} text={link.text} tag={css.link.element}/>
                </span>
              </div>
            </PrefetchLink>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .read-more {
            padding-bottom: 145px;
            position: relative;
            left: -13px;
          }

          .item-inner {
            background: #fff;
            z-index: 1;
            padding: 50px;
          }

          .image {
            min-height: 480px;
          }

          .image > div:nth-child(1) {
            padding: 27px;
          }

          .bg-image-holder {
            background: #323b43;
            bottom: 11px;
            left: 12px;
            height: 165px;
            z-index: -1;
            width: calc(100% - 25px) !important;
          }

          .name1 {
            z-index: 2;
          }

          .info {
            font-family: SF Pro Display;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
            max-width: 450px;
          }

          .small {
            padding-top: 38px;
            font-weight: 400;
            padding-bottom: 36px;
          }

          .name {
            padding: 70px 0;
            margin: 0;
            z-index: 2;
          }

          .link {
            padding: ${css.link ? css.name.desktop.padding : 0};
            margin: ${css.link ? css.name.desktop.margin : 0};
            border-bottom: 3px solid;
            margin-top: 10px;
            margin-left: 20px;
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
            background-color: ${css.name ? css.name.desktop.color : "#ffffff"};
          }

          .separator {
            width: 10px;
          }

          .separator-detail {
            padding: 0 7px;
            color: ${css.details ? css.details.desktop.color : "#ffffff"};
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
        `}
      </style>
    </>
  );
};

export default Single;
