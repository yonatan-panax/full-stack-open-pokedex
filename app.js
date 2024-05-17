const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 8090;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
