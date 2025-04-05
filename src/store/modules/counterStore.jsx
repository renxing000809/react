import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化state
  initialState: {
    num: 0,
  },
  // 编写修改状态的方法  同步方法 支持直接修改
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
    toNum: (state, action) => {
      state.num = action.payload;
    }
  }
})

// 解构出来actionCreater函数
const {increment, decrement, toNum} = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

export {increment, decrement, toNum}

export default reducer