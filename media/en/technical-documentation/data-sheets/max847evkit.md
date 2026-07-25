<!-- lastmod 2022-08-04 -->
## General Description

The MAX847 evaluation kit (EV kit) provides a platform for evaluating the features of the MAX847. The MAX847 converts a 1-cell, 0.8V to 1.8V battery voltage to four separate output voltages. The main output voltage at OUT is digitally controlled from 1.8V to 4.9V in 100mV steps by a 3-wire SPI™ serial interface. OUT provides up to  80mA. The other outputs (REG1, REG2, and REG3) are low-noise linear-regulator outputs. The MAX847 offers  numerous features for two-way paging and other low-power wireless designs. Consult the MAX847 data sheet for details. The MAX847 EV kit is a fully assembled and tested surface-mount circuit board.

The MAX769 is similar to the MAX847 except that it contains a buck/boost DC-DC converter (for 2-cell or 3-cell  inputs)  rather  than  a  boost-only  converter  (for 1-cell  inputs).  To  evaluate  the  MAX769,  please order the MAX769EVKIT.

## Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX847EVKIT | 0°C to +70°C  | 28 QSOP      |

| DESIGNATION                        |   QTY | DESCRIPTION                                                                     |
|------------------------------------|-------|---------------------------------------------------------------------------------|
| C1, C2                             |     2 | 47µF, 16V low-ESR tantalum caps Sprague 593D476X0016E2W or AVX TPSD476M016R0150 |
| C3, C8, C10, C12, C13, C15, C16    |     7 | 0.1µF ceramic capacitors                                                        |
| C4                                 |     1 | 22nF ceramic capacitor                                                          |
| C5, C9, C14                        |     3 | 1µF ceramic capacitors                                                          |
| C6, C7                             |     2 | 10µF, 10V tantalum capacitors Sprague 595D106X0010A2T                           |
| C11                                |     1 | 1000pF ceramic capacitor                                                        |
| D1                                 |     0 | 0.5A, 20V Schottky diode (optional) Motorola MBR0520L                           |
| L1                                 |     1 | 22µH inductor Sumida CD54-220                                                   |
| R1                                 |     1 | 15k Ω , 5% resistor                                                             |
| R2, R3, R6, R8, R11, R13, R18, R22 |     8 | 1k Ω , 5% resistors                                                             |

Idle Mode is a trademark of Maxim Integrated Products.

SPI is a trademark of Motorola Corp.

<!-- image -->

## Features

- ' 0.8V to 1.8V (1-cell boost) Battery Input Voltage
- ' 1.8V to 4.9V Digitally Adjustable Output Voltage
- ' Up to 80mA Total Output Current
- ' Three Low-Noise Voltage Regulators
- ' Charger for Small NiCd/NiMH/Lithium Battery or Storage Capacitor
- ' 270kHz Switching Frequency
- ' 15µA Idle Mode™ Current
- ' Digitally Controlled 1.8 Ω Switches for Vibrators, Beepers, etc.
- ' Reset and Low-Battery Outputs
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Component List

| DESIGNATION                         |   QTY | DESCRIPTION                          |
|-------------------------------------|-------|--------------------------------------|
| R4, R7, R9, R10, R17, R19, R20, R23 |     8 | 100k Ω , 5% resistors                |
| R5                                  |     1 | 100 Ω , 5% resistor                  |
| R12                                 |     1 | 390k Ω , 5% resistor                 |
| R15                                 |     1 | 1M Ω , 5% resistor                   |
| R14, R16                            |     2 | 620k Ω , 5% resistors                |
| R21                                 |     1 | 10k Ω , 5% resistor                  |
| U1                                  |     1 | MAX847EEI                            |
| JU1-JU10                            |    10 | 2-pin headers                        |
| JU11                                |     1 | 3-pin header                         |
| JU12                                |     1 | 4-pin header                         |
| J1                                  |     1 | 6-pin header                         |
| SW1-SW4                             |     4 | Slide switches                       |
| J2                                  |     1 | 25-pin, female right-angle connector |
| LED1                                |     1 | Green light-emitting diode           |
| None                                |     1 | MAX847/MAX769 PC board               |
| None                                |     1 | MAX847 data sheet                    |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX847 Evaluation Kit

## Component Suppliers

| SUPPLIER        | PHONE        | FAX          |
|-----------------|--------------|--------------|
| AVX             | 803-946-0690 | 803-626-3123 |
| CoilCraft       | 708-639-6400 | 708-639-1469 |
| Coiltronics     | 561-241-7876 | 561-241-9339 |
| Dale-Vishay     | 402-564-3131 | 402-563-6418 |
| Motorola        | 602-303-5454 | 602-994-6430 |
| Sprague         | 603-224-1961 | 603-224-1430 |
| Sumida          | 708-956-0666 | 708-956-0702 |
| Vishay/Vitramon | 203-268-6261 | 203-452-5670 |

Note: Please indicate that you are using the MAX847 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX847 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Check the positions of jumpers JU1-JU12. See Table 2 and the MAX847 data sheet for details. Jumper connections for the MAX847 and MAX769 are not the same.
- 2) Check  the  positions  of  switches  SW1-SW4. SW1-SW3 should be high (closest to the top edge of the evaluation board). When testing the MAX847, SW4 should be low (to set Coast mode for start-up).
- 3) Connect a +1.5V supply voltage to the BATT pad. The power-supply ground connects to the GND pad.
- 4) Connect a voltmeter and load, if any, to the OUT pad. Note that the MAX847 is designed to start in low-power (COAST) mode-it cannot supply full load until RUN mode is set after start-up (by SW4 or by the serial interface).
- 5) Turn on the input power supply and verify that the output voltage is 3.0V. This is the MAX847's starting OUT voltage. Other voltages can then be programmed via the serial interface (see MAX847 data sheet).

## Connectors

The MAX847 evaluation board contains provisions for two types of connectors for serial-interface connections. One is a 6-pin single in-line header (J1) that contains  only  serial-interface  connections.  The  other  is  a DB-25 pad footprint (J2) that has serial connections along with other IC pin connections. Pin/pad connections are outlined in Tables 3 and 4.

Table 1.  Switch and LED Functions

| SWITCH/ LED   | FUNCTION                             | COMMENTS                                                                                                                                 |
|---------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| SW1           | Manual Serial Clock Input (SCL)      | Logic-high level is with switch pushed toward top of board. Logic-low level is with switch pushed toward switch label 'SW1', 'SW2', etc. |
| SW2           | Manual Serial Data Input (SDI)       | Logic-high level is with switch pushed toward top of board. Logic-low level is with switch pushed toward switch label 'SW1', 'SW2', etc. |
| SW3           | Manual Chip-Select Input ( CS )      | Logic-high level is with switch pushed toward top of board. Logic-low level is with switch pushed toward switch label 'SW1', 'SW2', etc. |
| SW4           | RUN/COAST selec- tion on MAX847 only | Logic-high level is with switch pushed toward top of board. Logic-low level is with switch pushed toward switch label 'SW1', 'SW2', etc. |
| LED1          | Visual Data Output (SDO)             | LED on is logic-high output.                                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Manual Programming

The MAX847 is designed to be controlled by a serial interface; however, slide-switches SW1-SW4 and LED1 are provided on the EV kit to assist in 'bench-top' evaluation (Table 1). See the MAX847 data sheet for descriptions of the programmable features and for more information on serial programming.

To manually program data into the device, start with SW1, SW2, and SW3 high. Then sequence through the following steps:

- 1) Set SW3 ( CS ) low.
- 2) Set the first desired data input bit with SW2.
- 3) Toggle the serial clock down and up with SW1. Data is loaded on the SCL rising edge.
- 4) Repeat steps 2 and 3 for each of the next seven input data bits (for a total of eight bits).
- 5) Set SW3 high.

Table 2.  Jumper Selection

| JUMPER NUMBER   | MAX847 DEFAULT POSITION        | COMMENTS                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1             | On                             | JU1 should be inserted if no external synchronous clock is used. If an external synchronous clock is applied, then JU1 should be removed.                                                                                                                                                                                                                                             |
| JU2             | On                             | With JU2 inserted, the low-battery input (LBI, LBO ) is set to trip at 1V. With JU2 removed, LBI is set for 0.6V. JU2 should be removed when making no-load operating current measurements to prevent R12 and R14 from adding to the measured current.                                                                                                                                |
| JU3             | On                             | With JU3 inserted, the reset input (RSIN, RSO ) is set to trip at 1.6V. With JU3 removed, RSIN is set for 0.6V. JU3 should be removed when making no-load operating current mea- surements to prevent R15 and R16 from adding to the measured current.                                                                                                                                |
| JU4             | On                             | JU4 connects a 100k Ω pull-up resistor (R17) from REG1 to the open-drain RSO output. JU4 can be removed if RSO is not used or if a different pull-up resistor is used.                                                                                                                                                                                                                |
| JU5             | On                             | JU5 connects a 100k Ω pull-up resistor (R10) from REG1 to the open-drain LBO output. JU5 can be removed if LBO is not used or if a different pull-up resistor is used.                                                                                                                                                                                                                |
| JU6             | On                             | JU6 connects an LED (LED1) to the serial data output (SDO). LED1 gives a visual indication of serial output data when manually programming the IC with SW1, SW2, and SW3. JU6 should be removed when using a µP-controlled interface, since the LED will not be visible at digital clock speeds. JU6 should also be removed when making operating or quiescent- current measurements. |
| JU7             | On                             | JU7 connects SW1 to the serial clock input (SCL) (used to clock-in serial programming data). Insert JU7 when programming the IC manually with SW1, SW2, and SW3. Remove JU7 when using a digital serial interface at connector J1 or J2.                                                                                                                                              |
| JU8             | On                             | JU8 connects SW2 to the serial data input (SDI) (used to set serial programming data). Insert JU8 when programming the IC manually with SW1, SW2, and SW3. Remove JU8 when using a digital serial interface at connector J1 or J2.                                                                                                                                                    |
| JU9             | On                             | JU9 connects SW3 to the chip-select input ( CS ) (used to activate the serial interface). Insert JU9 when programming the IC manually with SW1, SW2, and SW3. Remove JU9 when using a digital serial interface at connector J1 or J2.                                                                                                                                                 |
| JU10            | On                             | JU10 connects SW4 to the RUN input (MAX847 only). Insert JU10 when setting the RUN input manually with SW4. Remove JU10 when controlling the RUN input through either connector J1 or J2.                                                                                                                                                                                             |
| JU11            | JU11-1, JU11-2                 | JU11 has three pins to connect the REG2 input (REG2IN) to either REG1 (jumper J11-1 to J11-2) or OUT (jumper J11-2 to J11-3).                                                                                                                                                                                                                                                         |
| JU12            | JU12-1, JU12-2, JU12-3, JU12-4 | JU12 has four pins. When a MAX847 is inserted, connect these pins to jumper JU12-1 to JU12-2 and jumper JU12-3 to JU12-4. When the MAX769 is inserted, connect these pins only to jumper JU12-2 to JU12-3, leaving JU12-1 and JU12-4 open.                                                                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX847 Evaluation Kit

## MAX847 Evaluation Kit

## Table 3.  Connector Pinouts for J1 (6-Pin Header)

| J1 PIN   | FUNCTION   |
|----------|------------|
| J1-1     | REG1       |
| J1-2     | CS         |
| J1-3     | SDI        |
| J1-4     | SCL        |
| J1-5     | SDO        |
| J1-6     | GND        |

Table 4.  Connector Pinouts for J2 (DB-25)

| J2-PIN   | FUNCTION                           |
|----------|------------------------------------|
| J2-1     | BATT                               |
| J2-2     | REG1                               |
| J2-3     | REG2                               |
| J2-4     | REG3                               |
| J2-5     | NICD                               |
| J2-6     | CS                                 |
| J2-7     | RUN (MAX847 only, N.C. for MAX769) |
| J2-8     | SDO                                |
| J2-9     | SDI                                |
| J2-10    | N.C.                               |
| J2-11    | N.C.                               |
| J2-12    | N.C.                               |
| J2-13    | N.C.                               |
| J2-14    | N.C.                               |
| J2-15    | RSO                                |
| J2-16    | LBO                                |
| J2-17    | N.C.                               |
| J2-18    | SCL                                |
| J2-19    | GND                                |
| J2-20    | N.C.                               |
| J2-21    | N.C.                               |
| J2-22    | N.C.                               |
| J2-23    | N.C.                               |
| J2-24    | GND                                |
| J2-25    | GND                                |

N.C. = No Connection

Figure 1.  MAX847 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX847 Evaluation Kit

Figure 2.  MAX847 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX847 Evaluation Kit

<!-- image -->

Figure 3.  MAX847 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX847 Evaluation Kit

Figure 4.  MAX847 EV Kit PC Board Layout-Solder Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX847 Evaluation Kit

## NOTES

## MAX847 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600