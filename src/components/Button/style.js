import styled, {css} from 'styled-components'

const buttonStyle = css`
    border: 3px solid white;
    background-color: transparent;
    color: white;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &:hover{
        background-color: white;
        color: red;
    }
`

export const RedButton = styled.button`
    ${buttonStyle}
    background-color: red;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 5px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 10px rgb(255 0 0 / 30%);
        background-color: red;
        color: white;
    }
`

export const WhiteButton = styled.button`
    ${buttonStyle}
`