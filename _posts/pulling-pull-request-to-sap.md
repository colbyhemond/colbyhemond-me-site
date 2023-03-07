---
title: How to pull in a pull request's changes into your SAP system 
subtitle: 
status: published
date: '2023-03-07T12:00:00.000Z'
tags: [abap, sap, abapgit]
summary: Getting comfortable with git as an ABAP developer is tough enough. Here's a complex flow to help you view others changes to a project in your local system.
---
Sometimes you need to review code and actually be able to run it rather than just looking at code files on GitHub. It helps us fully understand changes when we can actually run and step through the code in the debugger. Othertimes you might just be curious or an over bearing teammate. 🤔 Who am I to judge? You do you.

Regardless of the situtation, trying to get the code changes that are in the pull request of the original project that you are working on can be a bit tricky. Especially when you are working off of a fork of the project, which add a whole extra layer of complexity to the equation.

The following article will walk you through being able to pull the changes from a pull request into your SAP system, but with the extra complexity of a fork of the repository between the source repository and the SAP system.



Let's set the scene...you have the source repository. You have created a fork of the source repository, this is your remot repository. You have made an online connection between that remote repositoy and your SAP system using abapfit. When you are workign on the project there may be various other contributors. When this happens they likely have the same development workflow set up. You may be curious as to what they have developed and want to check it out yourself before those changes are merged into tht eh main branch. Or you may be a code reviewer and need to take a deeper look at the code or test it out yourself. In these scenarios you need to pull the code from the pull request to your local system so that you can test out those changes.

As far as I know ther isn't a direct way to do this with abapit. Here is how you can solve this issue.
You need to open the command line and clone or navigate to where you have the project folder stored on your machine. You have your remote origin connection set up to be connected to you fork. But you need to get the PR changes from the original repository. Therefore we need to set up an additional remote connection. you can do this with the following command:

```git 
git remote -v
```

```git
git remote add my-new-remote https://github.com/USER/REPO.git
```

Now that we have added the source projects remote, we are able to pull in the changes from the pull request as a new branch. In order to do this we can run the following commands:

First get the ID number from the pull request. You can find this in the repositories GUI by going to the PR and looking at the end of the title.

Use that ID number with the following command

```git
git fetch my-new-remote pull/ID/head:BRANCH_NAME
```

Now the changes have been fetched into your local, but we need to actuall switch over and creat that branch

```git
git checkout BRANCH_NAME
```

Checking out pull requests locally: 
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally