import { getComponent } from '@stackbit/components/dist/components-registry';
// import classNames from 'classnames'
// import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names'

const Flexbox = props => {
    const styles = props.styles || {}
    console.warn(styles)
    return (
        <div className={classNames("flexbox", mapStyles(styles.self))} data-sb-field-path={props.annotationPrefix}>
            { props.text }
            { props.children && childComponents(props.children) }
        </div>
    )
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function childComponents(children) {
    return children.map((child, index) => {
        const Child = getComponent("Flexbox");
        return <Child key={index} {...child} />    
    })

}

export default Flexbox