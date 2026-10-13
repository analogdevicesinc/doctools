<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The  MAX3786  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides easy evaluation of the MAX3786  serial-ATA  multiplexer/buffer.  All  high-speed inputs  and  outputs  have  SMA  or  SATA  connectors  and on-board AC-coupling capacitors to allow direct connection to 50 Ω test equipment or SATA devices.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                    |
|-------------------------|-------|----------------------------------------------------------------|
| C1-C12, C17*, C18*, C20 |    15 | 0.1 µ F ± 10% ceramic capacitors (0402)                        |
| C13-C16                 |     4 | 0.01 µ F ± 10% ceramic capacitors (0402)                       |
| C21                     |     1 | 33 µ F ± 10% tantalum capacitor AVX TAJB336K010R               |
| C38, C39                |     2 | Not installed                                                  |
| L1                      |     1 | 56nH inductor Coilcraft 0805CS-560XKBC                         |
| J1-J14*                 |    14 | SMA connectors (edge-mount, round pin) EF JOHNSON 142-0701-801 |
| J1-J3**                 |     3 | SATA connectors (edge-mount) Molex 67490-9220                  |
| JP1-JP6                 |     6 | 2-pin headers (0.1in centers)                                  |
| JP1-JP6                 |     6 | Shunts Digi-Key S9000-ND                                       |
| TP1-TP3, J17, J18       |     5 | Test points                                                    |
| U1                      |     1 | MAX3786UTJ, 32-pin Thin QFN                                    |
| None                    |     1 | MAX3786 EV kit circuit board, Rev A*                           |
| None                    |     1 | MAX3786SATA EV kit circuit board, Rev A**                      |
| None                    |     1 | MAX3786 datasheet                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- ♦ Fully Assembled and Tested
- ♦ SMA or SATA Connectors for High-Speed I/Os
- ♦ On-board AC-Coupling Capacitors
- ♦ Operational Mode Select Pins
- ♦ Single +3.3V Power-Supply Operation

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART             | TEMP RANGE       | IC PACKAGE   |
|------------------|------------------|--------------|
| MAX3786EVKIT     | 0 ° C to +85 ° C | 32 Thin QFN  |
| MAX3786SATAEVKIT | 0 ° C to +85 ° C | 32 Thin QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 800-344-4539 | 218-681-3380 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Molex      | 800-786-6539 | 630-968-8356 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3786 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Remove the shunts from JP1-JP6.
- 2) Apply +3.3V to the VCC test point (J17). Connect power-supply ground to the GND test point (J18).

## MAX3786EVKIT

- 3) Connect  1.5Gbps  differential  data  through  50 Ω cables  to  the  RX ± inputs  (J9  and  J10).    Adjust differential data amplitude to 500mVP-P.
- 4) Connect OUT1 ± (J3 and J4) to a 50 Ω oscilloscope.

## MAX3786SATAEVKIT

- 5) Connect a SATA hard drive to the  RX ± /TX ± port (J1) with a SATA cable.
- 6) Connect a SATA controller to the IN1 ± /OUT1 ± port (J3) with a SATA cable.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3786 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The  MAX3786 EV kit is  a fully  assembled  and  factory tested  demonstration  board  that  enables  testing  of  all MAX3786 functions.

## Input and Output Terminations

All data inputs and outputs have on-board AC-coupling capacitors  and  can  be  directly  connected  to  50 Ω test equipment  or  SATA  devices.  Outputs  may  be  viewed single-ended by terminating the other side of the output with 50 Ω to ground.

Table 1. Control Line Descriptions

| COMPONENT   | NAME   | FUNCTION                                                                                                      |
|-------------|--------|---------------------------------------------------------------------------------------------------------------|
| JP1         | SEL    | Selects channel routing. Shunt to connect RX/TX to OUT0/IN0. Remove shunt to connect RX/TX to OUT1/IN1.       |
| JP2         | PE1EN  | Enables/disables pre-emphasis on OUT1. Shunt to enable pre-emphasis. Remove shunt to disable pre-emphasis.    |
| JP3         | EQ1EN  | Enables/disables equalization on IN1. Shunt to enable equalization. Remove shunt to disable equalization.     |
| JP4         | LB_EN  | Enable/disables loopback of non-selected channel. Shunt to enable loopback. Remove shunt to disable loopback. |
| JP5         | EQ0EN  | Enables/disables equalization on IN0. Shunt to enable equalization. Remove shunt to disable equalization.     |
| JP6         | PE0EN  | Enables/disables pre-emphasis on OUT0. Shunt to enable pre-emphasis. Remove shunt to disable pre-emphasis.    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Common Mode Points

Test  points  TP2  and  TP3  provide  access  to  the common-mode pins CM0 and CM1 of inputs IN0 and IN1.  See  Figure  1  of  the  MAX3786  datasheet.  CM0 and  CM1  are  normally  left  unconnected;  however capacitors  up  to  1.0 µ F  may  be  soldered  at  C38  and C39,  providing  a  low-impedance  AC  common-mode path to VCC.

## Control Lines

Jumpers  JP1-JP6  are  provided  to  set  the  LVCMOS control lines. Shorting these jumpers pulls the corresponding control line low. When a jumper is open the  corresponding  control  line  is  internally  pulled  high through a 40k Ω resistor.

## MAX3786 Evaluation Kit

Figure 1. MAX3786 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3786 Evaluation Kit

Figure 2. MAX3786 SATA EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3786 Evaluation Kit

<!-- image -->

Figure 3. MAX3786 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX3786 EV Kit PC Board Layout-Component Side

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX3786 Evaluation Kit

Figure 5. MAX3786 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX3786 EV Kit PC Board Layout-Power Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3786 Evaluation Kit

<!-- image -->

Figure 7. MAX3786 EV Kit PC Board Layout-Solder Side

Figure 8. MAX3786 SATA EV Kit Component Placement Guide-Component Side

<!-- image -->

<!-- image -->

Figure 9. MAX3786 SATA EV Kit PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3786 Evaluation Kit

Figure 10. MAX3786 SATA EV Kit PC Board LayoutGround Plane

<!-- image -->

Figure 12. MAX3786 SATA EV Kit PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 11. MAX3786 SATA EV Kit PC Board LayoutPower Plane

<!-- image -->