// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140010000e0707070707070707060e07070707070707070605140f0f0f0f0f0f0b0105101010101010101001050f0f0f0f0f0f0f0f0105101010101010101001050f0f0f0f0f0f0f0f0105101010100b10101001050f0f0f0f0f0f0f0f0105101010101010101001050f0f0f0f0f150f0f0105101010101010101001050f0f0f0f0f0f0f0d010510101010101010100104030303030303030302040303030303030303020e0707070713070707060e07070707070707070605140909090909090b01050d11111111111111010509090909090a09090105111111111111111101050909090909090909010811111111111111110105090909090909090901051111110b111111110105090909090909090901051111111111111111010512090909090909090108111111111111110c010403030303030303030204030303030303030302`, img`
22222222222222222222
2.......222........2
2........22........2
2........22........2
2........22........2
2........22........2
2........22........2
22222222222222222222
22222222222222222222
2........22........2
2........22........2
2........22........2
2........22........2
2........22........2
2........22........2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3,sprites.dungeon.chestClosed,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLight2,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.greenSwitchUp,sprites.dungeon.stairLarge,sprites.dungeon.floorLight3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
