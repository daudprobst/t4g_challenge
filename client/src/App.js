import React from 'react'
import './App.css';

function App() {


  const [rows, setRows] = React.useState([])

  fetch('api/hello').then( (response) => {
    console.log(response.json())
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
              <tr>
                <th>Testministerium</th>
                <td>5</td>
              </tr>
              {/* Data from API will go here*/ }
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
