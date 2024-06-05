# Facebook Messenger + BOT_ChatGPT Integration

---
This repository contains the source code for automating Facebook messenger conversations for business pages through integrating OpenAI's ChatGPT. This integration allows you to leverage the power of ChatGPT to respond to user messages on Facebook Messenger in real-time.

## Getting Started
## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Facebook Developer Account and App
- OpenAI API Key

## Setup
1. Clone this repository to your local machine:
> git clone https://github.com/YampX/api_messenger_openai.git

2. Install dependencies:
```
 cd api_messenger_openai
 npm install
 ```
2. Edit credentials in `.env` (Do not commit personal tokens/keys):
```
URL_MESSAGES=https://graph.facebook.com/v17.0/me/messages
OPENAI_API_KEY=
TOKEN_MESSENGER=
```

## Usage
### Configuring Facebook App
1. Create a new Facebook App on the [Facebook Developer Portal](https://developers.facebook.com/apps/).
2. Set up the Messenger product for your app and generate a Page Access Token.
3. Subscribe the app to your Facebook page and obtain the Verify Token.

### Setting Up ChatGPT
1. Sign up for the OpenAI API and obtain your API key.
2. Update .env with your OpenAI API key.

### Deploying Webhook
1. Deploy the webhook to a server or a cloud platform of your choice.
2. Make your webhook accessible over HTTPS (Facebook requires this for webhook endpoints).
3. Configure the Facebook App webhook URL with the deployed endpoint.
4. Verify the webhook using the Verify Token.

Now, your Facebook Messenger integration with ChatGPT should be set up and ready to respond to user messages.

