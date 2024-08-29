sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(projectile)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let projectile = 0
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    .................fffffffff......
    ...............ffeeeeeeeedff....
    ..............feeeffffffffedf...
    .............feedfeeeeeeeefeef..
    .............fedfeeeffffedfeef..
    ............feefeedfeeeeffefeef.
    ............fefdefeeffedeefefef.
    ............ffeefeffefffeefefef.
    .ff......ff.feefefeefeeefefefdf.
    f22f....f2f.feefefefeedefefefef.
    f2f.....ff..feefdfeefeeefefefef.
    .f......f...fedfefeeefeffefefef.
    .f......f...feffeefdeffeeefefef.
    .f.....f....feefeeefeeeeffefeef.
    ..f...f......feefeefffffeefeef..
    ..f...f......feeefedeeeeefedef..
    ..f..f........fedefffffffeeef...
    .fffff.........ffeeeeedeeeff....
    f77777f........fffffffffff......
    f77775ffff...ff77777777777f.....
    f757777777fff77777777757757ff...
    f7777777577775777775777777777ff.
    f777577777777777577777777757775f
    .fffffffffffffffffffffffffffffff
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
scene.setBackgroundColor(13)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(1000, function () {
    projectile = 0
    projectile.setPosition(0, randint(0, 120))
})
