

// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")



// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing. There are multiple ways to do this, but I have included
// 3 examples of ways you can do this so that you receive the desired results.

// Example 1: Write a custom type function that uses logic to check if there is a header in the request, 
// and if not, set it to 'application/json.' Since the data coming in is always coming from the same source
// in the same way, it is okay to include this in the 'app.use' portion of your code. However, if you'd like 
// to extract it as a custom parser to pass as middleware in your post request, you may do that as well.

// app.use(bodyParser.json({type: function(req) {
//         if (req.headers['content-type'] === ""){
//             return req.headers['content-type'] = 'application/json';
//         }
//         else if (typeof req.headers['content-type'] === 'undefined'){
//             return req.headers['content-type'] = 'application/json';
//         }else{
//             return req.headers['content-type'] = 'application/json';
//         }
// }}))


// Example 2: Have the type function return true, so that if there is no type in the request, it assumes a default type of 'application/json'

// app.use(bodyParser.json({type: () => {
//         return true;
// }}))


// Example 3: We know that the data comes in with no header, so we can just set the header of the request to 'application/json'. 
app.use(bodyParser.json({type: (req) => {
        return req.headers['content-type'] = 'application/json'
}}))


app.post("/hook", (req, res) => {
     // Call your action on the request here
     console.log(req.headers);
     console.log(req.body);

     //Responding to the server is important
     res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))