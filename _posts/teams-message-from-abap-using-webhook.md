---
title: "How To: Send a Teams Message from your ABAP Code"
subtitle: 
status: published
date: '2023-02-20T12:00:00.000Z'
tags: [sap, abap, teams]
summary: In this article you'll learn how to level up your notification game using ABAP and the Microsoft Teams Incoming Webhook connector.
---
---

In this article you'll learn how to level up your notification game using ABAP and the Microsoft Teams Incoming Webhook connector.

The steps we're going to go through are:
- Create a Teams webhook in your desired channel
- Implement the webhook in ABAP code

# Creating the webhook
Setting up the webhook in your desired channel only takes a minute. It's explained in 5 simple steps in the [Microsoft Documentation here](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook#create-an-incoming-webhook).

After you've created the webhook continue below with Implementing the webhook.

# Implementing the webhook
*Assumption: You have created an external service destination for your Teams host. If you have not, [check out this article explaining how to set that up](https://medium.com/switched-on-the-bowdark-blog/how-to-creating-a-destination-in-sap-for-making-requests-to-https-secured-apis-4ba4dd63c2e3).*

Implementing the webhook will be like implementing any other RESTful POST request in ABAP. 
You will need to: 
- Create the http_client object. (We are doing this "by destination") 
- Set the URI of the request to the webhook endpoint that you created earlier. (You can exclude the host information as that is located in the "destination").
- Create a rest_client using the http_client object.
- Set the JSON payload of the message
- Perform the POST

```
"Create http client
cl_http_client=>create_by_destination(
  EXPORTING
    destination              = 'TEAMS_WEBHOOK_DESTINATION' "Change this if yours is named something different
  IMPORTING
    client                   =  DATA(http_client)
).

"Set webhook endpoint - change the string below to your specific endpoint
DATA(lv_uri) = `/9bz904ac-0000-4711-bd91-ce8f3465zzz@1e63z4db-a4b0-454b-a9c3-b39464zzda0/IncomingWebhook/66b00ezz60000c89eb98e233az25c/c7dz82-23ea-0000-bb14-ee9337e48zzf`.

cl_http_utility=>set_request_uri(
  EXPORTING
    request = http_client->request
    uri     = lv_uri
).

"Create rest client
DATA(rest_client) = NEW cl_rest_http_client( http_client ).

"Set JSON payload
DATA(request_entity) = rest_client->if_rest_client~create_request_entity( ).
request_entity->set_string_data( `{"text": "Hello Teams from ABAP"}` ).

"Perform POST
rest_client->if_rest_client~post( request_entity ).
```

# Step it up a notch
Microsoft Teams has this cool thing called [Adaptive Cards](https://adaptivecards.io/). You can configure a card using JSON that is sent in the webhook request and the message can be much more powerful than a simple text string.

Check out the [Adaptive Card Documentation](https://adaptivecards.io/explorer/AdaptiveCard.html) to learn more. They even have an [Adaptive Card Designer](https://adaptivecards.io/designer/) where you can build the message using no-code tools to generate the JSON payload that you can insert into your ABAP code.

Check out how Bowdark is [improving customer communication using Adaptive Cards](https://switchedon.bowdark.com/energy-corner-improving-collaboration-in-the-field-dd0205f63f88).

___

Have something to say about this article? Reach out to me on [Twitter](https://twitter.com/ColbyHemond) or [Send me a message](/contact)