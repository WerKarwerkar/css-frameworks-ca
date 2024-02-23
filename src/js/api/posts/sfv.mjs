// import { API_SOCIAL_URL } from "../constants.mjs";
// import { authFetch } from "../authFetch.mjs";

// const action = "/posts";
// const method = "get";

// export async function searchPostsByTitle(title) {
//     const searchPostsURL = `${API_SOCIAL_URL}${action}?title=${title}`;

//     const response = await authFetch(searchPostsURL, {
//         method,
//     });

//     const posts = await response.json();

//     return posts;
// }

// export async function filterPostsByCategory(category) {
//     const filterPostsURL = `${API_SOCIAL_URL}${action}?category=${category}`;

//     const response = await authFetch(filterPostsURL, {
//         method,
//     });

//     const posts = await response.json();

//     return posts;
// }

// export async function viewPosts() {
//     const viewPostsURL = `${API_SOCIAL_URL}${action}`;

//     const response = await authFetch(viewPostsURL, {
//         method,
//     });

//     const posts = await response.json();

//     return posts;
// }