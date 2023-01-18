import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', components: About},
    {path: '/posts', components: Posts},
    {path: '/posts/:id', components: PostIdPage},

]
export const publicRoutes = [
    {path: '/login', components: Login},
]
