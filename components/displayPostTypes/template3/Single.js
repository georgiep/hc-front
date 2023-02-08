import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Single = ({ item, css }) => {
  let { image, name, facilities, details, info, link } = item;

  return (
    <>
      <PrefetchLink api={link.api} pathname={link.pathname}>
        <div className="image w-100">
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

        <div className={"show-items-inner"}>
          {name && (
            <div className="d-table name">
              <div className="d-table-cell">
                <Text2
                  titleStyle={css.name.class}
                  text={name}
                  tag={css.name.element}
                />
              </div>
            </div>
          )}

          {info && (
            <div className="info">
              <Text2
              titleStyle={css.info.class}
              text={info}
              tag={css.info.element}
            />
            </div>
          )}

          {details && (
            <div className={"f-l w-100"}>
              <ul className={"details f-l position-relative"}>
                <div
                  className={"line-separator f-l position-absolute top w-auto"}
                />

                {details.map((detail, i) => (
                  <li className={"d-inline-block f-l"} key={i}>
                    <Text2
                    titleStyle={css.details.class}
                    text={detail}
                    tag={css.details.element}
            />
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

          {facilities && (
            <div className={"f-l w-100"}>
              <ul className={"facilities"}>
                {facilities.map((facility, i) => (
                  <li className={"position-relative"} key={i}>
                    <Text2
                    titleStyle={css.facilities.class}
                    text={facility}
                    tag={css.facilities.element}
            />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {link && (
            <Button2
            button={link}
            buttonStyle={`${css.link.class} btn pointer`}
          />
          )}
        </div>

        <style jsx>
          {`
            .image {
              height: 480px;
            }
            .show-items-inner {
              padding: 50px;
              margin: 0;
            }
            .name {
              margin: 0;
              padding: 0;
            }
            .info {
              margin: 0;
              padding: 0;
            }
            .details > li {
              padding: 10px 20px;
              margin: 0;
              border-left: 1px dashed #dbddea;
            }
            .details > li:nth-child(2) {
              padding-left: 0;
              border-left: 0;
            }
            .line-separator {
              min-width: 400px;
              background: 1px #dbddea;
              height: 1px;
            }
            .line-separator.top {
              top: 0;
            }
            .line-separator.bottom {
              bottom: 0;
            }
            .facilities li:before {
              content: "";
              background: #fff;
              width: 4px;
              height: 4px;
              display: inline-block;
              top: calc(50% - 2px);
              position: absolute;
              left: 0;
            }

            .facilities li {
              padding-left: 10px;
            }
          `}
        </style>
      </PrefetchLink>
    </>
  );
};

export default Single;
