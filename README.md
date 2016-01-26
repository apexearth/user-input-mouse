# user-input-mouse

![](https://travis-ci.org/apexearth/user-input-mouse.svg)
![](http://img.shields.io/npm/v/user-input-mouse.svg?style=flat)
![](http://img.shields.io/npm/dm/user-input-mouse.svg?style=flat)
![](http://img.shields.io/npm/l/user-input-mouse.svg?style=flat)

Base class for creating user inputs.

## Usage

[![NPM](https://nodei.co/npm/user-input-mouse.png)](https://nodei.co/npm/user-input-mouse/)

### Examples

    var mouse = window.mouseInput(document)

When the user presses the left mouse button, `mouse` would contain the following.

    {
        "x": 0,
        "y": 0,
        "button0": 1
    }

When the user releases the left mouse button, and then presses the right mouse button, `mouse` would contain the following.

    {
        "x": 0,
        "y": 0,
        "button0": 0,
        "button2": 1
    }

## Tests

- Mocha
    - Test functionality in Node.js
    - `npm test`
- User Test
    - Test functionality in browser.
    - `npm user-test`