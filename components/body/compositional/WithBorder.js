import React from "react";

const WithBorder = ({children,direction,cssClass}) => {

    return(
        <>
            <div className={cssClass}>{children}</div>
            <style jsx>
                {`
                  div{
                    position: relative;
                    max-width: 479px;
                    margin: 0 auto;
                    padding: 50px;
                  }
                  
                  div::after{
                    content: "";
                    width: 182px;
                    height: 2px;
                    position: absolute;
                    background: #04456D;
                    right: 0;
                  }
                `}
            </style>
        </>

    )
}


export default WithBorder
