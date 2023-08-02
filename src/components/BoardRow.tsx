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
    <div className='flex flex-row justify-around bg-gradient-to-r from-[#c4c4c4] to-[#ffcccc]'>
      <p className='grow m-4'>{username}:</p>
      <p className='grow m-4'>{easy_correct}</p>
      <p className='grow m-4'>{easy_total}</p>
      <p className='grow m-4'>{medium_correct}</p>
      <p className='grow m-4'>{medium_total}</p>
      <p className='grow m-4'>{hard_correct}</p>
      <p className='grow m-4'>{hard_total}</p>
    </div>
  )
}

export default BoardRow