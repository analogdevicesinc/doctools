<!-- lastmod 2022-08-02 -->
## General Description

The MAX3876 evaluation kit (EV kit) simplifies evaluation of the MAX3876 2.5Gbps clock-recovery and dataretiming IC. The EV kit enables testing of all MAX3876 functions.  SMA connectors are provided for the differential CML data and clock outputs, as well as for system loopback functions.

The MAX3876 EV kit comes configured for +3.3V operation and consumes approximately 140mA.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |

Note: Please indicate that you are using the MAX3876 when contacting this component supplier.

| DESIGNATION                       |   QTY | DESCRIPTION                             |
|-----------------------------------|-------|-----------------------------------------|
| C1-C6, C14-C18, C21-C26, C29, C30 |    19 | 0.1µF, 10V min ceramic capaci- tors     |
| C7-C11                            |     5 | Open                                    |
| C12                               |     1 | 1µF, 10V min X7R ceramic capacitor      |
| C19                               |     1 | 33µF ±20%, 10V min tantalum capacitor   |
| C20                               |     1 | 2.2µF, 10V min ceramic capaci- tor      |
| D1                                |     1 | Red LED                                 |
| L1, L2, L3                        |     3 | 56nH inductors Coilcraft 0805HS-560TKBC |
| R1                                |     1 | 392 Ω ±1% resistor                      |
| R10, R13, R17, R21                |     4 | Open                                    |

<!-- image -->

## Features

- ♦ SMA Connections for All System I/Os
- ♦ Test Point for Monitoring Loss-of-Lock (LOL)
- ♦ Single +3.3V Power-Supply Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3876EVKIT | -40°C to +85°C | 5mm 32 TQFP  |

## Component List

| DESIGNATION                                          |   QTY | DESCRIPTION                  |
|------------------------------------------------------|-------|------------------------------|
| R25, R28                                             |     2 | 0 Ω ±5% resistors            |
| LOL , GND, +3.3V                                     |     3 | Test points                  |
| JP10                                                 |     1 | 3-pin header (0.1in centers) |
| None                                                 |     2 | Shunts                       |
| SDI+, SDI-, SLBI+, SLBI-, SCLKO+, SCLKO-, SDO+, SDO- |     8 | Edge-mount SMA connectors    |
| U1                                                   |     1 | MAX3876EHJ (5mm 32-pin TQFP) |
| None                                                 |     1 | MAX3876 evaluation kit       |
| None                                                 |     1 | MAX3876 data sheet           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3876 Evaluation Kit

## Detailed Description

The MAX3876 EV kit is fully assembled and factory tested. It enables testing of all MAX3876 functions.

## Test Equipment Required

- +3.3V power supply with 300mA current capability
- Signal-source, 2.5Gbps minimum capability
- Jitter analyzer capable of 2.5Gbps performance
- Oscilloscope with at least 3GHz performance

## Connections

The MAX3876 EV kit provides on-board capacitors for all data and clock I/O ports. The serial data and system loopback inputs (SDI+, SDI-, SLBI+, and SLBI-) can be connected directly to a 50 Ω source. Additional pads for 50 Ω pull-up resistors and 0.1µF power-supply decoupling capacitors are provided on the serial data and clock outputs (SDO+, SDO-, SCLKO+, and SCLKO-). The EV kit is shipped without 50 Ω pull-up resistors and can be connected directly to standard test equipment. For evaluation with high-impedance probes, install the 50 Ω pull-up resistors and 0.1µF decoupling capacitors.

## Setup

- 1) Select either the serial data inputs, pins 2 and 3 of JP10 (SDI EN), or the system loopback inputs, pins 1 and 2 of JP10 (SLBI EN), with jumper JP10 (Table 1).
- 2) Connect the +3.3V power supply to the appropriate terminals marked on the EV kit, and apply power.
- 3) Connect a 2.5Gbps PRBS NRZ signal to the selected inputs with 50 Ω cables.
- 4) Connect the outputs to a 50 Ω high-speed oscilloscope.

Jitter  analysis  and  product  performance can also be observed by appropriately interfacing the EV kit with a bit-error-rate tester (BERT) and a jitter analyzer.

## Jumpers, and Test Points

PLL frequency lock conditions can be monitored at the high-impedance LOL test  point.  A  TTL  high (LED off) indicates PLL frequency lock, while a TTL low (LED on) indicates a loss-of-lock condition. Note that the LOL circuitry  will  not  detect  a  loss-of-power  condition  (refer  to the MAX3876 data sheet).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Layout Considerations

The MAX3876's performance can be greatly affected by circuit board layout and design. Use good high-frequency design techniques, including minimizing ground inductances and using fixed-impedance transmission lines on the data and clock signals.

## Table 1. Jumpers and Test Points

| NAME   | TYPE       | DESCRIPTION                                                                                                                     | NORMAL POSITION   |
|--------|------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------|
| JP10   | 3-Pin      | Used to select between the serial data input (labeled SDI EN) and the system loopback function (labeled SLBI EN) of the MAX3876 | -                 |
| LOL    | Test Point | Used to monitor LOL voltage level                                                                                               | -                 |

<!-- image -->

## MAX3876 Evaluation Kit

<!-- image -->

Figure 1. MAX3876 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3876 Evaluation Kit

<!-- image -->

Figure 2. MAX3876 EV Kit Component Placement Guide

Figure 3. MAX3876 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX3876 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 5. MAX3876 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3876 Evaluation Kit

Figure 6. MAX3876 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3876 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products