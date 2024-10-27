=metadata=
title = PopupJS: Best Practices
author = AlphaBrate
date = 1 Oct 2024
=metadata=

## Page Styling

While styling your page, it is recommended not to add `padding` or `margin` to the `body` or `html` elements. Make sure your page is at least `100vh` and `100vw`.

PopupJS has a built-in function that 'locks' the page when a popup is displayed. You can also test your page with the following code:

```js
pujs.lockscreen(); // Lock the screen, no lock() needed
pujs.lockscreen.unlock();
```

## CSS Naming

Avoid directly modifying the element styles on your page without any other class or id. This may cause conflicts with PopupJS.
For example, avoid using `button {}` but use `button.myButton {}` instead. Here is the list of elements that you should avoid modifying directly without a class or id:

```
button
input
div
span
```

## Customization

You can customize the appearance of alerts, popups, and pull-outs by modifying the CSS styles in the `popup.css` file or attaching a new style file. You can also change the icons for using in the alerts by replacing the SVG files in the `icons` folder.

If you downloaded the library, and not willing to use the popup.css filename, make sure you change `noPuJSCSSCheck` to `true` before initializing the library.

```js
noPuJSCSSCheck = true;
```

You may customize the height of a pull-out by adding 'height' in to the configuration object.

```js
pujs.pullOut('Hello World', false, { height: '50%' });
```

## Initialization

While PopupJS is designed to be easy to use, it is recommended to initialize the library after the page has loaded to ensure that all elements are available. You will have to set the `icons_path` before initializing the library or using any of the functions or there will be an error.

```js
pujs.setup.icons_path = 'path/to/icons';
pujs.setup.init();
```

## Callbacks

> Callbacks for functions that do not support callbacks by default.

FOR Versions before 1.1.1:

It is recommended to simply set a timeout for the section that requires those popups' elements.

They may be commonly used in pull-outs for adding event listeners to the elements inside the pull-out.

DO NOT:

```js
pujs.pullOut('<div id="myPullOutText">Hello World</div>');
document.getElementById('myPullOutText').addEventListener('click', () => { });
```

Instead, use:

```js
setTimeout(() => {
    document.getElementById('myPullOutText').addEventListener('click', () => { });
}, {>=1});
```

FOR Versions after 1.1.1:

You can use the `.then(el)` method to add event listeners to the elements inside the pull-out.

```js
pujs.pullOut('<div id="myPullOutText">Hello World</div>')
.then(el => {
    el.querySelector('#myPullOutText').addEventListener('click', () => { });
});
```

## Close of Pull-Outs

Our pull-outs are designed to be closed by swiping them away or clicking the empty space. You can add methods to close the pull-out by JavaScript.

```js
pujs.pullOut.close(id?); // ? is optional
```

While sometimes, there may be some elements that are shown over the pull-out and you don't want the pull-out to be closed when they are clicked. You can add the `puJS-donotclose` class to those elements.

```html
<div class="puJS-donotclose">This element will not close the pull-out when clicked.</div>
```