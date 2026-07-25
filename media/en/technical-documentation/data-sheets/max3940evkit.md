<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The  MAX3940  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides electrical evaluation of the  MAX3940  10.7Gbps  laser  driver.  The  output  of  the electrical  evaluation  section  is  interfaced  to  an  SMA connector  that  can  be  connected  to  a  50 Ω terminated oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                                        |
|-------------------|-------|------------------------------------------------------------------------------------|
| C0, C1, C10, C11  |     4 | 0.01 µ F ± 10% ceramic capacitors (0402)                                           |
| C2, C6            |     2 | 30pF chip MIS capacitors Metelics Corporation, 30 mils × 30mils, MC2-S-030-020-020 |
| C3                |     1 | 22 µ F ± 10% tantalum capacitor AVX TAJB226K010                                    |
| C4                |     1 | 10 µ F ± 10% tantalum capacitor AVX TAJA106K010                                    |
| C5                |     1 | 0.1 µ F ± 10% ceramic capacitor (0402) Murata GRP155R61A104K                       |
| J1-J7             |     7 | SMA connectors, edge mount, EF Johnson 142-0701-851                                |
| J10, J11, TP1     |     3 | Test points, Digi-Key 5000K-ND                                                     |
| J12, J13          |     2 | SMB connectors, PC mount                                                           |
| JU1-JU3, JU5, JU8 |     5 | 2-pin headers, 0.1in centers Digi-Key S1012-36-ND                                  |
| JU4, JU6, JU7     |     3 | 3-pin headers, 0.1in centers Digi-Key S1012-36-ND                                  |
| JU1- JU8          |     8 | Shunts, Digi-Key S9000-ND                                                          |
| L0                |     1 | 47nH inductor (0402)                                                               |
| R0-R2             |     3 | 2k Ω variable resistors Bourns 3296W-202                                           |
| R3                |     1 | 4.2k Ω ± 1% resistor (0402)                                                        |
| R4                |     1 | 2k Ω ± 1% resistor (0402)                                                          |
| R5                |     1 | Not installed                                                                      |
| U1                |     1 | MAX3940E/D die                                                                     |
| None              |     1 | MAX3940 EV kit circuit board, rev A                                                |
| None              |     1 | MAX3940 EV kit data sheet                                                          |
| None              |     1 | MAX3940 data sheet                                                                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ SMA Connectors for All High-Speed I/Os
- ♦ Configured for Electrical Operation, No Laser Necessary
- ♦ Single -5.2V Power-Supply Operation
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE    |
|--------------|----------------|---------------|
| MAX3940EVKIT | -40°C to +85°C | Chip on board |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3940 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3940  EV  Kit  is  a  fully  assembled  and  factory tested  demonstration  board  that  enables  testing  of  all MAX3940 functions.

## Test Equipment Required

- -5.2V power supply with 300mA current capability
- Signal-source, 10Gbps minimum capability
- Oscilloscope with at least 15GHz performance

## Test Equipment Interface

The data and clock inputs (DATA±, CLK±) are DC-coupled to the SMA connectors, so be sure to set proper commonmode voltages for these inputs. The combination bias and modulation output (OUT) is also DC-coupled to the SMA connector  and  requires  a  50 Ω to  ground  load  for  proper operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1)  If  the  data  is  to  be  latched,  place  shunt  on  JU2 ( RTEN )  to  enable  the  clock  inputs.  Otherwise,  leave JU2 open.
- 2)  Install jumpers on JU5 and JU8.
- 3)  Install  a  jumper  on  the  left  'DC'  side  of  JU6.  This allows adjustment of MODSET.
- 4)  Install  a  jumper  on  the  right  'DC'  side  of  JU7.  This allows adjustment of BIASSET.
- 5)  To use the pulse-width control (PWC) install a jumper on  the  right  side  of  JU4.  To  disable  PWC  place  a jumper on the left 'GND' side of JU4.
- 6)  Ensure that a  jumper is not installed  on  JU3  to  float MODEN and enable modulation.
- 7)  Adjust R1 to the full counter-clockwise position.  This will minimize modulation swing.
- 8)  Adjust  R2  to  the  full  clockwise  position.    This  will minimize bias voltage.
- 9)  Adjust R0 to the approximate center of its adjustment range (if PWC is enabled).
- 10)  Connect  a  differential  signal  source  to  J2  (DATA+) and J3 (DATA-). Refer to the MAX3940 data sheet to determine voltage levels.
- 11)  If the latch is enabled, apply a differential clock signal to  J4  (CLK+)  and  J5  (CLK-).  Refer  to  the  MAX3940 data sheet to determine voltage levels.
- 12)  Connect  a  high-bandwidth  oscilloscope  such  as  the Tektronix CSA8000 with the 80E01 sampling head to J1 (OUT).
- 13)  A  high-quality  SMA  attenuator  (14dB  or  20dB)  is required  to  reduce  the  signal  level  for  compatibility with  the  sampling  head.  The  attenuator  should  be connected  directly  to  the  output  SMA  connector  on the EV kit to minimize transmission line reflections.
- 14)  Attach  a  -5.2V  power  supply  to  VEE  and  GND.    Set the current limit to 300mA and power up the board.
- 15)  Adjust  R1  clockwise  until  the  desired  modulation swing is achieved.
- 16)  Adjust  R2  counter-clockwise  until  the  desired  bias voltage is achieved.
- 17)  Adjust R0 until the desired pulse width is achieved (if PWC is enabled).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Adjustments and Control Descriptions

| COMPONENT   | NAME      | FUNCTION                                                                                                                                                                              |
|-------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1         | PLRT      | Enables/disables the polarity inversion function. Shunt JU1 to invert the polarity of the output data. Shunting JU1 shorts the PLRT pin to V EE . Leave open for normal operation.    |
| JU2         | RTEN      | Enables/disables data retiming. Shunt to enable data retiming. Remove shunt for direct data transmission.                                                                             |
| JU3         | MODEN     | Enables/disables modulation output. Shunt to disable switching of the data output. When shunted the output goes to the absorbtive (logic 0) state. Remove shunt to enable modulation. |
| R1          | R MODSET  | Adjusts the EAM modulation current. Turn the potentiometer screw clockwise to increase the modulation amplitude (decrease the resistance of MODSET to GND).                           |
| R2          | R BIASSET | Adjusts the EAM bias current. Turn the potentiometer screw counter-clockwise to increase bias current (decrease the resistance from BIASSET to GND).                                  |
| R0          | R PWC     | Adjusts the EAM pulse width. Turn the potentiometer screw clockwise to increase the logic 1 width.                                                                                    |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

Figure 1.  MAX3940 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

Figure 2. MAX3940 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3940 EV Kit PC Board Layout-Ground Plane

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

Figure 4. MAX3940 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3872/MAX3874 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

Figure 6. MAX3872/MAX3874 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_