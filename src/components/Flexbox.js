import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    console.warn("!!!", props)
    return (
        <div className="flexbox">
            { props.text }
            { props.children && childComponent(props.children) }
        </div>
    )
}

function childComponents(children) {
    const Child = getComponent(child.type)
    return <Child {...child} />
}

export default Flexbox