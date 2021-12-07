import { getComponent } from '@stackbit/components/dist/components-registry';
import classNames from 'classnames'
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names'

const Flexbox = props => {
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