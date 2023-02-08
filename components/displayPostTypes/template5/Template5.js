import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";
import Single from "./Single";

const Template5 = ({ data }) => {
  let { title, subtitle, button, items, css } = data;

  return (
    <div className="items-container-outer d-flex justify-content-center">
      <div className="items-container-inner w-100">
        <div className="inner d-flex">
          <div>
            <div className="title">
              {title && (
                <Text2
                  titleStyle={css.title.class}
                  text={title}
                  tag={css.title.element}
                />
              )}
            </div>
            <div className="subtitle">
              {subtitle && (
                <Text2
                  titleStyle={css.subtitle.class}
                  text={subtitle}
                  tag={css.subtitle.element}
                />
              )}
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="all-items">
              {button && (
                <Button2
                  button={button}
                  buttonStyle={`${css.button.class} btn underline-on-hover`}
                />
              )}
            </div>
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
          .inner {
            justify-content: space-between;
          }
          .content {
            padding: 50px 0 0 0;
            margin: 0 0 0 0;
          }
          .gutters > [class*="col-"] {
            padding: 2px;
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

export default Template5;
