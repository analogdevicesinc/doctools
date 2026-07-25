<!-- lastmod 2022-08-02 -->
## General Description

The MAX3170 evaluation kit (EV kit) combines Maxim's multiprotocol clock/data transceiver (MAX3170), control transceiver  (MAX3171),  and  cable  terminator (MAX3172) chips. This chipset forms a complete software-selectable data terminal equipment (DTE) or data communications equipment (DCE) interface port.

The MAX3170, MAX3171, and MAX3172 chipset supports V.28 (RS-232), V.11 (RS-449/V.36, EIA-530, EIA530A, X.21), and V.35 protocols. Compliance for NET1, NET2, TBR-1, and TBR-2 has been certified by TUV Telecom Services, Inc. Internal charge pumps allow this kit to operate from a single +3.3V supply.

The MAX3170 EV kit was designed to take advantage of the chipset's flow-through pinout. This kit includes a 40-pin header (logic signals), a female DB25 connector (protocol signals), three SMA connectors (high-speed logic signals), and scope probe connectors for measuring the high-speed data signals (logic and protocol signals).

| DESIGNATION               |   QTY | DESCRIPTION                                                          |
|---------------------------|-------|----------------------------------------------------------------------|
| C1, C2, C5, C6, C7, C10   |     6 | 3.3 µ F, 10V X7R ceramic capacitors (1206) Taiyo Yuden LMK316BJ335ML |
| C3, C4, C8, C9            |     4 | 1.0 µ F, X5R ceramic capacitors (0805) Taiyo Yuden LMK212BJ105MG     |
| C11, C12, C13             |     3 | 100pF ceramic capacitors (0805)                                      |
| C14, C15, C17             |     3 | 0.1 µ F ceramic capacitors (0805)                                    |
| C16                       |     1 | 47 µ F, 6.3V tantalum capacitor AVX TAJD476M006                      |
| D1, D2, D3, D5, D6, D9    |     6 | Red LEDs                                                             |
| D4, D7, D8, D10, D11, D12 |     6 | Green LEDs                                                           |

<!-- image -->

## Features

- ♦ Industry's First Single +3.3V Supply Multiprotocol Chipset
- ♦ Industry's First Multiprotocol Chipset with True Failsafe Receivers
- ♦ Programmable Transceiver Supports V.28 (RS-232) V.11 (RS-449/V.36, EIA-530, EIA-530A, X.21) V.35
- ♦ Certified TBR-1 and TBR-2 Compliant
- ♦ Certified NET1 and NET2 Compliant
- ♦ Programmable Cable Termination (MAX3172)
- ♦ Receiver Control Line Deglitching
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      |
|--------------|------------------|
| MAX3170EVKIT | 0 ° C to +70 ° C |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                           |
|---------------------------|-------|-------------------------------------------------------|
| D13-D16                   |     4 | Yellow LEDs                                           |
| JU1-JU7, JU12             |     8 | 3-pin headers                                         |
| JU8-JU11, JU14-JU17, JU19 |     9 | 2-pin headers                                         |
| None                      |    17 | Shunts                                                |
| J1                        |     1 | 40-pin header (2 × 20) 0.1in center                   |
| J2                        |     1 | DB25 right-angle female connector AMP 747846-4        |
| J3, J4, J5                |     3 | SMA connectors (PC edge mount) EFJohnson 142-0701-801 |
| R1, R2, R3                |     3 | 49.9 Ω ± 1% resistors (0805)                          |
| R8-R23                    |    16 | 100 Ω ± 5% resistors (0805)                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3170 Evaluation Kit

## Component List (continued)

| DESIGNATION                                                                                                                                                              |   QTY | DESCRIPTION                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------|
| RXD/TXD, RXC/SCTE, TXC/N/A, N/A/TXC, SCTE/RXC, TXD/RXD, RXDA/TXDA, RXDB/TXDB, RXCA/SCTEA, RXCB/SCTEB, TXCA/TXCA, TXCB/TXCB, SCTEA/RXCA, SCTEB/RXCB, TXDA/RXDA, TXDB/RXDB |    16 | Scope probe connectors (top mount) Specialty Conn 33JR135-1 |
| U1                                                                                                                                                                       |     1 | MAX3170CAI (clock/data transceiver) (28 SSOP)               |
| U2                                                                                                                                                                       |     1 | MAX3171CAI (control transceiver) (28 SSOP)                  |
| U3                                                                                                                                                                       |     1 | MAX3172CAI (terminator) (28 SSOP)                           |
| U4, U5                                                                                                                                                                   |     2 | 74HC240 (LED inverting drivers)                             |

## Quick Start

The MAX3170 EV kit is extremely flexible and has several settings for both the ICs as well as the board. The ICs have been put into no-cable mode, as the default mode. In no-cable mode the user is able to program the desired protocol with an external controller connected to the 40-pin header. The one exception is the INVERT signal, which does not have an internal pullup and is connected as a logic low for the default setting. The default mode settings are shown in Tables 1-4. By default, the SMA connectors (J3, J4, and J5) are terminated with 50 Ω and the control transmitter input lines are all tied low.

- 1) Connect a single +3.3V ±5% power supply to VCC and GND located at the lower-left corner of the MAX3170 EV kit board.
- 2) The yellow LEDs indicate the protocol mode of the chipset. The LEDs will light when the corresponding signal is a logic high. Verify that all yellow LEDs

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

light,  indicating  no-cable  mode. All  board labels, including all of the labels for the LEDs, follow the same label format. The board label format includes a top label which corresponds to DCE mode, and a bottom label which corresponds to DTE mode.

- 3) The green LEDs are attached to the receiver logic outputs of the MAX3170 and MAX3171. The LEDs will light when the receiver logic outputs are a logic high.  Verify  that  all  green  LEDs  light  when  no  signals are attached to the DB25 connector. Note: The receivers have the true fail-safe feature allowing zero differential  voltage  to  be  a  valid  state,  which forces the receiver outputs high.
- 4) The red LEDs are attached to the transmitter logic inputs of the MAX3170 and MAX3171. The LEDs will light  when the transmitter logic inputs are a logic high. Verify that none of the red LEDs light when no signals are connected to the 40-pin header.

## Detailed Description

The MAX3170 EV kit was designed to take advantage of  the  chipset's  flow-through  pinout.  The  logic  signals have all been routed to the 40-pin header (located on the left side of the EV kit board), and the protocol signals have all been routed to the female DB25 connector (located on the right side of the board).

Various connectors have been added to the MAX3170 EV kit to aid in taking quality measurements. Leave JU19 unconnected when measuring the supply current of  the  chipset.  Scope probe connectors have been added to measure the high-speed signals of the transmitter and receiver inputs and outputs of the MAX3170. The scope probe connectors located on the left side of the board are connected to the logic input and output signals. The scope probe connectors located on the right  side  of  the  board  are  connected  to  the  protocol input and output signals. Three SMA connectors also have been provided for driving the MAX3170's highspeed transmitter inputs. The 16 LEDs across the top of the  board are logic indicators. The red LEDs indicate the state of the transmitter inputs, the green LEDs indicate the state of the receiver outputs, and the yellow LEDs indicate the state of the protocol and the protocol termination modes of the MAX3170 and MAX3171. The LEDs will light up when their corresponding signals are logic high.

Table 1. MAX3170 Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|----------|------|------|------|------------|------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Note:

Shaded areas share a single IC pin.

Table 2. MAX3171 Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|----------|------|------|------|------------|------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Note:

Shaded areas share a single IC pin.

Table 3. MAX3172 R4/T4 Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | T4   | R4   |
|----------|------|------|------|------------|----------|------|------|
| No cable |    1 |    1 |    1 |          1 |        0 | Z    | Z    |

Z = High impedance.

Table 4. MAX3172 Default Termination Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | R1   | R2   | R3   | R4   | R5   |
|----------|------|------|------|------------|----------|------|------|------|------|------|
| No cable |    1 |    1 |    1 |          1 |        0 | V.11 | V.11 | V.11 | V.11 | V.11 |

## Configuration

The following is a step-by-step procedure to configure the MAX3170 EV kit. The MAX3170 EV kit is extremely flexible  and  has  several  settings  for  both  the  ICs,  as well as the board. The logic signals have all been routed to the 40-pin header on the left side of the board. The protocol signals have all been routed to the female DB25 connector on the right side of the board.

The chipset protocol modes can be configured to support V.28 (RS-232), V.11 (RS-449/V.36, EIA-530, EIA530A, X.21), and V.35 protocols. All chipset logic inputs,  LED power, and shield ground connection are jumper selectable. The board includes SMA connectors (J3,  J4,  and  J5)  with  optional  50 Ω termination. The board settings will be separated in the following sections:  chipset  protocol  modes, clock/data transmitter input settings, control transmitter input settings, SMA termination, and power/ground.

<!-- image -->

- 1) Connect a single +3.3V ±5% power supply to VCC and GND located at the lower-left corner of the MAX3170 EV kit board.
- 2) Chipset protocol modes:

View the desired chipset protocol mode using the MAX3170, MAX3171, and MAX3172 selection mode tables (Tables 5-8). Connect the jumpers to the corresponding state depending on whether the mode lines will be controlled by an external controller  or  pin-strapped to a known state using Tables 9 and 10. Unlike the other IC protocol mode lines (M2, M1, M0, and DCE/ DTE ), the INVERT line does not have a pullup.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

## MAX3170 Evaluation Kit

- 3) Clock/data transmitter input settings:

Connect the clock/data jumpers to the corresponding state using Table 11. Force the inputs of all unused transmitters low so their corresponding LED indicators will be off.

- 4) Control transmitter input settings:

Connect the control jumpers to the corresponding state using Table 12. Force the inputs of all unused transmitters low so their corresponding LED indicators will be off.

- 5) SMA termination:

Connect the termination jumpers, depending on whether the signal source needs to be terminated

Table 5. MAX3170 Mode Selection

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|-------------|------|------|------|------------|------|------|------|------|------|------|
| V.11        |    0 |    0 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| RS-530A     |    0 |    0 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| RS-530      |    0 |    1 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          0 | V.35 | V.35 | Z    | V.35 | V.35 | V.35 |
| RS-449/V.36 |    1 |    0 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          0 | Z    | Z    | Z    | Z    | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| RS-530A     |    0 |    0 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| RS-530      |    0 |    1 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          1 | V.35 | V.35 | V.35 | Z    | V.35 | V.35 |
| RS-449/V.36 |    1 |    0 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Z = High impedance.

Note:

Shaded areas share a single IC pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

with 50 Ω ,  to  the  corresponding  state  using  Table 13. Leave unused transmitter input lines terminated so the line is pulled down in a known state. When using SMA termination, avoid connecting JU1, JU2, and JU3 to VCC.

- 6) Power/ground:

Connect the power and ground jumpers according to  the  desired operation using Table 14. Leave JU19 unconnected (open) when measuring the supply current of the chipset.

Table 6. MAX3171 Mode Selection

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3   | R1   | R2   | R3   |
|-------------|------|------|------|------------|------|------|------|------|------|------|
| V.11        |    0 |    0 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| RS-530A     |    0 |    0 |    1 |          0 | V.11 | V.10 | Z    | V.11 | V.10 | V.11 |
| RS-530      |    0 |    1 |    0 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          0 | V.11 | V.11 | Z    | V.11 | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          0 | V.28 | V.28 | Z    | V.28 | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          0 | Z    | Z    | Z    | Z    | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| RS-530A     |    0 |    0 |    1 |          1 | V.11 | V.10 | V.11 | Z    | V.10 | V.11 |
| RS-530      |    0 |    1 |    0 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| X.21        |    0 |    1 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.35        |    1 |    0 |    0 |          1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          1 | V.11 | V.11 | V.11 | Z    | V.11 | V.11 |
| V.28/RS-232 |    1 |    1 |    0 |          1 | V.28 | V.28 | V.28 | Z    | V.28 | V.28 |
| No cable    |    1 |    1 |    1 |          1 | Z    | Z    | Z    | Z    | Z    | Z    |

Z = High impedance.

Note:

Shaded areas share a single IC pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

## Evaluates:  MAX3170/MAX3171/MAX3172

## MAX3170 Evaluation Kit

## Table 7. MAX3172 R4/T4 Mode Selection

| MODE        |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | T4   | R4   |
|-------------|------|------|------|------------|----------|------|------|
| V.11        |    0 |    0 |    0 |          0 |        0 | Z    | V.10 |
| RS-530A     |    0 |    0 |    1 |          0 |        0 | Z    | V.10 |
| RS-530      |    0 |    1 |    0 |          0 |        0 | Z    | V.10 |
| X.21        |    0 |    1 |    1 |          0 |        0 | Z    | V.10 |
| V.35        |    1 |    0 |    0 |          0 |        0 | Z    | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          0 |        0 | Z    | V.10 |
| V.28/RS-232 |    1 |    1 |    0 |          0 |        0 | Z    | V.28 |
| No cable    |    1 |    1 |    1 |          0 |        0 | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 |        0 | V.10 | Z    |
| RS-530A     |    0 |    0 |    1 |          1 |        0 | V.10 | Z    |
| RS-530      |    0 |    1 |    0 |          1 |        0 | V.10 | Z    |
| X.21        |    0 |    1 |    1 |          1 |        0 | V.10 | Z    |
| V.35        |    1 |    0 |    0 |          1 |        0 | V.28 | Z    |
| RS-449/V.36 |    1 |    0 |    1 |          1 |        0 | V.10 | Z    |
| V.28/RS-232 |    1 |    1 |    0 |          1 |        0 | V.28 | Z    |
| No cable    |    1 |    1 |    1 |          1 |        0 | Z    | Z    |
| V.11        |    0 |    0 |    0 |          0 |        1 | V.10 | Z    |
| RS-530A     |    0 |    0 |    1 |          0 |        1 | V.10 | Z    |
| RS-530      |    0 |    1 |    0 |          0 |        1 | V.10 | Z    |
| X.21        |    0 |    1 |    1 |          0 |        1 | V.10 | Z    |
| V.35        |    1 |    0 |    0 |          0 |        1 | V.28 | Z    |
| RS-449/V.36 |    1 |    0 |    1 |          0 |        1 | V.10 | Z    |
| V.28/RS-232 |    1 |    1 |    0 |          0 |        1 | V.28 | Z    |
| No cable    |    1 |    1 |    1 |          0 |        1 | Z    | Z    |
| V.11        |    0 |    0 |    0 |          1 |        1 | Z    | V.10 |
| RS-530A     |    0 |    0 |    1 |          1 |        1 | Z    | V.10 |
| RS-530      |    0 |    1 |    0 |          1 |        1 | Z    | V.10 |
| X.21        |    0 |    1 |    1 |          1 |        1 | Z    | V.10 |
| V.35        |    1 |    0 |    0 |          1 |        1 | Z    | V.28 |
| RS-449/V.36 |    1 |    0 |    1 |          1 |        1 | Z    | V.10 |
| V.28/RS-232 |    1 |    1 |    0 |          1 |        1 | Z    | V.28 |
| No cable    |    1 |    1 |    1 |          1 |        1 | Z    | Z    |

Z = High impedance.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

Table 8. MAX3172 Termination Mode Selection

| MODE                |   M2 |   M1 |   M0 |   DCE/ DTE | INVERT   | R1   | R2   | R3   | R4   | R5   |
|---------------------|------|------|------|------------|----------|------|------|------|------|------|
| V.11 (Unterminated) |    0 |    0 |    0 |          0 | X        | Z    | Z    | Z    | Z    | Z    |
| RS-530A             |    0 |    0 |    1 |          0 | X        | Z    | Z    | V.11 | V.11 | V.11 |
| RS-530              |    0 |    1 |    0 |          0 | X        | Z    | Z    | V.11 | V.11 | V.11 |
| X.21                |    0 |    1 |    1 |          0 | X        | Z    | Z    | V.11 | V.11 | V.11 |
| V.35                |    1 |    0 |    0 |          0 | X        | V.35 | V.35 | V.35 | V.35 | V.35 |
| RS-449/V.36         |    1 |    0 |    1 |          0 | X        | Z    | Z    | V.11 | V.11 | V.11 |
| V.28/RS-232         |    1 |    1 |    0 |          0 | X        | Z    | Z    | Z    | Z    | Z    |
| No cable            |    1 |    1 |    1 |          0 | X        | V.11 | V.11 | V.11 | V.11 | V.11 |
| V.11 (Unterminated) |    0 |    0 |    0 |          1 | X        | Z    | Z    | Z    | Z    | Z    |
| RS-530A             |    0 |    0 |    1 |          1 | X        | Z    | Z    | Z    | V.11 | V.11 |
| RS-530              |    0 |    1 |    0 |          1 | X        | Z    | Z    | Z    | V.11 | V.11 |
| X.21                |    0 |    1 |    1 |          1 | X        | Z    | Z    | Z    | V.11 | V.11 |
| V.35                |    1 |    0 |    0 |          1 | X        | V.35 | V.35 | V.35 | V.35 | V.35 |
| RS-449/V.36         |    1 |    0 |    1 |          1 | X        | Z    | Z    | Z    | V.11 | V.11 |
| V.28/RS-232         |    1 |    1 |    0 |          1 | X        | Z    | Z    | Z    | Z    | Z    |
| No cable            |    1 |    1 |    1 |          1 | X        | V.11 | V.11 | V.11 | V.11 | V.11 |

Z = High impedance.

Table 9. Chipset Protocol Mode Jumper Settings

| JUMPER   | SIGNAL (BUS)   | STATE   | FUNCTION                                                                                                     |
|----------|----------------|---------|--------------------------------------------------------------------------------------------------------------|
| JU14     | DCE/ DTE       | Open*   | Logic high. (Internal pullup in IC.) DCE/ DTE line can be driven by signal applied to J1-30 (40-pin header). |
| JU14     | DCE/ DTE       | Closed  | Logic low                                                                                                    |
| JU15     | M2             | Open*   | Logic high. (Internal pullup in IC.) M2 line can be driven by signal applied to J1-32 (40-pin header).       |
| JU15     | M2             | Closed  | Logic low                                                                                                    |
| JU16     | M1             | Open*   | Logic high. (Internal pullup in IC.) M1 line can be driven by signal applied to J1-34 (40-pin header).       |
| JU16     | M1             | Closed  | Logic low                                                                                                    |
| JU17     | M0             | Open*   | Logic high. (Internal pullup in IC.) M0 line can be driven by signal applied to J1-36 (40-pin header).       |
| JU17     | M0             | Closed  | Logic low                                                                                                    |

*Default jumper setting.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

## Table 10. Invert Mode Jumper Settings

| JUMPER   | SIGNAL   | STATE   | FUNCTION                              |
|----------|----------|---------|---------------------------------------|
| JU12     | INVERT   | 1-2*    | Logic high                            |
| JU12     | INVERT   | 2-3     | Logic low                             |
| JU12     | INVERT   | Open    | Apply signal to J1-38 (40-pin header) |

*Default jumper setting.

## Table 11. Clock/Data Transmitter Input Jumper Settings

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION                         |
|----------|------------|---------|----------------------------------|
| JU1      | RXD/TXD    | 1-2     | Logic high                       |
| JU1      | RXD/TXD    | 2-3     | Logic low                        |
| JU1      | RXD/TXD    | Open*   | Apply signal to SMA connector J3 |
| JU2      | RXC/SCTE   | 1-2     | Logic high                       |
| JU2      | RXC/SCTE   | 2-3     | Logic low                        |
| JU2      | RXC/SCTE   | Open*   | Apply signal to SMA connector J4 |
| JU3      | TXC/N/A    | 1-2     | Logic high                       |
| JU3      | TXC/N/A    | 2-3     | Logic low                        |
| JU3      | TXC/N/A    | Open*   | Apply signal to SMA connector J5 |

*Default jumper setting.

## Table 12. Control Transmitter Input Jumper Settings

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION                              |
|----------|------------|---------|---------------------------------------|
| JU4      | CTS/RTS    | 1-2     | Logic high                            |
| JU4      | CTS/RTS    | 2-3*    | Logic low                             |
| JU4      | CTS/RTS    | Open    | Apply signal to J1-14 (40-pin header) |
| JU5      | DSR/DTR    | 1-2     | Logic high                            |
| JU5      | DSR/DTR    | 2-3*    | Logic low                             |
| JU5      | DSR/DTR    | Open    | Apply signal to J1-16 (40-pin header) |
| JU6      | DCD/N/A    | 1-2     | Logic high                            |
| JU6      | DCD/N/A    | 2-3*    | Logic low                             |
| JU6      | DCD/N/A    | Open    | Apply signal to J1-18 (40-pin header) |
| JU7      | LL/N/A     | 1-2     | Logic high                            |
| JU7      | LL/N/A     | 2-3*    | Logic low                             |
| JU7      | LL/N/A     | Open    | Apply signal to J1-26 (40-pin header) |

*Default jumper setting.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 13. Termination settings

| JUMPER   | DCE/ DTE   | STATE   | FUNCTION             |
|----------|------------|---------|----------------------|
| JU8      | RXD/TXD    | Open    | Unterminated         |
| JU8      | RXD/TXD    | Closed* | Terminated with 50 Ω |
| JU9      | RXC/SCTE   | Open    | Unterminated         |
| JU9      | RXC/SCTE   | Closed* | Terminated with 50 Ω |
| JU10     | TXC/ N/A   | Open    | Unterminated         |
| JU10     | TXC/ N/A   | Closed* | Terminated with 50 Ω |

Table 14. Power/Ground Jumper Settings

| JUMPER   | NAME      | STATE   | FUNCTION                                                 |
|----------|-----------|---------|----------------------------------------------------------|
| JU11     | SHIELD    | Open    | DB25 cable shield (J2-1) disconnected from signal ground |
| JU11     | SHIELD    | Closed* | DB25 cable shield (J2-1) shorted to signal ground        |
| JU19     | LED ANODE | Open    | LED anode is floating                                    |
| JU19     | LED ANODE | Closed* | LED anode is connected to VCC                            |

*Default jumper setting.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

## MAX3170 Evaluation Kit

<!-- image -->

## MAX3170 Evaluation Kit

<!-- image -->

Figure 1. MAX3170 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3170 Evaluation Kit

<!-- image -->

Figure 2. MAX3170 EV Kit Component Placement GuideTop Layer (Silkscreen)

Figure 3. MAX3170 EV Kit Component Placement GuideTop Layer (Component Side)

<!-- image -->

Figure 4. MAX3170 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX3170 EV Kit PC Board Layout-Inner Layer 3 (VCC)

<!-- image -->

## MAX3170 Evaluation Kit

Figure 6. MAX3170 EV Kit PC Board Layout-Bottom Layer (Solder Side)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_