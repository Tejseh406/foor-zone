import classes from "./MealItem.module.css";

const MealItem = ({
  id,
  name,
  description,
  price,
  itemsCount,
  increment,
  decrement,
}) => {
  const itemPrice = `$${price.toFixed(2)}`;

  const handleIncrement = () => {
    increment({ id: id });
  };

  const handleDecrement = () => {
    decrement({ id: id });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      {itemsCount === 0 ? (
        <button className={classes.addButton} onClick={handleIncrement}>
          Add
        </button>
      ) : (
        <div className={classes.buttonGroup}>
          <span className={classes.btns} onClick={handleIncrement}>
            +
          </span>
          <span className={classes.countText}>{itemsCount}</span>
          <span className={classes.btns} onClick={handleDecrement}>
            -
          </span>
        </div>
      )}
    </li>
  );
};

export default MealItem;
