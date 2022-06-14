function fAA () {
    pins.servoWritePin(AnalogPin.P8, aa)
    pins.servoWritePin(AnalogPin.P12, aa)
    pins.servoWritePin(AnalogPin.P16, aa)
    led.plotBarGraph(
    aa,
    180
    )
}
input.onButtonPressed(Button.A, function () {
    if (aa == 0) {
    	
    } else {
        aa = aa - 30
        fAA()
    }
})
input.onButtonPressed(Button.AB, function () {
    aa = 90
    fAA()
})
input.onButtonPressed(Button.B, function () {
    if (aa == 180) {
    	
    } else {
        aa = aa + 30
        fAA()
    }
})
let aa = 0
aa = 90
basic.showString("Ps 826")
