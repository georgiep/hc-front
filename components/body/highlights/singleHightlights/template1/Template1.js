import Text2 from "components/commons/Text2/Text2";
import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import { Star } from "components/commons/svgs";

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
                <div className={"image flex-column position-relative f-l"}>
                  {item.image && (
                    <PrefetchLink
                      pathname={item.link.pathname}
                      api={item.link.api}
                    >
                      <ImageLoader
                        src={item.image}
                        alt="Picture of the author"
                        layout="fill"
                        type="relative"
                      />
                    </PrefetchLink>
                  )}
                </div>
                <div className={"content flex-column"}>
                  {item.heading && (
                    <div className={"content-heading"}>
                      <PrefetchLink
                        pathname={item.link.pathname}
                        api={item.link.api}
                      >
                        <Text2
                          titleStyle={css.heading.class}
                          text={item.heading}
                          tag={css.heading.element}
                        />
                      </PrefetchLink>
                    </div>
                  )}

                  {item.stars && (
                    <div className={"stars"}>
                      {Array(parseInt(item.stars))
                        .fill(0)
                        .map((item, i) => (
                          <span key={i}>
                            <Star />
                          </span>
                        ))}
                    </div>
                  )}

                  {item.text && (
                    <Text2
                      titleStyle={css.text.class}
                      text={item.text}
                      tag={css.text.element}
                    />
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
          padding: 13px 0 10px 0;
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

        .stars {
          padding: 0 0 5px 0;
        }

        .items-container-inner {
          max-width: 940px;
          margin: 0 auto;
          padding: 45px 0 45px 0;
        }
      `}</style>
    </section>
  );
};

export default Template1;
