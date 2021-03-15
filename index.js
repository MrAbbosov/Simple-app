const express = require ("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/orders", (_, res) => {
  res.send("HELLO")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))