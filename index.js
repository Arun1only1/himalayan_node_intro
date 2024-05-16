import express from "express";

// app
const app = express();

// get api
app.get("/", (req, res) => {
  return res.status(200).send("Hi, This is my first API.");
});

app.get("/hello", (req, res) => {
  return res.status(200).send("Hello, Good Afternoon...");
});

// listen a server
// network port
// range 0 to 65535
// reserved:0 to 1023
// e.g http =>80
// e.g https => 443
// e.g ftp => 21
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
