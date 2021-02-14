scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.setBackgroundColor(0)
    info.changeLifeBy(-3)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.startCountdown(20)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    scene.setBackgroundColor(15)
    info.changeLifeBy(-10)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(20)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 0), assets.tile`myTile2`)
    tiles.setTileAt(tiles.getTileLocation(2, 0), assets.tile`myTile1`)
    if (ladder1 == 0) {
        tiles.setTileAt(tiles.getTileLocation(0, 2), assets.tile`myTile`)
        ladder1 = 1
    }
    if (ladder2 == 0) {
        tiles.setTileAt(tiles.getTileLocation(3, 0), assets.tile`myTile3`)
        ladder2 += 1
    }
    if (ladder3 == 0) {
        tiles.setTileAt(tiles.getTileLocation(1, 0), assets.tile`myTile2`)
        ladder3 = 1
    }
    if (ladder4 == 0) {
        tiles.setTileAt(tiles.getTileLocation(0, 1), assets.tile`myTile4`)
        ladder4 = 1
    }
    if (ladder5 == 0) {
        tiles.setTileAt(tiles.getTileLocation(4, 1), assets.tile`myTile5`)
        ladder5 = 1
    }
    if (ladder6 == 0) {
        tiles.setTileAt(tiles.getTileLocation(4, 0), assets.tile`myTile6`)
        ladder6 = 1
    }
    if (ladder7 == 0) {
        tiles.setTileAt(tiles.getTileLocation(4, 2), assets.tile`myTile7`)
        ladder7 = 1
    }
})
let ladder7 = 0
let ladder6 = 0
let ladder5 = 0
let ladder4 = 0
let ladder3 = 0
let ladder2 = 0
let ladder1 = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
ladder1 = 0
info.setLife(20)
