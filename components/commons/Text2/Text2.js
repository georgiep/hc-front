const Text2 = ({ tag, text, titleStyle }) => {
    const Tag = tag || 'div'

    return (
        <Tag className={titleStyle || ''} dangerouslySetInnerHTML={createMarkup(text)}/>
    )
}

function createMarkup(text) {
    return { __html: text }
}

export default Text2
