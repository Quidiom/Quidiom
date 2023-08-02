import React, { useEffect, useState } from "react";
import BoardRow from "../components/BoardRow";

function LeaderboardContainer() {
  const [boardData, setBoardData] = useState([])
  const [boardRows, setBoardRows] = useState<React.JSX.Element[]>([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    formatRows()
    setFetched(true)
  }, [boardData])

  async function fetchData() {
    const URL = '/api/leaderboard'
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setBoardData(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  function formatRows() {
    const components: React.JSX.Element[] = []
    for (let i = 0; i < boardData.length; i++) {
      components.push(
        <BoardRow data={boardData[i]} key={i} />
      )
    }
    setBoardRows(components)
  }

  return (
    <div>
      <div>
        <p>Username</p>
        <p>Easy Score</p>
        <p>Easy Total</p>
        <p>Medium Score</p>
        <p>Medium Total</p>
        <p>Hard Score</p>
        <p>Hard Total</p>
      </div>
      {
        fetched &&
        boardRows
      }
    </div>
  )
}

export default LeaderboardContainer