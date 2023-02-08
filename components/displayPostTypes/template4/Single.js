import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import { CircleArrowRightRed } from "components/commons/svgs";
import Text2 from "components/commons/Text2/Text2";

const Single = ({ item, css }) => {
  let { image, name, info, link } = item;

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

        <div className={"show-item-inner"}>
          {info && (
            <div className="info">
              <Text2
                titleStyle={css.info.class}
                text={info}
                tag={css.info.element}
              />
            </div>
          )}

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

          <div className="pointer">
            <CircleArrowRightRed />
          </div>
        </div>

        <style jsx>
          {`
            .image {
              height: 480px;
            }
            .show-item-inner {
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
          `}
        </style>
      </PrefetchLink>
    </>
  );
};

export default Single;
