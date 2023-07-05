// const API_URL = `https://books-backend.p.goit.global/`;

// const fetchBookCategories = () => {
//     const url = `${API_URL}books/category-list`;
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// };

// const fetchTopBooks = () => {
//     const url = `${API_URL}books/top-books`;
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// };

// const fetchBookByCategory = bookCategory => {
//     const url = `${API_URL}books/category?category=${bookCategory}`;
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         } else {
//             return response.json();
//         }
//     });
// };

// function fetchBookID(bookId) {
//     const url = `${API_URL}books/${bookId}`;
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// };

// fetchBookID(1).then(data => console.log('data', data))

// export { fetchBookCategories, fetchTopBooks, fetchBookByCategory, fetchBookID };

