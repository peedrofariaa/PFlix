import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { Container, Menu, Li } from './style'
import { useState } from 'react'

export const Header = () => {
    const [changeBack, setChangeBack] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBack && window.pageYOffset > 150) {
            setChangeBack(true)
        }
        if (changeBack && window.pageYOffset <= 150) {
            setChangeBack(false)
        }
    }

    return (
        <Container changeBack={changeBack}>
            <img src={Logo} alt='logo'></img>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li isActive={pathname.includes('movies')}>
                    <Link to='/movies'>Movies</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to='/series'>Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}