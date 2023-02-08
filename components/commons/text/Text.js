import breakpoints from 'styles/breakpoints'

const Text = ({ tag, text, titleStyle, css }) => {
  const Tag = tag

  return (
    <Tag className={titleStyle || ''}>
      <span dangerouslySetInnerHTML={createMarkup(text)} />
      {/* <style jsx>{`
        span {
          font-family: ${css.desktop.fontFamily};
          font-style: ${css.desktop.fontStyle};
          font-weight: ${css.desktop.fontWeight};
          font-size: ${css.desktop.fontSize};
          line-height: ${css.desktop.lineHeight};
          color: ${css.desktop.color};
          opacity: ${css.desktop.opacity};
          letter-spacing: ${css.desktop.letterSpacing};
        }
        @media screen and ${breakpoints.tabletDown} {
          span {
            font-family: ${css.tablet.fontFamily};
            font-style: ${css.tablet.fontStyle};
            font-weight: ${css.tablet.fontWeight};
            font-size: ${css.tablet.fontSize};
            line-height: ${css.tablet.lineHeight};
            color: ${css.tablet.color};
            opacity: ${css.desktop.opacity};
            letter-spacing: ${css.desktop.letterSpacing};
          }
        }
        @media screen and ${breakpoints.mobile} {
          span {
            font-family: ${css.mobile.fontFamily};
            font-style: ${css.mobile.fontStyle};
            font-weight: ${css.mobile.fontWeight};
            font-size: ${css.mobile.fontSize};
            line-height: ${css.mobile.lineHeight};
            color: ${css.mobile.color};
            opacity: ${css.desktop.opacity};
            letter-spacing: ${css.desktop.letterSpacing};
          }
        }
      `}</style> */}
    </Tag>
  )
}

function createMarkup(text) {
  return { __html: text }
}

export default Text
