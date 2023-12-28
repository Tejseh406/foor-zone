import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useHistory } from "react-router-dom";

const HeaderCartButton = ({totalCount}) => {
    const history = useHistory();

    const navigateToCart = () => {
        history.push('/cart');
    };
    return <button className={classes.button} onClick={navigateToCart}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>Your Cart</span>
        {totalCount > 0 && <span className={classes.badge}>{totalCount}</span>}
    </button>
}

export  default HeaderCartButton;