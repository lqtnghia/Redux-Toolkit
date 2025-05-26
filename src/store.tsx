import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice"; // Đổi từ features thành slices
import todoReducer from "./slices/todo/todoSlice"; // Đổi từ features thành slices
import themeReducer from "./slices/theme/themeSlice"; // Đổi từ features thành slices

// Lấy state từ localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("reduxState");
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

// Lưu state vào localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Lỗi khi lưu state:", err);
  }
};

// Tạo store
const persistedState = loadState();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer
  },
  preloadedState: persistedState
});

// Lưu state mỗi khi thay đổi
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
