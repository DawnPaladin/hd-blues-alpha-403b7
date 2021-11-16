import { getComponent } from '@stackbit/components/dist/components-registry';

function imageLink(model) {
    const Component = getComponent(model.type);
    return <Component {...feature} />;
}

export function LinkGallery(props) {
    return (
        <div class="row">
            {imageLink(props.item)}
        </div>
    );
}

export default LinkGallery