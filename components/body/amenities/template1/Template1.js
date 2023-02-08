import Text2 from "components/commons/Text2/Text2";

const CommonsAmenities = ({data}) => {
    const {items,icon,css} = data

    return(
        <>
            <ul>
                {items && items.map((item,i)=>{
                    return <li key={`amenities-${i}`}><Text2 tag={css.element} text={item} titleStyle={`${css.color} ${css.class}`}/></li>
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



export default CommonsAmenities