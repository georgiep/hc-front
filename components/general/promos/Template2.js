import Text2 from "components/commons/Text2/Text2";

const Template2 = ({ data }) => {
  const { heading, css, colors } = data;

  return (
    <>
      <div className={"promo-container d-flex justify-content-center"}>
        <div className={"promo-container-inner"}>
          {heading && (
            <div className={"heading"}>
              <Text2
                titleStyle={css.heading.class}
                text={heading}
                tag={css.heading.element}
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
          max-width: 885px;
          padding: 54px 0;
        }

        .heading {
            text-align: center;
         }
      `}</style>
    </>
  );
};

export default Template2;
