
const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 5000
const app = express()

app.get('/api/hello', (req, res) => {
    console.log("Received a Hello from Frontend")
    res.send({msg: "Backend says hello"})
})


app.listen(PORT, () => {console.log(`App listening on Port ${PORT}`)})