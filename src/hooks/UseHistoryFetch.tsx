import { useState, useEffect } from 'react'

const UseHistoryFetch = (initialUrl:string) => {
  // create state variables
  const [history, setHistory] = useState<any>(null)
  const [historyError, setHistoryError] = useState<any>(null)
  const [isHistoryLoading, setHistoryIsLoading] = useState<boolean>(false)
  const [historyUrl, setHistoryUrl] = useState<string>(initialUrl)

  useEffect(() => {
    if (!historyUrl) return
    setHistoryIsLoading(true)
    // clear old search
    setHistory(null)
    setHistoryError(null)
    const fetchData = async () => {
      await fetch(historyUrl).then(response => response.json()).then((data) => {
      // error handling for nonexistent data
        setHistoryIsLoading(false)
        if (data.cod >= 400) {
          setHistoryError(data.message)
          return
        }
        setHistory(data)
      }).catch((error) => {
        setHistoryIsLoading(false)
        setHistoryError(error)
      })
    }
    fetchData()
  }, [historyUrl])

  return { history, historyError, isHistoryLoading, setHistoryUrl }
}

export default UseHistoryFetch
