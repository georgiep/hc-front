import Text2 from "components/commons/Text2/Text2";
import { User } from "components/svgs/reviews/user";
import ChannelsSvg from "components/svgs/channels";
import Clamp from "react-multiline-clamp";

const Template1 = ({ data }) => {
 
  const { reviews, css } = data;
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {reviews &&
          reviews.map((item, i) => {
            return (
              <div key={i} className="review-box d-flex">
                <div className="pt-22 d-flex user-icon justify-content-center">
                  <User width={42} height={42} />
                </div>

                <div name="right-container" className="right-container">
                  <div className="d-flex flex-row pt-28">
                    <div className="d-flex flex-column mr-auto">
                      <Text2 titleStyle={css.name.class} text={item.name} />
                      <div className="d-flex flex-row pt-4">
                        <Text2
                          titleStyle={`${css.date.class} ${css.date.color} pr-8`}
                          text={item.date}
                        />
                        <ChannelsSvg
                          channelName={item.channel}
                          width={16}
                          height={16}
                        />
                        <Text2
                          titleStyle={`${css.channel.class} ${css.channel.color} pl-8`}
                          text={item.channel}
                        />
                      </div>
                    </div>

                    <div className="mr-negative-10">
                      <Text2 titleStyle={css.score.class} text={item.score} />
                    </div>
                  </div>
                  <div className="pt-6 pb-24">
                    <Clamp
                      withTooltip
                      lines={3}
                      withToggle
                      showMoreElement={({ toggle }) => (
                        <span
                          className={`read-more pt-28 mb-negative-14 d-flex justify-content-center align-items-center ${css.toggle.class} ${css.toggle.color}`}
                          type="button"
                          onClick={toggle}
                        >
                          Read more
                        </span>
                      )}
                      showLessElement={({ toggle }) => (
                        <span
                          className={`read-more pt-28 mb-negative-14 d-flex justify-content-center align-items-center ${css.toggle.class} ${css.toggle.color}`}
                          type="button"
                          onClick={toggle}
                        >
                          Read less
                        </span>
                      )}
                    >
                      <div>
                        <Text2 titleStyle={css.text.class} text={item.text} />
                      </div>
                    </Clamp>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .read-more {
            height: 100%;
          }

          .read-more::before {
            content: "";
            height: 1px;
            border-bottom: 1px dashed #dbddea;
            position: absolute;
            width: 100%;
            bottom: 40px;
            left: 0px;
          }

          .user-icon {
            flex: 0 0 12%;
          }

          .right-container {
            padding-right: 80px;
          }

          .review-box {
            position: relative;
            width: 739px;
            height: auto;
            border: 1px solid #dbddea;
            border-radius: 8px;
            margin-bottom: 18px;
          }
        `}
      </style>
    </>
  );
};

export default Template1;
