import Carousel from './Carousel'
import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";
import PrefetchLink from "components/links/PrefetchLink";
import React from "react";

const Template1 = ({ data, initialRequest }) => {
    let { items, heading, button, css, link } = data

    return (
        <div className="container-outer w-100">
            <div className="container-inner">
                <div className="container-inner-carousel">

                    {
                        heading || button && <div className="header">
                            {
                                heading &&
                                <div className="title">
                                    <Text2 titleStyle={css.heading.class} text={heading} tag={css.heading.element}/>
                                </div>
                            }

                            {
                                button &&
                                <div className="all-specials">
                                    <Button2 button={button} buttonStyle={`${css.button.class} btn underline-on-hover`} link={true}/>
                                </div>
                            }

                        </div>
                    }


                    <div>
                        {
                            items &&
                            <Carousel items={items} css={css} initialRequest={initialRequest}/>
                        }
                    </div>

                    {
                        link && <div className={'d-block sp-button'}>
                            <PrefetchLink pathname={link.pathname} api={''}>
                                <button className={'button-secondary f-r text-uppercase'}>
                                    see all
                                </button>
                            </PrefetchLink>
                        </div>
                    }

                </div>
            </div>
            <style jsx>{`
            .container-outer {
            }
            .container-inner {
              max-width: 1440px; // dynamic
              margin: auto;
              padding: 0; // dynamic
            }
            .container-inner-carousel {
              max-width: 1085px; // dynamic
              margin: auto;
              padding: 0; // dynamic
            }
            .header {
              display: flex;
              padding: 63px 0 83px 0; // dynamic
              margin: 0; // dynamic
              justify-content: space-between;
            }
            .all-specials {
              margin: 23px 27px 0 0; // dynamic
              padding: 0; // dynamic
            }
          `}</style>
        </div>
    )
}

export default Template1
