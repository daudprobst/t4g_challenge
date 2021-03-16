import React from 'react'

import DepartementRow from './components/DepartementRow'
import './App.css';
import departementsRaw from './departements.json'

function App() {

  const [rows, setRows] = React.useState([])

  const departements = departementsRaw.departments

  const stringifyDepartementAuthors = (departement) => {
    let authors = []
    authors.push(...[departement.name, departement.abbr])
    departement.subordinates?.forEach( subordinate => {
      authors.push(...[subordinate.name, subordinate.abbr])
    })
    const authorsString = authors.join('" OR "') // we need quotations for solr query
    return ['("', authorsString, '")'].join('')
  }


  React.useEffect(() => {
    const rows = departements.map( (departement) => {
      const authorFull = stringifyDepartementAuthors(departement)
      return fetch(`api/dataset_count/${authorFull}`)
        .then((response) => response.json())
        .then((data) => {
          if(data.error != null){
            return(
              <tr>
                <th>departement.name</th>
                <td>Fehler beim Laden der Daten</td>
              </tr>
            )
          }
          return (
            <DepartementRow
              key={departement.name}
              name={departement.name}
              count={data.count}
            />
          )  
        })
    })

    Promise.all(rows)
      .then( (rowValues) => {
        rowValues.sort( (a, b) => b.props.count - a.props.count)
        setRows(rowValues)
      })
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //call only on mount
  

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
                <th>Ministerium</th>
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
