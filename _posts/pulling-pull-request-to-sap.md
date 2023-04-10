---
title: Using Git and abapGit to review a pull request in SAP
subtitle: 
status: published
date: '2023-03-07T12:00:00.000Z'
tags: [abap, sap, abapgit]
summary: Sometimes you need to review code and actually be able to run it rather than just looking at code files on GitHub. It helps us fully understand changes when we can actually run and step through the code in the debugger.But trying to get the code changes that are in the pull request of the original project that you are working on can be a bit tricky. Especially when you are working off of a fork of the project.
---
Sometimes you need to review code and actually be able to run it rather than just looking at code files on GitHub. It helps us fully understand changes when we can actually run and step through the code in the debugger.But trying to get the code changes that are in the pull request of the original project that you are working on can be a bit tricky. Especially when you are working off of a fork of the project.

The following article will walk you through being able to pull the changes from a pull request into your SAP system, but with the extra complexity of having a fork of the repository between the source repository and the SAP system.

![Forked Project with abapGit](/images/forked_project_abapgit.png)

## Assumptions

* You have a Fork of the **Source Repository**
* You have created an online connection to your **Forked Repository**

# The Issue

The ultimate issue here is that abapGit only allows you to have access to the branches on the connected repository. Since a collaborators pull request on the source repository was not created on you Forked Repository, that branch is not accessible to your SAP system.

Also you may not have direct access to connect to the source repository, in which you are required to utilize a branch to access the source repository.

> While [abapGit](https://abapgit.org/) utilizes Git to do version control, it does not have all of Git's features implemented. It is continuously being worked on to be improved and add new features.

# The Solution
1. Locate the pull request on the **Source Repository** on GitHub
1. Clone your **Forked Repository** to a folder on your computer
1. Verify/Add new remote to the **Source Repository**
1. Get the Pull Request's changes to your local computer
1. Push the branch to your **Forked Repository**
1. Use abapGit to refresh and switch to the new branch

## Locating the pull request on the source repository on GitHub

Head on over to GitHub (or wherever the project is hosted) and navigate to the pull request that you are wanting to get the changes to. A couple things you will need to note down:
* The pull request number or id
* The name of the branch that is requesting to be merged with the main branch

## Cloning the forked repository to your local computer
Now we need to set up the project locally, seperate from what you've already connected in abapGit.

clone a copy of the Forked Repository to your local computer

```git
git clone https://github.com/USERNAME/FORKED_REPOSITORY
```

## Verifying/Adding the new remote connection between your local copy and the source repository

We need to create a connection the source repository so that we can access the pull request. To do this we add a new remote connection to the source repository

```git
git remote add https://github.com/USERNAME/SOURCE_REPOSITORY
```

## Getting the Pull Request's changes to your local computer

Use the PR number/id and the branch name that you noted down earlier to replace `ID` and `BRANCH_NAME` in the following command. This will pull the changes of the pull request from the source repository to your local computer:

```git
git fetch my-new-remote pull/ID/head:BRANCH_NAME
```

Now the changes have been fetched into your local computer we can switch over to that branch

```git
git checkout BRANCH_NAME
```

Checking out pull requests locally: 
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally

## Pushing the branch to your forked repository

We are now able to push the new branch to our forked repository so that this branch can exists there, giving us access to is via abapGit

```git
git push origin BRANCH_NAME
```

## Using abapGit to refresh and switch to the new branch

In abapGit, click into the repository. Now click **Refresh** to ensure you has the most up to date changes. Now hover over **Branch** and click **Switch** so that you can select the pull request branch that you recently added to your forked repository.

![Refresh and Switch](/images/abapgit_refresh_switch.png)


# Conclusion

Hopefully this helped solve your problem and you were able to get some collaborative changes into your SAP system so that it was possible to view them on a working level.

Have something to say about this article? Reach out to me on [Twitter](https://twitter.com/ColbyHemond) or [Send me a message](/contact)