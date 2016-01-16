var expect     = require("expect")
var mouseInput = require("../src/user-input-mouse.js")

describe("user-input-mouse.js", function () {

    it("has default members", function () {
        var input = keyboardInput()
        expect(input.values).toExist()
        expect(input.input).toExist()
    })

})