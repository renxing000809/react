import {configureStore} from "@reduxjs/toolkit";
import counterStore1 from "@/store/modules/counterStore.jsx";
import channelStore2 from "@/store/modules/channelStore.jsx";
import billStore from "@/store/modules/billStore.js";

// store 汇集了构成应用程序的 state、actions 和 reducers
const store = configureStore({
  // 组合多个reducer,生成一个根reducer
  reducer: {
    counter: counterStore1,
    channel: channelStore2,
    bill: billStore
  }
})

console.log(store.getState());

export default store