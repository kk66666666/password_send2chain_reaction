input.onButtonPressed(Button.A, function () {
    group += 1
})
input.onButtonPressed(Button.AB, function () {
    if (group != 99) {
        group += 1
        basic.showNumber(group)
        basic.showString(密碼)
        radio.setGroup(group)
        radio.sendValue(密碼, group)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(group)
    basic.showNumber(group)
    if (group == 1) {
        密碼 = "xyz"
    }
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(value)
    basic.showString(name)
    密碼 = name
    group = value
    basic.showIcon(IconNames.Happy)
})
let 密碼 = ""
let group = 0
radio.setGroup(99)
group = 0
密碼 = "abc"
