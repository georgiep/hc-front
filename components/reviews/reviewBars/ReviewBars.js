import {GreyStar} from 'components/svgs/reviews/greyStar'
import {Star} from 'components/svgs/reviews/Star'
import Text2 from 'components/commons/Text2/Text2'
import Progress from 'react-progressbar'

const ReviewBars = ({data}) => {

  
    const {heading,ratings,hotelScore,css} = data

    return(
        <>
            <div className={"review-progress"}>
                <div className={"heading"}>
                    {
                        <Text2 tag={css.title2.element} text={heading} titleStyle={css.title2.class} />
                    }
                </div>
                <div className={"progress-bar f-l"}>
                    {
                        ratings && ratings.map((item,i)=>{
                            return(
                                <div key={i} className={"d-block f-l"}>
                                    <span>{item.star}</span>
                                    <span><GreyStar/></span>
                                    <span>
                                    <Progress completed={parseInt(item.rating)} />
                                </span>
                                    <span>{item.rating}%</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"hotel-score f-r d-flex"}>
                    <div>
                        {
                            hotelScore.score &&
                            <Text2 titleStyle={css.score.class} text={hotelScore.score} tag={css.score.element}/>
                            
                        }
                    </div>
                    <div>
                        <div>
                            {
                                hotelScore.title &&
                                <Text2 titleStyle={css.title.class} text={hotelScore.title} tag={css.title.element}/>
                            }
                        </div>
                        <div>
                            {
                                hotelScore.stars && Array(parseInt(hotelScore.stars)).fill(0).map((item,i) =>
                                    <span key={i}><Star width={'16'} height={'16'}/></span>
                                )
                            }
                        </div>
                        <div>
                            {
                                hotelScore.total &&
                                <Text2 titleStyle={css.total.class} text={`${hotelScore.total} Reviews`} tag={css.total.element}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .heading{
                padding-bottom: 27px;
              }
              .progress-bar{
                width: 422px;
              }
              .progress-bar > div > span{
                display: inline-block;
                float: left;
              }
              .progress-bar > div > span:nth-child(1){
                font-family: inherit;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0em;
                text-align: left;
                padding-top: 1px;
              }
              
             .progress-bar > div > span:nth-child(2){
                 padding: 0 10px;
              }
              .progress-bar > div > span:nth-child(3){
                 width: 303px;
                 margin-top: 4px;                
                 margin-right: 37px;
              }
              .progress-bar > div > span:nth-child(4){         
                  font-family: inherit;
                  font-size: 13px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 16px;
                  letter-spacing: 0em;
                  text-align: left;
                  padding-top: 2px;
             }
             .progress-bar > div {
                padding-bottom: 5px;
             }  
              
             .review-progress{
                 padding-top: 240px;
                 max-width: 780px;
                 margin: 0 auto;
              }
              .hotel-score > div:nth-child(2){
                padding-left: 14px;
              }
              .hotel-score > div:nth-child(2) > div{
                padding-bottom: 5px;
              }
              
            `}</style>
            <style global jsx>{`
              .progressbar-progress{
                background-color: #F77B09 !important; //Dynamic
                height: 11px !important;
               
              }
              .progressbar-container{
                background: #DBDDEA;
                height: 11px;
              }
            `}</style>
        </>

    )
}

export default ReviewBars