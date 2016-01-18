var util      = require("util")
var mouse     = require("mouse-events")
var UserInput = require("user-input")

var browser = require("./browser.js")

module.exports            = mouseInput
browser.window.mouseInput = mouseInput

function mouseInput(target) {
    return new MouseInput(mouse(target))
}

function MouseInput(input) {
    var that = this;
    UserInput.call(this, input)

    this.input.on('mousemove', handleMouseEvent.bind(this, 'mousemove'))
    this.input.on('mousedown', handleMouseEvent.bind(this, 'mousedown'))
    this.input.on('mouseup', handleMouseEvent.bind(this, 'mouseup'))
    this.input.on('wheel', handleWheelEvent);

    function handleMouseEvent(name, e) {
        that.x = e.clientX;
        that.y = e.clientY;

        if (e.button >= 0) {
            if (name == 'mousedown')
                that["button" + e.button] = 1;
            if (name == 'mouseup')
                that["button" + e.button] = 0;
        }
    }

    function handleWheelEvent(e) {
        that.wheel = e.deltaY;
    }

    this.clear = clear
    function clear() {
        that.wheel = 0;
        for (var key in that) {
            if (key.substring(0, 6) == "button")
                that[key] = 0
        }
    }
}
util.inherits(MouseInput, UserInput)
