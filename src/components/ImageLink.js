const ImageLink = props => {
    return (
        <a href={props.link}>
            <p>Image: {props.image}</p>
            <img src={props.image} alt={props.altText} />
        </a>
    )
}

export default ImageLink