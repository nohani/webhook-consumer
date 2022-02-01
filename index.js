// Require express and body-parser
const express = require("express")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Parse your posted data as JSON on any URL path
app.use(express.json())

app.post("/hook", (req, res) => {
     // Call your action on the request here
     console.log(req.body);

     //Acknowledge receipt of data from your webhook with a 200 status code
     res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
