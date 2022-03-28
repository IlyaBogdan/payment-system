import styles from './header.module.css';
import { Icon } from '@mui/material';

const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <nav className={styles.navBlock}>
                <div className='sp'></div>
                <Icon></Icon>
                <div className='sp'></div>
                <a href="/">Home</a>
                <a href="/make-a-payment">Make a payment</a>
                <div className='sp'></div>
            </nav>
        </div>
    );
}

export default Header;