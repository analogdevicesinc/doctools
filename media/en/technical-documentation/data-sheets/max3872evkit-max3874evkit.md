<!-- lastmod 2022-08-04 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3872/MAX3874 evaluation kits (EV kits) simplify evaluation of the MAX3872 and MAX3874 clock and data recovery with limiting amplifier ICs. These EV kits enable testing  of  all  MAX3872  and  MAX3874  functions.  SMA connectors  are  provided  for  the  differential  inputs  and outputs. All high-speed inputs and outputs have on-board AC-coupling capacitors to allow direct connection to 50 Ω test equipment.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- ♦ SMA Connectors for All High-Speed I/Os
- ♦ Operational Mode Select Pins
- ♦ Loss-of-Lock LED
- ♦ Single +3.3V Power-Supply Operation
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX3872 EVKIT | -40°C to +85°C | 32 QFN       |
| MAX3874 EVKIT | -40°C to +85°C | 32 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 800-344-4539 | 218-681-3380 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3872/MAX3874 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                         |   QTY | DESCRIPTION                                                       |
|-------------------------------------|-------|-------------------------------------------------------------------|
| C1-C7, C17- C19, C22, C24, C26, C28 |    14 | 0.1 µ F ± 10% ceramic capacitors (0402) Murata GRM36X7R104K016A   |
| C8-C13                              |     6 | 0.001 µ F ± 10% ceramic capacitors (0402) Murata GRM36X7R102K016A |
| C14                                 |     1 | 33 µ F ± 10% tantalum capacitor AVX TAJB336K016                   |
| C15                                 |     1 | 2.2 µ F ± 10% tantalum capacitor AVX TAJB225K016                  |
| C16                                 |     1 | 0.82 µ F ceramic capacitor (0603) (MAX3872EVKIT)                  |
| C16                                 |     1 | 0.068 µ F ceramic capacitor (0402) (MAX3874EVKIT)                 |
| D1                                  |     1 | Red LED                                                           |
| D2                                  |     1 | Not installed                                                     |
| R2-R5                               |     4 | Not installed                                                     |
| R6                                  |     1 | 910 Ω ± 5% resistor (0402)                                        |
| R7                                  |     1 | Not installed                                                     |
| R8                                  |     1 | 50k Ω variable resistor BOURNS 3296W-203                          |
| R9                                  |     1 | Not installed                                                     |
| L1-L3                               |     3 | 56nH inductors (0805) Coilcraft CS-560XKBC                        |

| DESIGNATION                |   QTY | DESCRIPTION                                                    |
|----------------------------|-------|----------------------------------------------------------------|
| J1-J8, J25, J26            |    10 | SMA connectors (edge-mount, round-pin) EF JOHNSON 142-0701-851 |
| J9, J12-J15, J17-J19       |     8 | 3-pin headers (0.1in centers)                                  |
| J10                        |     1 | 2-pin headers (0.1in centers)                                  |
| J11, J16, J22, J23         |     4 | Not installed                                                  |
| J20, J21                   |     2 | Test points Digi-Key 5000K-ND                                  |
| J24                        |     1 | Not installed                                                  |
| J9, J10, J12- J15, J17-J19 |     9 | Shunts                                                         |
| U1                         |     1 | MAX3872EGJ, 32-pin QFN (MAX3872EVKIT)                          |
| U1                         |     1 | MAX3874EGJ, 32-pin QFN (MAX3874EVKIT)                          |
| None                       |     1 | MAX3872/MAX3874 EV kit circuit board, Rev C                    |
| None                       |     1 | MAX3872 datasheet (MAX3872EVKIT)                               |
| None                       |     1 | MAX3874 datasheet (MAX3874EVKIT)                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX3872/MAX3874 Evaluation Kits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3872/MAX3874  EV  Kit  is  a  fully  assembled and  factory  tested  demonstration  board  that  enables testing of all MAX3872 and MAX3874 functions.

## Test Equipment Required

- +3.3V power supply with 200mA current capability
- Signal-source, 2.7Gbps minimum capability
- Jitter analyzer capable of 2.7Gbps performance
- Oscilloscope with at least 3GHz performance

## Test Equipment Interface

The  serial  inputs  (SDI±,  SLBI±)  and  serial  outputs (SDO±, SCLKO±) have on-board AC-coupling capacitors to allow direct connection to  50 Ω test equipment. The EV kit also has pads on the serial data and clock outputs (SDO±, SCLKO±) to allow on-board termination for coupling to high-impedance oscilloscopes.

## Quick Start (MAX3872 &amp; MAX3874)

This  procedure  will  set  up  the  evaluation  board  for 2.48832Gbps normal operation mode, with input threshold adjust disabled.

- 1) Place a shunt across pins 2 (SIS) and 3 (GND) of J13.
- 2) Place a shunt across pins 1 (VCC) and 2 (LREF) of  J14.
- 3) Place a shunt across pins 2 and 3 of  J15.
- 4) Place a shunt across pins 2 (RS1) and 3 (GND) of J17.
- 5) Place a shunt across pins 2 (RS2) and 3 (GND) of J18.
- 6) Place  a  shunt  across  pins  2  (RATESET)  and  3 (GND) of  J19.
- 7) Place a shunt across pins 1 (VCC) and 2 (VCTRL) of J9.
- 8) Remove the shunt from J10.
- 9) Place  a  shunt  across  pins  2  (FREFSET)  and  3 (GND) of J12.
- 10)  Connect a 2.48832Gbps PRBS NRZ signal to the serial  data  inputs  (SDI±)  with  50 Ω cables.  Leave the SLBI ± inputs unconnected.
- 11)  Connect the serial data and clock outputs (SDO±, SCLKO±) to a 50 Ω high-speed oscilloscope. Terminate any unused outputs with 50 Ω to GND.
- 12)  Connect  +3.3V  to  J20  (VCC)  and  ground  to  J21 (GND).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Jitter  analysis  and  product  performance  can  also  be observed by appropriately interfacing the EV kit with a bit-error-rate tester (BERT) and a jitter analyzer.

## Operational Modes

The MAX3872/MAX3874 has three modes of operation: normal, system loopback, and clock holdover. The three operational modes are programmed  by  connecting  the  appropriate  pins  of JU13  (SIS)  and  JU14  (LREF).  See  Table  1.  Normal operation  mode  requires  a  serial  data  stream  at  the SDI ± inputs,  system  loopback  mode  requires  a  serial data  stream  at  the  SLBI ± inputs,  and  clock  holdover mode  requires  a  reference  clock  signal  at  the  SLBI ± inputs.

## Normal and System Loopback Settings

Three jumpers (RS1, RS2, RATESET) are available for setting the  SDI ± or  SLBI ± inputs to receive the appropriate data rate (Table 2). The FREFSET pin can be set high or low while in normal or system loopback mode.

## Clock Frequencies in Holdover Mode

Set the incoming reference clock frequency and outgoing  serial  clock  frequency  by  setting  RS1,  RS2, RATESET, and FREFSET appropriately.  See Table 3.

## Auto Switch to Clock Holdover Mode

To  switch  from  normal  mode  to  clock  holdover  mode automatically when there are no data transitions applied  to  the  SDI ± inputs  connect  LOL  directly  to LREF by placing a shunt across pins 1 and 2 of J15.

## Vertical Threshold Adjustment

To compensate for optical noise presented on the data logic  high  caused  by  EDFAs  in  a  WDM  transmission system, an external analog control input is provided for adjusting  the  data  decision  threshold  to  an  optimum level.

To enable data decision threshold adjustment, place a shunt across pins 2 and 3 of J9 and shunt pins 1 and 2 of  J10.  Set  the  decision  threshold  by  adjusting  the potentiometer  R8.  The  center  point  for  the  decision threshold is 1.2V at the VCTRL pin.

## Jumpers, Controls, Test Points

Table  4  summarises  the  functions  of  all  jumpers, controls, and test points of the MAX3872/MAX3874 EV Kit.

## MAX3872/MAX3874 Evaluation Kits

Table 1. Operational Mode Settings

| MODE            | SHUNT POSITIONS   | SHUNT POSITIONS        |
|-----------------|-------------------|------------------------|
|                 | LREF (JU14)       | SIS (JU13)             |
| Normal          | 1 and 2           | 2 and 3                |
| System Loopback | 1 and 2           | 1 and 2                |
| Clock Holdover  | 2 and 3           | (1 and 2) or (2 and 3) |

Table 3. Clock Holdover Frequency Settings

| REFERENCE CLOCK FREQUENCY   | SCLKO FREQUENCY   | SHUNT POSITIONS   | SHUNT POSITIONS   | SHUNT POSITIONS   | SHUNT POSITIONS   |
|-----------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| REFERENCE CLOCK FREQUENCY   | SCLKO FREQUENCY   | RS1               | RS2               | RATESET           | FREFSET           |
| 666.51MHz                   | 2.666GHz          | 2 and 3           | 2 and 3           | 1 and 2           | 2 and 3           |
| 666.51MHz*                  | 666.51MHz         | 2 and 3           | 1 and 2           | 1 and 2           | 2 and 3           |
| 666.51MHz*                  | 166.63MHz         | 1 and 2           | 2 and 3           | 1 and 2           | 2 and 3           |
| 622.08MHz/625MHz*           | 1.244GHz/1.25GHz  | 1 and 2           | 1 and 2           | 2 and 3           | 2 and 3           |
| 622.08MHz/625MHz            | 2.488GHz/2.5GHz   | 2 and 3           | 2 and 3           | 2 and 3           | 2 and 3           |
| 622.08MHz*                  | 622.08MHz         | 2 and 3           | 1 and 2           | 2 and 3           | 2 and 3           |
| 622.08MHz*                  | 155.52MHz         | 1 and 2           | 2 and 3           | 2 and 3           | 2 and 3           |
| 166.63MHz                   | 2.666GHz          | 2 and 3           | 2 and 3           | 1 and 2           | 1 and 2           |
| 166.63MHz*                  | 666.51MHz         | 2 and 3           | 1 and 2           | 1 and 2           | 1 and 2           |
| 166.63MHz*                  | 166.63MHz         | 1 and 2           | 2 and 3           | 1 and 2           | 1 and 2           |
| 155.52MHz/156.25MHz*        | 1.244GHz/1.25GHz  | 1 and 2           | 1 and 2           | 2 and 3           | 1 and 2           |
| 155.52MHz/156.25MHz         | 2.488GHz/2.5GHz   | 2 and 3           | 2 and 3           | 2 and 3           | 1 and 2           |
| 155.52MHz*                  | 622.08MHz         | 2 and 3           | 1 and 2           | 2 and 3           | 1 and 2           |
| 155.52MHz*                  | 155.52MHz         | 1 and 2           | 2 and 3           | 2 and 3           | 1 and 2           |

*Setting not available on the MAX3874

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 2. Data Rate Settings

| INPUT DATA RATE     | SHUNT POSITIONS   | SHUNT POSITIONS   | SHUNT POSITIONS   |
|---------------------|-------------------|-------------------|-------------------|
| INPUT DATA RATE     | RS1               | RS2               | RATESET           |
| 2.666Gbps           | 2 and 3           | 2 and 3           | 1 and 2           |
| 2.488Gbps/2.5Gbps   | 2 and 3           | 2 and 3           | 2 and 3           |
| 1.244Gbps/1.25Gbps* | 1 and 2           | 1 and 2           | 2 and 3           |
| 666.51Mbps*         | 2 and 3           | 1 and 2           | 1 and 2           |
| 622.08Mbps*         | 2 and 3           | 1 and 2           | 2 and 3           |
| 166.63Mbps*         | 1 and 2           | 2 and 3           | 1 and 2           |
| 155.52Mbps*         | 1 and 2           | 2 and 3           | 2 and 3           |

*Setting not available on the MAX3874

## MAX3872/MAX3874 Evaluation Kits

Table 4.  Jumpers, Controls, Test Points

| NAME   | TYPE          | DESCRIPTION                                                                                          | NORMAL POSITION                               |
|--------|---------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| J9     | 3 Pin Header  | Enables/disables threshold adjust. Shunt is required on J10 when threshold adjust is enabled.        | Shunt pins 1 and 2 Threshold control disabled |
| J10    | 2 Pin Header  | Connects VREF to VCTRL through R8 when threshold adjust is enabled.                                  | Open                                          |
| J11    | 3 Pin Header  | Not installed                                                                                        | -                                             |
| J12    | 3 Pin Header  | Sets the reference clock frequency                                                                   | Shunt pins 2 and 3 See Tables 2 and 3         |
| J13    | 3 Pin Header  | Selects between SDI and SLBI inputs                                                                  | Shunt pins 2 and 3 See Table 1                |
| J14    | 3 Pin Header  | Enables/disables clock holdover mode                                                                 | Shunt pins 1 and 2 See Table 1                |
| J15    | 3 Pin Header  | Connects LOL to LREF for automatic clock holdover mode or provides connection of J14 to LREF input.  | Shunt pins 2 and 3 LOL not connected to LREF  |
| J16    | 2 Pin Header  | Not installed                                                                                        | Open                                          |
| J17    | 3 Pin Header  | Multi-Rate Select Input 1                                                                            | Shunt pins 2 and 3 See Tables 2 and 3         |
| J18    | 3 Pin Header  | Multi-Rate Select Input 2                                                                            | Shunt pins 2 and 3 See Tables 2 and 3         |
| J19    | 3 Pin Header  | VCO Select Input                                                                                     | Shunt pins 2 and 3 See Tables 2 and 3         |
| J20    | Test Point    | Power supply connection to VCC.                                                                      | Connected to VCC                              |
| J21    | Test Point    | Power supply connection to GND.                                                                      | Connected to GND                              |
| J22    | 2 Pin Header  | Not installed                                                                                        | Open                                          |
| J23    | 2 Pin Header  | Not installed                                                                                        | Open                                          |
| J24    | Test Point    | Not installed                                                                                        | -                                             |
| R8     | Potentiometer | Threshold Control Potentiometer. Used in conjunction with J10 and J9 to set the SDI input threshold. | -                                             |

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3872/MAX3874 Evaluation Kits

Figure 1.  MAX3872 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3872/MAX3874 Evaluation Kits

Figure 2. MAX3874 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3872/MAX3874 Evaluation Kits

<!-- image -->

Figure 3. MAX3872/MAX3874 EV Kit Component Placement Guide-Component Side

Figure 4. MAX3872/MAX3874 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 5. MAX3872/MAX3874 EV Kit PC Board LayoutGround Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3872/MAX3874 Evaluation Kits

Figure 6. MAX3872/MAX3874 EV Kit PC Board LayoutPower Plane

<!-- image -->

Figure 7. MAX3872/MAX3874 EV Kit PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_