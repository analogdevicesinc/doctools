<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3803 dc-coupled evaluation kit (EV kit) simplifies  evaluation  of  the  MAX3803  2.488Gbps  to 3.125Gbps equalizer.  The EV kit enables full testing of all  the  device's  functions.    SMA  connectors  with  50 Ω controlled-impedance transmission lines to the MAX3803 are provided for all CML input and output ports.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART          | TEMP. RANGE      | IC PACKAGE   |
|---------------|------------------|--------------|
| MAX3803 EVKIT | 0 ° C to +85 ° C | 5X4 UCSP     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                  |   QTY | DESCRIPTION                                |
|------------------------------|-------|--------------------------------------------|
| C2-C7, C9, C12- C14          |    10 | 0.1 µ F 10% Ceramic Capacitor (0402)       |
| C1, C8, C10, C11             |     4 | 33 µ F 10% Electrolytic Capacitor (B CASE) |
| J1, J2, J9-J11, TP1, TP4-TP6 |     9 | Test Point                                 |
| TP2, TP3                     |     2 | Not Installed                              |
| J3-J8                        |     6 | SMA Connector EDGE MOUNT (TAB CONTACT)     |
| J15-J17                      |     3 | 1X2 Pin Header (0.1' centers)              |
| J18, J19                     |     2 | 1X3 Pin Header (0.1' centers)              |
| L1-L4                        |     4 | 1 µ H Chip Inductor (0805)                 |
| U1                           |     1 | MAX3803 5X4UCSP                            |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Coilcraft  | 847-639-6400 |              |
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX3803 when ordering from these suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Independent Input and Output Voltage Terminations
- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

Note:

The MAX3803 EV kit is a dc-coupled evaluation board with 50 Ω input and output terminations to VTI and VTO, respectively.  Care must be taken to ensure that no direct short exists between the supply voltage and supply ground.  Normal dccoupled operation with all positive supplies causes  permanent  damage  to  laboratory  test equipment  because  a  dc  path  exists  from  the power supply to the ports of the oscilloscope or BERT.  The MAX3803 EV kit must be operated from  a  negative  VEE  supply  when  DC-coupled to standard lab equipment.  External ac-coupling capacitors  should  be  used  when  connecting  to standard  lab  equipment  and  when  VEE  (J11) and  the  EV  kit's  GND  (J2)  are  at  the  same potential.

- 1) Do not turn on the power supply until step 6.
- 2) Connect a -3.3V power supply to J11 (VEE). Connect the power supply ground to J2 (GND) and J1 (VCC).  Remove shunt on J15; install shunts on J16, 17, and center pin to VCC on J18.
- 3) Apply  a  differential  1Gbps  to  3.2Gbps  input  signal (400mVP-P to 1000mVP-P) between SMA connectors to FR4 board with length between 10in and 40in.
- 4) Connect the output of the FR4 board to the J3 and J4 (IN+) inputs.
- 5) Attach  a  differential  high-speed  oscilloscope  with  a 50 Ω input  to  SMA connectors J5 and J6 (OUT+) to observe the output of the equalizer.
- 6) Turn on power supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3803 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Alternative Supply Configurations DC-Coupled Chip-to-Chip Operation

This  setup  allows  testing  of  the  MAX3803  in  the  final system.  Remove shunts on J16 and J17; install a shunt on J15 and center pin to VCC on J18.  Connect the VTI (J10) pin to the CML supply voltage output termination of the previous chip (transmitter).  Connect the VTO (J9) pin to  the  CML  supply  voltage  input  termination  of  the following  chip  (receiver).    Connect  a  3.3V  power  supply on the VCC (J1) pin.  Connect the supply ground to GND (J2).    Insure  that  VCC,  VTI,  and  VTO  share  a  common ground.  VTI and VTO can be at different voltages.

## DC-Coupled Operation with Laboratory Equipment

This setup allows testing of the MAX3803 with standard lab equipment (BERT, oscilloscope, etc.).  Remove shunt on J15; install shunts on J16, J17, and center pin to VCC on J18.  Connect VCC (J1) pin to +2.2V power supply. Connect a -1.1V supply to VEE (J11). This setup forces the  VTI  and  VTO  voltages  to  be  the  same  at  1.1V  with respect to VEE.  The VTI and VTO voltages must remain the same in this configuration, but the level can change by  varying  VCC  and  VEE.    Insure  that  the  difference between VCC and VEE is between 3.0V and 3.6V.

## AC-Coupled Operation

This setup allows testing of the MAX3803 in ac-coupled operation. Remove shunts on J16 and J17; install shunts on  J15  and  center  pin  to  VCC  on  J18.    Install  external AC-coupling  capacitors  to  IN+  (J3,  J4)  and  OUT+  (J5, J6).  Connect VCC (J1), VTI (J10), and VTO (J9) to the same power supply between 3.0V and 3.6V.  Connect the ground to GND (J2).

## Jumper J18

When  the  inputs  to  the  MAX3803  are  AC-coupled,  or when VEE is connected to GND connect the center pin to VCC to enable the output stage.  Connect the center pin to GND to disable the output stage.

For  all  other  cases,  connect  the  center  pin  to  VCC  to enable the output stage.  Connect the center pin to VEE using a wire to disable the output stage.

2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

Figure 1.  MAX3803 EV Kit Schematic

<!-- image -->

Figure 2.  MAX3803 Component Placement Guide

<!-- image -->

## MAX3803 Evaluation Kit

Figure 3.  MAX3803 PC Board Layout Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3803 Evaluation Kit

Figure 4.  MAX3803 PC Board Layout - Ground Plane

<!-- image -->

Figure 5.  MAX3803 PC Board Layout - Power Plane

<!-- image -->

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

Figure 6.  MAX3803 PC Board Layout - Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product.  No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

5

## MAX3803 Evaluation Kit