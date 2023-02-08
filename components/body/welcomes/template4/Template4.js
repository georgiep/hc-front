import React from 'react'
import Text2 from 'components/commons/Text2/Text2'
// import WithBorder from "components/body/compositional/WithBorder";
import LineSeparator from "components/body/separators/LineSeparator";

const Template4 = ({ data }) => {
    let { heading, description, css } = data

    return (
        <section className="welcome position-relative">
            <div className="welcome-container position-relative w-100">
                <div className={"welcome-inner"}>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            {/*<WithBorder>*/}
                            {/*    {*/}
                            {/*        heading &&*/}
                            {/*        <div className="heading text-center">*/}
                            {/*            <Text2*/}
                            {/*                tag={css.heading.element}*/}
                            {/*                titleStyle={`${css.heading.class} ${css.heading.color}`}*/}
                            {/*                text={heading}/>*/}
                            {/*            <LineSeparator/>*/}
                            {/*        </div>*/}
                            {/*    }*/}
                            {/*</WithBorder>*/}
                            {
                                heading &&
                                <div className="heading text-center">
                                    <Text2
                                        tag={css.heading.element}
                                        titleStyle={`${css.heading.class} ${css.heading.color}`}
                                        text={heading}/>
                                    <LineSeparator cssClass={`${css.separator.color}`}/>
                                </div>
                            }
                            {
                                description &&
                                <div className="description text-center">
                                    <Text2
                                        tag={css.description.element}
                                        titleStyle={`${css.description.class} ${css.description.color}`}
                                        text={description}/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                  .welcome-inner{
                     max-width: 1440px;
                     margin: 0 auto;
                     padding: 60px 0 99px 0;
                  }
                  .welcome-container {
                    background-color: #FFFFFF;
                  }
                  .heading{
                    max-width: 450px;
                    margin: 0 auto;
                  }
                  .description{
                     padding: 0 100px;
                  }
                `}
            </style>
        </section>
    )
}

export default Template4
