const ImageLink = ({ imgUrl, link, altText, annotationPrefix }) => {
    return (
        <a href={link}>
            <img src={imgUrl} alt={altText} />
        </a>
    )
}