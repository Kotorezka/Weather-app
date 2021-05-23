import { useState, useEffect } from 'react'

const UseForecastFetch = (initialUrl:string) => {
  // create state variables
  const [forecast, setForecast] = useState<any>(null)
  const [forecastError, setForecastError] = useState<any>(null)
  const [isForecastLoading, setForecastIsLoading] = useState<boolean>(false)
  const [forecastUrl, setForecastUrl] = useState<string>(initialUrl)

  useEffect(() => {
    if (!forecastUrl) return
    setForecastIsLoading(true)
    // clear old search
    setForecast(null)
    setForecastError(null)

    const fetchData = async () => {
      await fetch(forecastUrl).then(response => response.json()).then((data) => {
      // error handling for nonexistent data
        setForecastIsLoading(false)
        if (data.cod >= 400) {
          setForecastError(data.message)
          return
        }
        setForecast(data)
      }).catch((error) => {
        setForecastIsLoading(false)
        setForecastError(error)
      })
    }
    fetchData()
  }, [forecastUrl])

  return { forecast, forecastError, isForecastLoading, setForecastUrl }
}

export default UseForecastFetch
