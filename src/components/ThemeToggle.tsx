import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/theme/themeSlice"; // Đổi từ features thành slices

const ThemeToggle: React.FC = () => {
  const isDark = useSelector((state: any) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "10px"
      }}
    >
      <h2>Theme: {isDark ? "Dark" : "Light"}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
