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
  const currentAnswer = useSelector((state: any) => state.game.currentAnswer)

  const { answer, idx, clickHandle } = props

  return (
    <button id={idx.toString()} disabled={answeredCurrent} onClick={(e) => clickHandle(e)} style={{ backgroundColor: currentColors[idx] }}>{answer}</button>
  )
}

export default ChoiceBox