import { useState, useEffect } from "react"
import axios from "axios"

const apiUrl = "https://lanciweb.github.io/demo/api/actresses/"

function App() {
  const [actresses, setActresses] = useState([])
  useEffect(() => {

    axios.get(apiUrl)
      .then((response) => {

        console.log(response.data)   //STampo i dati dell'api in console
        setActresses(response.data)  //Definita la variabile con stato actresses aggiorno lo stato

      })

  }, [])

  return (
    <>
      <div>
        <h1>React-Api</h1>
      </div>
      <div className="container">
        <h1>Cast Attrici</h1>
        <ul>
          {actresses.map((singleActress) => <li key={singleActress.id}
          >
            <h6> {singleActress.name}</h6>
            <img src={singleActress.image} />
            <p>{singleActress.biography}</p>
          </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App;