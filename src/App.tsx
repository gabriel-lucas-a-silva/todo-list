import { Header } from "./components/Header";
import { InputArea } from "./components/InputArea";

import "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <main>
        <InputArea />
      </main>
    </div>
  );
}
