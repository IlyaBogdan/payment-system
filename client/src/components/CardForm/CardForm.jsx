import styles from './CardForm.module.css';
import { 
    FormControl,
    InputLabel, 
    Input, 
    Button
} from '@mui/material';
import { 
    dateValidation,
    cardNumberValidation,
    CVVValidation, 
    amountValidation,
    ValidateAndSend
} from '../../utils/validators';

const CardForm = () => {
    return (
        <div className={styles.CardForm}>
            <FormControl className={styles.input}>
                <InputLabel className='label' htmlFor="card-number">Card number</InputLabel>
                <Input id="card-number" onChange={(e) => {cardNumberValidation(e.target)}} />
            </FormControl>
            <div className={styles.toOneString}>
                <FormControl className={styles.input}>
                    <InputLabel className='label' htmlFor="expiration-date">Expiration Date</InputLabel>
                    <Input id="expiration-date" onChange={(e) => {dateValidation(e.target)}} />
                </FormControl>
                <FormControl className={styles.input}>
                    <InputLabel className='label' htmlFor="cvv">CVV</InputLabel>
                    <Input id="cvv" onChange={(e) => {CVVValidation(e.target)}} />
                </FormControl>   
            </div>
            <FormControl className={styles.input}>
                <InputLabel className='label' htmlFor="amount">Amount</InputLabel>
                <Input id="amount" onChange={(e) => {amountValidation(e.target)}} />
            </FormControl>
            <Button variant="outlined"
                color='success' 
                id={styles.confirmButton}
                onClick={() => {ValidateAndSend()}}>Confirm</Button>
        </div>
    );
}

export default CardForm;