const ImageLink = props => {

    return (
        <a href={props.link}>
            <img src={imgUrl} alt={altText} />
        </a>
    )
}

export default ImageLink