import Text2 from "components/commons/Text2/Text2";
import Button2 from "components/commons/buttons/Button2";

const Template2 = ({data}) => {

    const {items,heading,css} = data

    return(
        <section className={"offers-container-all"}>
            <div className={"offers-container-all-inner"}>
                <div className="row no-gutters">
                    <div className={"col-sm-12 text-center heading"}>
                        {
                            heading &&
                            <Text2 titleStyle={css.heading.class} text={heading} tag={css.heading.element} />
                        }
                    </div>
                    {
                        items && items.map((item,i) => {
                            return(
                                <div className={"offers-container col-xl-6 col-sm-12"} key={i}>
                                    <div className={"offers-container-inner"}>
                                        <div className={"offer-content position-relative"}>
                                            <div className={"offer-content-discount text-center"}>
                                                {
                                                    item.discount &&
                                                    <span>{item.discount}</span>
                                                }
                                                {
                                                    item.off &&
                                                    <span>{item.off}</span>
                                                }
                                                {
                                                    item.text &&
                                                    <div>{item.text}</div>
                                                }
                                            </div>
                                            {
                                                item.valid &&
                                                <div className={"d-inline center-absolute-position position-absolute valid"}>
                                                    {item.valid}
                                                </div>
                                            }

                                        </div>
                                    </div>

                                    {
                                        item.link &&
                                        <div className={"offer-book"}>
                                            <Button2 buttonStyle={`${css.link.class} no-border w-100`}>
                                                <a href={item.link.pathname} target={'_blank'} rel="noreferrer">
                                                    <span>{item.link.text}</span>
                                                </a>
                                            </Button2>
                                        </div>
                                    }


                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`           
               .offers-container-all-inner{
                  max-width: 1000px;
                  margin: 0 auto;
                  padding: 60px 0 99px 0;
               }
               
               .offers-container{
                  padding: 0 14px !important; 
               }
               
               .offer-content-discount{
                   padding: 132px 0 129px 0;
               }
               
               .offer-content{
                  background: #323B43;
                  padding: 13px 23px 23px 23px;
               }
               
               .offer-content > div > span{
                  color: #FFF;
               }
               
               .content{
                 padding-left: 60px;
               }
               
               .content-heading{
                 padding: 10px 0 10px 0;
               }
               
               .offer-content  > div  > span:nth-child(1){
                   font-family: SF Pro Display;
                   font-size: 48px;
                   font-style: normal;
                   font-weight: 200;
                   line-height: 57px;
                   letter-spacing: 0em;
                   text-align: center;
               }
               
               .offer-content  > div  > span:nth-child(2){
                   font-family: SF Pro Display;
                   font-size: 48px;
                   font-style: normal;
                   font-weight: 300;
                   line-height: 57px;
                   letter-spacing: 0em;
                   text-align: center;
                   margin-left: 10px;
               }
               
               .offer-content  > div  > div{
                    font-family: SF Pro Display;
                    font-size: 21px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 57px;
                    letter-spacing: 0em;
                    text-align: center;
                    color: #fff;
               }
               
                .offer-content > div:nth-child(2)  {
                    font-family: SF Pro Display;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: center;
                    color: #FFF;
                    position: relative;
                    padding-top: 5px;
                }
           
               .offer-content > div:nth-child(2):after{
                    background: none repeat scroll 0 0 transparent;
                    bottom: -6px;
                    content: '';
                    display: block;
                    height: 3px;
                    left: 0;
                    position: absolute;
                    background: #FFF;
                    transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    width: 100%;
               }
               
               .valid{
                    bottom: 47px;
               }
               
               .offer-book {
                   display: block;
                    float: left;
                    width: 100%;
                    padding: 37px;
                    background: #EF3F60;
               }
               .heading{
                 padding: 37px 0 73px 0;
               }
            `}</style>
        </section>
    )
}

export default Template2