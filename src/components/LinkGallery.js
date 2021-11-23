import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const ImageLink = getComponent("ImageLink");
    const proptypes = Object.keys(props).join(",");
    const imageLinkData = props.imageLinks || [];
    const imageLinks = imageLinkData.map(imageLink => (
        <ImageLink link={imageLink.link} image={imageLink.imgUrl} altText={imageLink.altText} />
    ))
    return (
        <div class="row">
            <h2>{props.title}</h2>
            <p>{proptypes}</p>
            {imageLinks}
        </div>
    );
}

export default LinkGallery