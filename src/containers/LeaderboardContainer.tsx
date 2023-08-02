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
      <div className='flex flex-row justify-around border-black border-2'>
        <p className='grow m-3 font-bold'>Username</p>
        <p className='grow m-3 font-bold'>Easy Score</p>
        <p className='grow m-3 font-bold'>Easy Total</p>
        <p className='grow m-3 font-bold'>Medium Score</p>
        <p className='grow m-3 font-bold'>Medium Total</p>
        <p className='grow m-3 font-bold'>Hard Score</p>
        <p className='grow m-3 font-bold'>Hard Total</p>
      </div>
      {
        fetched &&
        boardRows
      }
    </div>
  )
}

export default LeaderboardContainer