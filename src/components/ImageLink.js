const ImageLink = props => {

    return (
        <a href={props.link}>
            <img src={props.image} alt={props.altText} />
        </a>
    )
}

export default ImageLink