import ImageLoader from "components/commons/image/ImageLoader";
import Heading from "components/commons/headings/Heading";
import Text from "components/commons/text/Text";
import PrefetchLink from "components/links/PrefetchLink";
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

        {name && (
          <div className="d-table name">
            <div className={"line position-relative d-table-cell"}>
              <span className={"position-absolute w-100"} />
            </div>
            <div className={"d-table-cell separator"} />
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

        <style jsx>
          {`
            .image {
              height: 480px;
            }
            .name {
              margin: 40px 0 17px 50px;
              padding: 0;
            }
            .info {
              margin: 0 0 17px 130px;
              padding: 0;
            }
            .line {
              width: 72px;
            }
            .line span {
              top: 50%;
              height: 1px;
              background-color: ${css.name.color || "white"};
            }
            .separator {
              width: 10px;
            }
          `}
        </style>
      </PrefetchLink>
    </>
  );
};

export default Single;
