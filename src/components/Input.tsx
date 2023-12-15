import React, { useState } from "react";
import uuid from "react-uuid";

export default function Input({ todos, setTodos }: any) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: uuid(),
            title: title,
            contents: contents,
            isDone: false,
          };

          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button>입력</button>
      </form>
    </div>
  );
}
