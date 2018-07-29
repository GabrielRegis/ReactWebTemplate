import * as React from 'react';
import { styles } from './HomeScreenStyles';
import { LinearGradientView } from 'app/Components/LinearGradientView';
import { AppColors } from 'app/Containers/DefaultConfigs/AppColors';
import { ColorScheme } from 'app/Models/ColorScheme';

export interface MenuButton {
    title: string;
    route: string;
    id: number;
    colorScheme: ColorScheme;
    isHovered: boolean;
}

export namespace HomeScreen {
    export interface Props {}

    export interface State {
        menuButtons: MenuButton[];

        hovered: boolean;
    }
}

export class HomeScreen extends React.Component<HomeScreen.Props, HomeScreen.State> {
    constructor(props: HomeScreen.Props, context?: any) {
        super(props, context);

        const buttons = [
            {
                id: 0,
                title: 'Configurar Simulação',
                colorScheme: { beginColor: AppColors.spectrumGreen.beginColor, endColor: AppColors.spectrumGreen.endColor } as ColorScheme,
                isHovered: false
            },
            {
                id: 1,
                title: 'Configurar Requisições',
                colorScheme: { beginColor: AppColors.spectrumOrange.beginColor, endColor: AppColors.spectrumOrange.endColor } as ColorScheme,
                isHovered: false
            },
            {
                id: 2,
                title: 'Configurar Topologia',
                colorScheme: { beginColor: AppColors.spectrumPink.beginColor, endColor: AppColors.spectrumPink.endColor } as ColorScheme,
                isHovered: false
            },
            {
                id: 3,
                title: 'Resumo',
                colorScheme: { beginColor: AppColors.spectrumBabyBlue.beginColor, endColor: AppColors.spectrumBabyBlue.endColor } as ColorScheme,
                isHovered: false
            }
        ] as MenuButton[];

        this.state = {
            menuButtons: buttons,
            hovered: true
        };
    }

    updateButtonHoverState = (hovered: boolean, index: number) => {
        const menuButtonsState = this.state.menuButtons;
        menuButtonsState[index] = Object.assign(menuButtonsState[index], { isHovered: hovered });
        this.setState({
            menuButtons: menuButtonsState
        });
    };

    renderMenuButton = (menuButton: MenuButton, index: number) => {
        const style = this.state.menuButtons[index].isHovered ? styles.menuButtonTagHovered : styles.menuButtonTag;

        return (
            <div
                onMouseEnter={() => this.updateButtonHoverState(true, index)}
                onMouseLeave={() => this.updateButtonHoverState(false, index)}
                style={styles.menuButton}>
                <div style={{ ...style, backgroundColor: menuButton.colorScheme.beginColor }} />
                <h3>Configurar Simulação</h3>
            </div>
        );
    };

    render() {
        return (
            <div style={styles.backgroundContainer}>
                <div style={styles.menuContainer}>
                    <div style={styles.menuHeader}>Teste</div>
                    {this.state.menuButtons.map((menuButton: MenuButton, index: number) => {
                        return this.renderMenuButton(menuButton, index);
                    })}
                </div>
                <div style={styles.contentContainer}>
                    <LinearGradientView colors={AppColors.spectrumBabyBlue}>
                        <div style={styles.innerContentContainer} />
                    </LinearGradientView>
                </div>
            </div>
        );
    }
}
