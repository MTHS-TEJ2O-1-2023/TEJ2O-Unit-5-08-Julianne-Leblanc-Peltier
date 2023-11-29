/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Nov 2023
 * This program ...
*/

let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    basic.clearScreen()
    while (true) {
      // find distance from sonar
      distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
      )
      // basic.showNumber(distanceToObject)
      // basic.pause(500)
      // basic.showIcon(IconNames.Happy)
      if (distanceToObject < 10) {
        robotbit.StpCarMove(-10, 48)
        basic.pause(500)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        basic.pause(500)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)
        } else {
          // move forward
          robotbit.StpCarMove(10, 48)
        }
    }
  }
}
