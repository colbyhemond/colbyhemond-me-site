---
title: Hello, Node!
subtitle: More than a simple Hello World project.
status: published
date: '2022-06-12T12:00:00.000Z'
tags: [nodejs, development]
summary: Getting a feel for working with node, all through the terminal! Creating folders, files, writing code to the files, navigating the terminal, and executing node commands!
---

Move over Hello World, say wassup to Hello Node!

Our goal is to output "Hello Node!" to the terminal console by running the following command: `node index.js`. Here are the steps we will go through to do this:
- Create a folder to hold our files
- Create the `index.js` file
- Add content to the `index.js` file

## Create a folder to hold our files
First things first, let's whip open that terminal. Make sure you are in a location that you want to create your folder. A quick list of commands to help us navigate the terminal:
- `ls` list all files/folders in current directory
- `cd /folder_name` change directory into folder `folder_name`
- `cd ../` change directory to go back to the parent directory of the current directory

### Creating our folder
Now we can start to use nodes file system `fs` while getting the project set up. While we will be using this in the command line, we can just as easily write these in a file.

Now let's create a folder to hold our files:
```javascript
node -e "fs.mkdirSync('hello_node')"
```

References:
- [Node File System `fs`](https://nodejs.org/docs/latest-v15.x/api/fs.html)
- [Create Folder method `mkdirSync`](https://nodejs.org/docs/latest-v15.x/api/fs.html#fs_fs_mkdirsync_path_options)

## Create the `index.js` file
### Navigating to the correct location
Now we can run the `ls` command to list the files in the directory we are in, and we should see the newly created "hello_node" folder there.

Let's move into the newly created folder
```javascript
cd hello_node
```

### Creating the file
Then create a new file `index.js`:
```javascript
node -e "fs.writeFileSync('index.js', '')" 
```
This creates an empty file names `index.js`, and its empty because we pass the data parameter an empty string.

References:
- [Create File method `writeFileSync`](https://nodejs.org/docs/latest-v15.x/api/fs.html#fs_fs_writefilesync_file_data_options)

## Add content to the `index.js` file
Now lets add some content to the file. We can do this using the same `writeFileSync` method.
```javascript
node -e "fs.writeFileSync('index.js', \"console.log('Hello, Node!')\")"
```
This overwrites the content in our `index.js` file with `console.log('Hello, Node!')`.

Now we can execute the `index.js` file from the terminal with:
```javascript
node index.js
```
Which gives us the output of `Hello, Node!`. 

## What do we get out of doing this?
There are a few important fundamental concepts we are practicing here. It's not just to blindly check off your first "getting started" project.
1. Practicing navigating the terminal
2. Getting familiar with creating folders and files with node's file system library
3. Executing node commands in the terminal

It's easy enough to open your code editor, right-click to create a new folder, right-click to create a new file, and write the `console.log('Hello, Node!')` line in there. 

Or even in the terminal to just write `node -e "console.log('Hello, Node!')"` to output `Hello, Node!` right there.

It's important to start to get comfortable navigating and using these methods in this article so that these fundamentals become second nature.

___

*For more Node.js articles, checkout [Node.js Hands On](/posts/node-js-hands-on)*