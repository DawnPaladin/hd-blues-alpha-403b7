import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    return (
        <div className="flexbox">
            { props.text }
            { }
        </div>
    )
}

function childComponent(child) {
    const Child = getComponent(child.type)
    return <
}

export default Flexbox