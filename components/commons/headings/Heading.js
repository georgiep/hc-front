import breakpoints from 'styles/breakpoints'

const Heading = ({ headingLevel, text, titleStyle, css }) => {
  const Tag = 'h' + headingLevel

  return (
    <Tag className={titleStyle || ''}>
      <span>{text}</span>
      <style jsx>{`
        span {
          font-family: ${css.desktop.fontFamily};
          font-style: ${css.desktop.fontStyle};
          font-weight: ${css.desktop.fontWeight};
          font-size: ${css.desktop.fontSize};
          line-height: ${css.desktop.lineHeight};
          color: ${css.desktop.color};
        }
        @media screen and (${breakpoints.tabletDown}) {
          span {
            font-family: ${css.tablet.fontFamily};
            font-style: ${css.tablet.fontStyle};
            font-weight: ${css.tablet.fontWeight};
            font-size: ${css.tablet.fontSize};
            line-height: ${css.tablet.lineHeight};
            color: ${css.tablet.color};
          }
        }
        @media screen and (${breakpoints.mobile}) {
          span {
            font-family: ${css.mobile.fontFamily};
            font-style: ${css.mobile.fontStyle};
            font-weight: ${css.mobile.fontWeight};
            font-size: ${css.mobile.fontSize};
            line-height: ${css.mobile.lineHeight};
            color: ${css.mobile.color};
          }
        }
      `}</style>
    </Tag>
  )
}

export default Heading
