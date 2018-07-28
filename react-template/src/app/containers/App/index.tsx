import * as React from 'react';
import * as style from './style.css';

export namespace App {
    export interface Props {
        // TODO
    }
}

export class App extends React.Component<App.Props> {
    constructor(props: App.Props, context?: any) {
        super(props, context);
    }

    render() {
        return <div className={style.normal}>teste</div>;
    }
}
