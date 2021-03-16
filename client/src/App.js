import React from 'react'

import DepartementRow from './components/DepartementRow'
import './App.css';

function App() {

  const [rows, setRows] = React.useState([])

  
  fetch('api/dataset_count')
    .then((response) => response.json())
    .then((data) => {
      if(data.error != null){
        return(
          <tr>
            <th>data.author</th>
            <td>Fehler beim Laden der Daten</td>
          </tr>
        )
      }
      return (
        <DepartementRow
          key={data.author}
          name={data.author}
          count={data.count}
        />
      )  
    }).then( (row) => {
      setRows([row])
    })

  return (
    <div className="app">
      <header>
        <h1>Aktivität deutscher Bundesministerien auf GovData.de</h1>
      </header>
      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Anzahl Datensätze</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </section>
       
      </main>
      <footer>
        T4G Challenge - David Probst - 2021
      </footer>
    </div>
  );
}

export default App;
