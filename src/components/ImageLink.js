const ImageLink = props => {
    const link = props.link || ""
    return (
        <a href={link}>
            I'm an image link
            <img src={imgUrl} alt={altText} />
        </a>
    )
}

export default ImageLink