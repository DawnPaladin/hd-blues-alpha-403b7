import { getComponent } from '../../components-registry';

function ImageLink(model) {
    const Component = getComponent(model.type);
    return <Component {...feature} />;
}

export function LinkGallery(props) {
    return (
        <div class="row">
            <ImageLink item={props.item} />
        </div>
    );
}

export default LinkGallery