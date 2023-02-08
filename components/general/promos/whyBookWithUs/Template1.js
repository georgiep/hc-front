import PropTypes from 'prop-types';
import styled from 'styled-components'

import {BookWithUs} from 'components/svgs/promos/bookWithUs'
// color: ${({ theme }) => theme.light.colors.NightSky};
const WhyBookWithUsContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Template1 = ({data}) => {

    return(
        <WhyBookWithUsContainer>
            {
                data && data.map((item,i)=>{
                    return(
                        <div key={i}>
                            <span><BookWithUs/></span>
                            <span>{item.text}</span>
                        </div>
                    )
                })
            }
        </WhyBookWithUsContainer>
    )
}

Template1.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            text: PropTypes.string
        })
    )
}

// export default Template2;
