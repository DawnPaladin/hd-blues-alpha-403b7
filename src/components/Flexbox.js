import { getComponent } from '@stackbit/components/dist/components-registry';

const Flexbox = props => {
    console.warn("!!!", props)
    return (
        <div className="flexbox" data-sb-field-path={props.annotationPrefix}>
            { props.text }
            { props.children && childComponents(props.children) }
        </div>
    )
}

function childComponents(children) {
    return children.map((child, index) => {
        const Child = getComponent("Flexbox");
        return <Child key={index} {...child} />    
    })

}

export default Flexbox