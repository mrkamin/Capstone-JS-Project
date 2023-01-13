/* || Imports */
import { commentGets } from './commentsgets.js';
import { commentPosts } from './postcomments.js';
import { newSectOneItem } from './varialbels.js';

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
                <div class="sect__one__meal__name">
                  
                  <a href="" class="sect__one__recipe__btn">Get Recipe</a>
                </div>
`;
    addMeal.innerHTML = html;
    /* ======================================================================== */
    /* || Add Comments */
    const newCommentCont = document.createElement('div');
    newCommentCont.className = 'sect__one__like__comment';
    addMeal.appendChild(newCommentCont);
    const newComment = document.createElement('button');
    newComment.className = 'comment__btn';
    newComment.innerHTML = 'Comments';
    newComment.addEventListener('click', () => {
      const newMealDetailsContentComment = document.querySelector(
        '.sect__one__comment__meal__details',
      );
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
      commentGets(meal.id).then((data) => {
        const getComments = document.getElementById('comment__numbers');
        if (d.length > 0) {
          getComments.innerHTML = `(${d.length})`;
        } else {
          getComments.innerHTML = '(0)';
        }
        const newComments = document.getElementById('user__comments');
        data.forEach((item) => {
          newComments.innerHTML += `
      <li>${`${item.username} : ${item.comment} : ${item.creation_date}`}</li>
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
          commentPosts(newMyData);

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

export default addMealElments;
