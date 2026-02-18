input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
})
basic.showString("Hello!")
basic.forever(function () {
    music.play(music.stringPlayable("C5 C C5 C B A G F ", 140), music.PlaybackMode.UntilDone)
})
