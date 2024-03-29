import { CircleSegment, DefaultPreloaderWrapper } from './styles.ts';
import theme from '../../styles/theme.ts';

export const Preloader = () => {
    return (
        <DefaultPreloaderWrapper>
            Loading...
            <CircleSegment size={'100px'} color={theme.colors.textPrimary} position={'1'} id={1} />
        </DefaultPreloaderWrapper>
    );
};
