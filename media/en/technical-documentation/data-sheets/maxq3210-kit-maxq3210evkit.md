<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAXQ3210 evaluation kit (EV kit) is a proven platform to conveniently evaluate the capabilities of the MAXQ3210 voltage regulator microcontroller. The kit contains the MAXQ3210 with pins brought out to headers, JTAG programming interface, 9V battery clip, piezoelectric horn, and pushbuttons and LEDs to control  and  display  board operation. With the included power supply, software, serial-to-JTAG interface board, and an RS-232 cable connected to a personal computer, the kit provides a completely functional system ideal for evaluating the capabilities of the MAXQ3210.

## Evaluation Kit Contents

- ♦ MAXQ3210 EV Kit Board with Processor and 3.57MHz Crystal Installed
- ♦ Serial-to-JTAG Interface Board and JTAG Cable
- ♦ MAXQ3210 Evaluation Kit CD-ROM

## Ordering Information

| PART         | DESCRIPTION                 |
|--------------|-----------------------------|
| MAXQ3210-KIT | Evaluation Kit for MAXQ3210 |

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Easily Loads Code Using Bootstrap Loader and Serial-to-JTAG Interface Board
- ♦ JTAG Interface Provides In-Application Debugging Features

Step-by-Step Execution Tracing Breakpointing by Code Address, Data Memory Address, or Register Access Data Memory View and Edit

- ♦ 9V Battery Clip for Use with MAXQ3210 Voltage Regulator
- ♦ Piezoelectric Horn with Optional Volume Adjustment Jumpers
- ♦ Evaluation Kit Board can be Powered Directly Over JTAG Interface
- ♦ Processor Clock can be run from Crystal or RC Oscillator Circuit
- ♦ Direct LED Drive from Port Pin P0.7
- ♦ 32-Step Digital Potentiometer for Experimenting with On-Board Comparator
- ♦ Pushbutton Switches for Reset and Interrupt Generation
- ♦ Prototyping Area Including +5V Rail and Ground
- ♦ Test/Expansion Header Includes All Device GPIO and Piezoelectric Driver Pins
- ♦ Board Schematics Included to Provide a Convenient Reference Design

<!-- image -->

Figure 1. MAXQ3210 Evaluation Kit Setup

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAXQ3210 Evaluation Kit

<!-- image -->

Figure 2. Serial-to-JTAG Interface

| DESIGNATION   |   QTY | DESCRIPTION                           | SUPPLIER/ PART NUMBER   |
|---------------|-------|---------------------------------------|-------------------------|
| C1, C2, C3    |     3 | 10µF, 20V tantalum capacitors         | Panasonic ECS-T1DX106R  |
| C4            |     1 | Empty capacitor footprint (0805)      | -                       |
| C5, C6        |     2 | 22pF ±10%, 10V capacitors (0805)      | Generic                 |
| C7, C8        |     2 | 100nF ±10%, 10V capacitors (0805)     | Generic                 |
| C9            |     1 | 2nF, 10V capacitor (0805)             | Generic                 |
| D1, D2, D3    |     3 | Red surface-mount LEDs                | Dialight 597-3001-1xx   |
| JU1, JU3-JU13 |    12 | 2-pin NO (1 x 2, 0.1') jumpers        | 3M 929834-02-02         |
| JU2           |     1 | 3-pin NO (1 x 3, 0.1', 2 of 3) jumper | 3M 929834-02-03         |
| J1            |     1 | 9V battery clip                       | Keystone 1294           |
| J2            |     1 | DC power jack (2mm)                   | CUI Inc. PJ-002A        |
| J3            |     1 | 2 x 5, 0.100' spaced header           | 3M 929836-02-05         |
| J4            |     1 | 2 x 20, 0.100' spaced header          | 3M 929836-02-20         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                       | SUPPLIER/ PART NUMBER   |
|---------------|-------|-----------------------------------|-------------------------|
| PT1           |     1 | Piezoelectric horn (high volume)  | CUI Inc. CEP-1172       |
| R1            |     1 | 1.2k Ω , 1/8W resistor (0805)     | Generic                 |
| R2            |     1 | 510 Ω , 1/8W resistor (0805)      | Generic                 |
| R3            |     1 | Empty resistor footprint (0805)   | -                       |
| R4, R5        |     2 | 1k Ω , 1/2W resistors (2010)      | Generic                 |
| R6            |     1 | 68k Ω , 1/8W resistor (0805)      | Generic                 |
| R7            |     1 | 470k Ω , 1/8W resistor (0805)     | Generic                 |
| R8, R9, R10   |     3 | 10k Ω , 1/8W resistors (0805)     | Generic                 |
| R11, R12, R13 |     3 | 1k Ω , 1/8W resistors (0805)      | Generic                 |
| R14           |     1 | 30k Ω , 1/8W resistor (0805)      | Generic                 |
| SW1, SW2      |     2 | SPST-NO momentary pushbutton      | Omron B3FS-1000         |
| TP1, TP2, TP3 |     3 | 1 x 2 (0.100' spaced) test points | 3M 929834-02-02         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXQ3210 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                | SUPPLIER/ PART NUMBER       |
|---------------|-------|--------------------------------------------|-----------------------------|
| U1            |     1 | MAXQ3210 voltage regulator microcontroller | MAXQ3210-EJX                |
| U2            |     1 | MAX5160 digital potentiometer              | MAX5160LEUA                 |
| Y1            |     1 | 3.5795MHz crystal                          | Citizen HC49US3.5795 45MABJ |

## Detailed Description

This evaluation kit must be used with the following documents:

- MAXQ3210 Data Sheet (www.maxim-ic.com/MAXQ3210)
- MAXQ Family User's Guide (www.maxim-ic.com/MAXQUG)
- MAXQ Family User's Guide: MAXQ3210/MAX3212 Supplement (www.maxim-ic.com/MAXQ32xxSUP)

The MAXQ3210 EV kit board is fully defined in the schematics provided in the EV kit CD-ROM. However, a short description of the major components and connectors of the boards follows.

## Power Supplies

There are three ways to set up power supplies when using the MAXQ3210 EV kit. The two boards that require power supplies are the MAXQ3210 EV kit board and the serial-to-JTAG interface board.

## Running Both Boards from Separate Power Supplies

To run each of the boards from its own power supply, connect supplies as follows.

- Connect a 5V, ±5% regulated DC wall supply (center post positive) to the J2 power plug of the serialto-JTAG interface board.
- Connect a 9V, ±5% regulated DC wall supply (center  post positive) to the J2 power plug of the MAXQ3210 EV kit board, OR insert a 9V battery into clip J1 of the MAXQ3210 EV kit board.
- Connect a jumper across pins 1 and 2 of jumper JU2 on the MAXQ3210 EV kit board.

<!-- image -->

Note: When using two power supplies in this manner, the JU1 jumper on the MAXQ3210 EV kit board must be DISCONNECTED.

Running Both Boards from a Single Power Supply If  the  serial-to-JTAG  interface  board  is  being  used,  a single power supply can be used to power both boards as follows.

- Connect a 5V, ±5% regulated DC wall supply (center post positive) to the J2 power plug of the serialto-JTAG interface board.
- Connect the JH3 jumper on the serial-to-JTAG interface board.
- Connect the JU1 jumper on the MAXQ3210 EV kit board.
- Connect a jumper across pins 2 and 3 of JU2 on the MAXQ3210 EV kit board.

Note: Do not connect a power supply to the J1 plug on the MAXQ3210 EV kit when powering the boards in this manner.

## Running the MAXQ3210 EV Kit Board from a Single Power Supply

If the MAXQ3210 has already been programmed using the JTAG interface, it is possible to disconnect the serial-to-JTAG board and power up the MAXQ3210 EV kit board on its own. This simply executes the previously loaded firmware, with no possibility of in-application load or debugging.

- Connect a 9V, ±5% regulated DC wall supply (center  post positive) to the J2 power plug of the MAXQ3210 EV kit board, OR insert a 9V battery into clip J1 of the MAXQ3210 EV kit board.
- Connect a jumper across pins 1 and 2 of JU2 on the MAXQ3210 EV kit board.

The power pins for the MAXQ3210 EV kit are connected to the on-board power supplies by jumpers as shown in Table 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXQ3210 Evaluation Kit

## Table 1. Power-Supply Jumper Settings

| JUMPER   | SETTING                | EFFECT                                                                                                                                                                             |
|----------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | (No jumper)            | REGOUT is not connected to JTAG 5V. (Drive from internal regulator or bench supply.) *                                                                                             |
| JU1      | Pins 1 and 2 connected | REGOUT is connected to the 5V supply from the JTAG board.                                                                                                                          |
| JU2      | (No jumper)            | The power supply at J2 is not used.                                                                                                                                                |
| JU2      | Pins 1 and 2 connected | The J2 power supply (which should be 9V) is connected to the V BAT pin. This configuration should only be used with the J1 battery clip empty.                                     |
| JU2      | Pins 2 and 3 connected | The J2 power supply (which should be 5V) is connected to the REGOUT pin. When using this configuration, the JU1 jumper must be disconnected and the J1 battery clip must be empty. |

## Additional Hardware Features

Most of the additional hardware on the MAXQ3210 EV kit,  such  as  the  piezoelectric  horn,  LED  and digital potentiometer, can be enabled or disabled by setting or removing jumpers. Disabling unused hardware frees up the associated port pins for other uses.

## Using the RC Oscillator Clock Option

To run the MAXQ3210 EV kit using the RC oscillator, remove the crystal at Y1, close jumper JU3, and populate R3 and C4 with appropriate components. (Refer to the MAXQ3210 data sheet for appropriate resistor and capacitor values for a given frequency.)

Because the XT/ RC bit  in  the  CKCN register is set to 1 (selecting crystal mode) upon power-up, the MAXQ3210 will  always come out of power-up and attempt to run from an external crystal. If the RC circuit option is populated instead, the crystal oscillator does not start, and the MAXQ3210 continues running on the internal ring oscillator (approximately 8kHz) until the loaded program firmware sets the XT/ RC bit to 0. If the MAXQ3210 is not loaded, it continues running from the internal ring indefinitely, which means it is running too slowly to communicate using the standard JTAG firmware.

## Table 2. Other Jumper Settings

| JUMPER        | WHEN OPEN                                          | WHEN CLOSED                                                                                                                                                            |
|---------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU3           | No effect.                                         | The RC oscillator circuit may be used to drive the MAXQ3210 clock. To use this feature, Y1 must be empty, and R3 and C4 must be populated with appropriate components. |
| JU5, JU7, JU8 | The piezoelectric horn is disabled.                | The piezoelectric horn is enabled.                                                                                                                                     |
| JU4, JU6      | The piezoelectric horn operates at reduced volume. | The piezoelectric horn operates at full volume.                                                                                                                        |
| JU9           | No effect.                                         | Port pin P0.0 is connected to pin CS of the MAX5160 digital potentiometer.                                                                                             |
| JU10          | No effect.                                         | Port pin P1.5 is connected to pin INC of the MAX5160 digital potentiometer.                                                                                            |
| JU11          | No effect.                                         | Port pin P0.5 (comparator input) is connected to the wiper pin of the MAX5160.                                                                                         |
| JU12          | No effect.                                         | Port pin P1.6 is connected to pin U/ D of the MAX5160 digital potentiometer.                                                                                           |
| JU13          | No effect.                                         | Port pin P0.7 (LED drive) is connected to the red LED D3.                                                                                                              |

If this occurs, you can communicate with the slow-running MAXQ3210 by loading the jtag\_1kHz.hex file (provided on the EV kit CD-ROM) into the serial-toJTAG board and then using MTK or MAX-IDE as usual. Note that this version performs the master erase, loading,  and debug operations much more slowly than usual due to the reduced communications speed, so as soon as you have loaded program firmware into the MAXQ3210 that sets the XT/ RC bit  to  0  upon  startup, you can reload the normal serial-to-JTAG board firmware to go back to normal tools operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXQ3210 Evaluation Kit

<!-- image -->

Figure 3. MAXQ3210 Evaluation Kit Functional Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXQ3210 Evaluation Kit

Figure 4. MAXQ3210 Evaluation Kit Power Schematics

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXQ3210 Evaluation Kit

Figure 5. MAXQ3210 Evaluation Kit Demo Components Schematic

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7

© 2006 Maxim Integrated Products is a registered trademark of Maxim Integrated Products, Inc.

- is a registered trademark of Dallas Semiconductor Corporation.