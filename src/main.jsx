import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router/index.jsx";
import {RouterProvider} from "react-router-dom";

// 导入主题配置样式
import '@/theme.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
