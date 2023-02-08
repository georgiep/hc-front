import React from 'react';
import PrefetchLink from "components/links/PrefetchLink"

const Button = ({children, button, css, buttonStyle, link, ...props }) => {

    return (
        <>
            {
                link &&
                <PrefetchLink pathname={button.pathname} api={button.api}>
                    <button
                        {...props}
                        type="button"
                        className={buttonStyle + " hoverBackground"}
                    >
                        {children || <span>{button.text}</span>}
                    </button>
                </PrefetchLink> ||
                <button
                    {...props}
                    type="button"
                    className={buttonStyle + " hoverBackground"}
                >
                    <>{children || <span>{button.text}</span>}</>
                </button>
            }
        </>
    );
};

export default Button;