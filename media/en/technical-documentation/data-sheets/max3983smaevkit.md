<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3983 SMA Connector Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The MAX3983 SMA Connector evaluation kit (EV Kit) is an assembled demonstration board that provides electrical evaluation of the MAX3983 Quad Copper Cable Signal Conditioner. All data  inputs and  outputs  are accessible  through  SMA  connectors.  The  EV  Kit  also includes a calibration strip for accurate measurements.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION               |   QTY | DESCRIPTION                                           |
|---------------------------|-------|-------------------------------------------------------|
| C1-C32, C35- C44          |    42 | 0.01 µ F ± 5% ceramic capacitors (0402)               |
| C33                       |     1 | 33 µ F tantalum capacitor                             |
| C34, C45, C46, C49        |     4 | 0.1 µ F ± 5% ceramic capacitors (0402)                |
| C47, C48, C50, C51        |     4 | Not Installed                                         |
| J1-J34                    |    34 | SMA connectors, edge mount                            |
| JP1, JP2, JP8 - JP10 JP12 |     6 | 2-pin headers, 0.1in centers                          |
| JP3                       |     1 | 3-pin header, 0.1in centers                           |
| JP5                       |     1 | 3-pin + 1-pin header, 0.1in centers                   |
| JP11                      |     1 | Not Installed                                         |
| L1                        |     1 | 4.7 µ H Inductor Coilcraft DS1608C-472                |
| R1-R8                     |     8 | 4.7k Ω ± 5% resistors (0402)                          |
| R10 - R18                 |     9 | Not Installed                                         |
| TP1-TP11                  |    11 | Test points Digi-Key 5000K-ND                         |
| U1                        |     1 | MAX3983UGK 68-QFN*                                    |
| U2                        |     1 | OR Gate Fairchild NC7S32P5X SC70                      |
| None                      |       | MAX3983 SMA connector evaluation circuit board, rev B |
| None                      |       | MAX3983 data sheet                                    |

* Note :  U1  has  an  exposed  pad  which  requires  it  to  be solder  attached  to  the  circuit  board  to  ensure  proper functionality of the part.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ Easy Selection of Operating Modes
- ♦ Equipped with SMA Connectors on all Data Inputs and Outputs

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART TEMP. RANGE                  | IC PACKAGE   |
|-----------------------------------|--------------|
| MAX3983SMA EVKIT 0 ° C to +85 ° C | 68 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please  indicate  that  you  are  using  the  MAX3983 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Connect  a  +3.3V  supply  to  the  3.3V  terminal  and ground to the GND terminal.
- 2) Install shunt at jumper JP10.
- 3) Disable system loopback by installing the LOOPBACK shunt at jumper JP9.
- 4) Remove shunts at jumpers JP3 and JP5 to enable TX and RX.
- 5) Install shunt at jumper JP2 to VCC to provide +3.3V to the SD pullup resistors.
- 6) Apply 2.5Gbps to 3.2Gbps data to TX\_IN[1:4] (J9 - J16).
- 7) Apply 2.5Gbps to 3.2Gbps data to RX\_IN[1:4] (J19 - J26).
- 8) Connect data outputs RX\_OUT[1:4] (J1 - J8) to a 50 ohm-terminated  oscilloscope  to  monitor  RX\_IN[1:4] data, and/or connect TX\_OUT[1:4] (J27 - J34) to a 50 ohm-terminated oscilloscope to monitor TX\_IN[1:4] data.
- 9) Adjust TX pre-emphasis with jumpers JP1 and JP12, and adjust RX pre-emphasis with JP8 (see Jumper Descriptions ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3983 SMA Connector Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ \_

## Jumper Descriptions

| NAME            | TYPE                 | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                          |
|-----------------|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TX_PE1 (JP1)    | 2-pin header         | OPEN             | Enables most-significant bit of TX pre-emphasis control                                                                                                                              |
| TX_PE1 (JP1)    | 2-pin header         | SHUNT (GND)      | Disables most-significant bit of TX pre-emphasis control                                                                                                                             |
| TX_PE0 (JP12)   | 2-pin header         | OPEN             | Enables least-significant bit of TX pre-emphasis control                                                                                                                             |
| TX_PE0 (JP12)   | 2-pin header         | SHUNT (GND)      | Disables least-significant bit of TX pre-emphasis control                                                                                                                            |
| RX_PE (JP8)     | 2-pin header         | OPEN             | Sets RX pre-emphasis to 6dB                                                                                                                                                          |
| RX_PE (JP8)     | 2-pin header         | SHUNT (GND)      | Sets RX pre-emphasis to 3dB                                                                                                                                                          |
| LOOPBACK (JP9)  | 2-pin header         | OPEN             | Enables loopback from TX_IN[1:4] to RX_OUT[1:4]                                                                                                                                      |
| LOOPBACK (JP9)  | 2-pin header         | SHUNT (GND)      | Disables loopback                                                                                                                                                                    |
| VCCTX (JP10)    | 2-pin header         | SHUNT            | Jumper JP10 must be shunted for proper operation of the MAX3983                                                                                                                      |
| PULLUP (JP2)    | 2-pin header         | OPEN             | Allows external voltage (3.0V to 5.5V) applied at V PULLUP pin as SD resistor pullup voltage                                                                                         |
| PULLUP (JP2)    | 2-pin header         | SHUNT (V CC )    | Sets Vcc as the SD resistor pullup voltage                                                                                                                                           |
| TX_ENABLE (JP3) | 3-pin header         | OPEN             | Enables the TX section of the MAX3983                                                                                                                                                |
| TX_ENABLE (JP3) | 3-pin header         | TX_AUTO_EN       | Enables auto-detection in the TX section, when EV board is set up in the Auto-Detect configuration. See Auto-Detect Configuration in Detailed Description.                           |
| TX_ENABLE (JP3) | 3-pin header         | TX_DISABLE       | Disables the TX section of the MAX3983                                                                                                                                               |
| RX_ENABLE (JP5) | 3-pin + 1-pin header | OPEN             | Enables the RX section of the MAX3983                                                                                                                                                |
| RX_ENABLE (JP5) | 3-pin + 1-pin header | RX_AUTO_EN       | Enables auto-detection in the RX section when EV board is set up in the Auto-Detect configuration. See Auto-Detect Configuration in Detailed Description.                            |
| RX_ENABLE (JP5) | 3-pin + 1-pin header | RX_DISABLE       | Disables the RX section of the MAX3983                                                                                                                                               |
| RX_ENABLE (JP5) | 3-pin + 1-pin header |                  | Sets RX_ENABLE high whenever LOOPBACK or all of RX_SD[1:4] are high when EV board is set up in the Auto-Detect configuration. See Auto-Detect Configuration in Detailed Description. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

## Auto-Detect Configuration

The MAX3983 SMA Connector Evaluation Kit is shipped with each signal detect (SD) separated. In order for the MAX3983 to automatically detect an incoming signal and enable the corresponding output, these SD outputs need to be connected together.

To configure the board for auto-detection on the RX side, solder four 0 Ω 0402 resistors in R14 - R17 and remove R6, R7, and R8. Jumper JP5 then enables RX auto-detect (see Jumper Descriptions ).

To configure the board for auto-detection on the TX side, solder four 0 Ω 0402 resistors in R10 - R13 and remove R2, R3, and R4. Jumper JP3 then enables TX auto-detect (see Jumper Descriptions ).

## Output Transition Times

If slower transition times are desired, the MAX3983 SMA Connector Evaluation Kit provides a connection for 0402 capacitors across the TX outputs. To achieve about 100ps (20%-80%) edges, solder 1.5pF capacitors for C47, C48, C50, and C51.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3983 SMA Connector Evaluation Kit

Figure 1. MAX3983 SMA Connector EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3983 SMA Connector Evaluation Kit

+100xi

Figure 2. MAX3983 SMA Connector EV Kit Component Placement Guide - Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3983 SMA Connector Evaluation Kit

Figure 3.  MAX3983 SMA Connector EV Kit PC Board Layout - Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3983 SMA Connector Evaluation Kit

Figure 4. MAX3983 SMA Connector EV Kit PC Board Layout - Ground Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3983 SMA Connector Evaluation Kit

Figure 5. MAX3983 SMA Connector EV Kit PC Board Layout - Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3983 SMA Connector Evaluation Kit

Figure 6. MAX3983 SMA Connector EV Kit PC Board Layout - Solder (Bottom) Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_