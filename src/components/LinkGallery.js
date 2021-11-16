import { getComponent } from '@stackbit/components/dist/components-registry';

function imageLink(model) {
    const Component = getComponent(model.name);
    return <Component {...model} />;
}

export function LinkGallery(props) {
    return (
        <div class="row">
            {imageLink(props.name)}
        </div>
    );
}

export default LinkGallery