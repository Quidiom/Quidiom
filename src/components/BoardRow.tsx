import React from "react";

interface BoardRowProps {
  data: {
    username: string,
    easyCorrect: number,
    easyTotal: number,
    medCorrect: number,
    medTotal: number,
    hardCorrect: number,
    hardTotal: number,
  }
}

function BoardRow(props: BoardRowProps) {
  const { username, easyCorrect, easyTotal, medCorrect, medTotal, hardCorrect, hardTotal } = props.data

  return (
    <div>
      <p>{username}:</p>
      <p>{easyCorrect}</p>
      <p>{easyTotal}</p>
      <p>{medCorrect}</p>
      <p>{medTotal}</p>
      <p>{hardCorrect}</p>
      <p>{hardTotal}</p>
    </div>
  )
}

export default BoardRow