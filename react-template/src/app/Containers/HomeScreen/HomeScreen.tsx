import * as React from 'react';
import { styles } from './HomeScreenStyles';
import { LinearGradientView } from 'app/Components/LinearGradientView';
import { AppColors } from 'app/Containers/DefaultConfigs/AppColors';

export namespace App {
    export interface Props {
        // TODO
    }
}

export class HomeScreen extends React.Component<App.Props> {
    constructor(props: App.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div style={styles.backgroundContainer}>
                <div style={styles.menuContainer}>teste</div>
                <div style={styles.contentContainer}>
                    <LinearGradientView colors={AppColors.spectrumBabyBlue}>Here</LinearGradientView>
                </div>
            </div>
        );
    }
}
