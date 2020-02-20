import generateButton from './components/Button';
import { getStyles } from './styles/index';
export let _Button;
export let _pallete;
export default () => {
	_Button = generateButton();
	_pallete = getStyles().pallete;
};
