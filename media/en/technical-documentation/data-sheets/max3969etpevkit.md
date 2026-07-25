<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The MAX3969 evaluation kit (EV kit) is a fully assembled and tested demonstration board for the MAX3969 limiting amplifier.  The  EV  kit  allows  easy  programming  of  the power-detect threshold, is designed for 50 Ω test interfaces, and  provides layout options for alternate output terminations.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION          |   QTY | DESCRIPTION                                         |
|----------------------|-------|-----------------------------------------------------|
| C1, C10, C20         |     3 | 0.1 μ F ± 10% ceramic capacitors (0402)             |
| C2, C3, C4           |     3 | 0.01 μ F ± 5% ceramic capacitors (0402)             |
| C5                   |     1 | 0.027 μ F ± 10% ceramic capacitor (0603)            |
| C6, C26              |     2 | 33 μ F ± 10% tantalum capacitors AVX TAJB336K010R   |
| C7, C27              |     2 | 3.3 μ F ± 10% ceramic capacitors (0805)             |
| J1-J4                |     4 | SMA connectors (edge mount) EF Johnson 142-0701-801 |
| J5, J6, J7, TP1-TP13 |    16 | Test points Digi-Key 5000K-ND                       |
| JU2, JU4, JU6        |     3 | 2-pin headers, 0.1in centers Digi-Key S1012-36-ND   |
| JU2, JU4, JU6        |     3 | Shunts Digi-Key S9000-ND                            |
| L1, L2               |     2 | 1.2 μ H inductors Coilcraft 1008LS-122XJBC          |
| R1                   |     1 | 10k Ω ± 5% resistor (0402)                          |
| R2, R3, R10          |     3 | Not installed                                       |
| R6                   |     1 | 10k Ω variable resistor                             |
| R7                   |     1 | 200k Ω variable resistor                            |
| R8                   |     1 | 100k Ω ± 5% resistor (0402)                         |
| R11, R12             |     2 | 84.5 Ω ± 1% resistors (0402)                        |
| R5, R24, R25         |     3 | 49.9 Ω ± 1% resistors (0402)                        |
| R27, R28             |     2 | 4.7k Ω ± 5% resistors (0402)                        |
| R29, R30             |     2 | 0 Ω ± 5% resistors (0402)                           |
| SB9                  |     1 | Solder bridge, open                                 |
| U1                   |     1 | MAX3969ETP 20-pin Thin QFN                          |
| None                 |     1 | MAX3969ETP EV kit circuit board, Rev B              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- ♦ Easy +2.97V to +5.5V Electrical Evaluation
- ♦ Fully Assembled and Tested
- ♦ Easy Power-Detect Threshold Programming
- ♦ Designed for 50 Ω Test Interfaces
- ♦ Allows Alternate Output Terminations

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP RANGE         | IC PACKAGE   |
|-----------------|--------------------|--------------|
| MAX3969ETPEVKIT | -40 ° C to +85 ° C | 20 Thin QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 800-344-4539 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3969 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Remove the shunt from JU4 and place shunts on JU2 and JU6.
- 2) Apply  a  155Mbps  differential  signal  (4mVP-P  to 1.5VP-P) between SMA connectors J3 (IN-) and J4 (IN+).
- 3) Connect  an  oscilloscope  with  50 Ω terminations  to SMA connectors J1 (OUT-) and J2 (OUT+). (To avoid overloading the oscilloscope, use 20dB of attenuation between the outputs and the oscilloscope inputs.)
- 4) Connect a +2V power supply to J5 (VCC), a -0.97V to  -3.5V  power supply to J7 (VEE), and the powersupply ground to J6 (GND).
- 5) Monitor LOS by connecting a voltage meter between TP13 and TP6.
- 6) Adjust the power-detect threshold with R6 and R7.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3969 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The MAX3969  EV  kit simplifies evaluation of the MAX3969  limiting  amplifier.  The  EV  kit  provides  the external components  necessary  to  evaluate  all the MAX3969 functions.

## Setting the Power-Detect Threshold

Jumpers JU4 and JU6 control the resistor  used  to  set the power-detect threshold. To use the variable resistors R6 and R7, place a shunt on JU6 and remove the shunt from JU4. If a fixed resistor is required, solder a resistor to R10, remove the shunt from JU6, and place a shunt on JU4.

## Enabling Squelch Function

Jumper JU2 controls the squelch function. Place a shunt on JU2 to enable squelch. Remove the shunt from JU2 to disable squelch.

## Monitoring RSSI Output

Test point TP1 provides access to the received-signalstrength-indicator (RSSI). Monitor RSSI by connecting a voltage meter between TP1 and TP6.

## Monitoring LOS Outputs

The EV kit provides 4.7k Ω pullup resistors for the LOS outputs.  Monitor  LOS  by  connecting  a  voltage  meter between TP13 and TP6. Monitor LOS by  connecting a voltage meter between TP7 and TP6.

## Data-Input Terminations

The EV kit has a 100 Ω differential-input  termination.  If the input is driven single-ended, terminate both sides of the input  with  50 Ω to  ground  by  shorting  solder  bridge SB9.

## PECL-Output Terminations

The  data  outputs  (OUT+,  OUT-)  and  signal  detect output  (SD)  are  PECL  compatible  and  any  standard termination technique can be used. Figure 1 illustrates typical DC and AC terminations.

Monitor OUT+ and OUTwith a 50 Ω -terminated oscilloscope. To avoid overloading the oscilloscope, use 20dB of attenuation  between  the  data  outputs  and  the oscilloscope inputs.

Monitor  the  SD  output  by  connecting  a  voltage  meter between  TP12  and  TP11.  This  will  provide  the  output voltage relative to VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. PECL-Output Terminations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX3969 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX3969 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX3969 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 4. MAX3969 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX3969 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3969 Evaluation Kit

Figure 7. MAX3969 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Revision History

Rev 1; 3/05:

Changed PCB in BOM to Rev B (page 1); updated Figures 3 and 5 (page 5).

Rev 2; 6/07:

Changed part number in Ordering Information table from MAX3969EVKIT to MAX3969ETPEVKIT (page 1).

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_