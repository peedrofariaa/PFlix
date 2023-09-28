import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media screen and (max-width: 600px) {

    gap: 7px;
    }
`

export const BoxCards = styled.div`
    margin-top: 5px;
    cursor: pointer;
    transition: 0.3s;

    @media screen and (max-width: 600px) {

    img {
        height: 20%;
        width: 110px;
        border-radius: 10px;
        margin-top: 0px;
    }}

    &:hover {
        transform: translateY(-10px);
    }
`