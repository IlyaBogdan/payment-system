import CardForm from "../../components/CardForm/CardForm";
import styles from "./MakeAPayment.module.css"

const MakeAPayment = () => {
    return (
        <>
            <div className={styles.alert}>
                <h1>Please, input data of your credit card and confirm the payment</h1>
            </div>
            <CardForm />
        </>
    );
}

export default MakeAPayment;