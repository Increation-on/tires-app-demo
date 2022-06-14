import styles from './styles/logo.module.css';
import logo from './../images/logo.png';
import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';


const Logo = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <NavLink to="/main" className={path === '/main' || path === '/' ? styles.logo_dis : styles.logo}>
            <img src={logo} alt="logo" />
            <span className={styles.logo_name}>Tires</span>
        </NavLink>
    )
}

export default Logo