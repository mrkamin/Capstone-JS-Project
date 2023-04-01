/* Variables */
/* ================================================================ */
/* Css */
import './index.css';
/* ================================================================ */
/* Variables.js */
import {
  newNavContact,
  newNavMealsSearch,
  newNavMeals,
  newNavMenu,
  newHumberger,
  newScreenLoader,
  newSectOne,
  newSectTwo,
  newSectThree,
  newMain,
} from './module/varialbels.js';
/* ================================================================ */
/* Api Like Class */
import { LikesApi } from './module/apiLikesClass.js';
/* ================================================================ */
/* Api Class */
import { ApiLink } from './module/apiclass.js';
/* ================================================================ */
/* Render */
import { addMealElments, addMealSearchElments } from './module/render.js';
/* ================================================================ */
/* Render */
import { counters } from './module/contermeals.js';

/* ================================================================ */
/* Loader */
const loader = () => {
  newMain.classList.add('hide');
  newScreenLoader.classList.remove('hide');
  setTimeout(() => {
    newScreenLoader.classList.add('hide');
    newMain.classList.remove('hide');
  }, 1000);
};
/* ================================================================ */
/* Search Meals Loader */
newNavMealsSearch.addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  if (newSectOne.classList.contains('show')) {
    newSectOne.classList.replace('show', 'hide');
    newNavMeals.classList.remove('active');
    newSectTwo.classList.replace('hide', 'show');
    newNavMealsSearch.classList.add('active');
    newMain.classList.replace('sect__one', 'sect__two');
  } else {
    newSectThree.classList.replace('show', 'hide');
    newNavContact.classList.remove('active');
    newSectTwo.classList.replace('hide', 'show');
    newNavMealsSearch.classList.add('active');
    newMain.classList.replace('sect__three', 'sect__one');
  }
});
/* ================================================================ */
/* Contact Loader */
newNavContact.addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  if (newSectOne.classList.contains('show')) {
    newSectOne.classList.replace('show', 'hide');
    newNavMeals.classList.remove('active');
    newSectThree.classList.replace('hide', 'show');
    newNavContact.classList.add('active');
    newMain.classList.replace('sect__one', 'sect__three');
  } else {
    newSectTwo.classList.replace('show', 'hide');
    newNavMealsSearch.classList.remove('active');
    newSectThree.classList.replace('hide', 'show');
    newNavContact.classList.add('active');
    newMain.classList.replace('sect__two', 'sect__three');
  }
});
/* ================================================================ */
/* Meals Loader */
newNavMeals.addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  if (newSectTwo.classList.contains('show')) {
    newSectTwo.classList.replace('show', 'hide');
    newNavMealsSearch.classList.remove('active');
    newSectOne.classList.replace('hide', 'show');
    newNavMeals.classList.add('active');
    newMain.classList.replace('sect__two', 'sect__one');
  } else {
    newSectThree.classList.replace('show', 'hide');
    newNavContact.classList.remove('active');
    newSectOne.classList.replace('hide', 'show');
    newNavMeals.classList.add('active');
    newMain.classList.replace('sect__three', 'sect__one');
  }
});

/* ================================================================ */
/* Humberger Menu */
newHumberger.addEventListener('click', () => {
  newHumberger.classList.toggle('active');
  newNavMenu.classList.toggle('active');
});
/* ================================================================ */
/* Loader */
window.addEventListener('load', async () => {
  const newLikes = await LikesApi.likeGet();
  const newMeal = await ApiLink.mealsGetAll();
  const newMeals = newMeal.map((meal) => {
    const likesArr = newLikes.filter((like) => like.item_id === meal.id);
    meal.likesChanger = likesArr.length && likesArr[0].likes;
    return meal;
  });
  addMealElments(newMeals);
  addMealSearchElments(newMeals);
  const mealCounters = document.querySelectorAll('.meal__conter');
  let counter = 1;

  mealCounters.forEach((meal) => {
    meal.innerHTML = `Meal ${counter}`;
    counter += 1;
  });
  counters();
  /* ======================================================================== */
  /* || Likes */
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('like__img')) {
      if (event.target.src.includes('heart-line')) {
        event.target.src = './assets/img/heart-fill.png';
        LikesApi.likePost(event.target.id);
        newMeals.forEach((meal) => {
          if (meal.id === event.target.id) {
            const counterLikes = event.target.nextElementSibling;
            counterLikes.innerHTML = `${meal.likes + 1} likes`;
          }
        });
      } else {
        event.target.src = './assets/img/heart-line.png';
        newMeals.forEach((meal) => {
          if (meal.id === event.target.id) {
            const counterLikes = event.target.nextElementSibling;
            counterLikes.innerHTML = `${meal.likes} likes`;
          }
        });
      }
    }
  });
});
