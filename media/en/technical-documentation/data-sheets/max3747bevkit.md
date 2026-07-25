<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3747B Evaluation Kit

## General Description

The MAX3747B evaluation kit (EV kit) simplifies evaluation  of  the  MAX3747B limiting amplifiers. The EV kit enables testing of all the device's functions. SMA connectors with 50 Ω controlled-impedance transmission lines  to  the  MAX3747B are provided for all input and output ports.

The EV kit provides input and output test points and jumpers for all TTL signals.

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                              |
|-------------------|-------|------------------------------------------|
| C1                |     1 | 33µF ± 10%tantalum capacitor (B case)    |
| C2                |     1 | 10µF ± 10%tantalum capacitor (B case)    |
| C3                |     1 | 0.1µF ± 10% ceramic capacitor 0603)      |
| C4, C14, C15      |     3 | 0.1µF ± 10% ceramic capacitors (0402)    |
| C5                |     1 | Open                                     |
| C6-C13            |     8 | 0.1µF ± 10% ceramic capacitors (0201)    |
| C16               |     1 | Open                                     |
| D1                |     1 | LED                                      |
| J10, J11, TP1-TP6 |     8 | Test points Digi-Key 5000K-ND            |
| J1-J8             |     8 | SMA edge mounts, round contact           |
| J9                |     1 | SMB PC mount                             |
| JU1               |     1 | Jumper block 3 + 1 pins, 0.1in spacing   |
| JU2, JU3          |     2 | Jumper block 3 pins, 0.1in spacing       |
| L1                |     1 | 47nH inductor                            |
| R0, R1            |     2 | 49.9 ± 1% resistors (0402)               |
| R2                |     1 | 5k variable resistor Bourns 3296W-1-502  |
| R3, R4            |     2 | Open                                     |
| R5                |     1 | 4.75k ± 1% resistor (0402)               |
| R6                |     1 | 10.0k ± 1% resistor (0402)               |
| R8                |     1 | 4.99k ± 1% resistor (0402)               |
| R9                |     1 | 2.61k ± 1% resistor (0402)               |
| R10               |     1 | 442 ± 1% resistor (0402)                 |
| R11               |     1 | 4.53k ± 1% resistor (0402)               |
| R12               |     1 | 2.37k ± 1% resistor (0402)               |
| R13               |     1 | 768 ± 1% resistor (0402)                 |
| U1                |     1 | MAX3747BEUB+                             |
| U2                |     1 | SMT dip switch, 0.5mm pitch (8 position) |
| U3                |     1 | MAX4429ESA+                              |
| -                 |     1 | PCB: MAX3747B Evaluation kit             |

Features

- ♦ Independent Input and Output Voltage Terminations
- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Test Points for LOS Output
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE         | IC PACKAGE   |
|----------------|--------------------|--------------|
| MAX3747BEVKIT+ | -40 ° C to +85 ° C | 10 µMAX ®    |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE           |
|----------------------------------------|--------------|-------------------|
| AVX Corp.                              | 843-448-9411 | www.avxcorp.com   |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com |
| Digi-Key Corp.                         | 218-681-6674 | www.digikey.com   |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com    |

Note: Please indicate that you are using the MAX3747B when ordering from these suppliers.

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3747B Evaluation Kit

## Quick Start

- 1) Shunt the center pin of JU1 to TP3 to connect DISABLE to LOS.
- 2) Shunt the center pin of JU2 to 4.75k Ω .  Shunt  the center pin of JU3 to VCC. This terminates LOS to VCC through a 4.75k Ω resistor.
- 3) Turn all positions of the dip switch (U2) off. Turn the 4  and 5 switch to on. This sets the minimum LOS threshold.
- 4) Connect a +3.3V supply to VCC (J10). Connect the power-supply ground to J11 (GND).
- 5) Connect a 100mVP-P 2.125Gbps signal to J1 (IN+) and J2 (IN-).
- 6) Connect J3 (OUT+) and J4 (OUT-) to a 50 Ω highspeed oscilloscope. The differential output of the MAX3747B should be 800mVP-P.

## Detailed Description

## Dip Switch

The dip switch allows for quick setting of various threshold levels. When only switches 4 and 5 are turned on, the MAX374B is set to the low threshold level.  Switches 3 and 6 set to the medium threshold level,  and  switches  2  and  7  set  to  the  high  threshold level.  Switches 1 and 8 connect the potentiometer, allowing the user to set any threshold level.

## Jumper JU1

Jumper JU1 allows the user to connect the DISABLE pin to LOS, VCC, or GND.

## Jumper JU2

Jumper JU2 allows the user to terminate the LOS output to 4.75k Ω or 10.0k Ω .

## Jumper JU3

Jumper JU3 connects the LOS termination resistor or to a separate supply connected to TP4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3747B Evaluation Kit

<!-- image -->

Figure 1. MAX3747B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3747B Evaluation Kit

Figure 2. MAX3747B EV Kit Component Placement Guide

<!-- image -->

Figure 3. MAX3747B EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3747B Evaluation Kit

Figure 4. MAX3747B EV Kit PCB Layout-Power Plane

<!-- image -->

Figure 5. MAX3747B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5