import Login from "../page/Login/index.jsx";
import Article from "../page/Article/index.jsx";

import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Layout from "../page/Layout/index.jsx";
import Board from "../page/Board/index.jsx";
import About from "../page/About/index.jsx";
import NotFound from "../page/NotFound/index.jsx";

// createBrowserRouter history模式路由, createHashRouter hash模式路由
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/layout',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Board/>,
      },
      {
        path: '/layout/about',
        element: <About/>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/article/:id',
    element: <Article/>
  },
  {
    path: '*',
    element: <NotFound/>,
  }
])

export default router