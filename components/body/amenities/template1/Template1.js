import Text2 from "components/commons/Text2/Text2";
import PropTypes from "prop-types";

const CommonsAmenities = ({data}) => {
    let {items,icon,css} = data

    return(
        <>
            <ul>
                {items && items.map((item,i)=>{
                    return <li key={`amenities-${i}`}><Text2 text={item} /></li>
                })}
            </ul>
            <style jsx>
                {`
                  ul{
                    -webkit-column-count: 3;
                    -moz-column-count: 3;
                    column-count: 3;
                    list-style: none;
                    padding: 0;
                  }
                  li{
                    position: relative;
                  }                 
                  li::before {
                      content: "";
                      position: absolute;
                      background: url(${icon || ""});
                      width: 13px;
                      height: 10px;
                      left: -20px;
                      top: 11px;
                  }
                `}
            </style>
        </>
    )
}

CommonsAmenities.propTypes = {
    items: PropTypes.array,
    icon: PropTypes.string,
    css: PropTypes.object,
}


export default CommonsAmenities