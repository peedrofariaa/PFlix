import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100px;
    z-index: 11;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 20px 50px;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.changeBack ? '#000' : 'transparent'};
    transition: background-color 0.5s ease-in-out;

    @media screen and (max-width: 600px) {
    height: 50px;
    width: 100%;
    padding: 0px 0px;
    min-height: 67px;
}
    img{
        width: 10%;
    }
    
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    @media screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    margin-top: 14px;
}
`

export const Li = styled.li`
    position: relative;
    color: white;
    @media screen and (max-width: 600px) {
    font-size: 23px;
    bottom: 15px;
    margin-top: 10px;
}
    a{
        color: white;
        font-size: 25px;
        line-height: 25px;
    }
    a:hover{
        opacity: 0.7;
    }
    a::after{
        content: "";
        width: 0;
        height: 3px;
        background-color: white;
        position: absolute;
        bottom: -10px;
        left: 0;
        transition: 0.3s;
    }
    a:hover::after{
        width: 100%;
    }
`