import {configureStore} from "@reduxjs/toolkit";
import counterStore1 from "@/store/modules/counterStore.jsx";
import channelStore2 from "@/store/modules/channelStore.jsx";

// 组合多个reducer
const store = configureStore({
  reducer: {
    counter: counterStore1,
    channel: channelStore2
  }
})

export default store