import React, { useEffect } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Meals/Cart";
import NotFound from "./components/Meals/NotFound";

function App() {
  const [addedMeals, updateAddedMeals] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const addMealItem = (item) => {
    const updatedMeals = [...addedMeals];
    const existingItemIndex = addedMeals.findIndex(
      (meal) => meal.id === item.id
    );
    if (existingItemIndex !== -1) {
      updatedMeals[existingItemIndex] = { ...item };
    } else {
      updatedMeals.push({ ...item });
    }
    const updateCount = updatedMeals.reduce(
      (acc, meal) => acc + meal.itemsCount,
      0
    );
    setTotalCount(updateCount);
    updateAddedMeals(updatedMeals);
  };

  return (
    <Router>
      <Header totalMeals={totalCount} />
      <Switch>
        <Route
          path="/items"
          exact
          render={() => <Meals onAddItem={addMealItem} />}
        />
        <Route path="/cart" render={() => <Cart mealsList={addedMeals} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
