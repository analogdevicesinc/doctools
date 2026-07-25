<!-- lastmod 2022-08-02 -->
MAX3882 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  General Description

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX3882 evaluation kit (EV kit) simplifies evaluation of the MAX3882A 2.488Gbps CDR with 1:4 demultiplexing.  The  EV  kit  enables  testing  of  all  the device  functions.  SMA  connectors  with  50  controlled impedance  connections  to  the  MAX3882A  are  provided for the NRZ data input and LVDS data outputs, as well as system loopback functions. The 50  connectors allow for direct connection with high-speed test equipment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                 |   QTY | DESCRIPTION                             |
|-----------------------------|-------|-----------------------------------------|
| C1-C7, C17, C19-C32         |    23 | 0.1  F ±10% ceramic capacitors (0402)  |
| C8-C13, C18                 |     7 | 1000pF ±10% ceramic capacitors (0402)   |
| C14                         |     1 | 33  F +10% tantalum capacitor          |
| C15                         |     1 | 2.2  F +10% tantalum capacitor         |
| C16                         |     1 | 0.068  F ±10% ceramic capacitor (0402) |
| D1                          |     1 | LED                                     |
| J15, J19, J21, J22          |     4 | 1x2 pin headers (0.1' centers)          |
| J16-J18, J20, J24, J25      |     6 | 1x3 pin headers (0.1' centers)          |
| J1-J14, J29-J32             |    18 | SMA connectors, edge mount, tab contact |
| J26-J28                     |     3 | Test points                             |
| L1-L3                       |     3 | 56nH inductors                          |
| R1-R5, R10                  |     6 | 100  1% resistors (0402)               |
| R6                          |     1 | 402  5% resistors (0402)               |
| R8                          |     1 | 20k  variable resistor                 |
| R9                          |     1 | 20k  ±5% resistor (0402)               |
| U1                          |     1 | MAX3882AETX+ 36 TQFN                    |
| J15-J18, J19- J22, J24, J25 |    10 | Shunts                                  |
| -                           |     1 | PCB: MAX3882 Evaluation Board, Rev A    |

Features

-  SMA Connectors for All High-Speed Inputs and Outputs
-  Test Point for Monitoring Loss-of-Lock
-  Single +3.3V Power-Supply Operation
-  Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_  Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX3882A when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART          | TEMP. RANGE        | IC PACKAGE   |
|---------------|--------------------|--------------|
| MAX3882 EVKIT | -40  C to +85  C | 36 pin TQFN  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Connect a +3.3V power supply to J26 (Vcc). Connect power supply ground to J27 (GND).
- 2) Connect the three-lead jumper J20 center pin to Vcc, FREFSET (J24) center pin to GND, SIS (J16) center pin  to  GND,  LREF  (J18)  center  pin  to  Vcc,  J17 center  pin  to  LREF  (J18)  by  connecting  it  to  the upper pin.
- 3) Connect between a 10mVP-P to 1600mVP-P differential  input  signal  on  SDI+  (J1-J2)  by  using SMA cables suitable for 2.488Gbps.
- 4) Remove  the  100  resistor  R4  and  R5  to  avoid double termination.
- 5) Connect the output clock and data signals (J13, J14, J11,  and  J12  respectively)  to  a  50  high-speed oscilloscope to view the output signals.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3882 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3882  EV  Kit  is  fully  assembled  and  factory tested.  It enables testing of all MAX3882A functions.

## Connections

The MAX3882 EV Kit provides on-board connectors for all  data and clock I/O ports. The serial data and system loopback  inputs  (SDI+  and  SLBI+)  can  be  connected directly to a 50  source.

## Loss-of-Lock Indicator

PLL  frequency  lock  condition  can  be  monitored  at  the high-impedance LOL test point. A TTL high for LOL (LED off)  indicates  PLL  frequency  lock.  A  TTL  low  for LOL (LED on) indicates loss-of-lock.

Table 1. Jumper Settings

| COMPONENT   | FUNCTION                                                                                                                                          |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| J15         | Shorts CDR filter capacitor. Remove shunt for normal operation.                                                                                   |
| J16         | Sets SIS pin high or low.                                                                                                                         |
| J17         | Connects LOL output to jumper J18 or LREF input.                                                                                                  |
| J18         | Sets LREF input high or low.                                                                                                                      |
| J19         | Connects VREF to R8 variable resistor.                                                                                                            |
| J20         | Connects VCTRL pin to Vcc (threshold adjust disabled) or VREF voltage divider (shunt installed on J19 and threshold set by variable resistor R8). |
| J21         | Test point isolation jumper for CPWD. Remove shunt for normal operation.                                                                          |
| J22         | Shorts CPWD capacitor. Remove shunt for normal operation.                                                                                         |
| J24         | Sets FREFSET pin high or low.                                                                                                                     |
| J25         | Jumper shorted to GND.                                                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3882 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX3882 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3882 Evaluation Kit

Figure 3.  MAX3882 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4.  MAX3882 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 5.  MAX3882 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3882 Evaluation Kit

Figure 6.  MAX3882 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600