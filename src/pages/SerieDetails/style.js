import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
`

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
        height: 120px;
        background-image: linear-gradient(to top, #000,rgba(0,0,0,0) );
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: -100px;
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99; 
    img{
        width: 400px;
        border-radius: 30px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    z-index: 99;
    width: 50%;
    padding: 20px;
    h2{
        font-size: 50px;
        font-weight: 700;
        color: white;
    }
    p{
        font-weight: 700;
        font-size: 17px;
        color: white;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`