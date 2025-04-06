import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@/theme.css'
import {Button} from "antd-mobile";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, toNum} from "@/store/modules/counterStore.jsx";
import {fetchChannelList} from "@/store/modules/channelStore.jsx";

function App() {
  const [count, setCount] = useState(0)
  // 获取全局的state, 参数为一个selector函数，可以选择想要的状态
  const globalState = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          点击了 {count}
        </button>
        <br/>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{globalState.counter.num}</span>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(toNum(30))}>
          to
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {globalState.channel.channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default App
