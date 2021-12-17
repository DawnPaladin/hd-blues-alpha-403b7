import Image from 'next/image';

const ImageLink = (props) => {
    const proptypes = Object.keys(props).join(',');
    const imageComponent = <Image src={props.image} alt={props.altText} layout="fill" />;
    if (props.link) {
        return (
            <a href={props.link}>
                <p>proptypes: {proptypes} </p>
                <p>imgUrl: {props.imgUrl}</p>
                <p>image: {props.image} </p>
                <p>altText: {props.altText}</p>
                {imageComponent}
            </a>
        );
    } else {
        return imageComponent;
    }
};

export default ImageLink;
