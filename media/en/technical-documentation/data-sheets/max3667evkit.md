<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3667 evaluation kit (EV kit) is an assembled, surface-mount demonstration board that provides easy optical evaluation of the MAX3667.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3667EVKIT | -40°C to +85°C | 32 TQFP      |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Fully Assembled and Tested
- ' Board is Configured for 3.3V Operation
- ' PECL Input Termination Provided On-Board
- ' Independent Electrical Monitoring of Modulation and Bias Currents

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                          |   QTY | DESCRIPTION                                                                     |
|------------------------------------------------------|-------|---------------------------------------------------------------------------------|
| C1, C2, C4, C5, C7-C10, C12, C13, C15, C16, C17, C19 |    14 | 0.1µF ±10%, 25V min ceramic capacitors                                          |
| C3                                                   |     1 | 1000pF ±10%, 25V min ceramic capacitor                                          |
| C6, C14                                              |     2 | 1µF ±10%, 25V min ceramic capacitors                                            |
| C11                                                  |     1 | 0.01µF ±10%, 25V min ceramic capacitor                                          |
| C18, C20                                             |     2 | 100µF ±10%, 16V tantalum capacitors Digi-Key P5231-ND or Panasonic ECE-A1CGE101 |
| R1, R2                                               |     2 | 130 Ω ±1% resistors                                                             |
| R3, R5, R13                                          |     3 | 50k Ω Bournes variable resistors Digi-Key 3296W-503-ND                          |
| R4, R6                                               |     2 | 1.5k Ω ±5% resistors                                                            |
| R7, R20                                              |     2 | 100 Ω ±1% resistors                                                             |
| R8, R9                                               |     2 | 82.5 Ω ±1% resistors                                                            |
| R11                                                  |     1 | 4.75 Ω ±1% resistor                                                             |
| R12                                                  |     1 | 20k Ω ±5% resistor                                                              |
| R15                                                  |     1 | 2k Ω ±5% resistor                                                               |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER              | PHONE                         | FAX            |
|-----------------------|-------------------------------|----------------|
| AVX                   | (806) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Central Semiconductor | (516) 435-1110                | (516) 435-1824 |
| Murata                | (814) 237-1431 (800) 831-9172 | (814) 238-0490 |
| Zetex                 | (516) 543-7100                | (516) 864-7630 |

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| R17, R18       |     2 | 49.9 Ω ±1% resistors                                                   |
| R19            |     1 | 232 Ω ±1% resistor                                                     |
| R21            |     1 | 22.1 Ω ±1% resistor                                                    |
| SJ1, SJ2, SJ4  |     3 | Trace gap jumpers. Short with solder.                                  |
| SJ5            |     1 | Trace gap jumper. Leave open.                                          |
| L1             |     1 | 470nH inductor Coilcraft 1008CS-471XKBC                                |
| J1-J4          |     4 | SMA connectors (edge mount) E.F. Johnson 142-0701-801 Digi-Key J502-ND |
| JU1, JU3       |     2 | 3-pin headers (0.1" centers) Digi-Key S1012-36-ND                      |
| JU10           |     1 | 2-pin header (0.1" center) Digi-Key S1012-36-ND                        |
| VCC, GND       |     2 | 1-pin headers Mouser test point 151-203                                |
| JU1, JU3, JU10 |     3 | Shunts Digi-Key S9000-ND                                               |
| U1             |     1 | MAX3667ECJ (32-pin TQFP)                                               |
| None           |     1 | MAX3667 circuit board                                                  |
| None           |     1 | MAX3667 data sheet                                                     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Ensure that solder bridges SJ1, SJ2, and SJ4 are shorted.
- 2) Ensure that solder bridge SJ5 is open.
- 3) Install shunt JU3 between pins 1 and 2.
- 4) Install shunt JU1 between pins 2 and 3.
- 5) Open JU10.
- 6) Turn the R13 (APCSET) potentiometer counterclockwise to 50k Ω (maximum turn).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX3667 Evaluation Kit

- 7) Turn the R3 (MODSET) potentiometer counterclockwise to 50k Ω (maximum turn).
- 8) Attach a high-impedance voltmeter to J3 (BIASMON).
- 9) Attach a high-impedance oscilloscope to J4 (MODMON).
- 10) Apply a PECL-compatible differential input signal across J1 to J2.
- 11) Connect a TO46-style header laser diode and monitor (Figure 1).
- 12) Attach the laser diode output to an optical/electrical converter.
- 13) Power the board up with a +3.3V power source at the  3.3V  pin  and  GND pin. Set the current limit to 300mA.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME             | FUNCTION                                                                                                                                                                                                                                                                                                                                    |
|-------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R5          | BIASSET          | In open-loop operation (APC not used) this potentiometer adjusts the bias current applied to the laser. Note that R6 limits the maximum bias current.                                                                                                                                                                                       |
| R13         | APCSET           | In closed-loop operation (APC engaged) this potentiometer adjusts the bias current applied to the laser. Note that R15 limits the maximum bias current.                                                                                                                                                                                     |
| R3          | MODSET           | This potentiometer adjusts the modulation current applied to the laser. Note that R4 limits the maximum modulation current.                                                                                                                                                                                                                 |
| JU1         | DISABLE          | Shunting between pins 1 and 2 (high) disables the part. Shunting pins 2 and 3 enables the part.                                                                                                                                                                                                                                             |
| JU3         | APC              | In closed-loop operation (APC engaged) pins 1 and 2 must be shunted. In open-loop operation pins 2 and 3 must be shunted.                                                                                                                                                                                                                   |
| JU10        | -                | Open when in closed-loop mode. Shunted when in open-loop mode.                                                                                                                                                                                                                                                                              |
| J3          | BIASMON          | Monitors the bias current at the laser. BIASMON is typically 1/38 of the actual laser bias current. When SJ1 is closed and using a high-impedance meter, current at BIASMON = V BIASMON / 49.9 Ω .                                                                                                                                          |
| J4          | MODMON           | Monitors the modulation current at the laser. If using a high-impedance scope, ensure that SJ2 is closed. I MODMON = (voltage on oscilloscope) / 49.9 Ω . I MODMON is typically 1/33 of the actual laser modulation current (I QMOD ). If using a 50 Ω terminat- ed scope, ensure that SJ2 is open. Conversion factor is the same as above. |
| SJ1         | 50 Ω termination | See BIASMON (J3).                                                                                                                                                                                                                                                                                                                           |
| SJ2         | 50 Ω termination | See MODMON (J4).                                                                                                                                                                                                                                                                                                                            |
| SJ4         | -                | When using APC, this solder jumper should be shorted. When APC is not being used, ensure that the solder jumper is open.                                                                                                                                                                                                                    |
| SJ5         | -                | When using APC, this solder jumper should be open. When APC is not being used, ensure that the solder jumper is shorted.                                                                                                                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 14) Adjust APCSET (R13) clockwise until the desired laser bias is achieved. Bias can be monitored at J3 (BIASMON). The conversion factor is (VBIASMON / 50) x 38 (typical) = IBIAS. Power can also be monitored at the laser diode with an optical/electrical converter.
- 15) Adjust MODSET (R3) clockwise until the desired modulation current is achieved. Modulation can be monitored at J4 (MODMON). The conversion factor is (VMODMON / 50) x 33 (typical) = IMOD. Modulation can also be observed on an oscilloscope connected to an optical/electrical converter.

<!-- image -->

Figure 1.  Attachment of Laser Diode/Monitor to MAX3667 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX3667 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX3667 EV Kit Component Placement Guide

<!-- image -->

<!-- image -->

Figure 4.  MAX3667 PC Board Layout-Top Solder Mask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3667 Evaluation Kit

<!-- image -->

Figure 5.  MAX3667 PC Board Layout-Solder Side

Figure 6.  MAX3667 PC Board Layout-GND Plane

<!-- image -->

Figure 7.  MAX3667 PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 8.  MAX3667 PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 9.  MAX3667 PC Board Layout-Bottom Solder Mask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3667 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products