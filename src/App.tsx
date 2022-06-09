import { Header } from "./components/Header";
import { InputArea } from "./components/InputArea";
import { TaskBox } from "./components/TaskBox";

import "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <main>
        <TaskBox />
      </main>
    </div>
  );
}
