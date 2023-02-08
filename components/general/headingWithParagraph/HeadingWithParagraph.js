import Text2 from "components/commons/Text2/Text2";

const HeadingWithParagraph = ({data}) => {

    const {heading,text,css} = data
    console.log("heading with paragrapgh",data)

    return(
       <div>
           <Text2 titleStyle={css.heading.class} text={heading} tag={css.heading.element}/>
           <Text2 titleStyle={css.text.class} text={text} tag={css.text.element}/>
       </div>
    )
}

export default HeadingWithParagraph