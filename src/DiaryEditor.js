import React, { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div>
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          type="text"
          value={state.author}
          onChange={(e) => {
            setState({
              author: e.target.value,
              content: state.content,
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              content: e.target.value,
              author: state.author,
            });
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default DiaryEditor;
