import * as React from 'react';
import * as style from './style.css';
import { TodoModel } from 'app/models';

export namespace App {
    export interface Props {
        // TODO
    }
}

export class App extends React.Component<App.Props> {
    static defaultProps: Partial<App.Props> = {
        filter: TodoModel.Filter.SHOW_ALL
    };

    constructor(props: App.Props, context?: any) {
        super(props, context);
    }

    render() {
        return <div className={style.normal}>teste</div>;
    }
}
