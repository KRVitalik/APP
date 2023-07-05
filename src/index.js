const icon = {
    closeBtn: 'href="../images/icons.svg#icon-logo"',
    amazon: 'href="../images/image.svg#pattern0"',
    Bookshop: '',
    "Apple Books": ''
}

export function createMarkup(data) {
    return `
    <div class="modal-main">
    <svg class="modal-svg" width="24px" height="24px">
    <use href=${icon.amazon}></use>
    </svg>
    <img class="modal-cover" src="${data.book_image
    }" alt="${data.title}" />
    <h2 class="modal-title">${data.title}</h2>
    <p class="modal-author">${data.author}</p>
    <p class="modal-description">${data.description}</p>
    <ul class="modal-books-shops">${createBookSeller(data)}</ul>
    <button class="modal-add-btn" type="button">ADD TO SHOPPING LIST</button>
    </div>
    `
}

function createBookSeller({buy_links}) {
    return buy_links.map(arr => {
        if (arr.name === "Amazon" && "Bookshop" && "Apple Books") {
            console.log(arr.name)
            return `<li>
        <a href="${arr.url}" target="_blank"><svg class="modal-svg" width="24px" height="24px">
        <use href="./images/icons.svg#icon-arms-icon"></use>
        </svg></a>
        </li>
        `}
        }).join('')
    
}



import { fetchBookID } from '../books-api'
import { createMarkup } from "./modal-markup";

const modalBody = document.querySelector("body")

modalBody.addEventListener('click', (currentBook))

fetchBookID("643282b1e85766588626a0c2").then(data => {
    console.log('data', data)
    createMarkup(data)
    modalBody.insertAdjacentHTML('beforeend', createMarkup(data))
})

function currentBook(e) {
        // e.preventDefault();
    
    // if (e.target.parentElement !== 'li.book-card') {
    //     return
    // }
    console.log(e)
}


.modal-main {
  margin: 0 auto;
  width: 335px;
  border: 2px solid #111111;
  border-radius: 18px;
  padding: 40px 24px;

  /* opacity: 0; */
  /* visibility: hidden; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  background-color: #fff;
}

.modal-cover {
  margin: 0 auto 14px auto;
}

.modal-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #111111;
  margin-bottom: 4px;
}

.modal-author {
  font-style: italic;
  font-size: 12px;
  line-height: 14px;
  color: #b4afaf;
  margin-bottom: 18px;
}

.modal-add-btn {
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #111111;
  background-color: #ffffff;
  margin: 0 auto;
  border: 2px solid #4f2ee8;
  border-radius: 40px;
  padding: 14px 28px;
}

.modal-svg {
  fill: #111111;
  background-color: #111111;
}

use {
  display: block;
}

.modal-description {
  width: 287px;
  color: #111111;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 14px;
}

.modal-books-shops {
  display: flex;
}
