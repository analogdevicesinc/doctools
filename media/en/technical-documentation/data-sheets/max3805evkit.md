<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_ General Description

The MAX3805 DC-coupled evaluation kit (EV kit) simplifies evaluation of the MAX3805 10.7Gbps adaptive equalizer.    The  EV  kit  enables  full  testing  of  device functions. SMA connectors with 50 Ω controlledimpedance transmission lines to the  MAX3805  are provided for all CML input and output ports.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART          | TEMP. RANGE        | IC PACKAGE   |
|---------------|--------------------|--------------|
| MAX3805 EVKIT | -40 ° C to +85 ° C | 16 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                                            |   QTY | DESCRIPTION                              |
|--------------------------------------------------------|-------|------------------------------------------|
| C1-C5                                                  |     5 | 0.1 µ F +10% ceramic capacitor (0402)    |
| C6                                                     |     1 | 0.1 µ F +10% ceramic capacitor (0603)    |
| C7-C10                                                 |     4 | 33 µ F +10% tantalum capacitors (case-B) |
| J1-J4                                                  |     4 | SMA connectors, tab contact              |
| JP1-JP5                                                |     5 | 2-pin headers, 0.1in centers             |
| GND, V CC , V CC1 , V CC2 , V EE , TP4, TP5, TP9, TP10 |     9 | Test points Digi-Key 5000K-ND            |
| R7                                                     |     1 | 500k Ω Variable resistor                 |
| U1                                                     |     1 | MAX3805 ETE                              |
| None                                                   |     3 | Shunts                                   |
| None                                                   |     1 | MAX3805 EV board                         |
| None                                                   |     1 | MAX3805 data sheet                       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX3805 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ DC-Coupled Evaluation Kit
- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

Note:

The MAX3805 EV kit is a DC-coupled evaluation board.  Use external coupling capacitors on the input  and  output  when  AC-coupling  is  desired. DC-coupled operation with positive VCC supplies can cause permanent damage to laboratory test equipment (oscilloscope, BERT).  The MAX3805 EV  kit  must  be  operated  from  a  negative  VEE supply  when  DC-coupled  to  normal  laboratory equipment.

- 1) Connect a -3.3V power supply to VEE.  Connect the power  supply  ground  to  GND  and  VCC.    Remove shunt on JP1; install shunts on JP2 and JP3.
- 2) Connect TP9 to TP10.
- 3) Apply a differential 9.953Gbps input signal (400mVP-P to 1200mVP-P) between SMA connectors J1 and J2, (SDI+ and SDI-)
- 4) Attach  a  differential  high-speed  oscilloscope  with  a 50 Ω input to SMA connectors J4 and J3 (SDO+ and SDO-) to observe the output of the equalizer.

## MAX3805 Evaluation Kit

## \_ Alternative Supply Configurations AC-Coupled Operation with VCC1 = V CC2 = +1.8V

Connect a +3.3V power supply to VCC.  Connect a +1.8V power  supply  to  VCC1  and  VCC2.    Connect  the  powersupply  ground  to  GND.    Remove  shunts  JP2  and  JP3. Install  shunt  JP1.    Use  external  AC-coupling  capacitors for connecting to external laboratory equipment (oscilloscope, BERT).

## DC-Coupled Operation with Laboratory Equipment

Connect  a  +1.5V  power  supply  to  VCC.    Connect  a -1.8V  power  supply  to  VEE.    Connect  the  power-supply ground to GND.  Install shunts on JP2 and JP3.  Remove shunt  on  JP1.    With  this  setup  the  part  can  be  DCcoupled  to  external  laboratory  equipment  (oscilloscope, BERT)

## DC-Coupled Operation \_\_\_\_\_with Oscilloscope and BERTs

The  MAX3805  is  designed  with  DC-coupled  inputs  and outputs,  implemented  with  internal  50 Ω terminations  to VCC1 (SDI+) and VCC2 (SDO+).  Laboratory oscilloscopes and  BERTs  normally  terminate  their  inputs  and  outputs with  50 Ω to  ground.    When  the  MAX3805  VCCs  are connected to positive supply, a DC path exists from the power supply  to  the  ports  of  the  oscilloscope  or  BERT. This  configuration can cause permanent damage  to  the oscilloscope or BERT.

When  the  MAX3805  EV  kit  is  being  used  with  normal oscilloscopes or BERTs,  either external  AC-coupling must be provided or VCC1 and VCC2 must be connected to ground (i.e., using a negative VEE supply).  Failure to do so may permanently damage laboratory equipment.

Figure 1.  MAX3805 EV kit Schematic

<!-- image -->

2\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

Figure 2.  MAX3805 Component Placement Guide

<!-- image -->

## MAX3805 Evaluation Kit

Figure 3.  MAX3805 PC Board Layout Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3805 Evaluation Kit

Figure 4.  MAX3805 PC Board Layout - Ground Plane

<!-- image -->

Figure 5.  MAX3805 PC Board Layout - Power Plane

<!-- image -->

4\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

Figure 6.  MAX3805 PC Board Layout - Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product.  No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX3805 Evaluation Kit