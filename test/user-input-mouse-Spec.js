var expect     = require("expect")
var mouseInput = require("../src/user-input-mouse.js")

describe("user-input-mouse.js", function () {

    it("has default members", function () {
        var input = mouseInput()
        expect(input.values).toExist()
        expect(input.input).toExist()
    })

    it("reacts properly to mouse events", function () {
        var mouse      = mouseInput()
        var innerInput = mouse.input
        innerInput.emit("mousemove", {
            clientX: 3,
            clientY: 4,
            button:  0
        })
        expect(mouse.x).toEqual(3)
        expect(mouse.y).toEqual(4)

        innerInput.emit("mousedown", {
            clientX: 7,
            clientY: 8,
            button:  1
        })
        expect(mouse.x).toEqual(7)
        expect(mouse.y).toEqual(8)

        expect(mouse.mouse1).toEqual(1)
        innerInput.emit("mouseup", {
            clientX: 3,
            clientY: 4,
            button:  1
        })
        expect(mouse.x).toEqual(3)
        expect(mouse.y).toEqual(4)
        expect(mouse.mouse1).toEqual(0)

        innerInput.emit("wheel", {
            deltaY: 1.5
        })
        expect(mouse.wheel).toEqual(1.5)

        innerInput.emit("mousedown", {
            clientX: 7,
            clientY: 8,
            button:  1
        })
        expect(mouse.x).toEqual(7)
        expect(mouse.y).toEqual(8)
        expect(mouse.mouse1).toEqual(1)
        expect(mouse.wheel).toEqual(1.5)    // Shows value of last wheel event.

        mouse.clear()                       // Clears wheel & button values.
        expect(mouse.x).toEqual(7)
        expect(mouse.y).toEqual(8)
        expect(mouse.mouse1).toEqual(0)
        expect(mouse.wheel).toEqual(0)

    })

})