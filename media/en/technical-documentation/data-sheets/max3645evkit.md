<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The MAX3645 evaluation kit (EV kit) simplifies evaluation of the MAX3645 limiting amplifier. The EV kit allows easy programming  of  the  loss-of-signal  (LOS)  threshold  and provides layout options for alternate output terminations.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                |
|-------------------|-------|------------------------------------------------------------|
| C1, C2            |     2 | 33 µ F ± 10% tantalum capacitors AVX TAJB336K010R          |
| C3, C4            |     2 | 3.3 µ F ± 10% ceramic capacitors (0805)                    |
| C5-C9, C12, C13   |     7 | 0.1 µ F ± 10% ceramic capacitors Murata GRP155R61A104K     |
| C11               |     1 | 1000pF ± 10% ceramic capacitor Murata GRP155R71H102K       |
| J1, J2, J5, J6    |     4 | SMA connectors (edge mount) EF Johnson 142-0701-801        |
| J3, J4, J9        |     3 | Test points Digi-Key 5000K-ND                              |
| JU1               |     1 | 2 × 5-pin header block, 0.1in centers Digi-Key S1012-36-ND |
| JU2-JU4           |     3 | 2-pin headers, 0.1in centers                               |
| JU1-JU4           |     4 | Shunts Digi-Key S9000-ND                                   |
| L1, L2            |     2 | 1.2 µ H inductors Coilcraft 1008CS-122XJBC                 |
| R1, R2            |     2 | 84.5 Ω ± 1% resistors (0402)                               |
| R3                |     1 | 5k Ω variable resistor Digi-Key 3296W-1-502-ND             |
| R4                |     1 | 100 Ω ± 1% resistor (0402)                                 |
| R5                |     1 | 1k Ω ± 1% resistor (0402)                                  |
| R6                |     1 | 2k Ω ± 1% resistor (0402)                                  |
| R8, R9            |     2 | 49.9 Ω ± 1% resistors (0402)                               |
| R13, R15          |     2 | 49.9 Ω ± 1% resistors (0805)                               |
| R19, R21          |     2 | Not installed                                              |
| SB1               |     1 | Solder bridge, open                                        |
| TP1-TP3, TP9-TP11 |     6 | Test points Digi-Key 5000K-ND                              |
| U1                |     1 | MAX3645ESE 16-pin SOIC (MAX3645ESEEVKIT)                   |
| U1                |     1 | MAX3645EEE 16-pin QSOP (MAX3645EEEEVKIT)                   |
| None              |     1 | MAX3645ESE EV kit circuit board, Rev A (MAX3645ESEEVKIT)   |
| None              |     1 | MAX3645EEE EV kit circuit board, Rev A (MAX3645EEEEVKIT)   |
| Z1, Z2            |     2 | 0 Ω resistors (0402)                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- ♦ Easy +2.97V to +5.5V Electrical Evaluation
- ♦ Fully Assembled and Tested
- ♦ Easy LOS Threshold Programming
- ♦ Designed for 50 Ω Test Interfaces
- ♦ Allows Alternate Output Terminations

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP RANGE         | IC PACKAGE   |
|-----------------|--------------------|--------------|
| MAX3645ESEEVKIT | -40 ° C to +85 ° C | 16 SOIC      |
| MAX3645EEEEVKIT | -40 ° C to +85 ° C | 16 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 800-344-4539 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3645 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Place a shunt on JU3 and remove shunts from JU2 and JU4.
- 2) Set the threshold resistor  (RTH) to 100 Ω by placing a shunt at position 4 of JU1.
- 3) Connect a +2V power supply to J3 (VCC), a -1.3V power  supply  to  J9  (VEE),  and  the  power  supply ground to J4 (GND).
- 4) Apply a 155Mbps differential signal (10mVP-P) between SMA connectors J1 (DIN+) and J2 (DIN-).
- 5) Connect  an  oscilloscope  with  50 Ω terminations  to SMA  connectors  J5  (DOUT-)  and  J6  (DOUT+). (To avoid overloading the oscilloscope, use 20dB of attenuation between the outputs and the oscilloscope inputs.)
- 6) Monitor LOS by connecting a voltage meter to TP9.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3645 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3645 EV kit is  a fully  assembled  and  factory tested  demonstration  board  that  enables  testing  of  all MAX3645 functions.

## Setting the LOS Threshold Resistor

Jumper  bank  JU1  is  used  to  select  the  value  of  the threshold  resistor  (RTH).  Position  1  connects  to  the potentiometer  R3  that  can  be  set  to  any  resistance value between 0 Ω and 5k Ω . Positions 2-5 provide fixed resistance settings of 2k Ω , 1k Ω , 100 Ω , 0 Ω respectively.

## Automatic Squelch

Placing a shunt on JU3 enables automatic squelch. This jumper  connects  the  LOS  output  directly  to  the  DIS input.  If  the  data  input  signal  drops  below  the  LOS assert  level  the  outputs  are automatically  disabled. When  the  data  input  signal  returns  above  the  LOS deassert level the outputs are enabled.

## DC-Offset Correction

The DC offset correction is disabled when a shunt is on JU2. For normal operation, leave JU2 open.

## Data Input Terminations

The EV kit has a 100 Ω differential  input  termination.  If the input is driven single-ended, terminate both sides of the input with 50 Ω to  ground  by  shorting  solder  bridge SB1.

## PECL Output Terminations

The outputs of the MAX3645 are PECL compatible and any standard DC or AC termination can be used. Figure 1 illustrates typical DC and AC terminations.

When the data outputs are AC-coupled a shunt can be put  on  JU4  to  short  VEE  to  ground.  Otherwise  JU4 should be left open.

To  avoid  overloading  the  oscilloscope,  use  20dB  of attenuation between the data outputs and the oscilloscope inputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3645 Evaluation Kit

Figure 1. PECL Output Terminations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3645 Evaluation Kit

Figure 2.  MAX3645 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3645 Evaluation Kit

<!-- image -->

<!-- image -->

Figure 3. MAX3645ESE EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX3645ESE EV Kit PC Board Layout-Ground Plane

Figure 4. MAX3645ESE EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX3645ESE EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3645 Evaluation Kit

Figure 7. MAX3645ESE EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 9. MAX3645EEE EV Kit PC Board LayoutComponent Side

<!-- image -->

6

Figure 8. MAX3645EEE EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 10. MAX3645EEE EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3645 Evaluation Kit

Figure11. MAX3645EEE EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure12. MAX3645EEE EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7