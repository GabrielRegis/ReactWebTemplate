import { AppStyles } from 'app/Containers/DefaultConfigs/AppStyles';
import { AppColors } from 'app/Containers/DefaultConfigs/AppColors';

export const styles = {
    ...AppStyles,
    backgroundContainer: {
        ...AppStyles.backgroundContainer,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: AppColors.spectrumOrange.beginColor
    } as React.CSSProperties,
    menuContainer: {
        ...AppStyles.backgroundContainer,
        flex: 1,
        backgroundColor: '#ecf2f5',
        position: 'sticky'
    } as React.CSSProperties,
    contentContainer: {
        ...AppStyles.backgroundContainer,
        flex: 3,
        borderWidth: 2,
        borderColor: 'black',
        position: 'sticky'
    } as React.CSSProperties
};
