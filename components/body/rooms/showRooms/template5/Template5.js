import Heading from 'components/commons/headings/Heading'
import Button from 'components/commons/buttons/Button'
import SingleRoom from 'components/body/rooms/showRooms/template5/SingleRoom'

const Template5 = ({ data }) => {
    let { title, subtitle, button, rooms, css } = data

    return (
        <div className="rooms-container-outer d-flex justify-content-center">
            <div className="rooms-container-inner w-100">
                <div className="inner d-flex">
                    <div>
                        <div className="title">
                            {title && <Heading text={title} headingLevel={'2'} css={css.title} />}
                        </div>
                        <div className="subtitle">
                            {subtitle && <Heading text={subtitle} headingLevel={'3'} css={css.subtitle} />}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="all-rooms ">
                            {button && <Button buttonStyle={'btn underline-on-hover'} button={button} css={css.button} />}
                        </div>
                    </div>
                </div>
                <div className="content row justify-content-center align-self-center gutters">
                    {rooms && rooms.map((room, index) => {
                        return(
                            <div key={index} className="image-container col-xl-6 col-12">
                                <SingleRoom room={room} css={css} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <style jsx>
                {`
                  .rooms-container-outer {
                    background: #1c1c1c;
                  }
                  .rooms-container-inner {
                    max-width: 1440px;
                    padding: 54px 0;
                  }
                  .inner {
                    justify-content: space-between;
                  }
                  .content{
                    padding: 50px 0 0 0;
                    margin: 0 0 0 0;
                  }
                  .gutters > [class*='col-'] {
                    padding: 2px;
                  } 
                  .title {
                    margin: 5px 0 0 0;
                    padding: 0;
                  }
                  .subtitle {
                    padding: 0;
                    margin: 0;
                  }
                  .all-rooms {
                    margin: 20px 130px 0 0;
                    padding: 0; 
                  }
                `}
            </style>
        </div>
    )
}

export default Template5
