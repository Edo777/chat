var expect = require("expect");
var { generateMessage } = require("./message");


describe("generate message", () => {
    it("should generate message", () => {
        var from = "Edgar",
            text = "barev dzez";
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');;
        expect(message).toInclude({ from, text });
    });
});