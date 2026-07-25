<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The  MAX3942  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides electrical evaluation of the MAX3942 10.7Gbps modulator driver. The outputs are interfaced to SMA connectors that can be connected to a 50 Ω terminated oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                               |   QTY | DESCRIPTION                                         |
|-------------------------------------------|-------|-----------------------------------------------------|
| C1                                        |     1 | 22 µ F ± 10% tantalum capacitor AVX TAJB226K010     |
| C2                                        |     1 | 10 µ F ± 10% tantalum capacitor AVX TAJA106K010     |
| C3                                        |     1 | 0.1 µ F ± 10% ceramic capacitor (0402)              |
| C10, C25, C26, C27, C28, C33              |     6 | 100pF ± 5% ceramic capacitors (0201)                |
| C22, C24, C29, C31, C42                   |     5 | 0.01 µ F ± 10% ceramic capacitors (0402)            |
| J5, J9                                    |     2 | SMB connectors, PC mount                            |
| J6, J16, J31 - J34                        |     6 | SMA connectors, edge mount, EF Johnson 142-0701-851 |
| JP1, JP3                                  |     2 | 3-pin headers, 0.1in centers                        |
| JP2, JP8, JP9, JP10                       |     4 | 2-pin headers, 0.1in centers                        |
| L1                                        |     1 | 47nH inductor (0402)                                |
| R1, R3                                    |     2 | 2k Ω variable resistors Bourns 3296W-202            |
| R2                                        |     1 | 1k Ω ± 5% resistor (0402)                           |
| R4                                        |     1 | 4.02k Ω ± 1% resistor (0402)                        |
| TP4, TP8, TP9, TP12, TP13, TP15, J10, J11 |     8 | Test points                                         |
| U4                                        |     1 | MAX3942ETG                                          |
| None                                      |     1 | MAX3942 EV kit circuit board, rev A                 |
| None                                      |     1 | MAX3942 EV kit data sheet                           |
| None                                      |     1 | MAX3942 data sheet                                  |
| None                                      |     7 | Shunts                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ SMA Connectors for All High-Speed I/Os
- ♦ Configured for Electrical Operation, No Laser Necessary
- ♦ Single -5.2V Power-Supply Operation
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3942EVKIT | -40°C to +85°C | 24 THIN QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3942 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3942  EV  kit  is  a  fully  assembled  and  factory tested  demonstration  board  that  enables  testing  of  all MAX3942 functions.

## Test Equipment Required

- -5.2V power supply with 300mA current capability
- Signal-source, 10Gbps minimum capability
- Oscilloscope with at least 15GHz performance

## Test Equipment Interface

Warning :  The data and clock  inputs  (DATA±,  CLK±)  are DC-coupled  to  the  SMA  connectors,  so  be  sure  to  set proper  common-mode  voltages  for  these  inputs.  The modulation  outputs  (OUT±)  are  also  DC-coupled  to  the SMA  connectors  and  require  a  50 Ω to  ground  load  for proper operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3942 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1)  If  the  data  is  to  be  latched,  place  shunt  on  JP8 (RTEN) to enable the clock inputs. Otherwise, leave it open.
- 2)  Install a jumper on JP2.
- 3)  Install a jumper on the right side of JP3. This allows adjustment of MODSET using R3.
- 4)  To use the pulse-width control (PWC) install a jumper on the lower two pins of JP1. To disable PWC place a jumper on the top two pins of JP1.
- 5)  Ensure that a jumper is not installed on JP9 (MODEN) and enable modulation.
- 6)  Connect  a  differential  signal  source  to  J34  (DATA+) and J33 (DATA-). Refer to the MAX3942 data sheet to determine voltage levels.
- 7)  If the latch is enabled, apply a differential clock signal to J2 (CLK+) and J31 (CLK-). Refer to the MAX3942 data sheet to determine voltage levels.
- 8) Connect a high-bandwidth  oscilloscope,  such  as  the Tektronix  CSA8000  with  80E01  sampling  heads,  to J16 (OUT+) and J6 (OUT-).
- 9) High-quality  SMA  attenuators  (14dB  or  20dB)  are required  to  reduce  the  signal  level  for  compatibility with the most sampling heads. The attenuators should be connected directly  to  the  output  SMA  connectors on the EV kit to minimize transmission line reflections.
- 10)  Attach  a  -5.2V  power  supply  to  J10  (GND)  and  J11 (VEE).    Set  the  current  limit  to  300mA  and  power  up the board.
- 11)  Adjust  R3  (MODSET)  until  the  desired  modulation swing is achieved.
- 12)  Adjust  R1  (PWC)  until  the  desired  pulse  width  is achieved (if PWC is enabled, see step 5).
- 13)  If desired, place a shunt on JP10 (PLRT) to invert the output data polarity.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Adjustments and Control Descriptions

| COMPONENT   | NAME     | FUNCTION                                                                                                                                                                                                                      |
|-------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP1         | PWC      | This jumper enables/disables the pulse-width-control circuitry. Place a shunt on the top two pins to disable the PWC circuitry. Place a shunt on the bottom two pins to enable the PWC circuitry.                             |
| JP3         | MODSET   | Place a jumper on the right-hand side of this jumper to connect the R MODSET potentiometer to the MAX3942. Place a jumper on the left-hand side of this jumper to connect the MODSET pin to the SMB connector for AC testing. |
| JP8         | RTEN     | Enables/disables data retiming. Shunt to enable data retiming. Remove shunt for direct data transmission.                                                                                                                     |
| JP9         | MODEN    | Enables/disables modulation output. Shunt to disable switching of the data output. When shunted, the output goes to the absorbtive (logic 0) state. Remove shunt to enable modulation.                                        |
| JP10        | PLRT     | Enables/disables the polarity inversion function. Shunt to invert the polarity of the output data. Shunting this jumper shorts the PLRT pin to V EE . Leave open for normal operation.                                        |
| R1          | R PWC    | Adjusts the EAM pulse width. Turn the potentiometer screw counter-clockwise to increase the logic 1 width.                                                                                                                    |
| R3          | R MODSET | Adjusts the EAM modulation current. Turn the potentiometer screw clockwise to increase the modulation amplitude (decrease the resistance of MODSET to GND).                                                                   |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3942 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3942 Evaluation Kit

Figure 2. MAX3942 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3942 EV Kit PC Board Layout-Ground Plane

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3942 Evaluation Kit

Figure 5. MAX3942 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3942 Evaluation Kit

Figure 6. MAX3942 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_