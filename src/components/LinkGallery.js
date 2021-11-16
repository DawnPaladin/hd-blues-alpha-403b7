import { getComponent } from '../../components-registry';

function ImageLink(feature)

export function LinkGallery(props) {
    return (
        <div class="row">
            <ImageLink item={props.item} />
        </div>
    );
}

export default LinkGallery