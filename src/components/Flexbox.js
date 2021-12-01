import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    return (
        <div className="flexbox">
            { props.text }
            { childComponent}
        </div>
    )
}

function childComponent(child) {
    const Child = getComponent(child.type)
    return <Child {...child} />
}

export default Flexbox