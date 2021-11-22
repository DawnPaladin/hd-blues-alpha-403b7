import { getComponent } from '@stackbit/components/dist/components-registry';

function imageLink(model) {
    const Component = getComponent(model.name);
    return <Component {...model} />;
}

function LinkGallery(props) {
    return (
        <div class="row">
            Links go here
            {/* {imageLink(props)} */}
        </div>
    );
}

export default LinkGallery