const ImageLink = props => {
    const link = props.link || "";
    const imgUrl = props.imgUrl || "";
    const altText = props.altText || "";
    const proptypes = Object.keys(props).join(",");
    return (
        <a href={link}>
            I'm an image link with proptypes {proptypes}
            <img src={imgUrl} alt={altText} />
        </a>
    )
}

export default ImageLink