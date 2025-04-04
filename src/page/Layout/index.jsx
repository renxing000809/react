import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      我是一级路由layout组件
      <Link to="/layout/">面板</Link>
      <Link to="/layout/about">关于</Link>
      <Outlet/>
    </div>
  )
}

export default Layout