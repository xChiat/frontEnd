import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [vehiculo, setVehiculo] = useState([]);
  useEffect(() =>{
    fetch("htto://localhost/p1c1/data.json").then((response) =>{
      return response.json();
      }).then((vehiculo) =>{
        setVehiculo(vehiculo)
    })
  },[]);
  return (
    <div className="App">
      <h3>Lista de vehiculos</h3>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {vehiculo.map({ve=>
            return(

            );
})}
        </tbody>
      </table>
    </div>
  )
}

export default App
