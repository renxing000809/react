import {Link, Outlet} from "react-router-dom";
import {Button} from "antd-mobile";

const Layout = () => {
  return (
    <div>
      <Outlet/>
      我是一级路由layout组件 <br/>
      <Button color={"primary"}>全局按钮</Button>
      <div className={"purple"}>
        <Button color={"primary"}>局部按钮</Button>
      </div>
    </div>
  )
}

export default Layout