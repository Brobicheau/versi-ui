import React from 'react';
import styled from '@emotion/styled';
import { getStyles } from '../styles';
import components from '../util/component-enums';

const getButtonBehavior = ({ pallete, button }) => [
	button,
	(secondary = false) => ({
		backgroundColor: secondary
			? pallete.secondaryColor
			: pallete.primaryColor,
		color: secondary
		? pallete.primaryColor
		: pallete.secondaryColor,
	})
];

export default () => {
	const styledButtonBehavior = getButtonBehavior(
		getStyles(components.BUTTON)
	);
	const StyledButton = styled.button(...styledButtonBehavior);

	const Button = (props) => {
		const { children, ...restOfProps } = props;
		return <StyledButton {...restOfProps}>{children}</StyledButton>;
	};
	Button.displayName = 'Button';
	return Button;
};
