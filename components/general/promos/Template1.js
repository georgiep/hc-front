import Text2 from "components/commons/Text2/Text2";
const Template1 = ({ data }) => {
  const { heading, text, css, colors } = data;
  

  return (
    <>
      <div className={"promo-container d-flex justify-content-center"}>
        <div className={"promo-container-inner"}>
          {heading && (
            <div>
              <Text2
                titleStyle={css.heading.class}
                text={heading}
                tag={css.heading.element}
              />
            </div>
          )}
          {text && (
            <div>
              <Text2
                titleStyle={css.text.class}
                text={text}
                tag={css.text.element}
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .promo-container {
          background: ${colors.background || "#1c1c1c"};
        }

        .promo-container-inner {
          max-width: 1200px;
          padding: 54px 0;
        }

      `}</style>
    </>
  );
};

export default Template1;
