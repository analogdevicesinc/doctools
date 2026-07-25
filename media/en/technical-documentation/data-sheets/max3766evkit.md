<!-- lastmod 2022-08-02 -->
## General Description

The MAX3766 evaluation kit (EV kit) is an assembled, surface-mount demonstration board that provides easy optical or electrical evaluation of the MAX3766 622Mbps laser driver.

## Ordering Information

| PART         | TEMP. RANGE    | PIN-PACKAGE   |
|--------------|----------------|---------------|
| MAX3766EVKIT | -40°C to +85°C | MAX3766EEP    |

| DESIGNATION                |   QTY | DESCRIPTION                                                               |
|----------------------------|-------|---------------------------------------------------------------------------|
| B1                         |     1 | Ferrite bead Murata BLM11A601S                                            |
| C1                         |     1 | 10µF ±10%, 16V min tantalum cap AVX TAJC106K016                           |
| C2, C12, C14               |     3 | 0.01µF 10%, 25V min ceramic capacitors                                    |
| C4, C7, C10, C11, C15, C18 |     6 | 0.1µF 10%, 25V min ceramic capacitors                                     |
| C8, C9                     |     2 | DO NOT INSTALL                                                            |
| C16                        |     1 | 15pF 10%, 25V min ceramic capacitor                                       |
| C17                        |     1 | 1µF 10%, 10V min ceramic AVX0805ZC105k                                    |
| D1 SOCKETS                 |     4 | Pin sockets Digi-Key ED5042-ND                                            |
| JU5                        |     1 | 2-pin header (0.1" center) Digi-Key S1012-36-ND                           |
| IN+, IN-, IOUT-            |     3 | SMA connectors (edge mount) E.F. Johnson 142-0701-801 or Digi-Key J502-ND |
| JU1, JU3, JU4              |     3 | 3-pin headers (0.1" centers) Digi-Key S1012-36-ND                         |
| JU1, JU3, JU4, JU5         |     4 | Shunts Digi-Key S9000-ND                                                  |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Adjustable Modulation Temperature Coefficient
- ' Automatic Safety Reset Delay with MAX809M
- ' Automatic Power Control Evaluation in Electrical and Optical Configuration
- ' Dual Layout Option on Single Board
- ' Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                           |
|---------------|-------|---------------------------------------|
| L1            |     1 | DO NOT INSTALL                        |
| Q1            |     1 | PNP transistor Zetex FMMT591, SOT23   |
| R1            |     1 | 0 Ω jumper                            |
| R2, R6, R9    |     3 | 50k Ω variable resistors Bourns 3296  |
| R3, R12       |     2 | 221 Ω , 1% resistors                  |
| R4            |     1 | 20 Ω , 5% resistor                    |
| R5, R7        |     2 | 100k Ω variable resistors Bourns 3296 |
| R8, R20       |     2 | 5.1k Ω , 5% resistors                 |
| R10, R11      |     2 | 68.1 Ω , 1% resistors                 |
| R13           |     1 | 10 Ω , 5% resistor                    |
| R14           |     1 | 24.9 Ω , 1% resistor                  |
| R15, R16      |     2 | 182 Ω , 1% resistors                  |
| R17           |     1 | 33.2 Ω , 1% resistor                  |
| R18           |     1 | 100k Ω , 5% resistor                  |
| R21           |     1 | 49.9 Ω , 1% resistor                  |
| U1            |     1 | MAX3766EEP, QSOP-20                   |
| U2            |     1 | MAX495ESA, SOIC-8                     |
| U3            |     1 | MAX809MEUR-T                          |
| +5V, GND      |     2 | Test points Mouser 151-203            |
| None          |     1 | MAX3766 circuit board (rev. C)        |
| None          |     1 | MAX3766 data sheet                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (806) 946-0690 | (803) 626-3123 |
| Murata     | (770) 436-1300 | (770) 436-3030 |
| Zetex      | (516) 543-7100 | (516) 864-7630 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Electrical Quick Start

- 1) Ensure that solder bridges JU7 and JU6 are shorted, and that solder bridge JU2 is open.
- 2) Install a shunt on JU5.
- 3) Install a shunt on JU3 between pins 2 and 3.
- 4) Install a shunt on JU1 between pins 2 and 3 (all fail conditions ignored).
- 5) Remove the shunt from JU4.
- 6) Turn the RTC potentiometer counterclockwise to 0k Ω (minimum tempco). Also turn the RBIASMAX potentiometer clockwise to 0k Ω .
- 7) Connect a 50 Ω terminated oscilloscope from a 50 Ω cable to IOUT-. Set the oscilloscope vertical gain to 100mV/div.
- 8) Apply a 500mV minimum differential input signal at IN- (J1) and IN+ (J2).
- 9) Power up the board with a 5V supply at the +5V and GND test pins. Set the current limit to 300mA.
- 10) Adjust RMODSET until a signal appears on the oscilloscope.  The  conversion  gain  from  the MAX3766 modulation current to the oscilloscope output is 0.08mA/mV; therefore 750mV equals a modulation current of 60mA.

## Optical Quick Start

- 1) Ensure that solder bridges JU7 and JU2 are open.
- 2) Ensure that solder bridge JU6 is shorted.
- 3) Install a shunt on JU3 and JU4, between pins 2 and 3.
- 4) Install a shunt on JU1 between pins 2 and 3 (all fail conditions ignored).
- 5) Turn the RTC potentiometer counterclockwise to 0k Ω (minimum tempco).
- 6) Adjust the RBIASMAX potentiometer to a safe maximum biasing level for the laser diode used in this evaluation. Measure RBIASMAX from VREF1 to BIASMAX without power applied to the board. (From the MAX3766 data sheet it can be estimated that  1k Ω sets up about 40mA of maximum laser bias current.)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 7) Turn RMODSET counterclockwise to 50k Ω (minimum modulation current).
- 8) Turn RPOWERSET counterclockwise to 100k Ω (minimum monitor diode (MD) current).
- 9) Insert a TO-46 packaged laser into D1.
- 10) Power up the board with a 5V supply at the +5V and GND test points. Set the current limit to 300mA.
- 11) Connect a 50 Ω cable from IOUT- to a 50 Ω terminated oscilloscope input.
- 12) Apply a 500mV minimum differential input signal at IN- (J1) and IN+ (J2).
- 13) Adjust RPOWERSET and RMODSET clockwise until the desired average optical power and amplitude are displayed on the oscilloscope attached to the optical-to-electrical converter. (Use caution: the modulation current could exceed the laser's damage rating.)

## Compact Layout

A second, more compact layout is provided on this EV kit PC board. It is designed for optical evaluation only. The schematic is included (Figure 2), but no components are supplied. High-speed performance can be improved with the compact layout.

## Laser Safety and IEC 825

Using the MAX3766 laser driver alone does not ensure that a transmitter design is compliant with IEC 825 eye safety requirements. The entire transmitter circuit and component selections must be considered. Each customer must determine the level of fault tolerance required by their application, recognizing that Maxim products are not designed or authorized for use as components in systems intended for surgical implant into  the  body,  for  applications  intended to support or sustain life, or for any other application where the failure of a Maxim product could create a situation where personal injury or death may occur.

## MAX3766 Evaluation Kit

Table 1.  Adjustment and Control Descriptions (review Quick Start first)

| CONTROL   | NAME        | FUNCTION                                                                                                                                                                                                                                                                                                                                      |
|-----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1        | Laser Diode | This is a socket for a laser in a TO-46 header (customer supplied).                                                                                                                                                                                                                                                                           |
| JU1       | SAFETY      | When the JU1 shunt is placed on pins 1 and 2, the MAX3766's safety features are enabled. The MAX809M ensures that failures at start-up are ignored until the voltage level set by the MAX809M is detected on V CC . This allows the MAX3766 to power up without generating a safety shutdown. Shunting pins 2 and 3 disables safety shutdown. |
| JU2       | -           | This solder bridge should be shorted only for electrical evaluation when using automatic power control.                                                                                                                                                                                                                                       |
| JU3       | VCC/VCCA    | Selects which EV kit layout to supply with power. Shunt pins 1 and 2 to power up U1 (larger layout). Shunt pins 2 and 3 to power up U4 (compact layout).                                                                                                                                                                                      |
| JU4       | MD          | Allows board to switch between optical monitor diode current (shunt pins 2 and 3) and electrically-emulated monitor diode current (shunt pins 1 and 2).                                                                                                                                                                                       |
| JU5       | ENABLE      | Enables and disables the MAX3766. When shunted, the part is enabled.                                                                                                                                                                                                                                                                          |
| JU6       | -           | This solder bridge should be shorted.                                                                                                                                                                                                                                                                                                         |
| JU7       | -           | This solder bridge should be open for optical evaluation and shorted for electrical evaluation.                                                                                                                                                                                                                                               |
| R2        | COUPLING    | When using the electrically emulated monitor diode current, R2 sets the ratio of laser current to monitor diode current.                                                                                                                                                                                                                      |
| R5        | RTC         | RTC sets the modulation current temperature compensation, 0k Ω = minimum tempco (0ppm/°C) to 100k Ω = maximum tempco (~5600ppm/°C).                                                                                                                                                                                                           |
| R6        | RBIASMAX    | When in open-loop mode (automatic power control not used), this resistance sets the laser bias current (0k Ω = maximum bias). When in closed-loop mode, it sets the maximum bias current available with automatic power control.                                                                                                              |
| R7        | RPOWERSET   | Sets the monitor diode reference current in a closed-loop condition (automatic power control engaged). See MAX3766 data sheet for selection of RPOWERSET.                                                                                                                                                                                     |
| R9        | RMODSET     | Sets modulation current. 0k Ω = maximum modulation current.                                                                                                                                                                                                                                                                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3766 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX3766 EV Kit Compact Layout (components not supplied, values are for reference only)

<!-- image -->

## Compact Layout Component List (Not Installed and Not Supplied)

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| B2            |     1 | Ferrite bead Murata BLM11A601S                                           |
| C13, C21      |     2 | 0.01µF capacitors                                                        |
| C19           |     1 | 1µF capacitor                                                            |
| C20           |     1 | 15pF capacitor                                                           |
| C22, C23      |     2 | 0.1µF capacitors                                                         |
| C24           |     0 | DO NOT INSTALL                                                           |
| D2 SOCKET     |     4 | Pin sockets Digi Key ED5042-ND                                           |
| IN+           |     1 | SMA connector (edge mount) E.F. Johnson 142-0701-801 or Digi Key J502-ND |

| DESIGNATION        |   QTY | DESCRIPTION                        |
|--------------------|-------|------------------------------------|
| R19, R22, R23, R24 |     4 | Resistors see (MAX3766 data sheet) |
| R25, R27           |     2 | 68.1 Ω , 1% resistors              |
| R26, R28           |     2 | 182 Ω , 1% resistors               |
| R29                |     1 | 5.1k, 5% resistor                  |
| R30                |     1 | 10 Ω , 5% resistor                 |
| R31, R32           |     2 | 24.9, 1% resistors                 |
| U4                 |     1 | MAX3766EEP QSOP-20                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3766 Evaluation Kit

<!-- image -->

Figure 3.  MAX3766 EV Kit Component Placement GuideComponent Side

Figure 4.  MAX3766 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX3766 EV Kit  PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6.  MAX3766 EV Kit  PC Board Layout-Power Layer

<!-- image -->

<!-- image -->

Figure 7.  MAX3766 EV Kit  PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3766 Evaluation Kit

NOTES

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications. All operating parameters, including 'typicals' must be validated for each customer application by customer's technical experts. Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 408-737-7600

© 1998 Maxim Integrated Products