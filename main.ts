input.onButtonPressed(Button.A, function () {
    radio.sendString("HI")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
