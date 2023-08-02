import React from "react";

interface BoardRowProps {
  data: {
    username: string,
    easy_correct: number,
    easy_total: number,
    medium_correct: number,
    medium_total: number,
    hard_correct: number,
    hard_total: number,
  }
}

function BoardRow(props: BoardRowProps) {
  const { username, easy_correct, easy_total, medium_correct, medium_total, hard_correct, hard_total } = props.data

  return (
    <div>
      <p>{username}:</p>
      <p>{easy_correct}</p>
      <p>{easy_total}</p>
      <p>{medium_correct}</p>
      <p>{medium_total}</p>
      <p>{hard_correct}</p>
      <p>{hard_total}</p>
    </div>
  )
}

export default BoardRow