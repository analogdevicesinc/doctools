<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## General Description

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

The  MAX3967A  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides complete electrical or optical evaluation of the MAX3967A.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                        |
|-------------------------|-------|--------------------------------------------------------------------|
| C1                      |     1 | 10 µ F ± 10% tantalum capacitor (B case)                           |
| C2                      |     1 | 0.1 µ F ± 5% ceramic capacitor (0603)                              |
| C4, C7, C8              |     3 | 0.01 µ F ± 5% ceramic capacitors (0603)                            |
| C5, C6, C9, C11         |     4 | 0.22F ± 5% ceramic capacitors (0603)                               |
| D1                      |     1 | LED, user supplied                                                 |
| J1 - J4                 |     4 | SMA side mount connectors, tab contact                             |
| JU1, JU2, JU9           |     3 | 3-pin headers, 0.1in centers                                       |
| JU3, JU4, JU5, JU7, JU8 |     5 | 2-pin headers, 0.1in centers                                       |
| L1                      |     1 | 1 µ H inductor 1008CS-102xjb                                       |
| L2                      |     1 | Ferrite bead (0603) Murata BLM18PG300SN1                           |
| Q1                      |     1 | Zetex FMMT591A PNP transistor (SOT-23)                             |
| R1                      |     1 | 100k Ω variable resistor BOURNS 3296W-1-104 DIGI-KEY3296W-1-104-ND |
| R2                      |     1 | 4.99 Ω ± 1% resistor (0603)                                        |
| R3, R4                  |     2 | 453 Ω resistors (0603)                                             |
| R5                      |     1 | 1.0k Ω ± 1% resistor (0603)                                        |
| R6                      |     1 | 698 Ω ± 1% resistor (0603)                                         |
| R7                      |     1 | 5k Ω variable resistor DIGI-KEY3296W-1-502-ND                      |
| R8, R9                  |     2 | 82.5 Ω ± 1% resistors (0603)                                       |
| R10, R12                |     2 | 121 Ω ± 1% resistors (0603)                                        |
| R11                     |     1 | 49.9 Ω ± 1% resistor (0603)                                        |
| R13                     |     1 | 20.0k Ω ± 1% resistor (0603)                                       |
| TP1-3, TP7              |     4 | Test pointsDIGI-KEY 5000K-ND                                       |
| U1                      |     1 | MAX3967AETG                                                        |
| None                    |     8 | Shunts DIGIKEY 9000-ND                                             |
| None                    |     1 | MAX3967A EV board, rev B                                           |

- Fully Assembled and Tested
- Single +3.3V Power Supply Operation
- AC-Coupling Provided On-Board
- Allows Electrical or Optical Evaluation

\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART          | TEMP RANGE     | IC-PACKAGE   |
|---------------|----------------|--------------|
| MAX3967AEVKIT | -40°C to +85°C | 24 Thin QFN  |

\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Zetex      | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX3967A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

QuickStart

## Electrical Evaluation

For electrical evaluation of the MAX3967A, configure the evaluation kit as follows:

- 1) Remove all jumpers if there  are  any.  Then  reinstall JU3 and JU4.
- 2) To enable the output, connect TX\_DISABLE to GND by placing a shunt on the right side of JU9, or leave JU9 open.
- 3) Connect an oscilloscope to JU1 and JU2 (OUT+ and OUT-)  using  50 Ω cables and  50 Ω oscilloscope terminations.
- 4) Using  a  multimeter  on  the  right  side  of  JU8  and ground,  adjust  the  potentiometer  R7  to  be  300 Ω . Attach  MODSET  to  the  potentiometer  by  placing  a jumper on JU8.
- 5) Install  a  shunt  on  jumper  the  right  side  of  JU1 (TCNOM). See Figure 7 for jumper table.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3967A Evaluation Kit

- 6) Apply a differential signal to J4 (IN+) and J3 (IN-) with 1V  differential  signal  amplitude  and  100Mbps  data rate.
- 7) Adjust the oscilloscope vertical gain of both channels to  10mV/div.  Set  the  oscilloscope  to  display  the differential signal [(OUT+) - (OUT-)].
- 8) Attach  a  3.3V  power  source  to  the  VCC  and  GND terminals  (J6  and  J10).  Set the current limit to 300mA.
- 9) Place an  ammeter  across JU7 to measure  the  IMON current.
- 10)  The  output  signal  is  approximately  40mVp-p.  Adjust R7 to vary the level of the signal.

## Optical Evaluation

For  optical  evaluation  of  the  MAX3967A,  configure  the evaluation kit as follows:

- 1) Remove resistor R2 from the evaluation kit.
- 2) Disconnect cables from J1 (OUT+) and J2 (OUT-).
- 3) Solder  LED  onto  socket  D1,  see  the  Figure  1  for socket layout.   Connect the anode to OUT- and the cathode to OUT+.
- 4) Attach  MODSET  to  the  potentiometer  by  placing  a jumper on JU8.
- 5) Install a shunt on jumper the right side of JU1 to set the tempco to 'nominal' (TC connected to TCNOM).
- 6) Connect output of LED to an optical-to-electrical  (Oto-E) converter and connect the output of the O-to-E to an oscilloscope.
- 7) Apply a differential signal to J4 (IN+) and J3 (IN-) with 1V  differential  signal  amplitude  and  100Mbps  data rate.
- 8) Attach  a  3.3V  power  source  to  the  VCC  and  GND terminals  (J6  and  J10).  Set the current limit to 300mA.
- 9) To enable the output, connect TX\_DISABLE to GND by placing a shunt on the right side of JU9, or leave JU9 open.

## Table 1. Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME       | FUNCTION                                                                                                                                                                                                                 |
|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | LED        | D1 is a socket for an LED in a TO-46 header. Remove R2 before inserting an LED into socket D1.                                                                                                                           |
| JU1         | TCNOM      | JU1 connects TC to either TCNOM or TCMIN. Place a jumper on the right two pins to connect TC to TCNOM. Place a jumper on the left two pins to connect TC to the jumper JU2.                                              |
| JU2         | TCMIN      | JU1 must have the left two pins shorted in order for JU2 to be operable. JU2 will connect TC directly to TCMIN when the right two pins are shorted or connect TC to TCMIN through R1 when the left two pins are shorted. |
| JU3         | PB1        | Shorting JU3 connects PB1 to ground. See MAX3967A data sheet, table 1.                                                                                                                                                   |
| JU4         | PB2        | Shorting JU4 connects PB2 to ground. See MAX3967A data sheet, table 1.                                                                                                                                                   |
| JU5         | PB3        | Shorting JU5 connects PB3 to ground. See MAX3967A data sheet, table 1.                                                                                                                                                   |
| JU7         | MON        | JU7 connect MONto ground through a 1k Ω resistor.                                                                                                                                                                        |
| JU8         | MODSET     | Place a jumper on JU8 to connect MODSETto potentiometer R7.                                                                                                                                                              |
| JU9         | TX_DISABLE | Enables/disables the output modulation. Shunt across the left two pins of JU9 to force a static zero at the outputs. TX_DISABLE has an internal pull down resistor to enable the part when this pin is left open.        |
| R1          | R TC       | When the left two pins of JU1 and JU2 have been shorted this potentiometer is used to set the tempco of the modulation current.                                                                                          |
| R7          | R MODSET   | When JU8 is shunted, R7 allows adjustment of the LED modulation- current amplitude.                                                                                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3967A Evaluation Kit

Figure 1. MAX3967A EV Kit Schematic

<!-- image -->

## MAX3967A Evaluation Kit

<!-- image -->

Figure 2. MAX3967A EV Kit PC Component Placement Guide - Component Side

<!-- image -->

\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3967A Evaluation Kit

Figure 4. MAX3967A EV Kit PC Board Layout - Ground Plane.

<!-- image -->

Figure 5. MAX3967A EV Kit PC Board Layout - Power Plane.

<!-- image -->

\_\_\_\_

## MAX3967A Evaluation Kit

Figure 6. MAX3967A EV Kit PC Board Layout - Solder Side..

<!-- image -->

| Temperature Coefficient   | JU1   | JU2   |
|---------------------------|-------|-------|
| Nominal TempCo            | BC    | open  |
| Minimum Temp Co           | AB    | EF    |
| MaximumTempCo             | open  | open  |

Figure 7. Temperature Coefficient Jumper Table.

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_