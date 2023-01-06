let richtung = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    richtung += -1
    if (richtung < 0) {
        richtung = 3
    }
})
input.onButtonPressed(Button.B, function () {
    richtung += 1
    if (richtung > 3) {
        richtung = 0
    }
})
basic.forever(function () {
    if (richtung == 0) {
        x += 1
    }
    if (richtung == 1) {
        y += 1
    }
    if (richtung == 2) {
        x += -1
    }
    if (richtung == 3) {
        y += -1
    }
    if (x < 0) {
        x = 4
    }
    if (y < 0) {
        y = 4
    }
    if (x > 4) {
        x = 0
    }
    if (y > 4) {
        y = 0
    }
    led.toggle(x, y)
    basic.pause(500)
})
