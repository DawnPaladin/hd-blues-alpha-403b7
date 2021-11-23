const ImageLink = props => {

    return (
        <a href={props.link}>
            <img src={props.image} alt={altText} />
        </a>
    )
}

export default ImageLink