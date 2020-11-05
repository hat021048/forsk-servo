input.onButtonPressed(Button.A, function () {
    Pos = 180
})
input.onButtonPressed(Button.B, function () {
    Pos = 0
})
let Pos = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    180
    ))
})
