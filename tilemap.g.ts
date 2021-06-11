// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202010303030303030303030304020202020902020202020202020202050202020209020202020202020202020502020202090202020202020202020205020202020902020202020202020202050202020209020202020202020202020502020202090202020202020202020205020202020902020202020202020202050202020209020202020202020202020502020202090202020202020202020205020202020902020202020202020202050202020208070707070707070707070602020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
