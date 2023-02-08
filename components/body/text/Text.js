import Text2 from 'components/commons/Text2/Text2'
const Text = ({data}) => {
  const {css,text} = data

  return(
      <div style={{maxWidth: css.maxWidth}}>
        <Text2 text={text} tag={css.element} titleStyle={`${css.class} ${css.color}`} />
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

export default Text