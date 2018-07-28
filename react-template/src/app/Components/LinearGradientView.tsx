import * as React from 'react';
import { ColorScheme } from 'app/Models/ColorScheme';

export namespace LinearGradientView {
    export interface Props {
        colors: ColorScheme;
    }
}

export class LinearGradientView extends React.Component<LinearGradientView.Props> {
    constructor(props: LinearGradientView.Props, context?: any) {
        super(props, context);
    }

    render() {
        const linearGradientString = 'linear-gradient(to right, ' + this.props.colors.beginColor + ', ' + this.props.colors.endColor + ')';

        const linearGradientStyle = {
            width: '100%',
            height: '100vh',
            backgroundImage: linearGradientString,
            backgroundSize: 'cover'
        } as React.CSSProperties;

        return <div style={linearGradientStyle}>{this.props.children}</div>;
    }
}
