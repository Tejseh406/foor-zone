import React from 'react';
import classes from './Cart.module.css';

function Cart({ mealsList }) { 
  return (
    <div className={classes.container}>
      {mealsList && mealsList.length > 0 ? (
        mealsList.map((item) => (
          <div key={item.id} className={classes.cartItemContainer}>
            <h4> {item.name}</h4>
            <p className={classes.itemText}>{ item.itemsCount }  * { item.price } = { item.itemsCount * item.price }</p>
          </div>
        ))
    ) : (
      <div className={classes.noItems}>
        <p>Cart is empty</p>
      </div>
    )}
    </div>
  );
}

export default Cart;

