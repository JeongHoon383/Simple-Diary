import React, { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");

  return (
    <div>
      <h2>오늘의 일기</h2>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default DiaryEditor;
