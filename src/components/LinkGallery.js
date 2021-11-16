import { getComponent } from '../../components-registry';

export function LinkGallery(props) {
    return (
        <div class="row">
            <ImageLink item={props.item} />
        </div>
    );
}

export default LinkGallery