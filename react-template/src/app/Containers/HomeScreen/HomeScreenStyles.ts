import { AppStyles } from 'app/Containers/DefaultConfigs/AppStyles';
import { AppColors } from 'app/Containers/DefaultConfigs/AppColors';

export const styles = {
    ...AppStyles,
    backgroundContainer: {
        ...AppStyles.backgroundContainer,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: AppColors.blueGrayBackground
    } as React.CSSProperties,

    // MENU
    menuContainer: {
        flex: 1,
        backgroundColor: AppColors.blueGrayBackground,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2% 2%'
    } as React.CSSProperties,

    menuHeader: {
        ...AppStyles.backgroundContainer,
        backgroundColor: AppColors.white,
        width: '100%',
        height: '25vh',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05)'
    } as React.CSSProperties,

    menuButtonList: {
        width: '100vh'
    },

    menuButton: {
        ...AppStyles.backgroundContainer,
        backgroundColor: AppColors.white,
        width: '100%',
        height: '15vh',
        marginTop: '4%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    } as React.CSSProperties,

    menuButtonTag: {
        width: '1%',
        backgroundColor: 'red',
        height: '100vh',
        opacity: 1,
        transition: 'width 100ms ease-in'
    } as React.CSSProperties,

    menuButtonTagHovered: {
        width: '3%',
        backgroundColor: 'red',
        height: '100vh',
        opacity: 1,
        transition: 'width 100ms ease-in'
    } as React.CSSProperties,

    // CONTENT
    contentContainer: {
        ...AppStyles.backgroundContainer,
        flex: 3
    } as React.CSSProperties,
    innerContentContainer: {
        backgroundColor: AppColors.blueGrayBackground,
        width: '95%',
        height: '100vh',
        alignSelf: 'center'
    } as React.CSSProperties
};
