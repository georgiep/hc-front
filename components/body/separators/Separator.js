import LineSeparator from "./LineSeparator";

const Separator = ({data}) => {
    const {maxWidth,color,padding,margin} = data
    return(
        <LineSeparator padding={padding} margin={margin} color={color} maxWidth={maxWidth} />
    )
}

export default Separator