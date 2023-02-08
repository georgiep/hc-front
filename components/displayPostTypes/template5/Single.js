import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";

const Single = ({ item, css }) => {
  let { image, name, link } = item;

  return (
    <>
      <PrefetchLink api={link.api} pathname={link.pathname}>
        <div className="image w-100 position-relative">
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

          {name && (
            <div className="name center-l-t-absolute-position position-absolute">
              <Text2
                titleStyle={css.name.class}
                text={name}
                tag={css.name.element}
              />
            </div>
          )}
        </div>

        <style jsx>
          {`
            .image {
              height: 480px;
            }

            .name {
              margin: 0;
              padding: 0;
              z-index: 2;
            }

            .bg-items {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0) 100%
              );
              z-index: 1;
            }
          `}
        </style>
      </PrefetchLink>
    </>
  );
};

export default Single;
