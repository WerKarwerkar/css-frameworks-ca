import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";


const path = location.pathname;

if (path === '/profile/login/index.html') {
   setLoginFormListener()
} else if (path === '/profile/register/index.html') {
   setRegisterFormListener()
}


// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts().then(console.log)
// post.getPost(10596).then(console.log)

// removePost(10589) 

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()



// title: "hello, test post", body: "another test :)", tags: [], media: null,…}
// body
// : 
// "another test :)"
// created
// : 
// "2024-02-22T13:53:00.173Z"
// id
// : 
// 10589
// media
// : 
// null
// tags
// : 
// []
// title
// : 
// "hello, test post"
// updated
// : 
// "2024-02-22T13:53:00.173Z"
