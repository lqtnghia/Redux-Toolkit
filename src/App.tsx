import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Toolkit Project</h1>
      <ThemeToggle />
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
