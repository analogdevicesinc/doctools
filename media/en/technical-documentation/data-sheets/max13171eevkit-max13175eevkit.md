<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

## General Description

The  MAX13171E/MAX13173E/MAX13175E  evaluation  kit (EV kit) combines the MAX13171E multiprotocol clock/data transceiver,  the  MAX13173E  control  transceiver,  and  the MAX13175E cable terminator chips. This chipset forms a complete  software-selectable  multiprotocol  data  terminal equipment (DTE) or data communications equipment (DCE) interface port that supports the V.28 (RS-232), V.10 (RS-423) V.11 (RS-449/V.36, EIA-530, EIA-530A, and X.21), and V.35 protocols. Internal charge pumps allow the EV kit to operate off a single 3.3V to 5.5V supply.

The EV kit was designed to take advantage of the chipset's flow-through pinout. The EV kit includes a 40-pin header (logic signals), a female DB25 connector (protocol signals), three  SMA  connectors  (high-speed  logic  signals),  and scope-probe  connectors  for  measuring  the  high-speed data signals (logic and protocol signals).

Features

- S Programmable Transceiver Supports V.28 (RS-232) V.10 (RS-423) V.11 (RS-449/V.36, EIA-530, EIA-530A, and X.21) V.35
- S True Fail-Safe Receiver Inputs
- S Programmable Cable Termination (MAX13175E)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART                                                  | TYPE   |
|-------------------------------------------------------|--------|
| MAX13171EEVKIT+ or MAX13173EEVKIT+ or MAX13175EEVKIT+ | EV Kit |

Note: The MAX13171E/MAX13173E/MAX13175E EV kit can be ordered using any of the part numbers above.

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                          |
|---------------------------------|-------|----------------------------------------------------------------------|
| C1, C2, C12, C13, C21, C22, C23 |     7 | 1µF Q 10%, 10V X5R ceramic capacitors (0805) Murata GRM219R61A105M   |
| C3, C4                          |     2 | 4.7µF Q 10%, 10V X5R ceramic capacitors (1206) Murata GRM31CR61A475K |
| C5, C9, C10, C11                |     4 | 4.7µF 10%, 10V X5R ceramic capacitor (0805) Murata GRM21BR71C475K    |
| C6, C7, C8                      |     3 | 100pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GQM1885C1H101J  |
| C14, C15, C18, C19, C20         |     5 | 0.1µF Q 10%, 16V X5R ceramic capacitors (0603) Murata GRM188R61C104K |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C16           |     1 | 0.1µF Q 10%, 16V X7R ceramic capacitor (0805) Murata GRM219R71C104K |
| C17           |     1 | 47µF Q 10%, 16V tantalum capacitor (D case) AVX TPSD476M016R0150    |
| D1-D6         |     6 | Red LEDs                                                            |
| D7-D12        |     6 | Green LEDs                                                          |
| D13-D16       |     4 | Yellow LEDs                                                         |
| J1            |     1 | 40-pin (2 x 20) header                                              |
| J2            |     1 | DB25 right-angle female connector                                   |
| J3, J4, J5    |     3 | SMA connectors (PC edge mount)                                      |
| JU1-JU8       |     8 | 3-pin headers                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION                                                                                                                                                              |   QTY | DESCRIPTION                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------|
| JU9-JU19                                                                                                                                                                 |    11 | 2-pin headers                                             |
| N/A TXC, RXC SCTE, RXCA SCTEA, RXCB SCTEB, RXD TXD, RXDA TXDA, RXDB TXDB, SCTE RXC, SCTEA RXCA, SCTEB RXCB, TXC N/A, TXCA TXCA, TXCB TXCB, TXD RXD, TXDA RXDA, TXDB RXDB |    16 | Scope-probe connectors (top mount, 3.5mm ground cylinder) |
| R1, R2, R3                                                                                                                                                               |     3 | 49.9 I Q 1% resistors (0805)                              |
| R4-R19                                                                                                                                                                   |    16 | 1.5k I Q 5% resistors (0805)                              |

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| R20           |     1 | 10k I Q 5% resistor (0603)                               |
| TP1, TP2      |     2 | Red test points                                          |
| U1            |     1 | Clock/data transceiver (38 TQFN-EP*) Maxim MAX13171EETU+ |
| U2            |     1 | Control transceiver (38 TQFN-EP*) Maxim MAX13173EETU+    |
| U3            |     1 | Cable terminator (38 TQFN-EP*) Maxim MAX13175EETU+       |
| U4, U5        |     2 | Inverting LED drivers (20 Wide SO)                       |
| -             |    19 | Shunts                                                   |
| -             |     1 | PCB: MAX13171E/13173E/ 13175E EVALUATION KIT+            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX13171E, MAX13173E, or MAX13175E when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX13171E/MAX13173E/MAX13175E EV kit
- 3.3V DC power supply

ing signal is a logic-high. Verify that all yellow LEDs light up indicating no-cable mode. All board labels, including  all  the  labels  for  the  LEDs,  follow  the same label format. The board label format top label corresponds  to  DCE  mode  and  the  bottom  label corresponds to DTE mode.

- 5) The green LEDs are attached to the receiver logic outputs of the MAX13171E (U1) and the MAX13173E (U2).  The  LEDs  light  up  when  the  receiver  logic outputs are a logic-high. Verify that all green LEDs light  up  when  no  signals  are  attached  to  the DB25 connector. Note: The receivers have the true fail-safe feature allowing 0V differential voltage to be a valid state that forces the receiver outputs high.
- 6) The red LEDs are attached to the transmitter logic inputs  of  U1  and  U2.  The  LEDs  light  up  when  the transmitter logic inputs are a logic-high. Verify that none of the red LEDs light up when no signals are connected to the 40-pin header (J1).

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed .

- 1) Verify that the default settings  are  configured correctly, as shown in Tables 1, 2, and 3.
- 2) Ensure that a shunt is installed on JU19 so that the VL supply equals that of the VCC supply.
- 3) Connect the  3.3V  power  supply  between  the  VCC and GND pads located in the lower-left corner of the EV kit board.
- 4) The yellow LEDs indicate the protocol mode of the chipset.  The  LEDs  light  up  when  the  correspond-

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

## Detailed Description of Hardware

The  MAX13171E/MAX13173E/MAX13175E  EV  kit  was designed to take advantage of the chipset's flow-through pinout.  The  logic  signals  have  all  been  routed  to  the 40-pin header (J1) located on the left side of the EV kit board. The protocol signals have all been routed to the female DB25 connector (J2) located on the right side of the board.

Various  connectors  have  been  added  to  the  EV  kit to  aid  in  taking  quality  measurements.  Leave  JU17 unconnected  when  measuring  the  supply  current of  the  chipset.  Scope-probe  connectors  have  been added  to  measure  the  high-speed  signals  of  the transmitter inputs/outputs and receiver inputs/outputs of  the  MAX13171E.  The  scope-probe  connectors located on the left side of the board are connected to the  logic  input  and  output  signals.  The  scope-probe connectors located on the right side of the board are connected  to  the  protocol  input  and  output  signals.

Table 1. MAX13171E Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|----------|------|------|------|------------|------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Z = High impedance.

Note:

Shaded areas share a single IC pin.

Table 2. MAX13173E Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | T1   | T2   | T3   | R1   | R2   | R3   | T4   | R4   | T5   | R5   |
|----------|------|------|------|------------|----------|------|------|------|------|------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 |        0 | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    |

Z = High impedance.

Note:

Shaded areas share a single IC pin.

Table 3. MAX13175E Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | R1   | R2   | R3   | R4   | R5   | R6   |
|----------|------|------|------|------------|------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |

Table 4. MAX13171E Mode Selection

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|-------------|------|------|------|------------|------|------|------|------|------|------|
| V.11        |    0 |    0 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| EIA-530A    |    0 |    0 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| EIA-530     |    0 |    1 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          0 | V.35 | V.35 | Z    | V.35 | V.35 | V.35 |
| RS-449/V.36 |    1 |    0 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          0 | Z    | Z    | Z    | Z    | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

Three SMA connectors (J3, J4, and J5) have also been provided for driving the high-speed transmitter inputs of the MAX13171E. The string of 16 LEDs across the top of the board (D1-D16) are logic indicators. The red LEDs (D1-D6) indicate the state of the transmitter inputs of the MAX13171E and MAX13173E, the green LEDs (D7-D12) indicate the state of the receiver outputs, and the yellow LEDs (D13-D16) indicate the state of the protocol and the protocol-termination modes. The LEDs light up when their corresponding signals are a logic-high.

The EV kit is extremely flexible and has several settings for both the ICs as well as the board. The ICs have been put into no-cable mode as the default mode. In no-cable mode  the  user  is  able  to  program  the  desired  protocol  with  an  external  controller  connected  to  the  40-pin header. The default mode settings are shown in Tables 1, 2, and 3. By default the SMA connectors (J3, J4 and J5) are terminated with 50 I and the control-transmitter input lines are all connected low.

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

## Table 4. MAX13171E Mode Selection (continued)

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|-------------|------|------|------|------------|------|------|------|------|------|------|
| EIA-530A    |    0 |    0 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| EIA-530     |    0 |    1 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          1 | V.35 | V.35 | V.35 | Z    | V.35 | V.35 |
| RS-449/V.36 |    1 |    0 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Z = High impedance.

Note:

Shaded areas share a single IC pin.

## Table 5. MAX13173E Mode Selection

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | T1   | T2   | T3   | R1   | R2   | R3   | T4   | R4   | T5   | R5   |
|-------------|------|------|------|------------|----------|------|------|------|------|------|------|------|------|------|------|
| V.11        |    0 |    0 |    0 |          0 |        0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| EIA-530A    |    0 |    0 |    1 |          0 |        0 | V.11 | V.10 | Z    | V.11 | V.10 | V.11 | Z    | V.10 | Z    | V.10 |
| EIA-530     |    0 |    1 |    0 |          0 |        0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| X.21        |    0 |    1 |    1 |          0 |        0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| V.35        |    1 |    0 |    0 |          0 |        0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | Z    | V.28 | Z    | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          0 |        0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| V.28/RS-232 |    1 |    1 |    0 |          0 |        0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | Z    | V.28 | Z    | V.28 |
| No cable    |    1 |    1 |    1 |          0 |        0 | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 |        0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| EIA-530A    |    0 |    0 |    1 |          1 |        0 | V.11 | V.10 | Z    | V.11 | V.10 | V.11 | V.10 | Z    | V.10 | Z    |
| EIA-530     |    0 |    1 |    0 |          0 |        1 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| X.21        |    0 |    1 |    1 |          0 |        1 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| V.35        |    1 |    0 |    0 |          0 |        1 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | V.28 | Z    | V.28 | Z    |
| RS-449/V.36 |    1 |    0 |    1 |          0 |        1 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| V.28/RS-232 |    1 |    1 |    0 |          0 |        1 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | V.28 | Z    | V.28 | Z    |
| No cable    |    1 |    1 |    1 |          0 |        1 | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 |        0 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| EIA-530A    |    0 |    0 |    1 |          1 |        0 | V.11 | V.10 | V.11 | Z    | V.10 | V.11 | V.10 | Z    | V.10 | Z    |
| EIA-530     |    0 |    1 |    0 |          1 |        0 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| X.21        |    0 |    1 |    1 |          1 |        0 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| V.35        |    1 |    0 |    0 |          1 |        0 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | Z    | V.28 | Z    |
| RS-449/V.36 |    1 |    0 |    1 |          1 |        0 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | V.10 | Z    | V.10 | Z    |
| V.28/RS-232 |    1 |    1 |    0 |          1 |        0 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 | Z    | V.28 | Z    |
| No cable    |    1 |    1 |    1 |          1 |        0 | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | V.10 |
| V.11        |    0 |    0 |    0 |          1 |        1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| EIA-530A    |    0 |    0 |    1 |          1 |        1 | V.11 | V.10 | V.11 | Z    | V.10 | V.11 | Z    | V.10 | Z    | V.10 |
| EIA-530     |    0 |    1 |    0 |          1 |        1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| X.21        |    0 |    1 |    1 |          1 |        1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| V.35        |    1 |    0 |    0 |          1 |        1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 | Z    | V.28 | Z    | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          1 |        1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 | Z    | V.10 | Z    | V.10 |
| V.28/RS-232 |    1 |    1 |    0 |          1 |        1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 | Z    | V.28 | Z    | V.28 |
| No cable    |    1 |    1 |    1 |          1 |        1 | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    | Z    |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Z = High impedance.

Note:

Shaded areas share a single IC pin.

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Table 6. MAX13175E Termination-Mode Selection

| MODE        |   DCE/ DTE |   M2 |   M1 |   M0 | R1   | R2   | R3   | R4   | R5   | R6   |
|-------------|------------|------|------|------|------|------|------|------|------|------|
| V.10/RS-423 |          0 |    0 |    0 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| EIA-530A    |          0 |    0 |    0 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| EIA-530     |          0 |    0 |    1 |    0 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| X.21        |          0 |    0 |    1 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| V.35        |          0 |    1 |    0 |    0 | V.35 | V.35 | Z    | V.35 | V.35 | V.35 |
| RS-449/V.36 |          0 |    1 |    0 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| V.28/RS-232 |          0 |    1 |    1 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| No cable    |          0 |    1 |    1 |    1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |
| V.10/RS-423 |          1 |    0 |    0 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| EIA-530A    |          1 |    0 |    0 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| EIA-530     |          1 |    0 |    1 |    0 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| X.21        |          1 |    0 |    1 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| V.35        |          1 |    1 |    0 |    0 | V.35 | V.35 | V.35 | Z    | V.35 | V.35 |
| RS-449/V.36 |          1 |    1 |    0 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| V.28/RS-232 |          1 |    1 |    1 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| No cable    |          1 |    1 |    1 |    1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |

Z = High impedance.

## Configuration

The following provides a step-by-step procedure to aid in  configuring  the  EV  kit.  The  EV  kit  is  extremely  flexible  and  has  several  settings  for  both  the  ICs  as  well as the board. The logic signals have all been routed to the 40-pin header (J1) on the left side of the board. The protocol signals have all been routed to the female DB25 connector (J2) on the right side of the board.

The  chipset  protocol  modes  can  be  configured  to support V.28 (RS-232), V.10 (RS-423) V.11 (RS-449/V.36, EIA-530, EIA-530A, X.21), and V.35 protocols. All chipset logic inputs, LED power, and shield ground connection are jumper selectable. The board includes SMA connectors (J3, J4, and J5) with optional 50 I termination. The board settings are separated in the following sections: chipset protocol modes, clock/data transmitter input settings, control transmitter input settings, SMA termination, and power/ground.

- 1) Ensure that a shunt is installed on jumper JU19 so that the VL supply equals that of the VCC supply.
- 2) Connect  a  single  3.3V  power  supply  between  the VCC and GND pads located in the lower-left corner of the EV kit board.
- 3) Chipset protocol modes:

View the desired chipset protocol modes in Tables 4,  5,  and  6.  Connect  the  jumpers  to  the  corresponding  state  depending  on  whether  the  mode lines are controlled by an external controller or are pin-strapped to a known state using Tables 7 and 8. INVERT defaults to logic-low.

<!-- image -->

- 4) Clock/data transmitter input settings:

Connect the clock/data jumpers to the corresponding  state  using  Table  9.  Force  the  inputs  of  all unused transmitters low so their corresponding LED indicators are off.

- 5)
- Control transmitter input settings: Connect  the  control  jumpers  to  the  corresponding state using Table 10. Force the inputs of all unused transmitters low so their corresponding LED indicators are off.
- 6) SMA termination:

Connect  the  termination  jumpers,  depending  on whether  the  signal  source  needs  to  be  terminated with 50 I , to the corresponding state using Table 11. Leave unused transmitter input lines terminated so the line is pulled down to a known state. When using SMA termination,  avoid  connecting  JU1,  JU2,  and JU3 to VCC.

- 7) Power/ground:

Connect the power and ground jumpers according to the desired operation using Table 12. Leave JU17 unconnected  (open)  when  measuring  the  supply current of the chipset.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

## Table 7. Chipset Protocol Mode Jumper Settings (JU13-JU16)

| JUMPER   | SIGNAL (BUS)   | STATE   | FUNCTION                                                                                                              |
|----------|----------------|---------|-----------------------------------------------------------------------------------------------------------------------|
| JU13     | DCE/ DTE       | Open*   | Logic-high (internal pullup in the IC). The DCE/ DTE line can be driven by a signal applied to J1-30 (40-pin header). |
| JU13     | DCE/ DTE       | Closed  | Logic-low.                                                                                                            |
| JU14     | M2             | Open*   | Logic-high (internal pullup in the IC). The M2 line can be driven by a signal applied to J1-32 (40-pin header).       |
| JU14     | M2             | Closed  | Logic-low.                                                                                                            |
| JU15     | M1             | Open*   | Logic-high (internal pullup in the IC). The M1 line can be driven by a signal applied to J1-34 (40-pin header).       |
| JU15     | M1             | Closed  | Logic low.                                                                                                            |
| JU16     | M0             | Open*   | Logic-high (internal pullup in the IC). The M0 line can be driven by a signal applied to J1-36 (40-pin header).       |
| JU16     | M0             | Closed  | Logic-low.                                                                                                            |

* Default position.

## Table 8. Invert Mode Jumper Settings (JU12)

| JUMPER   | SIGNAL   | STATE   | FUNCTION                                                                                                            |
|----------|----------|---------|---------------------------------------------------------------------------------------------------------------------|
| JU12     | INVERT   | Open    | Logic-high (internal pullup in the IC). The INVERT line can be driven by a signal applied to J1-38 (40-pin header). |
| JU12     | INVERT   | Closed* | Logic-low.                                                                                                          |

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 9. Clock/Data Transmitter-Input Jumper Settings (JU1, JU2, JU3)

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION                              |
|----------|------------|---------|---------------------------------------|
| JU1      | RXD/TXD    | 1-2     | Logic-high.                           |
| JU1      | RXD/TXD    | 2-3     | Logic-low.                            |
| JU1      | RXD/TXD    | Open*   | Apply signal to the J5 SMA connector. |
| JU2      | RXC/SCTE   | 1-2     | Logic-high.                           |
| JU2      | RXC/SCTE   | 2-3     | Logic-low.                            |
| JU2      | RXC/SCTE   | Open*   | Apply signal to the J4 SMA connector. |
| JU3      | TXC/N/A    | 1-2     | Logic-high.                           |
| JU3      | TXC/N/A    | 2-3     | Logic-low.                            |
| JU3      | TXC/N/A    | Open*   | Apply signal to the J3 SMA connector. |

## Table 10. Control Transmitter-Input Jumper Settings (JU4-JU8)

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION                               |
|----------|------------|---------|----------------------------------------|
| JU4      | CTS/RTS    | 1-2     | Logic-high.                            |
| JU4      | CTS/RTS    | 2-3*    | Logic-low.                             |
| JU4      | CTS/RTS    | Open    | Apply signal to J1-14 (40-pin header). |
| JU5      | DSR/DTR    | 1-2     | Logic-high.                            |
| JU5      | DSR/DTR    | 2-3*    | Logic-low.                             |
| JU5      | DSR/DTR    | Open    | Apply signal to J1-16 (40-pin header). |
| JU6      | DCD/N/A    | 1-2     | Logic-high.                            |
| JU6      | DCD/N/A    | 2-3*    | Logic-low.                             |
| JU6      | DCD/N/A    | Open    | Apply signal to J1-18 (40-pin header). |
| JU7      | LL/N/A     | 1-2     | Logic-high.                            |
| JU7      | LL/N/A     | 2-3*    | Logic-low.                             |
| JU7      | LL/N/A     | Open    | Apply signal to J1-26 (40-pin header). |
| JU8      | R5OUT/T5IN | 1-2     | Logic-high.                            |
| JU8      | R5OUT/T5IN | 2-3*    | Logic-low.                             |
| JU8      | R5OUT/T5IN | Open    | Apply signal to J1-40 (40-pin header). |

* Default position.

<!-- image -->

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Table 11. Termination Jumper Settings (JU9, JU10, JU18)

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION               |
|----------|------------|---------|------------------------|
| JU9      | RXC/SCTE   | Open    | Unterminated.          |
| JU9      | RXC/SCTE   | Closed* | Terminated with 50 I . |
| JU10     | TXC/N/A    | Open    | Unterminated.          |
| JU10     | TXC/N/A    | Closed* | Terminated with 50 I . |
| JU18     | RXD/TXD    | Open    | Unterminated.          |
| JU18     | RXD/TXD    | Closed* | Terminated with 50 I . |

Table 12. Power/Ground Jumper Settings (JU11, JU17, JU19)

| JUMPER   | NAME      | STATE   | FUNCTION                                                                     |
|----------|-----------|---------|------------------------------------------------------------------------------|
| JU11     | SHIELD    | Open    | DB25 cable shield disconnected from signal ground.                           |
| JU11     | SHIELD    | Closed* | DB25 cable shield shorted to signal ground.                                  |
| JU17     | LED ANODE | Open    | LED anode is unconnected.                                                    |
| JU17     | LED ANODE | Closed* | LED anode is connected to VCC.                                               |
| JU19     | VL        | Open    | VL is set by the voltage applied at the JU19 pin connected to U1, U2 and U3. |
| JU19     | VL        | Closed* | VL is set by the voltage applied to VCC                                      |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 1a. MAX13171E/MAX13173E/MAX13175E EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

<!-- image -->

Figure 1b. MAX13171E/MAX13173E/MAX13175E EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 2. MAX13171E/MAX13173E/MAX13175E EV Kit Component Placement Guide-Component Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 3. MAX13171E/MAX13173E/MAX13175E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 4. MAX13171E/MAX13173E/MAX13175E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 5. MAX13171E/MAX13173E/MAX13175E EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Figure 6. MAX13171E/MAX13173E/MAX13175E EV Kit PCB Layout-Solder Side

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13171E/MAX13173E/MAX13175E Evaluation Kit

Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |