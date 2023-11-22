/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Nov 2023
 * This program ...
*/

// setup
let distanceToObject: number = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)


// loop forever
while (true) {
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  
  if (input.buttonIsPressed(Button.A) == true) {
    // turn the motor 180 degrees
    basic.showIcon(IconNames.Yes)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
    basic.showIcon(IconNames.Happy)
  }

  if (input.buttonIsPressed(Button.B) == true) {
    // move car forwards and backwards
    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
    basic.pause(500)
    robotbit.StpCarMove(-10, 48)
    basic.showIcon(IconNames.Happy)

      if (distanceToObject < 10)
        robotbit.StpCarMove(0, 48)
        basic.pause(100)
      robotbit.StpCarMove(-10, 48)
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
      robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
  }
}
