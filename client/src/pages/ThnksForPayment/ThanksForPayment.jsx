import styles from './ThanksForPayment.module.css';
import { Button } from '@mui/material';

const ThanksForPayment = () => {
    return (
        <div className={styles.generalBlock}>
            <div className={styles.thanks}>Thank you for your payment</div>
            <div className={styles.question}>Do you want to make one more operation?</div>
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
        </div>
    );
}

export default ThanksForPayment;