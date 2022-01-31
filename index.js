// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000

app.use(bodyParser.json())


// Creating a custom parser to add a content type header to the request so that the data 
// can be parsed as JSON
// const jsonHeader = bodyParser.json({type: (req) => {
//     return req.headers['content-type'] = 'application/json'
// }})

app.post("/hook", (req, res) => {
     // Call your action on the request here
     console.log(req.headers);
     console.log(req.body);

     //Responding to the server is important
     res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))