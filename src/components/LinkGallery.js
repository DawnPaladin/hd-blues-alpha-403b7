import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const ImageLink = getComponent("ImageLink");
    return (
        <div class="row">
            {/* imageLinks.map((imageLink, index) => (
                <div>{imageLink}</div>
                    {/* <ImageLink key={index} {...imageLink} /> */}
            )) */}
            {imageLink(props)}
        </div>
    );
}

export default LinkGallery