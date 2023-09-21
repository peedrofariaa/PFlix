import styled, {keyframes} from 'styled-components'

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
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
`
export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1{
        color: white;
        font-size: 5rem;
        font-weight: 700;
    }

    p{
        color: white;
        font-size: 17px;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 30px;
    }
`

export const Poster = styled.div`
    z-index: 3;
    img{
        width: 300px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    max-width: 1500px;
`

export const ContainerBut = styled.div`
    display: flex;
    gap: 20px;
`