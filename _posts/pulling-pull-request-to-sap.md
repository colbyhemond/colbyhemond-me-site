---
title: Setting up a Zapier Webhook to Create Tweets
subtitle: 
status: published
date: '2022-12-07T12:00:00.000Z'
tags: [zapier, webhook, twitter]
summary: How to setup a "zap" that utilizes the Zapier Webhook and Twitter in order to create a tweet using a POST request.
---
You can start automating some of your Twitter tweets by using Zapier integrations. In this post I'll show you how to set up a Zapier "zap" that catches a webhook and creates a tweet. We will be using the two Zapier apps:
- [Webhooks by Zapier](https://zapier.com/apps/webhook/integrations)
- [Twitter](https://zapier.com/apps/twitter/integrations)

## Setting up the Zap
- Create a new zap
- search for the "Webhooks by Zapier" app and select it
### Setting up the webhook trigger
#### Choose app & event
- "Webhooks by Zapier" should already be selected
- Event: "Catch Hook"
- Click Continue

#### Set up trigger
- Pick off a Child Key: This is not required and can be ignored
- Click Continue

#### Test Trigger
- Copy the URL
- Go to [resttesttest.com](https://resttesttest.com)
- Method: POST
- Endpoint: Your webhook URL copied in the previous step
- Parameter Name: message
- Parameter Value: hello from zapier!
- Click "Ajax request"
- Go back to your zap and click "test"
- The zap should have found your request and you can verify the message parameter was sent through
- If this was successful, click continue

### Set up the tweet creation
#### Choose app & event
- Search for and select Twitter as your next app
- Event: Create Tweet

#### Choose account:
- Select your twitter account. Log in and allow Zapier access if needed

#### Set up action:
- Message: Select the "Message" parameter from the drop down list that appears
- Image: select the "Image" parameter from the drop down list that appears
- Click continue

#### Test action
If you choose to test the action, know that this will create a tweet on your twitter account. So be prepared to take action!

## Conclusion

There you have it! You're one step closer to automating your tweeting habit! Now what to tweet about?

For additional information about Zapier Webhooks check out this [Brief introduction to Webhooks](https://help.zapier.com/hc/en-us/articles/8496083355661-How-to-Get-Started-with-Webhooks-by-Zapier#sending-an-array-of-objects-0-10) on Zapiers help center.

