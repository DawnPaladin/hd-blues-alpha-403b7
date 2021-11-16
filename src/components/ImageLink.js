const ImageLink = ({ imgUrl, link, altText }) => {
    return (
        <a href={link}>
            <img src={imgUrl} alt={altText} />
        </a>
    )
}

export default ImageLink