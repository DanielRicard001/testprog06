let IntensiteLumineuseMaximale = 0
let Position = 0
let PosOptimale = 0
/**
 * TEST #6
 * 
 * Le dispositif balaie l'horizon. Pour chaque micro déplacement, fait la lecture de la luminosité pour trouver la position où la valeur est maximale.  Se positionne à la valeur maximale trouver.
 */
basic.forever(function () {
    for (let index = 0; index < 180; index++) {
        Position = Position + 1
        servos.P0.setAngle(Position)
        basic.pause(10)
        if (input.lightLevel() > IntensiteLumineuseMaximale) {
            IntensiteLumineuseMaximale = input.lightLevel()
            PosOptimale = Position
        }
    }
    servos.P0.setAngle(PosOptimale)
    basic.pause(100)
    servos.P0.stop()
    basic.showString("" + (IntensiteLumineuseMaximale))
    basic.pause(5000)
    Position = 0
    IntensiteLumineuseMaximale = 0
})
