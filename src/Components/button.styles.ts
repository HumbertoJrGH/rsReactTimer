import styled, { css } from "styled-components"

export type variantColorVar = 'primary' | 'secondary' | 'danger' | 'success' | 'neutral'

interface ButtonContainerProps {
    variantColor: variantColorVar
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'aqua',
    success: 'green',
    danger: 'red',
    neutral: 'grey'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};

    /* ${props => {
        return css`
            background-color: ${ButtonVariants[props.variantColor]}
        `
    }} */
`