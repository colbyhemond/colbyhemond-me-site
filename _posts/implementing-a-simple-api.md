---
title: Implementing a simple API
status: published
date: '2020-08-18T21:03:03.008Z'
summary: Implementing APIs doesn't have to be scary. Especially when you only
  GET data from them and not POST, PUT, or PATCH. Finding the right API to get
  started with might be the most challenging. Luckily there are some simple
  options out there. Like the Chuck Norris joke API , which ...
---
Implementing APIs doesn't have to be scary. Especially when you only GET data from them and not POST, PUT, or PATCH. Finding the right API to get started with might be the most challenging. Luckily there are some simple options out there. Like the [Chuck Norris joke API](https://api.chucknorris.io/), which I will be showing how I was able to quickly implement it.

There will be no frameworks or even linking to external script pages in this walk through, everything can be done right on your index.html document. All you need to know are HTML, CSS, and some fundamentals of JavaScript.

I will be going over the following steps to add the API:

1. Reviewing the API and documentation
2. Implementing the simplest version of the API
3. Making it user friendly by adding a button
4. Implementing a dynamic API call

## Reviewing the API and documentation

The first thing to do when beginning to implement an API is to review the documentation to gain an understanding of how it should be implemented and what functionalities it offers. It's common for APIs to require a token or other authorization techniques in order to make calls to the API. The one that we will be using is completely free and read only, so there is no token or authorization involved which helps simplify what we have to do.

Head over to https://api.chucknorris.io/ to review their documentation. (I have also provided screen shots so that it is not required to navigate to website)

At the very start of the documentation they show an example of how to call the API in its most simplest form and an example of the response that will be returned if the call is successful.



You can also test out this call quickly by pasting the URL in your address bar. Give it a try:

<https://api.chucknorris.io/jokes/random>

There's no need to know the complete functionality of the API at this point, so we can move along to the next step in the process, implementing the simplest version of the API.

## Implementing the simplest version of the API

In order to get the API hooked up we need to write a little HTML. In addition to your standard boiler plate tags like `<!DOCTYPE>`, `<html>`, `<body>`... all you need to add is an element where you want to place your API output. In our case, we will only be using the "value" from the API response so I added the following HTML:

```html
<div class="quote-box">
  <h3 id="quote"></h3>
</div>
```

We will place the value from the API response in `<h3 id="quote"></h3>` and then `<div class="quote-box">...</div>` just acts as a container for styling purposes.

Now that we have a place to put the data from our API call, let's write some JavaScript to actually call the API within our webpage and connect the response to our HTML.

```javascript
let quote = document.querySelector('#quote')
```

The above code first gets the `<h3 id="quote"></h3>` element using `querySelector()`

Next we call the API using `fetch()`, which returns a Promise object allowing us access to the `.then()` function

In the first `.then()` we pass in the response from the `fetch()` and call the `.json()` function to convert the data to JSON format

In the second `.then()` we pass in the newly formatted JSON data and assign the "value" key to the `.innerHTML` property of our `quote` variable

**That's It! The API is now set up so that when you load your page, a new Chuck Norris joke will display each time.**

If you haven't noticed already, it can get annoying pretty quickly, having to refresh the page in order to get a new joke. In the next step we will add a button to the page so that a user can simply click the button to get a new joke rather than having to refresh the page.

## Making it user friendly by adding a button

In order to have our page get a new joke without having to refresh the page, we first need to add a button element to our HTML:

`<button id="new-chuck">Mr. Norris</button>`

Now let's write some JavaScript to hook up our API call to the button. All we will need to do is wrap our already written API call within a function, so that we can call that function from the button's `onClick=""` attribute.

Here is the new Javascript:



```javascript
const getChuck = function () {
let quote = document.querySelector('#quote');
  .then(response => response.json())
  .then(data => {
    quote.innerHTML = data.value
  })
  .catch()
}

getChuck();
```

We can see our original code is now just wrapped with `const getChuck = function () { ... }` then we call the function at the very end of our script so that a joke is loaded during the initial page load.

Now that we have created the function, add it to the button's `onClick="getChuck()"` attribute so that it will load a new joke when the button is clicked.

Great! Now the last thing we are going to do is, utilize more of the API and create a more dynamic API call.

## Implementing a dynamic API call

Let's kick things up a notch here. We can already get a random joke by calling a simple API and return it to the screen. And we have made it more user friendly so that the user can just click the button when they want to see a new joke. But let's see if there is some other functionality within the API to give the user more control over what types of jokes that can get.

Heading back over to the API documentation we see that they offer an API call that we can control which category the joke comes from:



But how do we know what categories are available? Well, they supplied us with a solution for that as well:


With these two pieces, we will be able to add a drop down list next to our button, fill the dropdown values with all of the categories, then call the API with the specific category that is selected. Here is the HTML for the dropdown list:

`<select id="chuck-categories"></select>`

And our new JavaScript:



```javascript
// a function that sets the quote text to generic wording so that the user knows 
// something is happening when the page is loading and after they click the button
const loadingText = function () {
let quote = document.querySelector('#quote');
quote.innerHTML = 'Wait for it...';
}
```
```javascript
// a function to set the quote text from the API response
const setQuote = function (text) {
let quote = document.querySelector('#quote');
quote.innerHTML = text;
}
```
```javascript
// a function to set the values of the categories drop down from the categories 
//returned from the API
const setChuckCategories = function (categoriesArray) {
let categoriesSelect = document.querySelector('#chuck-categories');
categoriesSelect.innerHTML = categoriesArray.map(category => {
`<option value='${category}'>${category}</option>`);
}
}
```
```javascript
// a function that returns the category that the user selected
const getSelectedChuckCategory = function () {
let category = document.querySelector('#chuck-categories');
  if (category.options[category.selectedIndex] !== undefined) {
    return category.options[category.selectedIndex].value;
  } else {
    return 'all'
  }
}
```
```javascript
// a function to get a new Chuck Norris joke
const getChuck = function (category) {
    loadingText();
    category = getSelectedChuckCategory();
    if (category == 'all') {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setQuote(data.value))
            .catch()
    } else {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(data => setQuote(data.value))
            .catch()
    }
}
```

// a function to get all of the possible categories we can use in the API call

```javascript
const getChuckCategories = function () {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            data.unshift('all') //adds an 'all' option to the beginning of the array
            setChuckCategories(data)
        })
        .catch()
}
```

// get a joke when we load the page

`getChuck();`

//get the categories when we load the page

`getChuckCategories();`

The most important pieces for implementing the categories is: 
- `getChuckCategories()`
- `setChuckCategories()`
- `getSelectedChuckCategory()`
- `getChuck()`

`getChuckCategories()` calls the API to return an array of all the possible categories we can use. Also notice the use of `unshift()` in order to add a default 'all' value to the beginning of the array to allow us to call the original API call we set up.

`setChuckCategories()` actually adds the `<option>` elements into our `<select>` element with the use of `querySelector()` and `map()`.

`getSelectedChuckCategory()` returns the specific category that the user has selected. There is also a condition to just return all in the event that the categories haven't been loaded yet.

`getChuck()`we have modified to pass in a category as a parameter, we call the`loadingText()` function so the use knows something is happening, we get the selected category, then determine if we should call the initial API call for all categories, or call the category specific API call

After adding this, you should be all set to be able to have your user select the specific category that they want! See that wasn't so bad after all!