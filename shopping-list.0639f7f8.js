var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=s.parcelRequired7c6;null==o&&((o=function(s){if(s in n)return n[s].exports;if(s in e){var o=e[s];delete e[s];var i={id:s,exports:{}};return n[s]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(s,n){e[s]=n},s.parcelRequired7c6=o),o("dSC8U"),o("ghT7p"),o("fCQ7o"),o("bUb57"),o("bMZn5");const i=document.querySelector(".shopping-list"),l=document.querySelector(".remove-book");var a;const t=null!==(a=JSON.parse(localStorage.getItem("selected")))&&void 0!==a?a:[];console.log(t.length>0),function(s,n){let e;e=s.length?s.map((({_id:s,author:n,list_name:e,title:o,book_image:i,description:l,buy_links:a})=>` <li class="book-card data-id="${s}" >\n\n          <div class="book-image-wrapper"><img src="${i}" alt="${o}" class="book-image"></div>\n          <div class="book-info">\n              <h2 class="book-title">${o}</h2>\n              <p class="book-category">${e}</p>\n              <p class="book-descr">${l}</p>\n              <div class="card-inner-wrapper">\n                  <h3 class="book-author">${n}</h3>\n\n                  <ul class="buy-links-list">${function(s){return s.map((s=>"Amazon"===s.name?`<li class="buy-link-item">\n      <a href=${s.url} target="_blank">\n      <svg class="buy-link amazon">\n      <use href=/src/images/icons.svg#icon-amazon></use>\n      </svg></a>\n      </li>\n      `:"Apple Books"===s.name?`<li class="buy-link-item">\n      <a href="${s.url}" target="_blank">\n      <svg class="buy-link apple">\n      <use href="/src/images/icons.svg#icon-apple"></use>\n      </svg></a>\n      </li>`:"Bookshop"===s.name?`<li class="buy-link-item">\n    <a href="${s.url}" target="_blank">\n    <svg class="buy-link bookshop">\n    <use href="/src/images/icons.svg#bookshop"></use>\n    </svg></a>\n    </li>\n    `:void 0)).join("")}(a)}</ul>  \n\n                  <div class="buy-links-wrapper">\n                  <svg class="buy-link">\n      <use href="./images/icons.svg#icon-trash"></use>\n    </svg>\n    <svg class="buy-link">\n      <use href="./images/icons.svg#icon-trash"></use>\n    </svg>\n    <svg class="buy-link">\n      <use href="./images/icons.svg#icon-trash"></use>\n    </svg>\n                  </div>\n\n              </div>\n              <button type="button" class="remove-book">\n              <svg class="remove-image">\n      <use href="./images/icons.svg#icon-trash"></use>\n    </svg>\n              </button>\n          </div>\n          \n          \n      </li>`)).join(""):'<li class="empty-list-card">\n      <p class="empty-list-text">This page is empty, add some books and proceed to order.</p>\n      <img src="./images/shopping-list/list-placeholder.webp" alt="No books added" class="empty-list-image">\n    </li>';n.innerHTML=e}(t,i),t.length>0&&l.addEventListener("click",(function(s){s.preventDefault()}));
//# sourceMappingURL=shopping-list.0639f7f8.js.map
