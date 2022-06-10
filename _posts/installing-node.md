---
title: Installing Node.js - The Best Way
status: published
date: '2022-06-10T12:00:00.000Z'
tags: [nodejs, development]
summary: How to install Node.js using node version manager. 
---
The best way to install node is using a version manager. Specifically `nvm` (node version manager).

What's included in this article:
- Checking versions
- Installing `nvm`
- Installing `node`
- Changing versions
- Why is installing node using `nvm` the best way?

## Checking versions
In order to check your versions you must have a terminal/command prompt/command line window open. You can accomplish this by searching for the application on your computer. Or if you have a code editor installed, you usually can open one within the editor.

### Node Version Manager
```javascript
command -v nvm
```
If `nvm` is installed, the next line should show `nvm`

### Node.js
```javascript
node -v
```
If you have node installed, it will show you a version number. If no version number is shown, then node is not installed.

### NPM
```javascript
npm -v
```
If npm is installed, it will show you a version number. If no version number is shown, then npm, nor node, is installed. These two come hand in hand. Because when you installed node, npm comes with it.

## Installing nvm on macOS/Linux
If you followed the last section and tried checking your versions, you should have a terminal window still open. If not, open one.

On the top of your terminal it should tell you what type of shell it's using. You should see `bash`, `sh`, or `zsh`

If you're still unsure, type the following into the terminal:
```javascript
ps
```
That should list a few lines in which you should see `bash`, `sh`, or `zsh`

If you see `bash`, then copy in paste this into the terminal:
```javascript
curl -o- ht‌tps://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

If you see `sh`, then copy in paste this into the terminal:
```javascript
curl -o- ht‌tps://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | sh
```

If you see `zsh`, then copy in paste this into the terminal:
```javascript
curl -o- ht‌tps://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh
```

If everything seemed to install okay. Try checking the version of `nvm` like in the previous section with:
```javascript
command -v nvm
```

The terminal should output `nvm`. If it does not, try restarting the terminal and attempting to check again.

## Installing Node
The prerequisite for this is to have `nvm` installed. You can check if `nvm` is installed by running the folowing in a terminal window:
```javascript
command -v nvm
```
The output should show `nvm`. If it doesn't then you need to install `nvm` before continuing on.

If you have `nvm` installed, then you're ready to install node. Usually it makes most ssense to install the recommended stable version. You can check which version that is by visiting the [nodejs.org website](https://nodejs.org/en/).

At the time of this writing, the recommended stable version is 16.15.1 (aka version 16). And the latest stable version is 18.3.0 (aka version 18). If you are unsure, then you should install the recommended version.

To install node version 16, use the following command:
```javascript
nvm install 16
```

Let that finish downloading, and node version 16 should be installed. 🎉

## Changing Versions

In order to change node versions, simply use the `nvm install` command followed by the version you would like to install.


If I want to change to node version 14, because maybe I'm working on an older project, I'll use the following:
```javascript
nvm install 14
```

If I want to install the absolute latest version to experiment new features that version offers, in this case version 18, then...
```javascript
nvm install 18
```

## Why is `nvm` the best way to install node?

Installing node with `nvm` allows us to change versions and install any global dependencies much easier than other methods.

Other methods being:
- Downloading the node binary from the website and installing it manually
- Installing node via your operating systems package manager

Installing node these ways causes us to sometimes have to use `sudo` when typing in a command in to the terminal. Which can just be a pain having to type in your admin password each time. Or if you don't own the computer, then you may not even have know the password for that high up in the directory.

I know, they aren't the worst issues in the world, but we're all about making life easier. And if there's a way to do that, then we'll do that.

*For more Node.js articles, checkout [Node.js Hands On](/posts/node-js-hands-on)*