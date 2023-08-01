import React from "react";
import { useSelector } from "react-redux";

interface choiceBoxProps {
  answer: string,
  idx: number,
  clickHandle: Function
}

function ChoiceBox(props: choiceBoxProps): React.JSX.Element {
  const answeredCurrent = useSelector((state: any) => state.game.answeredCurrent)
  const {answer, idx, clickHandle} = props

  return (
    <button id={idx.toString()} disabled={answeredCurrent} onClick={(e) => clickHandle(e)} >{answer}</button>
  )
}

export default ChoiceBox