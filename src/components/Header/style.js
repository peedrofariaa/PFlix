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
    img{
        width: 10%;
    }
    
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`

export const Li = styled.li`
    position: relative;
    color: white;
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
        height: 2px;
        background-color: white;
        position: absolute;
        bottom: 2px;
        left: 0;
        transition: 0.3s;
    }
    a:hover::after{
        width: 100%;
    }
`