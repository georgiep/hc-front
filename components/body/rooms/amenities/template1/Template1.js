import { Check } from "components/commons/svgs";
import Text2 from "components/commons/Text2/Text2";

const Template1 = ({ data }) => {
  const { heading, items, css } = data;
  
  return (
    <>
      <div className={"amenities-services-container f-l w-100"}>
        <div className={"amenities-services-container-inner"}>
          <div className={"amenities-heading"}>
            {heading && (
              <Text2
                titleStyle={css.heading.class}
                text={heading}
                tag={css.heading.element}
              />
            )}
          </div>

          <div className={"amenities"}>
            <ul className={"f-l"}>
              {items &&
                items.map((item, i) => (
                  <li key={i}>
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .amenities-services-container {
          padding: 80px 0 55px 0;
        }

        .amenities-services-container-inner {
          max-width: 1167px;
          margin: 0 auto;
        }

        .amenities-heading {
          padding-bottom: 68px;
        }

        .amenities ul {
          column-count: 3;
          column-gap: 100px;
        }

        .amenities ul li {
          padding-bottom: 14px;
        }

        .amenities ul li span {
          padding-left: 23px;
        }
      `}</style>
    </>
  );
};

export default Template1;
