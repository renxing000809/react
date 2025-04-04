import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>我是登录页
      <div>
        <Link to={"/article"}>跳转</Link>
      </div>
      <div>
        <button onClick={() => navigate('/article')}>编程跳转</button>
        <button onClick={() => navigate('/article?id=1&name=ren')}>searchParams传参</button>
        <button onClick={() => navigate('/article/10001')}>params传参</button>
      </div>
    </div>
  )
}

export default Login