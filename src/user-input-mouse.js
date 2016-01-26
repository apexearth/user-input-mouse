var util         = require("util")
var mouse        = require("mouse-events")
var EventEmitter = require("events").EventEmitter;

var browser = require("./browser.js")

module.exports            = mouseInput
browser.window.mouseInput = mouseInput

function mouseInput(target) {
    return new MouseInput(mouse(target))
}

function MouseInput(input) {
    var that = this;
    EventEmitter.call(this, input)
    this._input = input

    this._input.on('mousemove', handleMouseEvent.bind(this, 'mousemove'))
    this._input.on('mousedown', handleMouseEvent.bind(this, 'mousedown'))
    this._input.on('mouseup', handleMouseEvent.bind(this, 'mouseup'))
    this._input.on('wheel', handleWheelEvent);

    function handleMouseEvent(name, e) {
        that.x = e.clientX;
        that.y = e.clientY;

        if (e.button >= 0) {
            if (name == 'mousedown')
                that["mouse" + e.button] = 1;
            if (name == 'mouseup')
                that["mouse" + e.button] = 0;
        }
    }

    function handleWheelEvent(e) {
        that.wheel = e.deltaY;
    }

    this.clear = clear
    function clear() {
        that.wheel = 0;
        for (var key in that) {
            if (key.substring(0, 5) == "mouse")
                that[key] = 0
        }
    }
}
util.inherits(MouseInput, EventEmitter)
