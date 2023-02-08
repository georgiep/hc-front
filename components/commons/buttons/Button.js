import React, { useState } from 'react';
import breakpoints from "styles/breakpoints";
import PrefetchLink from "components/links/PrefetchLink"

const Button = ({children, button, css, buttonStyle, link, ...props }) => {

    return (
        <>
            <button
                {...props}
                type="button"
                className={buttonStyle + " hoverBackground"}
            >
                {
                    link &&
                    <PrefetchLink pathname={button.pathname} api={button.api}>
                        {children || <span>{button.text}</span>}
                    </PrefetchLink> ||
                    <>{children || <span>{button.text}</span>}</>
                }

            </button>
            {/* <style jsx>{`
               .hoverBackground:after{
                 background: ${css.desktop.color};
               }
               button{
                 background: ${css.desktop.background};
                 padding: ${css.desktop.padding};
                 color: ${css.desktop.color};
                 border: ${css.desktop.border};
               }
               span{
                 font-family: ${css.desktop.fontFamily};
                 font-style: ${css.desktop.fontStyle};
                 font-weight: ${css.desktop.fontWeight};
                 font-size: ${css.desktop.fontSize};
                 line-height: ${css.desktop.lineHeight};
                 color: ${css.desktop.color};
               }
               @media screen and ${breakpoints.tabletDown} {
                span {
                  font-family: ${css.tablet.fontFamily};
                  font-style: ${css.tablet.fontStyle};
                  font-weight: ${css.tablet.fontWeight};
                  font-size: ${css.tablet.fontSize};
                  line-height: ${css.tablet.lineHeight};
                  color: ${css.tablet.color};  
                }
                button{
                  background: ${css.tablet.background};
                  padding: ${css.tablet.padding};
                  color: ${css.tablet.color};
                  border: ${css.tablet.border};
               }
              }
               @media screen and ${breakpoints.mobile} {
                button{
                  background: ${css.mobile.background};
                  padding: ${css.mobile.padding};
                  color: ${css.mobile.color};
                  border: ${css.mobile.border};
                }
                span {
                  font-family: ${css.mobile.fontFamily};
                  font-style: ${css.mobile.fontStyle};
                  font-weight: ${css.mobile.fontWeight};
                  font-size: ${css.mobile.fontSize};
                  line-height: ${css.mobile.lineHeight};
                  color: ${css.mobile.color};  
                }            
              }
            `}</style> */}
        </>
    );
};

export default Button;