/* || Imports */
import { commentGets } from './commentsgets.js';
import commentsPosts from './commentsclass.js';
import {
  newSectOneItem, newMealDetailsContentComment, newMealDetailsContentRecipe,
  newSectTowItem,
} from './varialbels.js';

/* ======================================================================== */
let html = '';
/* ======================================================================== */
/* || Add Meall Elemnts */
export const addMealElments = (meals) => {
  meals.forEach((meal) => {
    const addMeal = document.createElement('div');
    addMeal.className = 'sect__one__meal__item';
    newSectOneItem.appendChild(addMeal);
    html = `
    <div class="sect__one__meal__img">
                  <img
                    src="${meal.image}"
                    alt="${meal.name}"
                    class="img"
                  />
                </div>
                <div class="sect__one__liky">
                <h2>${meal.name} <span class="meal__conter"></span></h2>
                <div class="likes__cont">
                <img
                  class="like__img"
                  id="${meal.id}"
                  src="./assets/img/heart-line.png"
                  alt="like icon"
                />
                <p class="total__likes">${meal.likes} likes</p>
              </div>
              </div>
`;
    addMeal.innerHTML = html;
    /* ======================================================================== */
    /* || Add Recipe */
    const newRecipeCont = document.createElement('div');
    newRecipeCont.className = 'sect__one__like__recipe';
    addMeal.appendChild(newRecipeCont);
    const newRecipe = document.createElement('button');
    newRecipe.className = 'sect__one__recipe__btn';
    newRecipe.innerHTML = 'Get Recipe';
    newRecipe.addEventListener('click', () => {
      newMealDetailsContentRecipe.style.display = 'block';
      newMealDetailsContentRecipe.innerHTML = `
      <div class="recipe__details">
      
        <button
          type="button"
          id="close__btn__recipe"
          class="btn sect__one__comment__close__btn"
        >
          <i class="fas fa-times"></i>
        </button>
      
      <div class="recipe__modal__details">
        
          <img
            src="${meal.image}"
            alt=""
            class="sect__one__recipe__details__meal__img"
          />
          <span class="recipe__detail__name">${meal.name}</span>
        <span class="recipe-instraction">${meal.description}</span>
        <a href="${meal.youtublink}" class="youtub-link">YouTube Link</a>
        </div>
      </div>
    `;
      const newCloseBtn = document.querySelector('#close__btn__recipe');
      newCloseBtn.addEventListener('click', () => {
        newMealDetailsContentRecipe.style.display = 'none';
      });
    });
    newRecipeCont.appendChild(newRecipe);
    /* ======================================================================== */
    /* || Add Comments */
    const newCommentCont = document.createElement('div');
    newCommentCont.className = 'sect__one__like__comment';
    addMeal.appendChild(newCommentCont);
    const newComment = document.createElement('button');
    newComment.className = 'comment__btn';
    newComment.innerHTML = 'Comments';
    newComment.addEventListener('click', () => {
      newMealDetailsContentComment.style.display = 'block';
      newMealDetailsContentComment.innerHTML = `
      <div class="comment__details">
      
        <button
          type="button"
          id="close__btn"
          class="btn sect__one__comment__close__btn"
        >
          <i class="fas fa-times"></i>
        </button>
      
      <div class="comment__modal__details">
        <div class="comment__modal__details__detail">
          <img
            src="${meal.image}"
            alt=""
            class="sect__one__recipe__details__meal__img"
          />
          <span class="comment__detail__name">${meal.name}</span>
        </div>
        <div id="comment__list" class="comment__list">
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Please Type your Name"
              />

              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Please Type your Comment"
              ></textarea>

              <input type="submit" class="comment" value="comment" />
            </form>
          <div class="comment__modal__details__user__comment">
            
            <h3 class="comment__counter">Comments <span id="comment__numbers"></span></h3>
            <ul id="user__comments" class="user__comments"></ul>
          </div>
        </div>
      </div>
    </div>
    `;
      /* ======================================================================== */
      /* || Get Comments */
      commentGets(meal.id).then((d) => {
        const getComments = document.getElementById('comment__numbers');
        if (d.length > 0) {
          getComments.innerHTML = `(${d.length})`;
        } else {
          getComments.innerHTML = '(0)';
        }
        const newComments = document.getElementById('user__comments');
        d.forEach((item) => {
          newComments.innerHTML += `
      <li class="coment-li"><span>${`${item.username}</span> : <span>${item.comment}</span> : <span>${item.creation_date}`}</span></li>
      `;
        });
      });

      /* ======================================================================== */
      /* || Close Btn */
      const newCloseBtn = document.querySelector('#close__btn');
      newCloseBtn.addEventListener('click', () => {
        newMealDetailsContentComment.style.display = 'none';
      });
      /* ======================================================================== */

      /* || Form */
      const newForm = document.querySelector('form');
      newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newForm.name.value === '' || newForm.textarea.value === '') {
          // eslint-disable-next-line no-alert
          alert('Please enter the data');
        } else {
          const newMyData = {
            item_id: meal.id,
            username: newForm.name.value,
            comment: newForm.textarea.value,
          };
          /* ======================================================================== */
          /* || Post Comments */
          commentsPosts(newMyData);

          newForm.name.value = ' ';
          newForm.textarea.value = ' ';
        }
      });
    });
    newCommentCont.appendChild(newComment);
    /* ======================================================================== */
    /* || Reservation */
    const newReservation = document.createElement('button');
    newReservation.className = 'comment__btn';
    newReservation.innerHTML = 'Reservartion';
    newCommentCont.appendChild(newReservation);
  });
};
/* ======================================================================== */
/* || Section Two */

export const addMealSearchElments = (meals) => {
  meals.forEach((meal) => {
    const addMeal = document.createElement('div');
    addMeal.className = 'sect__one__meal__item';
    newSectTowItem.appendChild(addMeal);
    html = `
    <div class="sect__one__meal__img">
                  <img
                    src="${meal.image}"
                    alt="${meal.name}"
                    class="img"
                  />
                </div>
                <div class="sect__one__liky">
                <h2>${meal.name} <span class="meal__conter"></span></h2>
                <div class="likes__cont">
                <img
                  class="like__img"
                  id="${meal.id}"
                  src="./assets/img/heart-line.png"
                  alt="like icon"
                />
                <p class="total__likes">${meal.likes} likes</p>
              </div>
              </div>
`;
    addMeal.innerHTML = html;
    /* ======================================================================== */
    /* || Add Recipe */
    const newRecipeCont = document.createElement('div');
    newRecipeCont.className = 'sect__one__like__recipe';
    addMeal.appendChild(newRecipeCont);
    const newRecipe = document.createElement('button');
    newRecipe.className = 'sect__one__recipe__btn';
    newRecipe.innerHTML = 'Get Recipe';
    newRecipe.addEventListener('click', () => {
      newMealDetailsContentRecipe.style.display = 'block';
      newMealDetailsContentRecipe.innerHTML = `
      <div class="recipe__details">
      
        <button
          type="button"
          id="close__btn__recipe"
          class="btn sect__one__comment__close__btn"
        >
          <i class="fas fa-times"></i>
        </button>
      
      <div class="recipe__modal__details">
        
          <img
            src="${meal.image}"
            alt=""
            class="sect__one__recipe__details__meal__img"
          />
          <span class="recipe__detail__name">${meal.name}</span>
        <span class="recipe-instraction">${meal.description}</span>
        <a href="${meal.youtublink}" class="youtub-link">YouTube Link</a>
        </div>
      </div>
    `;
      const newCloseBtn = document.querySelector('#close__btn__recipe');
      newCloseBtn.addEventListener('click', () => {
        newMealDetailsContentRecipe.style.display = 'none';
      });
    });
    newRecipeCont.appendChild(newRecipe);
    /* ======================================================================== */
    /* || Add Comments */
    const newCommentCont = document.createElement('div');
    newCommentCont.className = 'sect__one__like__comment';
    addMeal.appendChild(newCommentCont);
    const newComment = document.createElement('button');
    newComment.className = 'comment__btn';
    newComment.innerHTML = 'Comments';
    newComment.addEventListener('click', () => {
      newMealDetailsContentComment.style.display = 'block';
      newMealDetailsContentComment.innerHTML = `
      <div class="comment__details">
      
        <button
          type="button"
          id="close__btn"
          class="btn sect__one__comment__close__btn"
        >
          <i class="fas fa-times"></i>
        </button>
      
      <div class="comment__modal__details">
        <div class="comment__modal__details__detail">
          <img
            src="${meal.image}"
            alt=""
            class="sect__one__recipe__details__meal__img"
          />
          <span class="comment__detail__name">${meal.name}</span>
        </div>
        <div id="comment__list" class="comment__list">
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Please Type your Name"
              />

              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Please Type your Comment"
              ></textarea>

              <input type="submit" class="comment" value="comment" />
            </form>
          <div class="comment__modal__details__user__comment">
            
            <h3 class="comment__counter">Comments <span id="comment__numbers"></span></h3>
            <ul id="user__comments" class="user__comments"></ul>
          </div>
        </div>
      </div>
    </div>
    `;
      /* ======================================================================== */
      /* || Get Comments */
      commentGets(meal.id).then((d) => {
        const getComments = document.getElementById('comment__numbers');
        if (d.length > 0) {
          getComments.innerHTML = `(${d.length})`;
        } else {
          getComments.innerHTML = '(0)';
        }
        const newComments = document.getElementById('user__comments');
        d.forEach((item) => {
          newComments.innerHTML += `
      <li class="coment-li"><span>${`${item.username}</span> : <span>${item.comment}</span> : <span>${item.creation_date}`}</span></li>
      `;
        });
      });

      /* ======================================================================== */
      /* || Close Btn */
      const newCloseBtn = document.querySelector('#close__btn');
      newCloseBtn.addEventListener('click', () => {
        newMealDetailsContentComment.style.display = 'none';
      });
      /* ======================================================================== */

      /* || Form */
      const newForm = document.querySelector('form');
      newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newForm.name.value === '' || newForm.textarea.value === '') {
          // eslint-disable-next-line no-alert
          alert('Please enter the data');
        } else {
          const newMyData = {
            item_id: meal.id,
            username: newForm.name.value,
            comment: newForm.textarea.value,
          };
          /* ======================================================================== */
          /* || Post Comments */
          commentsPosts(newMyData);

          newForm.name.value = ' ';
          newForm.textarea.value = ' ';
        }
      });
    });
    newCommentCont.appendChild(newComment);
    /* ======================================================================== */
    /* || Reservation */
    const newReservation = document.createElement('button');
    newReservation.className = 'comment__btn';
    newReservation.innerHTML = 'Reservartion';
    newCommentCont.appendChild(newReservation);
  });
};

export default { addMealElments, addMealSearchElments };
