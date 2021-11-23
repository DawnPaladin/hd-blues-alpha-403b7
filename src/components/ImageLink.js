const ImageLink = props => {
    return (
        <a href={props.link}>
            <p>Image: {props.url}</p>
            <img src={props.image} alt={props.altText} />
        </a>
    )
}

export default ImageLink