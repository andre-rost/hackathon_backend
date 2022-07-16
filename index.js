require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRouter')

app.use(cors())

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })