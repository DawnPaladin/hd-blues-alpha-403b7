import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const ImageLink = getComponent("ImageLink");
    const proptypes = Object.keys(props).join(",");
    const imageLinkData = props.imageLinks;
    const imageLinks = imageLinkData.map(imageLink => (
        <ImageLink link={ImageLink.link} imgUrl={ImageLink.imgUrl} altText={}
    ))
    return (
        <div class="row">
            <h2>{props.title}</h2>
            <p>{proptypes}</p>
            <ImageLink link={props.item.link} imgUrl={props.item.imgUrl} altText={props.item.altText} />
        </div>
    );
}

export default LinkGallery