import { Meals } from './mealclass.js';
import { newApiUrl } from './varialbels.js';

export class ApiLink {
  static async mealsGet() {
    const response = await fetch(newApiUrl);
    const { meals } = await response.json();
    return meals;
  }

  static async mealsGetAll() {
    const objArray = await this.mealsGet();
    // eslint-disable-next-line max-len
    const mealsArray = objArray.map(
      (meal) => new Meals(
        meal.idMeal,
        meal.strMeal,
        meal.strInstructions,
        meal.strMealThumb,
        meal.strYoutube,
      ),
    );
    return mealsArray;
  }
}

export default ApiLink;