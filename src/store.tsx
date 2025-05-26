import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Dùng localStorage
import counterReducer from "./slices/counter/counterSlice";
import todoReducer from "./slices/todo/todoSlice";
import themeReducer from "./slices/theme/themeSlice";

// Cấu hình Redux Persist
const persistConfig = {
  key: "root", // Tên key lưu trong localStorage
  storage // Sử dụng localStorage
};

// Gộp các reducer và áp dụng persistReducer
const rootReducer = {
  counter: counterReducer,
  todos: todoReducer,
  theme: themeReducer
};

const persistedReducer = persistReducer(persistConfig, (state, action) => {
  // Kết hợp các reducer giống như configureStore
  return {
    counter: counterReducer(state?.counter, action),
    todos: todoReducer(state?.todos, action),
    theme: themeReducer(state?.theme, action)
  };
});

// Tạo store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"] // Bỏ qua cảnh báo cho action của Redux Persist
      }
    })
});

// Tạo persistor để sử dụng trong PersistGate
export const persistor = persistStore(store);
export default store;
