import { getComponent } from '@stackbit/components/dist/components-registry';

function LinkGallery(props) {
    const imageLinks = props.imageLinks || [];
    const ImageLink = getComponent("ImageLink");
    const proptypes = 
    return (
        <div class="row">
            <h2>{props.title}</h2>
            <p>{props}</p>
        </div>
    );
}

export default LinkGallery