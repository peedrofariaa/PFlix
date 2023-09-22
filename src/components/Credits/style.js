import styled from "styled-components";

export const Title = styled.h1`
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
`

export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 30px;
    div{
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 15px;
        display: flex;
        justify-content: center;
    }
    img{
        height: 230px;
        border-radius: 10px;
    }
`