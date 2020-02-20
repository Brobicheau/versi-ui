import generateComponents from '../componentGenerator';
import defaults from './default-styles'

export let styles;

export function getStyles(component) {
	return { pallete: styles.pallete, [component]: styles[component] };
}
export function setStyles(stylesConfig) {
	// decide on config schema and setup merging of generic styles with component specific ones
	styles = stylesConfig;
	generateComponents();
}
setStyles(defaults);