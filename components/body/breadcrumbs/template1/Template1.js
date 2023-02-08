import Text2 from "components/commons/Text2/Text2";
import PrefetchLink from "components/links/PrefetchLink";

const Template1 = ({data}) => {

    const {items,css} = data

    return (
        <div className={'d-flex'}>
            {
                items && items.map((item,i)=>{
                    return(
                        <div className={'d-flex align-items-center text-capitalize'} key={`breadcrumbs-${i}`}>
                            {
                                i < items.length - 1 ? <PrefetchLink pathname={item.link}>
                                    <Text2 titleStyle={`${css.class} ${css.color} ${i === 0 ? 'pe-2' : 'px-2'}`} text={item.label} tag={css.element}/>
                                </PrefetchLink> : <Text2 titleStyle={`${css.class} ${css.color} px-2`} text={item.label} tag={css.element}/>
                            }

                            {
                                i < items.length - 1 && <div className={`${css.color}`}>-</div>
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Template1