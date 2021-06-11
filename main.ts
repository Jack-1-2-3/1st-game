let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
game.setDialogFrame(img`
    ..66666666666666666666..
    .6699999999999999999966.
    669991111111111111199966
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    669991111111111111199966
    .6699999999999999999966.
    ..66666666666666666666..
    `)
game.showLongText("help me find the way out of here", DialogLayout.Bottom)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
