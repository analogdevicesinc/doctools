<!-- lastmod 2022-08-02 -->
## General Description

The MAX3866 evaluation kit (EV kit) is a fully assembled, chip-on-board (COB) electrical demonstration kit. It  provides  easy  evaluation  of  the  MAX3866  2.5Gbps, +3.3V combined transimpedance/limiting amplifier.

## Component List

| DESIGNATION                                 |   QTY | DESCRIPTION                                                               |
|---------------------------------------------|-------|---------------------------------------------------------------------------|
| C1, C2, C3, C5-C8                           |     7 | 100nF, 25V min, 10% ceramic capaci- tors (0603)                           |
| C9, J2, J3, L2, R4, R10, R11, R12, TP2, TP3 |     0 | Leave site open                                                           |
| L1                                          |     1 | 1µH inductor Coilcraft 1008CS-102 XKBB, 10%                               |
| R1                                          |     1 | 500 Ω potentiometer                                                       |
| R2                                          |     1 | 150 Ω , 1% resistor (0402)                                                |
| R3, R7                                      |     2 | 1k Ω , 1% resistors (0402)                                                |
| R5, R8                                      |     2 | 49.9 Ω , 1% resistors (0402)                                              |
| R6                                          |     1 | 1k Ω potentiometer                                                        |
| R9                                          |     1 | 1M Ω potentiometer                                                        |
| CR1                                         |     1 | LED                                                                       |
| INPUT (J1), OUT+ (J4), OUT- (J5)            |     3 | SMA connectors (edge mount) E.F. Johnson 142-0701-801 or Digi-Key J502-ND |
| LOP                                         |     1 | Test point Mouser 151-203                                                 |
| VCCS, VCCD, GND                             |     3 | 2-pin headers (0.1" centers) Digi-Key S1012-36-ND                         |
| VCCS                                        |     1 | Shunt (installed) Digi-Key S9000-ND                                       |
| U1                                          |     1 | MAX3866E/D                                                                |
| None                                        |     2 | MAX3866 circuit boards, Rev. B                                            |
| None                                        |     1 | MAX3866 data sheet                                                        |
| None                                        |     1 | MAX3866 EV kit data sheet                                                 |
| None                                        |     3 | 0.5" spacers                                                              |
| None                                        |     6 | Screws for the spacers                                                    |

<!-- image -->

## Features

- ' Easy +3.3V or +5.0V Electrical Evaluation of MAX3866
- ' Evaluation of Adjustable Loss-of-Power (LOP)
- ' Fully Assembled and Tested
- ' EV Kit Designed for 50 Ω I/O Interface

## Ordering Information

| PART         | TEMP. RANGE    |
|--------------|----------------|
| MAX3866EVKIT | -40°C to +85°C |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-946-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Murata                | 814-237-1431 | 814-238-0490 |
| Zetex                 | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX3866 when ordering from these suppliers.

## Electrical Quick Start

- 1) Attach matched 50 Ω SMA cables from a 50 Ω oscilloscope to OUT+ and OUT-. Set the oscilloscope to 20mV/div and 200ps/div. A single-ended evaluation is  acceptable; however, the cable not terminated into the scope should be terminated with a 50 Ω load at the end of the cable.
- 2) Ensure that there is a shunt across the VCCS pins. (Remove shunt for 5.0V operation.)
- 3) Attach ground to either side of the GND 2-pin header and +3.3V (or +5.0V) to either side of the VCCD 2-pin header.
- 4) Connect a 50 Ω cable between the output of a 50 Ω source and the input of the EV kit. Set the source to produce a 2.0Vp-p, 2.5Gbps 1-0 pattern.
- 5) Adjust R9 and R6 to produce a DC current of 1mA (1mA = 2.0Vp-p / 1k Ω /  2)  through R7. This can be verified by checking for a 1V drop across R7.
- 6) Verify that the input pattern is present at the output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX3866 Evaluation Kit

## Adjustment and Control Description

| CONTROL   | NAME       | FUNCTION/MANIPULATION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VCCD      | VCCD       | Power-Supply Voltage. Both pins of this dual-pin header are the same point.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| VCCS      | VCCS       | Power-Supply Select Jumper. Do not apply any external voltages at this point. Both pins of this 2-pin header are not connected electrically. Depending on what the operating voltage is, either place a shunt at VCCS or remove the shunt from VCCS. When evaluating at 3.14V to 3.47V, ensure that there is a shunt on VCCS. If the evaluation voltage is 5.0V to 5.5V, remove this shunt and place a 100nF capacitor in location C8. (EV kit is shipped with 100nF in the C8 location; see Figure 1.) |
| J1        | INPUT      | Single-Ended Input, 3mVp-p to 2.5Vp-p range. This translates into a current of 3µA to 2.5mA, respectively (voltage at input) / (R3 = 1k Ω ). Note that the EV kit input is terminated for a 50 Ω source.                                                                                                                                                                                                                                                                                                |
| J4, J5    | OUTP, OUTM | Signal Outputs (AC-coupled). Note that the EV kit outputs are designed for 50 Ω termination.                                                                                                                                                                                                                                                                                                                                                                                                            |
| R1        | -          | Sets the LOP Threshold. For normal operation, Maxim recommends R8 + R1 = 510 Ω . However, if other values are desired, please refer to the Typical Operating Characteristics section (Assert/Deassert vs. R PD ) of the MAX3866 data sheet.                                                                                                                                                                                                                                                             |
| R6, R9    | -          | Micro and Macro Current Adjustment. Simulates the average DC current portion of a diode. The amount of current that should be set through these potentiometers is calculated by the formula (AC current into MAX3866) / 2 = DC bias current.                                                                                                                                                                                                                                                            |
| CR1       | DIODE      | LOP is active high. Therefore, when an LOP condition exists, the LED will be off.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| SJ2       | -          | Solder Jumper. For normal operation, ensure that this solder jumper is open.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| TP1       | LOP        | TTL Output, active high. Probe this test point only with a high-imped- ance lead.                                                                                                                                                                                                                                                                                                                                                                                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3866 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3866 Evaluation Kit

Figure 2.  MAX3866 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX3866 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX3866 EV Kit-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3866 Evaluation Kit

Figure 5.  MAX3866 EV Kit-Power Plane

<!-- image -->

Figure 6.  MAX3866 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7.  MAX3866 EV Kit-Bond Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3866 Evaluation Kit

NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

8

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1999 Maxim Integrated Products

© 1999 Maxim Integrated Products

© 1999 Maxim Integrated Products Printed USA

Printed USA

Printed USA

is a registered trademark of Maxim Integrated Products.

is a registered trademark of Maxim Integrated Products.

is a registered trademark of Maxim Integrated Products.