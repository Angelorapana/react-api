import { useState, useEffect } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

const apiUrl = "https://lanciweb.github.io/demo/api/actresses/"

function App() {
  const [actresses, setActresses] = useState([])
  useEffect(() => {

    axios.get(apiUrl)
      .then((response) => {

        console.log(response.data)   //STampo i dati dell'api in console
        setActresses(response.data)  //Definita la variabile con stato actresses aggiorno lo stato

      })
      .catch((error) => {

        console.log(error)

      })

  }, [])

  return (
    <>
      <div>
        <h1>React-Api</h1>
      </div><div className="container">
        <div className="row">

          {actresses.map((singleActress) => (

            <div key={singleActress.id} className="col-md-4 mb-4">

              <div className="card h-100">

                <img
                  src={singleActress.image}
                  className="card-img-top"
                  alt={singleActress.name}
                  onError={(element) => { element.target.src = "./src/assets/placeholder.webp" }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {singleActress.name}
                  </h5>

                  <p className="card-text">
                    <strong>Anno:</strong> {singleActress.birth_year}
                  </p>

                  <p className="card-text">
                    <strong>Nazionalità:</strong> {singleActress.nationality}
                  </p>

                  <p className="card-text">
                    {singleActress.biography}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default App;