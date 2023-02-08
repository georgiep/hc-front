import {Fragment} from 'react'
// import useDynamicSVGImport from "components/commons/dynamicSvg/useDynamicSvgImport";
import Text2 from "components/commons/Text2/Text2";
import ImageLoader from "components/commons/image/ImageLoader";

const Template1 = ({data}) => {

    const {items,css} = data;

    return(
        <>
            <div className={"single-promo-container f-l w-100"}>
                <div className={"d-flex flex-wrap flex-row justify-content-between"}>
                    <DisplaySvgWithText items={items} css={css}/>
                </div>
            </div>
            <style jsx>{`
          
            .single-promo-container{
                padding: 23px 0;
                background: #A5BFE8;
            }
            
            .single-promo-container > div{
                max-width: ${css.maxWidth};
                margin: 0 auto;
            }
            
            @media screen and (max-width: 600px) {
               .single-promo-container > div{
                    padding: 0 16px;
               }
            }
  
          `}</style>
        </>
    )
}

const DisplaySvgWithText = ({items,css}) => {
    return items && items.map((item,i) => {
        return (
            <Fragment key={`d-svg-${i}`}>
                <IconWithText item={item} css={css}/>
            </Fragment>
        )
    })
}

const IconWithText = ({item,css}) => {

    return (
        <>
            <div className={'d-flex flex-row  align-items-center align-content-center'}>
                <div style={{width: item.width,height: item.height}}>
                    <ImageLoader src={item.svg} layout={'fill'}/>
                </div>
                <Text2 tag={css.element} text={item.text} titleStyle={`${css.class} ${css.color} col-auto`}/>
            </div>
                <style jsx>{`
                  
                @media screen and (max-width: 600px) {
                   .d-flex{
                        padding: 8px 0;
                   }
                }
      
              `}</style>
        </>

    )
}
export default Template1

