const ImageLink = props => {
    const link = props.link || "";
    const imgUrl = props.imgUrl || "";
    const altText = props.altText || "";
    return (
        <a href={link}>
            <img src={imgUrl} alt={altText} />
        </a>
    )
}

export default ImageLink