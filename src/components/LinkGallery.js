import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const ImageLink = getComponent("ImageLink");
    return (
        <div class="row">
            
            {imageLink(props)}
        </div>
    );
}

export default LinkGallery