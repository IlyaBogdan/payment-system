import styles from './home.module.css';
import { Button } from '@mui/material';

const Home = () => {
    return (
        <div className={styles.generalBlock}>
            <div className={styles.welcomeBlock}>Welcome to our site</div>
            <div className={styles.question}>Do you want make a payment?</div>
            <div className={styles.toOneString}>
                <Button className={styles.btn}
                    color='success'
                    variant="outlined"
                    onClick={() => document.location.replace('/make-a-payment')}>Sure!</Button>
                <Button className={styles.btn} 
                    color='error' 
                    variant="outlined"
                    onClick={() => document.location.replace('/antirespect')}>No, Thanks</Button>
            </div>
            <span className={styles.note}>Sorry. I didn't concoct for what this site</span>
        </div>
    );
}

export default Home;