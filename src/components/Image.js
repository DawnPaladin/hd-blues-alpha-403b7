const ImageLink = (props) => {
    const proptypes = Object.keys(props).join(',');
    if (props.link) {
        return (
            <a href={props.link}>
                <img src={props.image} alt={props.altText} width={props.width} height={props.height} />
            </a>
        );
    } else {

        return (
            <div class="flex-item" style={{width: props.width ? props.width : null}}>
                <img src={props.image} alt={props.altText} width={props.width} height={props.height} />
            </div>
        );
    }
};

export default ImageLink;
