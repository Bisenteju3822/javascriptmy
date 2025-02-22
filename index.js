const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const port = 3000

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(require("./route/relationRoute"))
mongoose.connect("mongodb://127.0.0.1:27017/reation-Practise").then(() => {
  try {
    console.log("the mongodb is connected")
  } catch (error) {
    console.log(error)
    console.log("error in the mongodb connection")
  }
}
)
app.listen(3000, () => {
  console.log("server is started in 3000")
})