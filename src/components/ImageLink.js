const ImageLink = ({ imgUrl, link, altText, annotationPrefix }) => {
    return (
        <a href={link} data-sb-field-path={annotationPrefix}>
            <img src={imgUrl} alt={altText} />
        </a>
    )
}