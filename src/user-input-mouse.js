var util      = require("util")
var keyboard  = require("key-events")
var UserInput = require("user-input");

module.exports = mouseInput

function mouseInput(target) {
    return new MouseInput(keyboard(target))
}

function MouseInput(input) {
    var that = this;
    UserInput.call(this, input)

    this.input.on('mousemove', handleMouseEvent)
    this.input.on('mousedown', handleMouseEvent)
    this.input.on('mouseup', handleMouseEvent)

    function handleMouseEvent(e) {
        that.values.x = e.clientX;
        that.values.y = e.clientY;
    }
}
util.inherits(MouseInput, UserInput)