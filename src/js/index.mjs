import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs.mjs";

import * as posts from "./api//posts/index.mjs";

const path = location.pathname;

if (path === '/profile/login/') {
   setLoginFormListener()
} else if (path === '/profile/register/') {
   setRegisterFormListener()
}

posts.createPost()