import { Check } from 'components/commons/svgs'
import Heading from 'components/commons/headings/Heading'

const List = ({data}) => {

    const {heading,items,css} = data;

    return(
        <>
            <div className={"list-container f-l w-100"}>
                <div className={"list-container-inner"}>

                    <div className={"list-heading"}>
                        {
                            heading && <Heading headingLevel={2} text={heading} css={css.heading}/>
                        }
                    </div>

                    <div className={"list"}>
                        <ul className={'f-l'}>
                            {
                                items && items.map( (item,i) => <li key={i}><Check/><span>{item}</span></li>)
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <style jsx>{`
          
            .list-container{
                padding: 80px 0 55px 0;
            }
            
            .list-container-inner{
               max-width: 1167px;
               margin: 0 auto;
            }
            
            .list-heading{
                padding-bottom: 68px;
            }
            
            .list ul { 
                column-count: 3;
                column-gap:  100px;
            }
           
            .list ul li{ 
                padding-bottom: 14px;
            }
            
            .list ul li span{ 
                padding-left: 23px;
            }
            
          `}</style>
        </>
    )
}