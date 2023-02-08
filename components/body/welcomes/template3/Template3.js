import Heading from 'components/commons/headings/Heading'
import Text2 from "components/commons/Text2/Text2";
import ImageLoader from 'components/commons/image/ImageLoader'

const mockData = {
    heading: "Lorem ipsum",
    subHeading: "Boutique Hotel on the Olympus Mt.",
    paragraphLeft: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    paragraphRight: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: '/images/welcomes/group2.png',
    css: {
        heading: {
            desktop: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '44px',
                lineHeight: '53px',
                color: '#000000',
                letterSpacing: '0em',
                fontFamily: 'Chronicle Display',
                textAlign: 'center'
            },
            tablet: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '46px',
                lineHeight: '55px',
                color: '#ffffff',
                fontFamily: 'Chronicle Display',
            },
            mobile: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                lineHeight: '55px',
                color: '#ffffff',
                fontFamily: 'Chronicle Display',
            },
        },
    }
}

const Template3 = () => {
    return(
        <section className="welcome position-relative">
            <div className="welcome-container position-relative w-100">
                <div className={"welcome-inner"}>
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            <div className="title text-center">
                                <Heading headingLevel={'2'} text={mockData.heading} css={mockData.css.heading} />
                                {/* <Text2 tag={css.heading.element} titleStyle={css.heading.class} text={heading}/> */}
                            </div>
                            <div className="image">
                                <ImageLoader
                                    src={mockData.image}
                                    alt="Hotel"
                                    layout="fill"
                                    objectFit="contain"
                                    type={"relative"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .welcome-inner{
                 max-width: 1440px;
                 margin: 0 auto;
                 padding: 60px 0 99px 0;
              }
              .welcome-container {
                background-color: #FFFFFF;
              }
              
              .title { 
                 max-width: 823px;
                 margin: 0 auto;
                 padding: 0;
              }
              
              .image{
                width: 195px;
                margin: 0 auto;
                height: 150px;
              }
            `}
            </style>
        </section>
    )
}

export default Template3