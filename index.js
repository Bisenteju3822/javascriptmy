const express = require("express");
const app = express();
const fs = require("fs")
const port = 8000;
fs.writeFile("one.txt", "tis is new file", (err) => {
  if (err) {

    console.log("This is error")
  }

  console.log("this is file which successfully created")

})
fs.truncate("one.txt", 0, (err) => {
  if (err) {

    console.log("This is error")
  }

  console.log("this is file which  deleted")

})
fs.appendFile("one.txt", "tis is new  tird file", (err) => {
  if (err) {

    console.log("This is error")
  }

  console.log("this is file which  append")

})
app.put("/next",
  (req, res) => {
    res.send("this is next", 3000)
  })

app.get("/insert", (req, res) => {
  const a = 5;
  const b = 7;
  const sum = a + b;
  console.log(sum);
  try {
    res.status(200).send(`The sum of ${a} and ${b} is ${sum}. It works correctly.`);
  } catch (error) {
    console.log("error is comming")
  }


}
);

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
