export const Container = ({children,fluid,style,extraClass}) => {
    return(
        <section className={`${fluid ? 'container-fluid' : 'container'} ${extraClass ? extraClass : ''} `} style={style}>
            {children}
        </section>
    )
}

export const Row = ({children, rowCss}) => {
    return (
        <div style={rowCss} className={'row'}>{children}</div>
    )
}

export const Col = ({children,style,size}) => {
    return(
        <div className={size} {...style}>{children}</div>
    )
}
