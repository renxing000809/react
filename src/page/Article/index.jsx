import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useState} from "react";

const Article = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams()
  const params1 = useParams()
  return (
    <div>
      <div>我是文章页</div>
      <div>
        <button onClick={() => navigate("/login")}>跳转到登录页</button>
        <div>
          searchParams接收到了参数 id = {params.get("id")} , name = {params.get("name")}
        </div>
        <div>
          params接收到了参数 id = {params1.id} , name = {params.get("name")}
        </div>
      </div>
    </div>
  )
}

export default Article;