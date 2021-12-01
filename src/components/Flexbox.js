import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    return (
        <div className="flexbox">
            { props.text }
            { }
        </div>
    )
}

function children() {
    const Child = getComponent()
}

export default Flexbox