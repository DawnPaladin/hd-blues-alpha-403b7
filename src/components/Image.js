const ImageLink = (props) => {
    const proptypes = Object.keys(props).join(',');
    if (props.link) {
        return (
            <a href={props.link}>
                <img src={props.image} alt={props.altText} width={props.width} height={props.height} />
            </a>
        );
    } else {
        return <img src={props.image} alt={props.altText} />
    }
};

export default ImageLink;
