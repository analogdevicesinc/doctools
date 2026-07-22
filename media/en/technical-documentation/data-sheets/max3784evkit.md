<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The  MAX3784  evaluation  kit  (EV  kit)  simplifies evaluation  of  the  MAX3784  5Gbps  equalizer  with increased  output  signal  amplitude.    The  EV  kit enables testing of all device functions.    SMA connectors  with  50 Ω controlled  impedance  to  the MAX3784 are provided for  all  high-speed  ports  to facilitate connection to test equipment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                                                                 |
|--------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1                 |     1 | 33 µ F tantalum capacitor AVX TAJC336K010                                                                                                                   |
| C2-C9              |     8 | 0.1 µ F 10%, 10V min ceramic capacitors (0402)                                                                                                              |
| L1                 |     1 | 4.7 µ H inductor Coilcraft 1008CT040XJBC                                                                                                                    |
| J3-J6              |     4 | SMA connectors, edge mount, tab contact EFJohnson 142-0701-851                                                                                              |
| J9                 |     1 | 2-pin header, 0.1in center                                                                                                                                  |
| TP1, TP2, TP7, TP8 |     4 | Test points Digi-Key 5000K-ND                                                                                                                               |
| U1                 |     1 | MAX3784, 16-pin QFN Note: U1 has an exposed pad, which requires that it be solder-attached to the circuit board to ensure proper functionality of the part. |
| None               |     1 | MAX3784/MAX3784A EV kit circuit board, rev B                                                                                                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- Fully Assembled and Tested
- Fully Matched for Best Return Loss
- SMA Connectors for All High-Speed Inputs and Outputs
- Calibration Test Strip

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX3784EVKIT | 0 C to +85 C | 16 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 415-964-6321 | 415-964-8165 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quic k  St art

- 1) Connect  a  +3.3V  power  supply  to  TP1  (VCC). Connect the power supply ground to TP2.
- 2) Connect  a  differential  signal  between  400mV  and 1000mV  to  the  inputs  IN+  and  IN-  using  50 Ω cables.
- 3) If not already done, disconnect jumper test point J9. This  ensures  that  the  part  is  enabled  and  not  in standby mode.
- 4) Connect  signals  OUT+  and  OUT-  to  a  &gt;10GHz oscilloscope  with  50 Ω input  terminations.  Monitor output signals.
- 5) The  signal  generator  should  produce  a  short  run length  (CID  &lt;  20),  DC-balanced  pattern  such  as  a PRBS 2 7 - 1 or K28.5.  Set the data rate to 5Gbps.
- 6) Evaluation: After the board has been initially checked  out,  evaluation  can  begin  with  a  FR4  PC board. It is advisable to start with a board length of 20in and then progress to longer lengths.

Figure 1. MAX3784A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX3784 EV Kit PC Component Placement Guide-Component Side

Figure 3. MAX3784 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX3784 EV Kit PC Board LayoutGround Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

/a0

Figure 5. MAX3784 EV Kit PC Board LayoutPower Plane

<!-- image -->

Figure 6. MAX3784 EV Kit PC Board LayoutSolder Side

<!-- image -->

3