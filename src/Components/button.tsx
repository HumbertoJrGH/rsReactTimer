import { ButtonContainer, variantColorVar } from "./button.styles"

interface ButtonProps {
    variantColor?: variantColorVar
}

export default function Button({ variantColor = 'primary' }: ButtonProps) {
    return <ButtonContainer variantColor={variantColor}>Button</ButtonContainer>
}