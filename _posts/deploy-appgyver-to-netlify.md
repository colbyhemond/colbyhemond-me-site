---
title: Drag and Drop Deploy your AppGyver Web App using Netlify
subtitle: 
status: published
date: '2023-03-08T12:00:00.000Z'
tags: [sap, appgyver, sapbuild]
summary: Free hosting from AppGyver is gone, but that doesn't mean your options are limited. You can host your AppGyver app just about anywhere. Here is how you can host the app on Netlify.
---
Free hosting from AppGyver is gone, but that doesn't mean your options are limited. You can host your AppGyver app just about anywhere. AppGyver has [given you a couple free recommendations](https://forums.appgyver.com/t/deploying-your-appgyver-web-build-for-free/20140) already for [GitHub Pages](https://pages.github.com/) and [Firebase](https://firebase.google.com/). But my go to hosting for the modern web is [Netlify](https://www.netlify.com/).

Here is how you can host your AppGyver app on Netlify.

# Generate the Build of your Web App

## To get to the build page within AppGyver:
* Open up your App
* Navigate to the 'Launch' page (in the top menu bar)
* Click into the 'Distribute' section (side menu bar)
* Click 'Open Build Service'

## Configure the build
* Under the Web App section, click the 'Configure' button
* Leave the hostname **blank** - because we cannot deploy to appgyverapp.com anymore
* Under the 'Bundle Settings' tab, select 'ZIP', Click 'Save & Next'
* (optional) Under the 'Image Assets' tab add a new favicon, Click 'Save & Next'
* Go back to the initial Web Build Setting page
* Click 'Build'

## Building Web App
* Select 'Zip'
* Select a runtime version
* specify an app 'Version' - go with 1.0.0 if it's the first time
* Click 'Build'

*Building the app will take a little while, it took mine a good 10 mins, but you will get an email whether the build is successful or errors so let's move onto the next step while we wait for the build to finish*


# Create a Netlify account

Head on over to [https://www.netlify.com/](https://www.netlify.com/). Feel free to authorize however you prefer.

When you sign up, there will be a screen presented that offers you to Import and existing project (by connecting to a Git host), for drag and drop your folder. Both of these options are presented later, so if your AppGyver build is not finished, feel free to skip this step and poke around in Netlify until the AppGyver build completes.

# Drag and Drop Deploy your Web App

Now that the build has completed. It's time to deploy. All you have to do is just drag the downloaded zip folder into netlify and wait a couple seconds. No need to un-zip the file or do anything else!

![Drag and Drop Deploy with Netlify](/images/appgyver-netlify.gif)

Have something to say about this article? Reach out to me on [Twitter](https://twitter.com/ColbyHemond) or [Send me a message](/contact)