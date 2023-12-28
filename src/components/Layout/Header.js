import { Fragment } from "react";
import foodImg from '../Assets/regular-meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import { useHistory } from "react-router-dom";

const Header = ({ totalMeals }) => {
    const history = useHistory();

    const navigateToHome = () => {
        history.push('/home');
    };
    return <Fragment>
        <header className={classes.header}>
            <h2 onClick={navigateToHome}>Food Zone</h2>
            <HeaderCartButton totalCount={totalMeals}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImg}  alt="food background" />
        </div>
    </Fragment>
}

export default Header;