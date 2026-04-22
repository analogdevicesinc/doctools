<!-- lastmod 2023-08-03 -->
## TMC2300-THERMO-BOB

Document Revision V1.00 • 2019-Nov-14

## Module with Motor

<!-- image -->

## Features and additional Resources

- TMC2300 low voltage stepper motor driver
- Battery Supply via 2xAA cells via JST S2B-PHK-S connector (typically +3V)
- Onboard Stepper Motor Goot 25BYJ12-60 1.5V/1A
- Interface to Microchip PIC-IoT Board
- StealthChop2™silent motor operation
- Board size 1.0" x 2.5"
- 2x8 pin 0.1" header pin holes
- Link to additional information and IC data sheet
- Basic software project based on MPLAB X IDE can be provided.

## Pin List

| Left     | Signal                      | Right   | Signal                     |
|----------|-----------------------------|---------|----------------------------|
| +VBAT_FB | Supply feedback to MCU ADC  | n.c.    | not used                   |
| RESETn   | not used                    | DIAG    | diagnosis signal to MCU    |
| STEP     | Step signal to TMC2300      | UART_RX | UART receive line from MCU |
| DIR      | Direction signal to TMC2300 | UART_TX | UART transmit line to MCU  |
| STDBY    | Standby control to TMC2300  | n.c.    | not used                   |
| EN       | Enable control to TMC2300   | n.c     | not used                   |
| +3.3V    | VCCIO                       | +5V     | not used                   |
| GND      | Ground                      | GND     | Ground                     |

<!-- image -->

## Board Top View without Motor

<!-- image -->

<!-- image -->

## Schematics

<!-- image -->

<!-- image -->

+VBATD