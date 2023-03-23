radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(receivedNumber)
    group = receivedNumber
    group += 1
    radio.setGroup(group)
    basic.pause(1000)
    radio.sendNumber(group)
    basic.pause(1000)
    radio.sendString(密碼)
})
input.onButtonPressed(Button.AB, function () {
    密碼 = "abc"
    group += 1
    radio.setGroup(group)
    basic.showNumber(group)
    basic.showString(密碼)
    radio.sendNumber(group)
    radio.sendString(密碼)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    basic.showString(receivedString)
    密碼 = receivedString
})
let 密碼 = ""
let group = 0
radio.setGroup(4)
group = 99
basic.showNumber(4)
basic.forever(function () {
	
})
