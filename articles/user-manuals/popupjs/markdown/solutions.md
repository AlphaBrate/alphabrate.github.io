=metadata=
title = PopupJS: Solutions
author = AlphaBrate
date = 1 Oct 2024
=metadata=

## Overview
PopupJs is a lightweight JavaScript library that provides a simple way to create alerts for your web application. It's easy to use and customize, and works well with modern web browsers.

## Warnings

### CSS_NOT_INCLUDED

**Description**: The CSS file for PopupJS is not included in your HTML document.

**Solution**: Include the CSS file in the `<head>` section of your HTML document.

```html
<head>
    <link rel="stylesheet" href="popup.css">
</head>
```

Make sure you use one of the following filenames:
- `popup.css`
- `pu.min.css`
- `pu.css`
- `pu.min.css`

or turn `noPuJSCSSCheck` to `true` before the `popup.js` script.

```html
<body>
    <script>
        const noPuJSCSSCheck = true;
    </script>
    <script src="popup.js"></script>
</body>
```



## Errors

