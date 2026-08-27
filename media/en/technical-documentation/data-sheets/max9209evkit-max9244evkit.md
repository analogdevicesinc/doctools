<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX9209/MAX9244 Evaluation Kit

## General Description

The MAX9209/MAX9244 evaluation kit (EV kit) provides a  proven design to evaluate the MAX9209 21-bit programmable DC-balanced serializer and the MAX9244 21-bit deserializer with programmable spread spectrum and DC balance. The MAX9209 serializes 21 bits of LVCMOS/LVTTL parallel input data to three LVDS outputs.  The  MAX9244 deserializes the three LVDS input data from the MAX9209 and transforms it back to 21-bit LVCMOS/LVTTL parallel data.

The MAX9209/MAX9244 EV kit circuits are implemented on a single PCB and come with a MAX9209EUM+ and a MAX9244EUM+ installed.

| DESIGNATION                                                            |   QTY | DESCRIPTION                                                          |
|------------------------------------------------------------------------|-------|----------------------------------------------------------------------|
| C1, C2, C6, C8, C12-C21, C26, C29, C32, C34, C36, C39, C44-C51 C74-C77 |    32 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K  |
| C3, C4, C5, C7, C11, C22, C25, C28, C31, C33, C35, C38                 |    12 | 0.01µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C103K |
| C40-C43                                                                |     4 | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K   |
| C9, C10, C23, C24, C27, C30, C37                                       |     7 | 10µF ±10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K   |
| C52-C73                                                                |     0 | Not installed, ceramic capacitors (0402)                             |
| H1-H4                                                                  |     4 | 2 x 10 shrouded plug connectors (0.100in centers)                    |
| H5, H6                                                                 |     2 | 2 x 20 shrouded plug connectors (0.100in centers)                    |

## Features

- ♦ 21-Bit Parallel LVCMOS/LVTTL Interface
- ♦ 8-Conductor Connector with Custom Cable
- ♦ Independent Evaluation of the MAX9209/MAX9244 Serializer/Deserializer (SerDes)
- ♦ Lead-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX9209EVKIT+ or | EV Kit |
| MAX9244EVKIT+    |        |

Note: The MAX9209/MAX9244 EV kit can be ordered using either part number.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                      |
|--------------------------|-------|------------------------------------------------------------------|
| JU1-JU4, JU9, JU10, JU11 |     7 | 3-pin headers                                                    |
| JU5-JU8, JU12-JU20       |    13 | 2-pin headers                                                    |
| P1, P2                   |     2 | 8-conductor PCB connectors Hirose GT17VB-8DP-DS-SB               |
| P3-P6                    |     4 | Vertical-mount SMA connectors                                    |
| R1, R3-R10               |     9 | 49.9 Ω ±1% resistors (0402)                                      |
| R2                       |     0 | Not installed, resistor (0402)                                   |
| U1                       |     1 | Programmable 21-bit serializer (48 TSSOP) Maxim MAX9209EUM+      |
| U2                       |     1 | Programmable 21-bit deserializer (48 TSSOP) Maxim MAX9244EUM+    |
| -                        |    12 | Shunts                                                           |
| -                        |     1 | 8-conductor cable Nissei SIODIC F-2W-4ME AWG28 Design No. 916591 |
| -                        |     1 | PCB: MAX9209/44 Evaluation Kit+                                  |

## Component Suppliers

| SUPPLIER                              | PHONE          | WEBSITE                               |
|---------------------------------------|----------------|---------------------------------------|
| Hirose Electric Co., Ltd.             | 81-3-3491-9741 | www.hirose.com                        |
| Murata Electronics North America, Inc | 770-436-1300   | www.murata-northamerica.com           |
| Nissei Electric Co., Ltd.             | 81-53-485-4705 | www.nissei-el.co.jp/english/index.htm |

Note: Indicate that you are using the MAX9209 and the MAX9244 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9209/MAX9244 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX9209/MAX9244 EV kit (8-conductor cable included)
- Two 3.3V/200mA DC power supplies
- Digital data generator (e.g., HP/Agilent 16522A)
- Low phase-noise clock generator (e.g., HP/Agilent 8133A)
- Logic analyzer or data-acquisition system (e.g., HP/Agilent 16500C)

## Procedure

The MAX9209/MAX9244 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies or signal sources until all connections are completed.

- 1) Verify that all jumpers (JU1-JU20) are in their default position, as shown in Table 1.
- 2) Connect the first 3.3V power supply across the VCC1 and GND1 pads of the EV kit.

## Table 1. MAX9209/MAX9244 EV Kit Jumper Descriptions (JU1-JU20)

| JUMPER   | FUNCTION                            | SHUNT   | DESCRIPTION                                                                                                                                                                                            |
|----------|-------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Power enable without logic analyzer | 1-2     | Connects to VCC1 when not using a logic analyzer                                                                                                                                                       |
| JU1      | Power enable with logic analyzer    | 2-3*    | Connects to GND1 when using a logic analyzer                                                                                                                                                           |
| JU2      | MAX9209 power-down                  | 1-2*    | Pulls PWRDWN high for full functionality and 5V tolerant LVCMOS/LVTTL operation                                                                                                                        |
| JU2      | MAX9209 power-down                  | 2-3     | Pulls PWRDWN low and turns off the MAX9209. In this mode, the MAX9209 outputs are high impedance. This mode is used in combination with jumper JU3 to activate the internal PRBS mode for the MAX9209. |
| JU3      | PRBS mode disable                   | 1-2*    | Connects pin 14 of the MAX9209 to VCC1 for full operation                                                                                                                                              |
| JU3      | PRBS mode enable                    | 2-3     | Connects pin 14 of the MAX9209 to GND1 for PRBS mode operation                                                                                                                                         |
| JU4      | MAX9209 DC-balance mode enable      | 1-2*    | Configures the MAX9209 to operate in DC-balance mode                                                                                                                                                   |
| JU4      | MAX9209 DC-balance mode disable     | 2-3     | Configures the MAX9209 to operate in non-DC-balance mode                                                                                                                                               |
| JU5      | TXOUT0+/-                           | Open*   | Used for probing TXOUT0+ and TXOUT0-                                                                                                                                                                   |
| JU6      | TXOUT1+/-                           | Open*   | Used for probing TXOUT1+ and TXOUT1-                                                                                                                                                                   |
| JU7      | TXOUT2+/-                           | Open*   | Used for probing TXOUT2+ and TXOUT2-                                                                                                                                                                   |
| JU8      | TXCLK-OUT+/-                        | Open*   | Used for probing TXCLK_OUT+ and TXCLK_OUT-                                                                                                                                                             |
| JU9      | MAX9244 DC-balance mode disable     | 1-2     | Configures the MAX9244 to operate in non-DC-balance mode                                                                                                                                               |
| JU9      | MAX9244 DC-balance mode enable      | 2-3*    | Configures the MAX9244 to operate in DC-balance mode                                                                                                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 3) Connect the second 3.3V power supply across the VCC2 and GND2 pads of the EV kit.
- 4) Connect the 8-conductor cable from the P1 to P2 connectors of the EV kit.
- 5) Connect the data generator to the H1, H2, and H3 connectors and set it to generate 21-bit parallel data at LVCMOS/LVTTL levels. See Tables 2, 3, and 4 for input bit locations.
- 6) Connect the clock generator to the H4 connector and set its output frequency between 8MHz and 34MHz. See Table 5 for TXCLK\_IN location.
- 7) Connect the logic analyzer or data-acquisition system to connectors H5 and H6, as shown in Tables 6 and 7.
- 8) Turn on the power supplies.
- 9) Enable the clock generator.
- 10) Enable the data generator.
- 11) Enable the logic analyzer or data-acquisition system and begin sampling data.

## MAX9209/MAX9244 Evaluation Kit

Table 1. MAX9209/MAX9244 EV Kit Jumper Descriptions (JU1-JU20) (continued)

| JUMPER   | FUNCTION                         | SHUNT   | DESCRIPTION                                                                                               |
|----------|----------------------------------|---------|-----------------------------------------------------------------------------------------------------------|
| JU10     | MAX9244 spread- spectrum enable  | 1-2*    | Configures the RXCLKOUT frequency spread to ±4% relative to RXCLKIN                                       |
| JU10     | MAX9244 spread- spectrum disable | 2-3     | Configures the RXCLKOUT frequency to no spread relative to RXCLKIN                                        |
| JU10     | MAX9244 spread- spectrum enable  | Open    | Configures the RXCLKOUT frequency spread to ±2% relative to RXCLKIN                                       |
| JU11     | MAX9244 power-down               | 1-2*    | Pulls PWRDWN high for full functionality and 5V tolerant LVCMOS/LVTTL operation                           |
| JU11     | MAX9244 power-down               | 2-3     | Pulls PWRDWN low and turns off MAX9244. In this mode, the MAX9244 inputs are high impedance.              |
| JU12     | RXIN0+/-                         | Open*   | Used for probing RXIN0+ and RXIN0-                                                                        |
| JU13     | RXIN1+/-                         | Open*   | Used for probing RXIN1+ and RXIN1-                                                                        |
| JU14     | RXIN2+/-                         | Open*   | Used for probing RXIN2+ and RXIN2-                                                                        |
| JU15     | RXCLKIN+/-                       | Open*   | Used for probing RXCLKIN+ and RXCLKIN-                                                                    |
| JU16     | Board supply connectivity        | 1-2*    | Connects VCC1 to LVDS1_VCC. This shunt reduces the number of supplies required to operate the EV kit.     |
| JU16     | Board supply connectivity        | Open    | Disconnects VCC1 from LVDS1_VCC. The 2-pin header can be utilized for supply current measurements.        |
| JU17     | Board supply connectivity        | 1-2*    | Connects LVDS1_VCC to PLL1_VCC. This shunt reduces the number of supplies required to operate the EV kit. |
| JU17     | Board supply connectivity        | Open    | Disconnects LVDS1_VCC from PLL1_VCC. The 2-pin header can be utilized for supply current measurements.    |
| JU18     | Board supply connectivity        | 1-2*    | Connects VCC2 to LVDS2_VCC. This shunt reduces the number of supplies required to operate the EV kit.     |
| JU18     | Board supply connectivity        | Open    | Disconnects VCC2 from LVDS2_VCC. The 2-pin header can be utilized for supply current measurements.        |
| JU19     | Board supply connectivity        | 1-2*    | Connects LVDS1_VCC to PLL2_VCC. This shunt reduces the number of supplies required to operate the EV kit. |
| JU19     | Board supply connectivity        | Open    | Disconnects VCC2 from PLL2_VCC. The 2-pin header can be utilized for supply current measurements.         |
| JU20     | Board supply connectivity        | 1-2*    | Connects PLL2_VCC to VCC0. This shunt reduces the number of supplies required to operate the EV kit.      |
| JU20     | Board supply connectivity        | Open    | Disconnects PLL2_VCC from VCC0. The 2-pin header can be utilized for supply current measurements.         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

## Detailed Description of Hardware

The MAX9209/MAX9244 EV kit provides a proven design to evaluate the MAX9209 21-bit programmable DC-balanced serializer and the MAX9244 21-bit deserializer  with  programmable spread spectrum and DC balance. The MAX9209 serializes 21 bits of LVCMOS/ LVTTL parallel input data to three LVDS outputs. The MAX9244 deserializes the three LVDS input data from the MAX9209 and transforms it back to 21-bit LVCMOS/LVTTL parallel data.

## Input Signals

The MAX9209 accepts 21-bit parallel data at LVCMOS/LVTTL. The 21-bit pattern is supplied to the EV kit by connecting a data generator to the three 20-pin headers (H1, H2, and H3), or by connecting selected H1, H2, and H3 pins to high/low LVCMOS/LVTTL states. See Tables 2, 3, and 4 for input bit locations for H1, H2, and H3.

## Table 2. Input Bit Locations for BIT0-BIT6

| SIGNAL     | BIT0   | BIT1   | BIT2   | BIT3   | BIT4   | BIT5   | BIT6   |
|------------|--------|--------|--------|--------|--------|--------|--------|
| Input (H1) | H1-1   | H1-3   | H1-5   | H1-7   | H1-9   | H1-11  | H1-13  |

## Table 3. Input Bit Locations for BIT7-BIT13

| SIGNAL     | BIT7   | BIT8   | BIT9   | BIT10   | BIT11   | BIT12   | BIT13   |
|------------|--------|--------|--------|---------|---------|---------|---------|
| Input (H2) | H2-1   | H2-3   | H2-5   | H2-7    | H2-9    | H2-11   | H2-13   |

## Table 4. Input Bit Locations for BIT14-BIT20

| SIGNAL     | BIT14   | BIT15   | BIT16   | BIT17   | BIT18   | BIT19   | BIT20   |
|------------|---------|---------|---------|---------|---------|---------|---------|
| Input (H3) | H3-1    | H3-3    | H3-5    | H3-7    | H3-9    | H3-11   | H3-13   |

## Table 5. Input/Output Clock Locations

| SIGNAL   | DESIGNATION   |
|----------|---------------|
| TXCLK_IN | H4-15         |

## Table 6. Output Bit Locations for BIT10-BIT20

| SIGNAL     | BIT10   | BIT11   | BIT12   | BIT13   | BIT14   | BIT15   | BIT16   | BIT17   | BIT18   | BIT19   | BIT20   |
|------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| Input (H5) | H5-3    | H5-5    | H5-7    | H5-9    | H5-11   | H5-13   | H5-15   | H5-17   | H5-19   | H5-21   | H5-23   |

## Table 7. Output Bit Locations for BIT0-BIT9

| SIGNAL     | BIT0   | BIT1   | BIT2   | BIT3   | BIT4   | BIT5   | BIT6   | BIT7   | BIT8   | BIT9   |
|------------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| Input (H6) | H6-13  | H6-15  | H6-17  | H6-19  | H6-21  | H6-23  | H6-25  | H6-27  | H6-29  | H6-31  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Signals

The  MAX9244  outputs  21-bit  parallel  data  at LVCMOS/LVTTL levels on 40-pin headers H5 and H6. To sample the 21-bit pattern, connect a logic analyzer or data-acquisition system to H5 and H6. See Tables 6 and 7 for the output bit locations on the 40-pin headers (H5 and H6).

## DC-Balance and Non-DC-Balance Modes

The MAX9209 operates at a parallel clock frequency of 8MHz to 34MHz in DC-balance mode by moving the shunt of JU4 to the 1-2 position. The MAX9244 operates at a parallel clock frequency of 16MHz to 34MHz in DC-balance mode by moving the shunt of JU9 to the 2-3 position.

The MAX9209 operates at a parallel clock frequency of 10MHz to 40MHz in non-DC-balance mode by moving the shunt of JU4 to the 2-3 position. The MAX9244 operates at a parallel clock frequency of 10MHz to 40MHz in non-DC-balance mode by moving the shunt of JU9 to the 1-2 position.

## MAX9209/MAX9244 Evaluation Kit

## Power-Down

The power-down mode in the MAX9209 and MAX9244 puts the outputs in high impedance, stops the PLL, and reduces supply current to 50µA or less by moving the shunts of JU2 and JU11 to the 2-3 position. When JU2 and JU11 are in the 1-2 position, the LVDS outputs of the MAX9209 are not driven until the PLL locks and the LVDS outputs of the MAX9244 are driven low until the PLL locks.

## Spread-Spectrum Frequency

The MAX9244 can set the frequency spread to ±4%, ±2%, or no spread by moving JU10 to the appropriate shunt position (Table 1).

## Pseudo-Random Bit Sequence (PRBS) Mode

The MAX9209/MAX9244 EV kit offers the user an internal test mode to quickly verify full functionality and verification  of  the  quality  of  the  SerDes  link.  This  mode  is called pseudo-random bit sequence, or PRBS mode.

<!-- image -->

The MAX9209 features an on-chip PRBS generator that can be utilized to generate a pseudo-random bit stream to evaluate the quality and performance by comparing the output of the serializer (prior to the link/cable)  with  the  input  of  the  deserializer  (after  the link/cable).

To activate this feature, the MAX9209 must first enter power-down mode by moving the shunt of JU2 to the 23 position. Activate the internal PRBS mode by moving the shunt of JU3 to the 2-3 position.

## Power Supplies

The MAX9209 is powered by connecting PLL1\_VCC, LVDS1\_VCC, and VCC1 to a DC power supply at 3V to 3.6V. The MAX9209 can be configured to reduce wiring to the supply and ground pads by moving the shunts of JU16 and JU17 to the 1-2 position. The MAX9244 is powered by applying 3.3V to 3.6V to the PLL2\_VCC, LVDS2\_VCC, VCC2, and VCC0 pads. The MAX9244 can be configured to reduce wiring to the supply and ground pads by moving the shunts of JU18, JU19, and JU20 to the 1-2 position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

Figure 1a. MAX9209/MAX9244 EV Kit Schematic (1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

Figure 1b. MAX9209/MAX9244 EV Kit Schematic (2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

Figure 2. MAX9209/MAX9244 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX9209/MAX9244 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

Figure 4. MAX9209/MAX9244 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX9209/MAX9244 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9209/MAX9244 Evaluation Kit

Figure 6. MAX9209/MAX9244 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_