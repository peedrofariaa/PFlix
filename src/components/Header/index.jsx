import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'

import { Container, Menu, Li } from './style'
import { useState } from 'react'

export const Header = () =>{
    const [changeBack, setChangeBack] = useState(false)
    window.onscroll = () =>{
        if(!changeBack && window.pageYOffset > 150) {
            setChangeBack(true)
        }
        if(changeBack && window.pageYOffset <= 150){
            setChangeBack(false)
        }
    }

    return(
        <Container changeBack={changeBack}>
            <img src={Logo} alt='logo'></img>
           <Menu>
            <Li>
                <Link to='/'>Home</Link>
            </Li>
            <Li>
                <Link to='/movies'>Movies</Link>
            </Li>
            <Li>
                <Link to='/tvshows'>Series</Link>
            </Li>
           </Menu>
        </Container>
    )
}