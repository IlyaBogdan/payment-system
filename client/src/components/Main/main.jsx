import { Routes, Route } from 'react-router-dom';
import MakeAPayment from "../../pages/MakeAPayment/MakeAPayment";
import Home from '../../pages/home/home';
import Antirespect from '../../pages/Antirespect/Antirespect';
import ThanksForPayment from '../../pages/ThnksForPayment/ThanksForPayment';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' caseSensitive={false} element={<Home />}/>
                <Route path='/make-a-payment' caseSensitive={false} element={<MakeAPayment />}/>
                <Route path='/antirespect' caseSensitive={false} element={<Antirespect />}/>
                <Route path='/thanks-for-payment' caseSensitive={false} element={<ThanksForPayment />}/>
            </Routes>
        </main>
    );
    
}  

export default Main;