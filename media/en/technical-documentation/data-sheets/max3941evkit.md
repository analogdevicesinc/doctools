<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The  MAX3941  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides electrical evaluation of the MAX3941  10.7Gbps  EAM  driver.  The output is interfaced to an SMA connector that can be connected to a 50 Ω terminated oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                           |   QTY | DESCRIPTION                                         |
|---------------------------------------|-------|-----------------------------------------------------|
| C1                                    |     1 | 22 µ F ± 10% tantalum capacitor AVX TAJB226K010     |
| C2                                    |     1 | 10 µ F ± 10% tantalum capacitor AVX TAJA106K010     |
| C3                                    |     1 | 0.1 µ F ± 10% ceramic capacitor (0402) Murata       |
| C6, C12, C13, C15, C20                |     5 | 100pF ± 5% ceramic capacitors (0201) Murata         |
| C8, C11, C16, C17, C18, C42           |     6 | 0.01 µ F ± 10% ceramic capacitors (0402)            |
| J1 - J4, J7                           |     5 | SMA connectors, edge mount, EF Johnson 142-0701-851 |
| J5, J8, J9                            |     3 | SMB connectors, PC mount                            |
| JP1, JP3, JP5                         |     3 | 3-pin headers, 0.1in centers                        |
| JP2, JP4, JP6, JP7                    |     4 | 2-pin headers, 0.1in centers                        |
| L1                                    |     1 | 47nH inductor (0402)                                |
| L2                                    |     1 | 3.3nH inductor (0201)                               |
| R1, R3, R5                            |     3 | 2k Ω variable resistors Bourns 3296W-202            |
| R2, R9                                |     2 | 1k Ω ± 5% resistors (0402)                          |
| R4                                    |     1 | 4.02k Ω ± 1% resistor (0402)                        |
| R6                                    |     1 | 2k Ω ± 1% resistor (0402)                           |
| TP1 - TP4, TP13, TP14, TP15, J10, J11 |     9 | Test points                                         |
| U1                                    |     1 | MAX3941ETG                                          |
| None                                  |     1 | MAX3941 EV kit circuit board, rev A                 |
| None                                  |     1 | MAX3941 EV kit data sheet                           |
| None                                  |     1 | MAX3941 data sheet                                  |
| None                                  |     7 | Shunts                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ SMA Connectors for All High-Speed I/Os
- ♦ Configured for Electrical Operation, No Laser Necessary
- ♦ Single -5.2V Power-Supply Operation
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3941EVKIT | -40°C to +85°C | 24 THIN QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3941 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3941  EV  kit  is  a  fully  assembled  and  factory tested  demonstration  board  that  enables  testing  of  all MAX3941 functions.

## Test Equipment Required

- -5.2V power supply with 300mA current capability
- Signal-source, 10Gbps minimum capability
- Oscilloscope with at least 15GHz performance

## Test Equipment Interface

Warning :  The data and clock  inputs  (DATA±,  CLK±)  are DC-coupled  to  the  SMA  connectors,  so  be  sure  to  set proper  common-mode  voltages  for  these  inputs.  The combination bias and modulation output (OUT) is also DCcoupled  to  the  SMA  connector  and  requires  a  50 Ω to ground load for proper operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3941 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1)  If the data is to be latched, place shunt on JP7 ( RTEN ) to enable the clock inputs. Otherwise, leave it open.
- 2)  Install a jumper on JP2.
- 3)  Install a jumper on the right side of JP3. This allows adjustment of MODSET using R3.
- 4)  Install  a  jumper  on  the  left  side  of  JP5.  This  allows adjustment of BIASSET.
- 5)  To use the pulse-width control (PWC) install a jumper on the lower two pins of JP1. To disable PWC place a jumper on the top two pins of JP1.
- 6)  Ensure that a jumper is not installed on JP6 ( MODEN) and enable modulation.
- 7)  Connect  a  differential  signal  source  to  J1  (DATA+) and J2 (DATA-). Refer to the MAX3941 data sheet to determine voltage levels.
- 8)  If the latch is enabled, apply a differential clock signal to  J3  (CLK+)  and  J4  (CLK-).  Refer  to  the  MAX3941 data sheet to determine voltage levels.
- 9) Connect a high-bandwidth  oscilloscope,  such  as  the Tektronix CSA8000 with the 80E01 sampling head, to J7 (OUT).
- 10)  A  high-quality  SMA  attenuator  (14dB  or  20dB)  is required  to  reduce  the  signal  level  for  compatibility with the most sampling heads. The attenuator should be connected directly to the output SMA connector on the EV kit to minimize transmission line reflections.
- 11)  Attach  a  -5.2V  power  supply  to  J10  (GND)  and  J11 (VEE).    Set  the  current  limit  to  300mA  and  power  up the board.
- 12)  Adjust R3  until the desired modulation swing  is achieved.
- 13)  Adjust R5 until the desired bias voltage is achieved.
- 14)  Adjust R1 until the desired pulse width is achieved (if PWC is enabled, see step 5).
- 15)  If desired, place a shunt on JP4 (PLRT) to invert the output data polarity.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Adjustments and Control Descriptions

| COMPONENT   | NAME      | FUNCTION                                                                                                                                                                                                                        |
|-------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP1         | PWC       | This jumper enables/disables the pulse-width-control circuitry. Place a shunt on the top two pins to disable the PWC circuitry. Place a shunt on the bottom two pins to enable the PWC circuitry.                               |
| JP3         | MODSET    | Place a jumper on the right-hand side of this jumper to connect the R MODSET potentiometer to the MAX3941. Place a jumper on the left-hand side of this jumper to connect the MODSET pin to the SMB connector for AC testing.   |
| JP4         | PLRT      | Enables/disables the polarity inversion function. Shunt to invert the polarity of the output data. Shunting this jumper shorts the PLRT pin to V EE . Leave open for normal operation.                                          |
| JP5         | BIASSET   | Place a jumper on the left-hand side of this jumper to connect the R BIASSET potentiometer to the MAX3941. Place a jumper on the right-hand side of this jumper to connect the BIASSET pin to the SMB connector for AC testing. |
| JP6         | MODEN     | Enables/disables modulation output. Shunt to disable switching of the data output. When shunted, the output goes to the absorbtive (logic 0) state. Remove shunt to enable modulation.                                          |
| JP7         | RTEN      | Enables/disables data retiming. Shunt to enable data retiming. Remove shunt for direct data transmission.                                                                                                                       |
| R1          | R PWC     | Adjusts the EAM pulse width. Turn the potentiometer screw counter-clockwise to increase the logic 1 width.                                                                                                                      |
| R3          | R MODSET  | Adjusts the EAM modulation current. Turn the potentiometer screw clockwise to increase the modulation amplitude (decrease the resistance of MODSET to GND).                                                                     |
| R5          | R BIASSET | Adjusts the EAM bias current. Turn the potentiometer screw clockwise to increase bias current (decrease the resistance from BIASSET to GND).                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3941 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3941 Evaluation Kit

Figure 3. MAX3941 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX3941 EV Kit PC Board Layout-Ground Plane

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 5. MAX3941 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX3941 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3940 Evaluation Kit

Figure 7. MAX3941 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_