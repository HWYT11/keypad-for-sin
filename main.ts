input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showNumber(
    2,
    2,
    Math.sin(smarttools.stringToInt(mypass)),
    1
    )
    mypass = ""
    basic.pause(2000)
    OLED12864_I2C.clear()
})
let myinput = ""
let mypass = ""
OLED12864_I2C.init(60)
basic.forever(function () {
    myinput = keypad.getKeyString()
    if (myinput != "") {
        mypass += myinput
        basic.showString(myinput)
        OLED12864_I2C.showString(
        3,
        1,
        mypass,
        1
        )
        basic.clearScreen()
    }
})
basic.forever(function () {
    keypad.setKeyPad4(
    DigitalPin.P8,
    DigitalPin.P12,
    DigitalPin.P13,
    DigitalPin.P14,
    DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    DigitalPin.P11
    )
})
