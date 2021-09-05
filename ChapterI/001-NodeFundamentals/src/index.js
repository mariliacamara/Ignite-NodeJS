const express = require('express');
const app = express();

app.get("/", (req, res) => {
 return res.json({ message: "Hello World, Ignite!"})
});

// localhost:3333
app.listen(3333);
console.log('Server is running! 🚀');