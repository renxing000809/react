import {configureStore} from "@reduxjs/toolkit";
import counterStore from "@/store/modules/counterStore.jsx";
import channelStore from "@/store/modules/channelStore.jsx";

const store = configureStore({
  reducer: {
    counter: counterStore,
    channel: channelStore
  }
})

export default store