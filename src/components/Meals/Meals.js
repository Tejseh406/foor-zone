import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({onAddItem}) => {

    const handleItems = (item) => {
        onAddItem(item)
    }

    return <Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals addItem={handleItems}></AvailableMeals>
    </Fragment>
}

export default Meals;