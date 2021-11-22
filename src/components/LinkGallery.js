import { getComponent } from '@stackbit/components/dist/components-registry';

function imageLink(model) {
    const ImageLink = getComponent("ImageLink");
    return <ImageLink {...model} />;
}

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const
    return (
        <div class="row">
            imageLinks.map((imageLink, index) => (
                imageLink
            ))
            {imageLink(props)}
        </div>
    );
}

export default LinkGallery