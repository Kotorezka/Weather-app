import { useState, useEffect } from 'react'

const UseFetch = (initialUrl:string) => {
  // create state variables
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>(initialUrl)

  useEffect(() => {
    if (!url) return
    setIsLoading(true)
    // clear old search
    setData(null)
    setError(null)

    const fetchData = async () => {
      await fetch(url).then(response => response.json()).then((data) => {
      // error handling for nonexistent data
        setIsLoading(false)
        if (data.cod >= 400) {
          setError(data.message)
          return
        }
        setData(data)
      }).catch((error) => {
        setIsLoading(false)
        setError(error)
      })
    }
    fetchData()
  }, [url])

  return { data, error, isLoading, setUrl }
}

export default UseFetch
