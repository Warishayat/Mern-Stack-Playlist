const express = require("express");
const app = express();
const port = 3000;

//what is mongodb ? mongodb atlas and compass setup we will cover all these.

// Mongo db kia hae? ->desktop k resoucres ko use karra h mongo
// How to install on window and mac ->mac has hectic preocess
// mongo db compass kia h what is collection
// how to read write and all in the compass.
// The last one is mongodb atlas ----> cloud k resources ko use karo bhai.
// Atlas is getting complete and its run on mongo compass and vs code both.

app.get("/", (req, res) => {
  res.send("i am working");
});

app.listen(port, () => {
  console.log(`app  is running on the port ${port}`);
});
