import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { Container, Menu, Li } from './style'

export const Header = () => {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if (window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }

    return (    
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt='logo'></img>
            <Menu>
                <Li $isactive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li $isactive={pathname.includes('movies')}>
                    <Link to='/movies'>Movies</Link>
                </Li>
                <Li $isactive={pathname.includes('series')}>
                    <Link to='/series'>Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}