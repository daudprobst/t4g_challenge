
const express = require("express")
const path = require("path")
const fetch = require('node-fetch');
const URL = require('url').URL
const PORT = process.env.PORT || 5000
const app = express()

app.get('/api/hello', (req, res) => {
    console.log("Received a Hello from Frontend")
    res.send({msg: "Backend says hello"})
})

app.get('/api/dataset_count', (req, res) => {
    const author = 'Bundesministerium der Finanzen'
    // we can go for rows 0 to minimize data load; count is returned irrespective of rows settings
    const url = new URL(`https://www.govdata.de/ckan/api/3/action/package_search?q=author:${author}&rows=0`)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            res.status(200).json({
                "author": author,
                "count": data.result.count,
                "error": null
            })
        })
        .catch( (error) => {
            console.log(`Èrror while fetching ${author}`)
            res.status(500).json({
                "author": author,
                "count": null,
                "error": error
            })
        })
})


app.listen(PORT, () => {console.log(`App listening on Port ${PORT}`)})