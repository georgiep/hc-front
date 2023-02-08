import PrefetchLink from 'components/links/PrefetchLink'
import Text2 from "components/commons/Text2/Text2";
import {ArrowBreadCrumbs} from 'components/commons/svgs'

const Template1 = ({data}) => {

    const { links, css } = data

    return(
         <>
           <div className={"breadcrumbs"}>
               <ul>
                   {
                       links && links.map((link,i)=><li className={"d-inline"} key={i}>
                           <PrefetchLink pathname={link.pathname} api={link.api}>
                               <Text2 titleStyle={css.links.class} text={link.text} tag={css.links.element}/>
                               <span className={"arrow"}><ArrowBreadCrumbs /></span>
                           </PrefetchLink>
                       </li>
                       )
                   }
               </ul>
           </div>
           <style jsx>{`
             .breadcrumbs{
               padding: 30px 0;
               max-width: 100%;
               margin: 0 auto;
             }
             .breadcrumbs ul li:nth-last-child(1) .arrow{
               display: none; 
             }
             .breadcrumbs ul li .arrow{
               padding: 0 10px;
             }
           `}</style>
         </>
    )
}

export default Template1