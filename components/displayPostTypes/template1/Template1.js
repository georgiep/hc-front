import Single from "./Single";
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Template1 = ({ data }) => {
  let { title, subtitle, button, items, css } = data;

  return (
    <div className="items-container-outer d-flex w-100 justify-content-center">
      <div className="items-container-inner w-100">
        <div className="d-flex justify-content-between">
          <div>
            {title && (
              <div className="title">
                <Text2
                  titleStyle={css.title.class}
                  text={title}
                  tag={css.title.element}
                />
              </div>
            )}

            {subtitle && (
              <div className="subtitle">
                <Text2
                  titleStyle={css.subtitle.class}
                  text={subtitle}
                  tag={css.subtitle.element}
                />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-end">
            {button && (
              <div className="all-items ">
                <Button2
                  button={button}
                  buttonStyle={`${css.button.class} underline-on-hover`}
                />
              </div>
            )}
          </div>
        </div>
        <div className="content row justify-content-center align-self-center gutters">
          {items &&
            items.map((item, index) => {
              return (
                <div key={index} className="image-container col-xl-6 col-12">
                  <Single item={item} css={css} />
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .items-container-outer {
            background: #1c1c1c;
          }
          .items-container-inner {
            max-width: 1440px;
            padding: 54px 0;
          }
          .content {
            padding: 50px 0 0 0;
            margin: 0 0 0 0;
          }
          .gutters > [class*="col-"] {
            padding: 0 4px 0 4px;
          }
          .title {
            margin: 5px 0 0 0;
            padding: 0;
          }
          .subtitle {
            padding: 0;
            margin: 0;
          }
          .all-items {
            margin: 20px 130px 0 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Template1;
