import { getComponent } from '@stackbit/components/dist/components-registry';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';
import Markdown from 'markdown-to-jsx';

const Flexbox = (props) => {
    const styles = props.styles || {};
    const className = classNames('flex', mapMaxWidthStyles(styles?.self?.width), mapFlexDirection(styles?.self?.flexDirection), mapJustifyContent(styles?.self?.justifyContent), 'm-auto' /* margin: auto */);
    return (
        <div className={className} data-sb-field-path={props.annotationPrefix}>
            {/* Markdown display adapted from https://github.com/stackbit/stackbit-components/blob/main/src/components/CtaSection/index.tsx#L95 */}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {props.children && childComponents(props.children)}
        </div>
    );
};

// from https://github.com/stackbit/stackbit-components/blob/main/src/components/TextSection/index.tsx
// linked from docs: https://docs.stackbit.com/reference/defining-models/field-and-component-styles/#width
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

function mapFlexDirection(direction) {
    if (!direction) return '';
    return 'flex-' + direction;
}

function mapJustifyContent(justification) {
    if (justification == "flex-start") return "justify-start";
    if (justification == "center") return "justify-center";
    if (justification == "flex-end") return "justify-end";
    if (justification == "space-between") return "justify-between";
    if (justification == "space-around") return "justify-around";
    if (justification == "space-evenly") return "justify-evenly";
    console.error(`Justification ${justification} not recognized`);
}

function mapAlignItems(alignment) {
    if (alignment == )
}

function childComponents(children) {
    return children.map((child, index) => {
        const Child = getComponent(child.type);
        return <Child key={index} {...child} />;
    });
}

export default Flexbox;
