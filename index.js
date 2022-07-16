require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const messageRouter = require('./routes/messageRouter')

app.use(cors())

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.static("public"));
app.use("/users", userRouter)
app.use("/messages", messageRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })