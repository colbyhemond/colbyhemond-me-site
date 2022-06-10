---
title: Stopping your mom from stealing your photos
date: '2020-07-04T20:53:39.258Z'
summary: A couple ways you can help prevent your mom and family members from
  stealing your photos.
---
While this is not going to completely stop your images from being ripped off of your website, it will help prevent someone from using the common ways they would usually get an image save to their computer. This article will go over the two common ways people save images from a website to their personal computer, and how to prevent it from occurring:

1. Right click and copy/save
2. Drag and drop

## Right Click and Copy/Save

When you right-click on an image, a context menu appears giving you several options. One of those options being "Save Image As", allowing the user to save a copy of that image to their local computer. Another option being "Copy Image", which allows the user to copy the image and then paste it in a word document. In order to prevent someone from having access to the right-click menu with these options, you can add `oncontextmenu="return false"` to the HTML element that you want to disable the menu from.

Adding it directly to the `<img>` tag will limit the disabled context menu to only that image.

`<img src="..." alt="..." oncontextmenu="return false"/>`

If you have a more sophisticated component on your web page that may contain multiple images, you can also add it to that parent element so that the property is inherited to each `<img>` tag that is a child of that element.

```html
<div oncontextmenu="return false">
    <img src="..." alt="..." />
    <img src="..." alt="..." />
    <img src="..." alt="..." />
</div>`
```

Keep in mind, this will also not display for any child elements, not just images. So if there is something the user would need access to the context menu for, you would need to to specify `oncontextmenu="return false"` for only the child elements you need it disabled for.

## Drag and Drop

It is just as simple to click and hold on the image, and drag it to the desktop or folder.

In order to prevent this action add the following CSS:

`img {
    pointer-events: none;
}`

Hopefully this helped you get a little closer to keeping your images secure on your website. Of course these are not a sure fire way to secure them, but it's a good start.