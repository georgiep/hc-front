import PrefetchLink from "components/links/PrefetchLink";
import ImageLoader from "components/commons/image/ImageLoader";
import Text2 from "components/commons/Text2/Text2";

const Template1 = ({ data }) => {
  const { items, css } = data;

  return (
    <>
      <div className={"promo-pages-container"}>
        <div className={"promo-pages-container-inner w-100 row no-gutters"}>
          {items &&
            items.map((item, i) => {
              return (
                <div className={"col-md-4"} key={i}>
                  <PrefetchLink
                    pathname={item.link.pathname}
                    api={item.link.api}
                  >
                    <div className="image w-100 position-relative">
                      <div
                        className={"bg-promo position-absolute w-100 h-100"}
                      />

                      {item.image && (
                        <ImageLoader
                          src={item.image}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          type="relative"
                        />
                      )}

                      {item.link.text && (
                        <div className="name center-l-t-absolute-position position-absolute">
                          <Text2
                            titleStyle={css.text.class}
                            text={item.link.text}
                            tag={css.text.element}
                          />
                        </div>
                      )}
                    </div>
                  </PrefetchLink>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
        .image {
          height: 726px;
        }

        .bg-promo {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 1;
        }

        .name {
          text-transform: capitalize;
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default Template1;
