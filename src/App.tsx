import { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  type T = { id: string; title: string; contents: string; isDone: boolean };
  const [todos, setTodos] = useState<T[]>([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      contents: "내용4",
      isDone: false,
    },
  ]);
  return (
    <div>
      <header
        style={{
          backgroundColor: "#fcdef3",
          padding: "10px",
        }}
      >
        헤더입니다.
      </header>
      <main
        style={{
          backgroundColor: "#c6f0f5",
          padding: "10px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <h1>리스트 영역</h1>

          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#e0f5bf",
          padding: "10px",
        }}
      >
        푸터입니다.
      </footer>
    </div>
  );
}

export default App;
