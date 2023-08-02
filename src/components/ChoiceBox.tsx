import React, { useEffect } from "react";
import { useSelector } from "react-redux";

interface choiceBoxProps {
  answer: string,
  idx: number,
  clickHandle: Function,
}

function ChoiceBox(props: choiceBoxProps): React.JSX.Element {
  const answeredCurrent = useSelector((state: any) => state.game.answeredCurrent)
  const currentColors = useSelector((state: any) => state.game.currentColors)

  const { answer, idx, clickHandle } = props

  return (
    <button className='border-black border-2 mt-5 mb-5 rounded-lg shadow-lg' id={idx.toString()} disabled={answeredCurrent} onClick={(e) => clickHandle(e)} style={{ backgroundColor: currentColors[idx] }}>{answer}</button>
  )
}

export default ChoiceBox