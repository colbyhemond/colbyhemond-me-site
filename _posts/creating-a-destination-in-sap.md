---
title: Creating a Destination in SAP for making requests to HTTPS secured APIs
subtitle: 
status: published
date: '2022-11-29T12:00:00.000Z'
tags: [sap, abap, ssl]
summary: Creating a destination in SAP for reusability across API calls within your ABAP code
---
This is a walkthrough showing how to create a https destination in SAP in order to be able to call an external API within your ABAP code.

## The Problem
When you just plug in an https URL for an API endpoint and just fire away, you will probably receive an exception relating to `HTTP_COMMUNICATION_FAILURE` . However, there isn't much explanation to understand why specifically the communication with the API failed.

```
. . .

cl_http_client=>create_by_url(
  EXPORTING
    url    = lv_url
  IMPORTING
    client = http_client
).

. . . 

http_client->receive(
  EXCEPTIONS
    http_communication_failure = 1
    http_invalid_state         = 2
    http_processing_failed     = 3
    others                     = 4
).

. . .
```

## The Solution

We will set up a destination connection so that we can replace `cl_http_client=>create_by_url( )` with `cl_http_client=>create_by_destination( )`

### Steps
- Create the Destination Connection
- Add SSL certificates
- Test the connection

### Create the Destination Connection
- Go to transaction `SM59`
- Click Create 

#### Create Destination Popup
- Destination: Define the name of your destination (this can be anything you want it to be)
- Connection Type: G - HTTP connection to external server
- Click Continue

#### RFC Destination Screen - Technical Settings Tab
- Description 1: Add a short explanation of the destination
- Host: This is the domain of the API. Example: `api.example.com`
- Port: Use `443` by default unless someone specifies otherwise
- Path Prefix: This is optional. But if there is a specific path for the API that that doesn't change you can enter that here

#### RFC Destination Screen - Logon & Security Tab
- SSL: Active
- SSL Certificate: ANONYM SSL Client (Anonymous)

At this point, if you click the "Connection Test" button, the test should fail because we have not yet provided the details about the SSL certificates to the system.

### Adding SSL Certificates
We will need to download the SSL certificates to our local computer, and add them to the system in transaction `STRUST`.

#### Downloading the certificates
- Open your web browser
- Navigate to the URL of the API you are working with
- Click the lock symbol at the beginning of the URL
- Click connection is secure
- Click connection is valid (a pop up window will appear)
- Click into the Details tab
- Select the first certificate
- Click Export certificate
- Save in a place you can remember to get to
- Repeat the Export with the remain certificates in the Certificate Hierarchy chain

#### Adding the certificates to the system in `STRUST`
- Go to transaction code `STRUST`
- Expand the folder "SSL client SSL Client (Anonymous)"
- Click on your system's name
- In the "Certificate" section, click the bottom left button "Import certificate"
- Click Add to Certificate List
- Repeat for remaining certificates

### Test the Connection
- Go back to transaction `SM59`
- Open the destination you created previously
- Click the "Connection Test" button

You should see a result that the test was successful. You should now be able to utilize the destination in your ABAP code.
```
. . .

cl_http_client=>create_by_destination(
  EXPORTING
    destination = 'EXAMPLE_DESTINATION_NAME'
  IMPORTING
    client      = http_client
).

. . .
```

For more content like this [Follow me on Twitter](https://twitter.com/ColbyHemond).