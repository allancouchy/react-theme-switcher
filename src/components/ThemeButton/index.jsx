
import { useTheme } from '../../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import {ThemeButtonWrapper} from './style';

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <ThemeButtonWrapper type='button' title={'theme'} onClick={() => toggleTheme()}>
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faLightbulb} />}
        </ThemeButtonWrapper>
    );
}

export default ThemeButton;
