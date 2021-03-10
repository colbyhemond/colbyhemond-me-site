---
slug: Adding-a-Pre-Existing-Website-to-GitHub
title: Adding a Pre-Existing Website to GitHub
date: 2020-07-15T21:00:58.206Z
summary: If you are like me, you don't use GitHub nearly as much as you should.
  Because of that, you always seem to forget how simple the process of the Git
  commands can be. Well, fear no more, you might as well bookmark this blog post
  before you even continue reading. ...
---
If you are like me, you don't use GitHub nearly as much as you should. Because of that, you always seem to forget how simple the process of the Git commands can be. Well, fear no more, you might as well bookmark this blog post before you even continue reading. In this post I will outline the following steps:

1. Creating the Git repository on your local machine
2. Creating the repository on GitHub
3. Pushing the repository on your local machine to GitHub

## Creating the Git repository on your local machine

First things first, open up terminal and `cd` your way to the project folder that you want to push to GitHub. Usually it's just a simple `cd your-project-here` 

Next you will initialize the Git repository within your local machine by typing in `git init`

Add all of your projects files to the newly initialized repository with `git add .` (the `.` means that you are adding all files)

**Bonus:** add a Git Ignore file to keep sensitive files from being uploaded to GitHub for the public to see using

* create the file with `touch .gitignore`
* stage the file with `git add .gitignore`

Now that you have initialized the repository and staged all of the files, you can commit these changes to the repository with `git commit -m "uploading initial project"`

At this point all of your project files are now in your Git repository on you local machine. Next you will create the repository on GitHub so that you can move the contents of the repository on you local machine to GitHub online.

## Creating the repository on GitHub

The first thing you need to do in order to create the repository on GitHub is go to [github.com](https://github.com) and login to your account.

Once logged in, click on the plus sign (next to your avatar picture) in the top right hand corner, and from the dropdown select "New Repository".

Enter your repository name, which should be the same as your project folder's name.

Adjust the other settings to your liking.

Finally click the "Create Repository" button.

Now you have an empty repository for your project on GitHub. Next you will have to connect the repository on your local machine with this new repository you created on GitHub.

## Pushing the repository on your local machine to GitHub

Head back to your terminal window.

Open up the connection between the repository on GitHub and the repository on your local machine with `git remote add origin https://github.com/username/new_repo` replacing **username** with your GitHub username and **new_repo** with the repository you just created on GitHub.

*Optional: If you have SSH set up use* `git remote add origin git@github.com:username/new_repo` *instead. If you need to or want to set up SSH, follow the steps in [this great resource from GitHub](https://docs.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys)*

Now that you have a connection established, you can push all of the file from the repository on your local machine to the repository on GitHub with `git push -u origin master`

There you have it! You should now be able to go back to GitHub and refresh the page to see all of the files in your new repository! I hope this helped you as much as it is going to help me when I forget again!