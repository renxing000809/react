import {configureStore} from "@reduxjs/toolkit";
import counterStore from "@/store/modules/counterStore.jsx";

const store = configureStore({
  reducer: {
    counter: counterStore
  }
})

export default store