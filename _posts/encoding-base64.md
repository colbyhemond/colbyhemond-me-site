---
title: Encoding Base64 with Node.js
subtitle: 
status: published
date: '2022-06-13T12:00:00.000Z'
tags: [nodejs, buffer, npm]
summary: You can encode a string to base64 in Node.js without the use of an ecosystem library. Node comes with "batteries included" and allows us to encode to base64 using a core API
---
You can encode a string to base64 in Node.js without the use of an ecosystem library. Node comes with "batteries included" and allows us to encode to base64 using a core API. In this article you will learn the following:
- Encode a string to base64
- Decoding from base64 to a unicode string
- What is the Buffer API anyway?
- Creating a base64 encode/decode utility

## encoding a string to base64
```javascript
const string = 'this string will be converted to base64'
const stringBuffer = Buffer.from(string)
const stringBase64 = stringBuffer.toString('base64')

// will output: "dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0"
```

## decoding from base64 to a unicode string
```javascript
const base64String = 'dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0'
const base64Buffer = Buffer.from(base64String, 'base64')
const string =  base64Buffer.toString()

// will output: "this string will be converted to base64"
```
## What is the Buffer API anyway?
The `Buffer` API in node is used to temporarily store data in memory for advanced uses like, buffering a video, song, or the transfer of other large data. It's what's used to convert human readable data down to the bits and bytes to transfer data in pieces rather than one large chunk.

Resources:
- [Buffering in Computer Network - Geeks for Geeks](https://www.geeksforgeeks.org/buffering-in-computer-network/)
- [Node.js Buffer documentation](https://nodejs.org/docs/latest-v15.x/api/buffer.html)

## Creating a base64 encode/decode utility

In this hands on project we will use the information above to create a simple utility that can encode a string to base64 and decode a base64 string to a unicode string.

- Initialize the project
- Install a unit test framework
- Write the utility
- Publish to npm

### Initialize the project

Let's start by creating the project folder from the terminal:
```sh
node -e "fs.mkdirSync('simple-base64-string')"
```

Navigate into your newly created project root:
```sh
cd simple-base64-string
```

Initialize the project creating a `package.json` file
```sh
npm init -y
```


### Install a unit test framework
We will use [Mocha](https://mochajs.org/) as our testing framework:
```javascript
npm install --save-dev mocha
```
We will need to update out `package.json` file so that when we execute `npm run test` that mocha will run our units tests. Add the following script:
```json
"scripts": {
    "test": "mocha"
}
```

### Write the utility

In our project, lets create a folder to store our tests
```sh
node -e "fs.mkdirSync('test')"
```
And within that folder we will create a file to hold our first tests. So let's move into the `/test` directory
```sh
cd test
```
And create a new file. We'll call this encode.js
```sh
node -e "fs.writeFileSync('encode.js', '')"
```

Open up our `encode.js` unit test file and write the test for the `encode` method
```javascript
import assert from 'assert'
import {encode} from '../index.js'

describe('String',  () => {
    describe('encode', () => {
        it('should return the string encoded as base64', () => {
            assert.strictEqual(encode('this string will be converted to base64'), 'dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0')
        })
    })
})
```
From our project root, let's created the `index.js` file that our test is expecting to get the `encode` method from
```sh
node -e "fs.writeFileSync('index.js', '')"
```

Open up the newly created `index.js` file, and write our `encode` method to satisfy the test:
```javascript
export const encode = (string) => {
    const encodingBuffer = Buffer.from(string)
    return encodingBuffer.toString('base64')
}
```

We can run `npm run test` to verify that the test is passing.

Next, let's extend our unit tests file to include the test for the `decode` method
```javascript
import assert from 'assert'
import {encode, decode} from '../index.js'

describe('String',  () => {
    describe('encode', () => {
        it('should return the string encoded as base64', () => {
            assert.strictEqual(encode('this string will be converted to base64'), 'dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0')
        })
    })
    describe('decode', () => {
        it('should return the base64 string decoded to a human readable string', () => {
            assert.strictEqual(decode('dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0'), 'this string will be converted to base64')
        })
    })
})
```

Write our `decode` method in our `index.js` file to satisfy the new test:
```javascript
export const decode = (base64) => {
    const decodingBuffer = Buffer.from(base64, 'base64')
    return decodingBuffer.toString()
}
```

And let's double check our results with `npm run test`.

### Publish to npm
If you haven't already created an NPM account, do so now... [NPM Signup](https://www.npmjs.com/signup)

Once you have signed up and verified your account, log into to NPM from your terminal
```javascript
npm login
```
Once logged in, we can now publish our new package:
```javascript
npm publish
```


## Example Usage
Now we can install this utility in our other projects and use it as needed! See the below example of using it to encode credentials for an API 

```javascript
import {encode} from 'base64-string-lite'

const user = 'nodely'
const pass = 'N0d3!sC007'
const authString = `${user}:${pass}`

//example api call that requires Basic auth
fetch('https://example.com', {
    'method': 'GET',
    'headers': {
        'Authorization': `Basic ${encode(authString)}`
    }
})
.then(res=>res.json())
.then(data=>console.log(data))
```

## Project Summary

This project's focus was to introduce you to the Buffer API offered by node. As well as the elements of creating and publishing a package to NPM. The specific different elements we covered:
- Buffer API
- Initializing a project
- Unit Testing - using Mocha and Node's `assert` library
- Publishing to NPM

___

*For more Node.js articles, checkout [Node.js Hands On](/posts/node-js-hands-on)*