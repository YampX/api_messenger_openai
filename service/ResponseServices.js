const { URL, URLSearchParams } = require('url')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

class ResponseService {
  handleReceivedMessage = async (body) => {
    for (let entry of body.entry) {
      for (let message of entry.messaging) {
        await this.sendOkResponse(message.sender.id)
      }
    }
  }

  sendOkResponse = async (senderId) => {
    const responseBody = {
      recipient: { id: senderId },
      message: { text: "ok" }
    }
    await this.sendApi(process.env.URL_MESSAGES, responseBody)
  }

  sendApi = async (apiUrl, body) => {
    let url = new URL(apiUrl)
    url.search = new URLSearchParams({ access_token: process.env.TOKEN_MESSENGER })
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).catch(err => console.log(err))
    if (response.ok) {
      const responseJson = await response.json().catch(err => console.log(err))
      console.log(responseJson)
    } else {
      // TODO: Handle Error
      console.log(response)
    }
  }
}

module.exports = { ResponseService }
