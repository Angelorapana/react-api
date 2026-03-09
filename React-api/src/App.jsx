import { useEffect } from "react"
import axios from "axios"

const apiUrl = "https://lanciweb.github.io/demo/api/actresses/"

function App() {

  useEffect(() => {

    axios.get(apiUrl)
      .then((response) => {

        console.log(response.data)

      })

  }, [])

  return (
    <div>
      <h1>React-Api</h1>
    </div>
  )
}

export default App