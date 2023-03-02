import {Fragment} from "react";
import {Container, Row, Col} from 'components/commons/Container';
const Wrapper = ({...props}) => {
    let {wrapperIndex,wrapperCss,fluid,rows,rowCss,extraClass} = props

    return <Container style={wrapperCss} fluid={fluid} extraClass={extraClass}>
            {rows && rows.map((row,rIndex) =>{
                return(
                    <Fragment key={`wrapper-${wrapperIndex}-row-${rIndex}`}>
                        <Row rowCss={rowCss[rIndex]}>
                            {row['columns'].map((item,i)=>{
                                let Component = item.component
                                return <Fragment key={`wrapper-${wrapperIndex}-col-${i}`}>
                                    <Col size={item.size} columnIndex={`wrapper-${wrapperIndex}-col-${i}`}>
                                        <Component data={item.data}/>
                                    </Col>
                                </Fragment>
                            })}
                        </Row>
                    </Fragment>
                )
            })}
    </Container>
}

export default Wrapper