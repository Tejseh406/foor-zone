import { Fragment } from "react";
import foodImg from '../Assets/regular-meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ totalMeals }) => {
    const history = useHistory();

    return <Fragment>
        <header className={classes.header}>
            <h2>Food Zone</h2>
            <Link to='/items' className={classes['items-text']}>Items</Link>
            <HeaderCartButton totalCount={totalMeals}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImg}  alt="food background" />
        </div>
    </Fragment>
}

export default Header;