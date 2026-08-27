<!-- lastmod 2022-08-02 -->
## General Description

The MXL1543 evaluation kit (EV kit) combines Maxim's multiprotocol clock/data transceiver (MXL1543), control transceiver (MXL1544), and cable terminator (MXL1344A) chips. This chipset forms a complete software-selectable multiprotocol data terminal equipment (DTE) or data communications equipment (DCE) interface port.

The MXL1543, MXL1544, and MXL1344A chipset supports V.28 (RS-232), V.11(RS-449/V.36, EIA530, EIA530A, X.21), and V.35 protocols. NET1, NET2, TBR-1, and TBR-2 compliance has been certified by TUV Telecom Services, Inc. Internal charge pumps allow this kit to operate off a single +5V supply.

The MXL1543 EV kit was designed to take advantage of the chipset's flow-through pinout. This kit includes a 40pin header (logic signals), a female DB25 connector (protocol signals), three SMA connectors (high-speed logic signals), and scope probe connectors for measuring the high-speed data signals (logic and protocol signals).

The MXL1543 EV kit can evaluate the MAX3175 and is used in place of the MXL1544. Contact Maxim to order samples of the MAX3175CAI. No further changes are required to the board to evaluate the MAX3175.

| DESIGNATION        |   QTY | DESCRIPTION                                                            |
|--------------------|-------|------------------------------------------------------------------------|
| C1, C2, C5, C9-C13 |     8 | 1µF, 10V ceramic capacitors (0805) TDK C2012X5R1A105M                  |
| C3, C4             |     2 | 4.7µF, 10V ceramic capacitors (1206) TDK C3216X5R1A475M                |
| C6, C7, C8         |     3 | 100pF ceramic capacitors (0603)                                        |
| C14, C15           |     2 | 0.1µF ceramic capacitors (0603)                                        |
| C16                |     1 | 0.1µF ceramic capacitor (0805)                                         |
| C17                |     1 | 47µF, 16V tantalum capacitor (D case) AVX TPSD476M016R0200             |
| R1, R2, R3         |     3 | 49.9 Ω ±1% resistors (0805)                                            |
| R4-R19             |    16 | 1.5k Ω ±5% resistors (0805)                                            |
| D1-D6              |     6 | Red LED                                                                |
| D7-D12             |     6 | Green LED                                                              |
| D13-16             |     4 | Yellow LED                                                             |
| U1                 |     1 | MXL1543CAI (28-pin SSOP)                                               |
| U2                 |     1 | MXL1544CAI (28-pin SSOP)                                               |
| U3                 |     1 | MXL1344ACAG (24-pin SSOP)                                              |
| U4, U5             |     2 | Inverting LED drivers (20-pin SO) TISN74HC240DWor MotorolaMC74HC240ADW |

<!-- image -->

## Features

- ♦ Programmable Transceiver Supports V.28 (RS-232) V.11 (RS-449/V.36, EIA530, EIA530-A, X.21) V.35
- ♦ True Fail-Safe Receiver Inputs
- ♦ Certified TBR-1 and TBR-2 Compliant
- ♦ Certified NET1 and NET2 Compliant
- ♦ Programmable Cable Termination (MXL1344A)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE           |
|--------------|--------------|----------------------|
| MXL1543EVKIT | 0°C to +70°C | 28 SSOP (2), 24 SSOP |

## Component List

| DESIGNATION                                                                                                                                                                |   QTY | DESCRIPTION                                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------|
| RXD/TXD, RXC/SCTE, TXC/ N/A, N/A /TXC, SCTE/RXC, TXD/RXD, RXDA/TXDA, RXDB/TXDB, RXCA/SCTEA, RXCB/SCTEB, TXCA/TXCA, TXCB/TXCB, SCTEA/RXCA, SCTEB/RXCB, TXDA/RXDA, TXDB/RXDB |    16 | Scope probe connectors (top mount, 3.5mm ground cylinder) Tektronix 131-4244-00 (qty 100) 131-5031-00 (qty 25) |
| J1                                                                                                                                                                         |     1 | 40-pin header (2x20) 0.1in center                                                                              |
| J2                                                                                                                                                                         |     1 | DB25 right-angle female connector AMP AMP0012 747846-4                                                         |
| J3, J4, J5                                                                                                                                                                 |     3 | SMA connectors (PC edge mount) EFJohnson 142-0701-801                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MXL1543 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                |
|---------------|-------|----------------------------|
| JU1-JU7       |     7 | 3-pin headers              |
| JU8-JU17      |    10 | 2-pin headers              |
| None          |    17 | Shunts                     |
| None          |     1 | MXL1543 EV kit PC board    |
| None          |     1 | MXL1543 EV kit data sheet  |
| None          |     1 | MXL1543 data sheet         |
| None          |     1 | MXL1544/MAX3175 data sheet |
| None          |     1 | MXL1344A data sheet        |

## Quick Start

The MXL1543 EV kit is extremely flexible and has several  settings  for  both  the  ICs  as  well  as  the  board.  The ICs have been put into no cable mode as the default mode. In no cable mode, the user is able to program the desired protocol with an external controller connected to the 40-pin header. The default mode settings are shown in Tables 1, 2, and 3. By default, the SMA connectors (J3, J4, and J5) are terminated with 50 Ω and the MXL1544's transmitter input lines are all tied low.

- 1) Connect a single +5V, 5% power supply between VCC and GND located at the lower-left corner of the MXL1543 EV kit board.
- 2) The yellow LEDs indicate the protocol mode of the chipset. The LEDs light when the corresponding signal is a logic high. Verify that all yellow LEDs light up, indicating no cable mode. All board labels,

## Table 1. MXL1543 Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3*   | R1*   | R2   | R3   |
|----------|------|------|------|------------|------|------|-------|-------|------|------|
| No Cable |    1 |    1 |    1 |          1 | Z    | Z    | Z     | Z     | Z    | Z    |

Z = High impedance.

*T3 and R1 share a single IC pin.

## Table 2. MXL1544/MAX3175 Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3*   | R1*   | R2   | R3   | T4   | R4   |
|----------|------|------|------|------------|------|------|-------|-------|------|------|------|------|
| No Cable |    1 |    1 |    1 |          1 | Z    | Z    | Z     | Z     | Z    | Z    | Z    | Z    |

Z = High impedance.

*T3 and R1 share a single IC pin.

## Table 3. MXL1344A Default Mode

| MODE     |   M2 |   M1 |   M0 |   DCE/ DTE | R1   | R2   | R3   | R4   | R5   | R6   |   INVERT |
|----------|------|------|------|------------|------|------|------|------|------|------|----------|
| No Cable |    1 |    1 |    1 |          1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |        0 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- including all the labels for the LEDs, follow the same label format. The board label format is the top label corresponds to DCE mode and the bottom label corresponds to DTE mode.
- 3) The green LEDs are attached to the receiver logic outputs of the MXL1543 and MXL1544. The LEDs light  when the receiver logic outputs are a logic high. Verify that all  green LEDs light up when no signals are attached to the DB25 connector. Note: The receivers have the true fail-safe feature allowing zero volts differential voltage to be a valid state that forces the receiver outputs high.
- 4) The red LEDs are attached to the transmitter logic inputs of the MXL1543 and MXL1544. The LEDs light  when the transmitter logic inputs are a logic high. Verify that none of the red LEDs light up when no signals are connected to the 40-pin header.

## Detailed Description

The MXL1543 EV kit was designed to take advantage of the chipset's flow-through pinout. The logic signals have all been routed to the 40-pin header located on the left side of the EV kit board and the protocol signals have all been routed to the female DB25 connector located on the right side of the board.

Various connectors have been added to the MXL1543 EV kit to aid in taking quality measurements. Leave JU17 unconnected when measuring the supply current of  the  chipset  to  eliminate  the  LED  current.  However, the supply current measurements still include the unloaded supply current of the LED driver ICs (up to

Table 4. MXL1543 Mode Selection

| MODE                    |   M2 |   M1 |   M0 |   DCE/ DTE | T1   | T2   | T3*   | R1*   | R2   | R3   |
|-------------------------|------|------|------|------------|------|------|-------|-------|------|------|
| Not Used (Default V.11) |    0 |    0 |    0 |          0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 |
| RS530A                  |    0 |    0 |    1 |          0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 |
| RS530                   |    0 |    1 |    0 |          0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 |
| X.21                    |    0 |    1 |    1 |          0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 |
| V.35                    |    1 |    0 |    0 |          0 | V.35 | V.35 | Z     | V.35  | V.35 | V.35 |
| RS449/V.36              |    1 |    0 |    1 |          0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 |
| V.28/RS-232             |    1 |    1 |    0 |          0 | V.28 | V.28 | Z     | V.28  | V.28 | V.28 |
| No Cable                |    1 |    1 |    1 |          0 | Z    | Z    | Z     | Z     | Z    | Z    |
| Not Used (Default V.11) |    0 |    0 |    0 |          1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 |
| RS530A                  |    0 |    0 |    1 |          1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 |
| RS530                   |    0 |    1 |    0 |          1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 |
| X.21                    |    0 |    1 |    1 |          1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 |
| V.35                    |    1 |    0 |    0 |          1 | V.35 | V.35 | V.35  | Z     | V.35 | V.35 |
| RS449/V.36              |    1 |    0 |    1 |          1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 |
| V.28/RS-232             |    1 |    1 |    0 |          1 | V.28 | V.28 | V.28  | Z     | V.28 | V.28 |
| No Cable                |    1 |    1 |    1 |          1 | Z    | Z    | Z     | Z     | Z    | Z    |

160µA at +70 ° C). Scope probe connectors have been added to measure the high-speed signals of the transmitter inputs/outputs and receiver inputs/outputs of the MXL1543. The scope probe connectors located on the left  side  of  the  board are connected to the logic input and output signals. The scope probe connectors located on the right side of the board are connected to the protocol input and output signals. Three SMA connectors have also been provided for driving the high-speed transmitter inputs of the MXL1543. The row of 16 LEDs across the top of the board are logic indicators. The red LEDs indicate the state of the transmitter inputs of the MXL1543 and MXL1544. The green LEDs indicate the state of the receiver outputs of the MXL1543 and MXL1544. The yellow LEDs indicate the state of the protocol and the protocol termination modes. The LEDs light  up  when  their  corresponding signals are a logic high.

## Configuration

The following is a step-by-step procedure to aid in configuring the MXL1543 EV kit. The MXL1543 EV kit is extremely flexible and has several settings for both the ICs, as well as the board. The logic signals have all been routed to the 40-pin header on the left side of the board. The protocol signals have all been routed to the female DB25 connector on the right side of the board.

<!-- image -->

The chipset protocol modes can be configured to support V.28 (RS-232), V.11 (RS-449/V.36, EIA530, EIA530A,  X.21),  and  V.35  protocols.  All  chipset  logic  inputs, LED power, and shield ground connection are jumper selectable. The board includes SMA connectors (J3, J4, and J5) with optional 50 Ω termination. The board settings will be separated in the following sections: chipset protocol modes, clock/data transmitter input settings, control transmitter input settings, SMA termination, and power/ground:

- 1) Connect a single +5V 5% power supply between VCC and GND located at the lower-left corner of the MXL1543 EV kit board.
2. 2)

Chipset protocol modes: Select the desired chipset protocol mode using the MXL1543, MXL1544, and MXL1344A selection mode tables (Tables 4, 5, and 6). Connect the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

## MXL1543 Evaluation Kit

## Table 5. MXL1544/MAX3175 Mode Selection

| PROTOCOL                |   M2 |   M1 |   M0 |   DCE/ DTE |   INVERT | T1   | T2   | T3*   | R1*   | R2   | R3   | T4*   | R4*   |
|-------------------------|------|------|------|------------|----------|------|------|-------|-------|------|------|-------|-------|
| Not Used (Default V.11) |    0 |    0 |    0 |          0 |        0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | Z     | V.10  |
| RS-530A                 |    0 |    0 |    1 |          0 |        0 | V.11 | V.10 | Z     | V.11  | V.10 | V.11 | Z     | V.10  |
| RS-530                  |    0 |    1 |    0 |          0 |        0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | Z     | V.10  |
| X.21                    |    0 |    1 |    1 |          0 |        0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | Z     | V.10  |
| V.35                    |    1 |    0 |    0 |          0 |        0 | V.28 | V.28 | Z     | V.28  | V.28 | V.28 | Z     | V.28  |
| RS-449/V.36             |    1 |    0 |    1 |          0 |        0 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | Z     | V.10  |
| V.28/RS-232             |    1 |    1 |    0 |          0 |        0 | V.28 | V.28 | Z     | V.28  | V.28 | V.28 | Z     | V.28  |
| No Cable                |    1 |    1 |    1 |          0 |        0 | Z    | Z    | Z     | Z     | Z    | Z    | Z     | Z     |
| Not Used (Default V.11) |    0 |    0 |    0 |          0 |        1 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | V.10  | Z     |
| RS-530A                 |    0 |    0 |    1 |          0 |        1 | V.11 | V.10 | Z     | V.11  | V.10 | V.11 | V.10  | Z     |
| RS-530                  |    0 |    1 |    0 |          0 |        1 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | V.10  | Z     |
| X.21                    |    0 |    1 |    1 |          0 |        1 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | V.10  | Z     |
| V.35                    |    1 |    0 |    0 |          0 |        1 | V.28 | V.28 | Z     | V.28  | V.28 | V.28 | V.28  | Z     |
| RS-449/V.36             |    1 |    0 |    1 |          0 |        1 | V.11 | V.11 | Z     | V.11  | V.11 | V.11 | V.10  | Z     |
| V.28/RS-232             |    1 |    1 |    0 |          0 |        1 | V.28 | V.28 | Z     | V.28  | V.28 | V.28 | V.28  | Z     |
| No Cable                |    1 |    1 |    1 |          0 |        1 | Z    | Z    | Z     | Z     | Z    | Z    | Z     | Z     |
| Not Used (Default V.11) |    0 |    0 |    0 |          1 |        0 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | V.10  | Z     |
| RS-530A                 |    0 |    0 |    1 |          1 |        0 | V.11 | V.10 | V.11  | Z     | V.10 | V.11 | V.10  | Z     |
| RS-530                  |    0 |    1 |    0 |          1 |        0 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | V.10  | Z     |
| X.21                    |    0 |    1 |    1 |          1 |        0 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | V.10  | Z     |
| V.35                    |    1 |    0 |    0 |          1 |        0 | V.28 | V.28 | V.28  | Z     | V.28 | V.28 | V.28  | Z     |
| RS-449/V.36             |    1 |    0 |    1 |          1 |        0 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | V.10  | Z     |
| V.28/RS-232             |    1 |    1 |    0 |          1 |        0 | V.28 | V.28 | V.28  | Z     | V.28 | V.28 | V.28  | Z     |
| No Cable                |    1 |    1 |    1 |          1 |        0 | Z    | Z    | Z     | Z     | Z    | Z    | Z     | Z     |
| Not Used (Default V.11) |    0 |    0 |    0 |          1 |        1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | Z     | V.10  |
| RS-530A                 |    0 |    0 |    1 |          1 |        1 | V.11 | V.10 | V.11  | Z     | V.10 | V.11 | Z     | V.10  |
| RS-530                  |    0 |    1 |    0 |          1 |        1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | Z     | V.10  |
| X.21                    |    0 |    1 |    1 |          1 |        1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | Z     | V.10  |
| V.35                    |    1 |    0 |    0 |          1 |        1 | V.28 | V.28 | V.28  | Z     | V.28 | V.28 | Z     | V.28  |
| RS-449/V.36             |    1 |    0 |    1 |          1 |        1 | V.11 | V.11 | V.11  | Z     | V.11 | V.11 | Z     | V.10  |
| V.28/RS-232             |    1 |    1 |    0 |          1 |        1 | V.28 | V.28 | V.28  | Z     | V.28 | V.28 | Z     | V.28  |
| No Cable                |    1 |    1 |    1 |          1 |        1 | Z    | Z    | Z     | Z     | Z    | Z    | Z     | Z     |

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

Table 6. MXL1344A Termination Mode Selection

| MODE                    |   DCE/ DTE |   M2 |   M1 |   M0 | R1   | R2   | R3   | R4   | R5   | R6   |
|-------------------------|------------|------|------|------|------|------|------|------|------|------|
| Not Used (Default V.11) |          0 |    0 |    0 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| RS530A                  |          0 |    0 |    0 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| RS530                   |          0 |    0 |    1 |    0 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| X.21                    |          0 |    0 |    1 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| V.35                    |          0 |    1 |    0 |    0 | V.35 | V.35 | Z    | V.35 | V.35 | V.35 |
| RS449/V.36              |          0 |    1 |    0 |    1 | Z    | Z    | Z    | V.11 | V.11 | V.11 |
| V.28/RS232              |          0 |    1 |    1 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| No Cable                |          0 |    1 |    1 |    1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |
| Not Used (Default V.11) |          1 |    0 |    0 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| RS530A                  |          1 |    0 |    0 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| RS530                   |          1 |    0 |    1 |    0 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| X.21                    |          1 |    0 |    1 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| V.35                    |          1 |    1 |    0 |    0 | V.35 | V.35 | V.35 | Z    | V.35 | V.35 |
| RS449/V.36              |          1 |    1 |    0 |    1 | Z    | Z    | Z    | Z    | V.11 | V.11 |
| V.28/RS232              |          1 |    1 |    1 |    0 | Z    | Z    | Z    | Z    | Z    | Z    |
| No Cable                |          1 |    1 |    1 |    1 | V.11 | V.11 | V.11 | V.11 | V.11 | V.11 |

jumpers to the corresponding state depending on whether the mode lines are controlled by an external controller or pin strapped to a known state using Tables 7 and 8. INVERT jumper defaults to logic low.

- 3) Clock/data transmitter input settings:

Connect the clock/data jumpers to the corresponding state using Table 9. Force the inputs of all unused transmitters low so their corresponding LED indicators are off.

- 4) Control transmitter input settings:

Connect the control jumpers to the corresponding state using Table 10. Force the inputs of all unused transmitters low so their corresponding LED indicators are off.

<!-- image -->

## 5) SMA termination:

Connect the termination jumpers, depending on whether the signal source needs to be terminated with 50 Ω ,  to  the  corresponding  state  using  Table 11. Leave unused transmitter input lines terminated so the line is pulled down in a known state. When using SMA termination, avoid connecting JU1, JU2, and JU3 to VCC.

- 6) Power/ground:

Connect the power and ground jumpers according to the desired operation using Table 12.

Leave JU17 unconnected (open) when measuring the supply current of the chipset.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

## Table 7. Chipset Protocol Mode Jumper Settings

| JUMPER   | SIGNAL (BUS)   | STATE   | FUNCTION                                                                                                      |
|----------|----------------|---------|---------------------------------------------------------------------------------------------------------------|
| JU13     | DCE/ DTE       | Open*   | Logic high (internal pullup in IC). DCE/ DTE line can be driven by a signal applied to J1-30 (40-pin header). |
| JU13     | DCE/ DTE       | Closed  | Logic low.                                                                                                    |
| JU14     | M2             | Open*   | Logic high (internal pullup in IC). M2 line can be driven by a signal applied to J1-32 (40-pin header).       |
| JU14     | M2             | Closed  | Logic low.                                                                                                    |
| JU15     | M1             | Open*   | Logic high (internal pullup in IC). M1 line can be driven by a signal applied to J1-34 (40-pin header).       |
| JU15     | M1             | Closed  | Logic low.                                                                                                    |
| JU16     | M0             | Open*   | Logic high (internal pullup in IC). M0 line can be driven by a signal applied to J1-36 (40-pin header).       |
| JU16     | M0             | Closed  | Logic low.                                                                                                    |

*Default jumper setting.

## Table 8. Invert Mode Jumper Settings

| JUMPER   | SIGNAL   | STATE   | FUNCTION                                                                                               |
|----------|----------|---------|--------------------------------------------------------------------------------------------------------|
| JU12     | INVERT   | Open    | Logic high (internal pullup in IC). INVERT can be driven by a signal applied to J1-38 (40-pin header). |
| JU12     | INVERT   | Closed* | Logic low.                                                                                             |

*Default jumper setting.

## Table 9. Clock/Data Transmitter Input Jumper Settings

| JUMPER   | DCE/DTE   | STATE   | FUNCTION                          |
|----------|-----------|---------|-----------------------------------|
| JU1      | RXD/TXD   | 1-2     | Logic high.                       |
| JU1      | RXD/TXD   | 2-3     | Logic low.                        |
| JU1      | RXD/TXD   | Open*   | Apply signal to SMA connector J5. |
| JU2      | RXC/SCTE  | 1-2     | Logic high.                       |
| JU2      | RXC/SCTE  | 2-3     | Logic low.                        |
| JU2      | RXC/SCTE  | Open*   | Apply signal to SMA connector J4. |
| JU3      | TXC/ N/A  | 1-2     | Logic high.                       |
| JU3      | TXC/ N/A  | 2-3     | Logic low.                        |
| JU3      | TXC/ N/A  | Open*   | Apply signal to SMA connector J3. |

*Default jumper setting.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

## Table 10. Control Transmitter Input Jumper Settings

| JUMPER   | DCE/DTE   | STATE   | FUNCTION                               |
|----------|-----------|---------|----------------------------------------|
| JU4      | CTS/RTS   | 1-2     | Logic high.                            |
| JU4      | CTS/RTS   | 2-3*    | Logic low.                             |
| JU4      | CTS/RTS   | Open    | Apply signal to J1-14 (40-pin header). |
| JU5      | DSR/DTR   | 1-2     | Logic high.                            |
| JU5      | DSR/DTR   | 2-3*    | Logic low.                             |
| JU5      | DSR/DTR   | Open    | Apply signal to J1-16 (40-pin header). |
| JU6      | DCD/ N/A  | 1-2     | Logic high.                            |
| JU6      | DCD/ N/A  | 2-3*    | Logic low.                             |
| JU6      | DCD/ N/A  | Open    | Apply signal to J1-18 (40-pin header). |
| JU7      | LL/ N/A   | 1-2     | Logic high.                            |
| JU7      | LL/ N/A   | 2-3*    | Logic low.                             |
| JU7      | LL/ N/A   | Open    | Apply signal to J1-26 (40-pin header). |

## Table 11. Termination Settings

| JUMPER   | DCE/DTE   | STATE   | FUNCTION             |
|----------|-----------|---------|----------------------|
| JU8      | RXD/TXD   | Open    | Unterminated         |
| JU8      | RXD/TXD   | Closed* | Terminated with 50 Ω |
| JU9      | RXC/SCTE  | Open    | Unterminated         |
| JU9      | RXC/SCTE  | Closed* | Terminated with 50 Ω |
| JU10     | TXC/ N/A  | Open    | Unterminated         |
| JU10     | TXC/ N/A  | Closed* | Terminated with 50 Ω |

*Default jumper setting.

## Table 12. Power/Ground Jumper Settings

| JUMPER   | NAME      | STATE   | FUNCTION                                           |
|----------|-----------|---------|----------------------------------------------------|
| JU11     | SHIELD    | Open    | DB25 cable shield disconnected from signal ground. |
| JU11     | SHIELD    | Closed* | DB25 cable shield shorted to signal ground.        |
| JU17     | LED ANODE | Open    | LED anode is floating.                             |
| JU17     | LED ANODE | Closed* | LED anode is connected to VCC.                     |

*Default jumper setting.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

Figure 1a. MXL1543 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MXL1543 Evaluation Kit

Figure 1a. MXL1543 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MXL1543 Evaluation Kit

Figure 1b. MXL1543 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MXL1543 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MXL1543 Evaluation Kit

Figure 3. MXL1543 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MXL1543 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MXL1543 Evaluation Kit

Figure 5. MXL1543 EV Kit PC Board Layout-Inner Layer 3 (VCC)

<!-- image -->

Figure 6. MXL1543 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600