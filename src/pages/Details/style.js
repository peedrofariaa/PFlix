import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000,rgba(0,0,0,0) );
    }
`

export const Container = styled.div`

`

export const Cover = styled.div`
    padding: 20px;
    img{
        width: 400px;
        border-radius: 30px;
    }
`

export const Info = styled.div`

`