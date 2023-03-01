import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import {useState} from "react";

const Template1 = ({data}) => {
    const {css,text} = data
    const [lines,setLines] = useState(3)

    const handleReflow = () => {
        setLines(200)
    }

    return(
        <div style={{maxWidth: css.maxWidth}} className={`${css.class} ${css.color}`}>
            <HTMLEllipsis
                unsafeHTML={text}
                maxLine={lines}
                ellipsis='...'
                basedOn='letters'
            />

            { lines !== 200 ?
                <div className={'text-decoration-underline cursor-pointer'} onClick={() => setLines(200)}>Read More</div> :
                <div className={'text-decoration-underline cursor-pointer'} onClick={() => setLines(3)}>Read Less</div>
            }

            <style jsx>{`
                   div{
                     margin: ${css.margin};
                     padding: ${css.padding};
                   }
                `}
            </style>
        </div>
    )
}

export default Template1
