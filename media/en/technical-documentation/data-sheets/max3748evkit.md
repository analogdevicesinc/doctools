<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_ General Description

The MAX3748 evaluation kit (EV kit) simplifies evaluation of the MAX3748 limiting amplifier.   The EV kit allows for quick threshold level selections, provides a RSSI output signal  (when  used  with  the  MAX3744)  and  includes  a calibration circuit. The MAX3748 EV kit is fully assembled and tested.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                          | Q T   | DESCRIPTION                                    |
|--------------------------------------|-------|------------------------------------------------|
| C1, C2, C7, C10                      | 4     | 0.001 µ F 10% 10V min ceramic capacitor (0201) |
| C3, C4, C6, C8, C9, C11, C12 C14-C18 | 1 2   | 0. 1 µ F, 10% 10V min ceramic capacitor (0402) |
| C20                                  | 1     | 2.2 µ F, 10%, 10V min ceramic capacitor (0805) |
| C21                                  | 1     | 33 µ F 10V min 5% tantalum                     |
| R3                                   |       | 82 Ω , 5% resistor (0201)                      |
| R4                                   | 1     | 270 Ω , 5% resistor (0201)                     |
| R5                                   | 1     | 20k Ω , 1% resistor (0401)                     |
| R6                                   | 1     | 4.75k Ω , 1% resistor (0402)                   |
| R7                                   | 1     | 10k Ω , 1% resistor (0402)                     |
| R8                                   | 1     | 3.01k Ω , 1% resistor (0402)                   |
| L1                                   | 1     | 1.2 µ H, 5% Chip inductor                      |
| JU2-JU5, JU9, JU11                   | 6     | Jumper blocks, 2 Pins 0.1' spacing             |
| JU6, JU7, JU8                        | 3     | Jumper blocks, 3 Pins 0.1'                     |
| TP2, TP3, TP9, TP10                  | 4     | Test point Digikey 5000K- ND                   |
| JU2-JU9, JU11                        | 9     | Shunts                                         |
| J1-J8                                | 8     | SMA edge mount tab Johnson 142-0701-851        |
| U1                                   |       | MAX3748EGE                                     |
|                                      | 1     | MAX3748 Rev A Evaluation Circuit Board         |
|                                      | 1     | MAX3748 Data Sheet                             |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ Test Point for Easy Monitoring of LOS
- ♦ Polarity Reversal Control
- ♦ Selectable Offset Correction Loop Capacitance
- ♦ Jumpers Allow Quick Selection for Loss of Signal Threshold Level

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3748EVKIT | -40 ° C to +85 ° C | 16 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note:  Please  indicate  that  you  are  using  the  MAX3748 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX3748 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Connect  OUT+  and  OUT-  to  a  50 Ω terminated oscilloscope.
- 2) Connect  IN+ and INto a  500mVP-P,  3.2Gbps differential data stream.
- 3) Remove all shunts.
- 4) Shunt  JU8  to  VCC so  that  there  is  no  inversion  of signal polarity. (OUTPOL, VCC). Figure 2 shows the jumper diagram for the board.
- 6) Shunt JU6 connecting R7 = 10k Ω (RLOS).
- 5) Shunt JU4 connecting R3 = 82 Ω (RTH).
- 7) Shunt JU5 connecting pin LOS to DISABLE.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) Connect TP2 to VCC.
- 9) Shunt  jumper  JU11  so  that  the  capacitor  C12  is connected to pins CAZ1 and CAZ2.
- 10)  Connect  the  power-supply  ground  to  the  GND  pad and then connect a +3.3V power supply to the VCC.
- 11)  Observe a limited signal at the output, roughly 0.8V p-p .
- 12)  Lower the amplitude of the input signal from 500mVp-p    to  15mVp-p  or  less.  The  output  signal  is squelched.

## Adjustment and Control Descriptions (see Quick Start first)

| NAME          | FUNCTION                                                                                                      |
|---------------|---------------------------------------------------------------------------------------------------------------|
| JU2, JU3, JU4 | Selects loss of signal assert/deassert level.                                                                 |
| JU5           | Shunt to connect the LOS pin to the DISABLE pin (Squelch)                                                     |
| JU6           | Shunt to connect series resistor from LOS to test point TP2. Make sure TP2 is connected to a positive supply. |
| JU7           | Disable. Shunting to V CC holds the outputs static.                                                           |
| JU8           | Shunt to GNDto reverse the output signal's polarity (OUTPOL). For normal operation, shunt to V CC .           |
| JU9           | Shunt to connect RSSI output to RSSI resistor R8.                                                             |
| JU11          | Shunt to connect C12 to CAZ1 and CAZ2                                                                         |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 2. Jumper Diagram.

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 3. MAX3748 EV Kit Component Placement Guide - Component Side (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 4.  MAX3748 EV Kit PC Board Layout - Component Side (2X)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 5. MAX3748 EV Kit PC Board Layout - Ground Plane (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 6. MAX3748 EV Kit PC Board Layout - Power Plane (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748 Evaluation Kit

Figure 7.  MAX3748 EV Kit PC Board Layout - Solder Side (2X)

<!-- image -->

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications.  All operation parameters, including 'typicals' must be validated for each customer application by customer's technical experts.  Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9