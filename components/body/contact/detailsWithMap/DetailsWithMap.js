import SimpleMap from "components/maps/SimpleMap";
import Text2 from "components/commons/Text2/Text2";

const DetailsWithMap = ({ data }) => {
  const { detail, directions, map, css, colors } = data;

  return (
    <>
      <section id={"hotel-details-with-map"}>
        <div className={"d-flex"}>
          <div className={"details"}>
            <div>
              {detail && (
                <Text2
                  titleStyle={css.detail.class}
                  text={detail}
                  tag={css.detail.element}
                />
              )}
            </div>

            <ul>
              {directions &&
                directions.map((item, i) => {
                  return (
                    <li className={"details-list-items"} key={i}>
                      <div>
                        <Text2
                          titleStyle={css.heading.class}
                          text={item.heading}
                          tag={css.heading.element}
                        />
                      </div>
                      <div>
                        <Text2
                          titleStyle={css.content.class}
                          text={item.content}
                          tag={css.content.element}
                        />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={"map flex-grow-1"}>
            {map && <SimpleMap data={map} />}
          </div>
        </div>
      </section>
      <style jsx>{`
        .details {
          padding: 75px 79px 83px 110px;
        }
        .details > div {
          padding-bottom: 89px;
        }
        .details ul li {
          padding-bottom: 39px;
        }
        .details ul li > div {
          padding-bottom: 6px;
        }
        #hotel-details-with-map {
          background: ${colors.background || "#FFF"};
        }
      `}</style>
    </>
  );
};

export default DetailsWithMap;
