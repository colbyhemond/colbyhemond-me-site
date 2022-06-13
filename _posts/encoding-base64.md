---
title: Encoding Base64 with Node.js
subtitle: 
status: published
date: '2022-06-12T12:00:00.000Z'
tags: [nodejs, buffer, npm]
summary: You can encode a string to base64 in Node.js without the use of an ecosystem library. Node comes with "batteries included" and allows us to encode to base64 using a core API
---

- Encode a string to base64
- Create a couple test cases
- Publish the utility to npm

## encoding a string to base64
```javascript
const string = 'this string will be converted to base64'
const stringBuffer = Buffer.from(string)
const stringBase64 = stringBuffer.toString('base64')
// will output: dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0
```

## decoding from base64 to a readable string
```javascript
const base64String = 'dGhpcyBzdHJpbmcgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYmFzZTY0'
const base64Buffer = Buffer.from(base64String, 'base64')
const string =  decodingBuffer.toString()
// will output: this string will be converted to base64
```
## What is the Buffer API anyway?
The `Buffer` API in node is used to temporarily store data in memory for advanced uses like, buffering a video, song, or other large data between two devices. It's what's used to convert human readable data down to the bits and bytes  to transfer data in pieces rather than one large chunk.

A short explanation of buffers and types of [buffers is explained on geeks for geeks](https://www.geeksforgeeks.org/buffering-in-computer-network/)

[Node.js Buffer documentation](https://nodejs.org/docs/latest-v15.x/api/buffer.html#buffer_static_method_buffer_from_string_encoding)

We can quickly create a utility and publish this to npm so that we can use this in any of our node projects.
- mkdirSync
- npm init -y
- install mocha
- write tests
- publish to npm
- example usage

```javascript
node -e "fs.mkdirSync('node64')"
ls
cd node64
npm init -y
node -e "fs.writeFileSync('index.js', '')"
```

___

*For more Node.js articles, checkout [Node.js Hands On](/posts/node-js-hands-on)*