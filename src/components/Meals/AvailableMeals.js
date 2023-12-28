import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      itemsCount: 0
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      itemsCount: 0
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      itemsCount: 0
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      itemsCount: 0
    },
    {
      id: 'm5',
      name: 'Pasta Carbonara',
      description: 'Classic Italian dish with creamy sauce',
      price: 14.99,
      itemsCount: 0
    },
    {
      id: 'm6',
      name: 'Vegetarian Pizza',
      description: 'Delicious pizza with fresh vegetables',
      price: 20.99,
      itemsCount: 0
    },
    {
      id: 'm7',
      name: 'Chicken Alfredo',
      description: 'Creamy Alfredo sauce with grilled chicken',
      price: 17.99,
      itemsCount: 0
    },
    {
      id: 'm8',
      name: 'Taco Salad',
      description: 'A refreshing salad with a Mexican twist',
      price: 15.49,
      itemsCount: 0
    },
    {
      id: 'm9',
      name: 'Mango Tango Smoothie',
      description: 'Tropical delight with fresh mango and yogurt',
      price: 7.99,
      itemsCount: 0
    },
    {
      id: 'm10',
      name: 'Chocolate Lava Cake',
      description: 'Decadent chocolate cake with a gooey center',
      price: 9.99,
      itemsCount: 0
    },
  ];

const AvailableMeals = ({addItem}) => {
  
  const addMealItem = ({id}) => {
    const item = DUMMY_MEALS.find(item => item.id === id);
    item.itemsCount += 1;
    addItem(item)
  }

  const removeMealItem = ({id}) => {
    const item = DUMMY_MEALS.find(item => item.id === id);
    item.itemsCount -= 1;
    addItem(item)
  }
  

  
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      id = {meal.id}
      key= {meal.id} 
      name = {meal.name}
      description = {meal.description}
      itemsCount={meal.itemsCount}
      price = {meal.price}
      increment = {addMealItem}
      decrement = {removeMealItem}
    />)
    return <section className={classes.meals}>
       <Card>
          <ul>
              {mealsList}
          </ul>
       </Card>
    </section>
};

export default AvailableMeals;