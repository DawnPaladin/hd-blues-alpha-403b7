import Image from 'next/image';

const Image = (props) => {
    const proptypes = Object.keys(props).join(',');
    return (
        <a href={props.link}>
            <p>proptypes: {proptypes} </p>
            <p>imgUrl: {props.imgUrl}</p>
            <p>image: {props.image} </p>
            <p>altText: {props.altText}</p>
            <Image src={props.image} alt={props.altText} />
        </a>
    );
};

export default Image;
