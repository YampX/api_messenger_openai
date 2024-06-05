const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ResponseService } = require('./service/ResponseServices')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get("/test", (req, res) => {
  res.json({ message: 'Success' })
})

app.post("/webhook", async (req, res) => {
  let body = req.body
  if (body.object === "page") {
    try {
      const responseService = new ResponseService()
      await responseService.handleReceivedMessage(body)
      res.status(200).send("EVENT_RECEIVED")
    } catch (err) {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(404)
  }
})

app.get("/webhook", (req, res) => {
  let mode = req.query["hub.mode"]
  let token = req.query["hub.verify_token"]
  let challenge = req.query["hub.challenge"]

  if (mode && token) {
    if (mode === "subscribe" && token === 'token') {
      console.dir("WEBHOOK_VERIFIED")
      res.status(200).send(challenge)
    } else {
      res.sendStatus(403)
    }
  }
})

app.listen(process.env.PORT || 3000, async () => {
  console.log("🚀 app running on port", process.env.PORT || 3000)
})
