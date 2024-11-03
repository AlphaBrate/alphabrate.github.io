=metadata=
title = PopupJS: Quick Start
author = AlphaBrate
date = 7 Jul 2024
=metadata=

## Overview
PopupJs is a lightweight JavaScript library that provides a simple way to create alerts for your web application. It's easy to use and customize, and works well with modern web browsers.


> Visit [this page](https://alphabrate.github.io/popupjs/code/showcase/) for sample.

## Features

* **Alerts**: Display customizable alert messages with icons and callbacks.
* **Popups**: Create modal popups with titles, messages, and buttons.
* **Pull-Outs**: Create pull-out notifications that can be swiped away.
* **Banners**: Create banners that can be dismissed by the user.
* **Action Sheets**: Create action sheets with multiple buttons and callbacks.

## Usage

To use PopupJS in your web application, include the following CSS and JavaScript files in your HTML document:

```html
<head>
    <link rel="stylesheet" href="./popup.css">
</head>
<body>
    <script src="./popup.js"></script>
</body>
```

You can use our cdn-hosted files:

```html
<link rel="stylesheet" href="https://alb-cdn.web.app/popupjs/pu.min.css">

<script src="https://alb-cdn.web.app/popupjs/pu.min.js"></script>
```

You can then use the `pujs` object to create alerts, popups, and pull-outs in your application.

## Customization

PopupJS provides several options for customizing the appearance and behavior of alerts, popups, pull-outs, and banners. You can modify the CSS styles and icons to fit your application's design.

### To-do

Before or after the alerts, you can add your events using `pujs.setup.todo`

```js
todo: {
    alert: {
        start: () => { },
        end: () => { }
    },
    pullOut: {
        start: () => { },
        ending: () => { /* Before the ending animation plays */ },
        end: () => { }
    },
    popup: {
        start: () => { },
        end: () => { }
    },
    lastingBanner: {
        start: () => { },
        end: () => { }
    },
    actionSheet: {
        start: () => { },
        end: () => { }
    }
},
```

## Best Practices

[Click here](?article=best-practices) to learn more about best practices for using PopupJS in your web application.

## Browser Support

PopupJS is compatible with modern web browsers, including Chrome, Firefox, Safari, and Edge.

## Copyright

© AlphaBrate 2024. Released under the APEL.

## Credit

### Design Resources (Template)

* [Apple Design Resources](https://developer.apple.com/design/resources/)
* [Google Material Design](https://material.io/design)


<br>
<hr>

<h2 class="center">Continue Reading</h2>

<a href="?article=functions" class="center no-margin"><button>Functions</button></a>

<br>

<div class="space-break dots" data-height="4"></div>

## In this Manual

- [Quick Start](?article=index) ◀
- [Functions](?article=functions) 
- [More Examples](?article=more-examples)
- [About This Project](?article=project)