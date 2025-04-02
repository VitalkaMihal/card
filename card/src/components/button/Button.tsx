import styled, {css} from "styled-components";

type ButtonProps = {
    buttonText?: string;
    isBlue?: boolean;
}

export const Button = ({buttonText, isBlue}:ButtonProps) => {
    return (
        <StyledButton isBlue = {isBlue}>
            {buttonText}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonProps>`
    width: 86px;
    height: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 10px;
    border-radius: 5px;
    color: #4e71fe;
    background-color: #fff;
    border: 2px solid #4e71fe;
    ${props => props.isBlue && css<ButtonProps>`
        color: #fff;
        background-color: #4e71fe;
    `}
`