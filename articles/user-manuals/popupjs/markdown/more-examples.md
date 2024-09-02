=metadata=
title = PopupJS: More Examples
author = AlphaBrate
date = 30 Aug 2024
=metadata=

## Overview
PopupJs is a lightweight JavaScript library that provides a simple way to create alerts for your web application. It's easy to use and customize, and works well with modern web browsers.

## Example 1

> This example demonstrates a document editor that uses PopupJS to display alerts and popups.

<a target="_blank" href="https://alb-cdn.web.app/popupjs/examples/document-editor/">AlphaBrate CDN</a>
or
<a target="_blank" href="https://codepen.io/AlphaBrate/pen/bGPxMMx">CodePen</a>

### Overview

![Overview Image of Example Editor](assets/editor-overview.png?border-radius=11px&center=true)

> This example demonstrates all three types of notifications: alerts, popups, and pull-outs. Nothing is saved, and the editor is reset on page reload.
> 
> The editor is a simple text area with three functional buttons: `Save`, `Share`, and `Reset`. The `Save` button displays an alert, the `Share` button displays a pull-out, and the `Reset` button displays a popup.
>
> In this example, a simple jQuery-like function is used to select elements on querySelector.

```javascript
const $ = (s, a = false) => {
    return a ? document.querySelectorAll(s) : document.querySelector(s);
}
```

> To emulate a server response, we created a randomTimeMs function that returns a random time in milliseconds between the specified range. This random time is used to simulate a server response delay and set the loader timeout.

```javascript
function randomTimeMs(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

> To toggle the loader, we created a simple function that shows or hides the loader based on the provided argument.

```javascript
function toggleLoader(start = true) {
    if (!start) {
        $('.loader').classList.add('hidden');
    } else {
        $('.loader').classList.remove('hidden');
    }
}
```

### Setup

1. Create the web page and style it as needed.
2. Include the PopupJS library CSS and JavaScript files as shown below:

```html
<head>
    <link rel="stylesheet" href="https://alb-cdn.web.app/popupjs/pu.min.css">
</head>
<body>
    <script src="https://alb-cdn.web.app/popupjs/pu.min.js"></script>
</body>
```

3. Set the icon path and initialize PopupJS in your JavaScript file:

```javascript
pujs.setup.icons_path = 'https://alphabrate.github.io/popupjs/code/showcase/icons/';
pujs.setup.init();
```

### Save Button (Alert)

In this example:

```javascript
pujs.alert('Document saved successfully!', 'success');
```

Full code with event listener:

```javascript
$('#save').addEventListener('click', function () {
    toggleLoader();
    setTimeout(() => {
        toggleLoader(false);
        pujs.alert('Document saved successfully!', 'success'); // pujs
    }, randomTimeMs(1000, 3000));
});
```

### Share Button (Pull-Out)

In this example:

```javascript
pujs.pullOut(`[Unshown HTML Content]`).then(() => {
    [Unshown JavaScript Code]
});
```

Full code with event listener:

```javascript
$('#share').addEventListener('click', function () {
    toggleLoader();
    setTimeout(() => {
        toggleLoader(false);
        pujs.pullOut(`
            <h1>Share this Document</h1>
            <p>Share "<span id="project-title"></span>"</p>
            <div class="copy">
                <input type="text" value="https://example.com/your-document" readonly>
                <button class="button" onclick="pujs.alert('Failed (Sample)')">Copy</button>
            </div>
            `).then(() => {
                $('#project-title').innerText = $('textarea#title.title').value;
            }
        );
    }, randomTimeMs(1000, 2000));
});
```

### Reset Button (Popup)

In this example:

```javascript
pujs.popup(
    'Reset Document',        // Title
    '[Unshown Text]',        // Message
    [
        {                       // Buttons
            'text': 'Reset',
            'color': 'var(--red)',
            'callback': (e) => {
                if (e[0] == 'reset') {
                    // e is an array of input values
                    [Unshown JavaScript Code]
                } else {
                    [Unshown JavaScript Code]
                }
            }
        },
        {                       // Cancel Button
            'text': 'Cancel',
            'callback': () => { }
        }
    ],
    'horiz',                 // Button Layout
    [{                       // Inputs
        'placeholder': 'Type "reset"',
    }]
);
```

Full code with event listener:

```javascript
$('#reset').addEventListener('click', function () {
    pujs.popup(
        'Reset Document',
        'Are you sure you want to reset?<br>If yes, type "reset" in the input field below and click "Reset".',
        [{
            'text': 'Reset',
            'color': 'var(--red)',
            'callback': (e) => {
                if (e[0] == 'reset') {
                    $('textarea#title.title').value = 'Your Title Here';
                    $('textarea#content').value = '';
                    pujs.alert('Document reset successfully!', 'success');
                } else {
                    pujs.alert('Document reset failed.', 'error');
                }
            }
        },
        {
            'text': 'Cancel',
            'callback': () => { }
        }],
        'horiz',
        [{
            'placeholder': 'Type "reset"',
        }]
    );
});
```

### Conclusion

This example demonstrates how to use PopupJS to create alerts, popups, and pull-outs in a document editor. The example is simple and easy to understand, making it a great starting point for integrating PopupJS into your web application.

> This example is first built using the PopupJS in Version 1.1.0.
>
> Updated on: 2/9/2024 to Version 1.1.1


<br>
<hr>

<h2 class="center">Continue Reading</h2>

<a href="?article=project" class="center no-margin"><button>About This Project</button></a>

<br>

<div class="space-break dots" data-height="4"></div>

## In this Manual

- [Quick Start](?article=index)
- [More Examples](?article=more-examples) ◀
- [About This Project](?article=project)