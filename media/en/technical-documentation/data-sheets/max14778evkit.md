<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX14778 evaluation kit (EV kit) provides a proven design to evaluate the MAX14778 dual Q 25V above- and below-the-rails  4:1  analog  multiplexer.  The  EV  kit  operates  from  a  single  +3V  to  +5.5V  supply  and  supports analog signals between -25V and +25V.

The EV kit PCB comes with a MAX14778ETP+ installed. Contact the factory for free samples.

| DESIGNATIO N                  |   QTY | DESCRIPTION                                                         |
|-------------------------------|-------|---------------------------------------------------------------------|
| A0-A3, ACOM, B0-B3, BCOM, VDD |    11 | Small red test points                                               |
| C1                            |     1 | 1 F F Q 10%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C105K    |
| C2, C3                        |     2 | 0.1 F F Q 10%, 50V X5R ceramic capacitors (0603) TDK C1608X5R1H104K |
| C4, C5                        |     0 | Not installed, ceramic capacitors (0603)                            |

## MAX14778 Evaluation Kit

## Evaluates: MAX14778

## Features

- S +3V to +5.5V Input Supply Range
- S Dual 4:1 Mux
- S Independent Mux Control
- S Q 25V Voltage Signal Input Range
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| GND           |     4 | Black test points                                                  |
| JU1-JU6       |     6 | 3-pin headers                                                      |
| R1, R2        |     0 | Not installed, resistors (2512)                                    |
| U1            |     1 | Dual Q 25V 4:1 analog multiplexer (20 TQFN-EP*) Maxim MAX14778ETP+ |
| -             |     6 | Shunts                                                             |
| -             |     1 | PCB: MAX14778 EVALUATION KIT                                       |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX14778 when contacting this component supplier.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

- MAX14778	EV	kit
- +5V,	100mA	power	supply
- +25V,	800mA	power	supply
- Two	voltmeters

## Quick Start

## Required Equipment

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  all  jumpers  (JU1-JU6) are in their default position, as shown in Table 1.
- 2)  Connect  the  +5V  supply  positive  and  ground  terminals to the VCC and GND test points, respectively.
- 3)  Connect the +25V supply positive and ground terminals to the A0 and GND test points, respectively.
- 4)  Connect the +25V supply positive and ground terminals to the B0 and GND test points, respectively.
- 5)  Connect  a  voltmeter  at  the  ACOM  and  GND  test points.
- 6)  Connect  a  voltmeter  at  the  BCOM  and  GND  test points.
- 7)  Enable the +5V supply.
- 8)  Enable the +25V supply.
- 9)  Place shunts on pins 1-2 on jumpers JU1 and JU4.
- 10) Verify that both voltmeters display +25V.

## Table 1. Jumper Descriptions (JU1-JU6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                   |
|----------|------------------|-------------------------------|
| JU1      | 1-2              | MUX B enabled                 |
| JU1      | 2-3*             | MUX B disabled                |
| JU2      | 1-2              | B_ connects to BCOM (Table 3) |
| JU2      | 2-3*             | B_ connects to BCOM (Table 3) |
| JU3      | 1-2              | B_ connects to BCOM (Table 3) |
| JU3      | 2-3*             | B_ connects to BCOM (Table 3) |
| JU4      | 1-2              | MUX A enabled                 |
| JU4      | 2-3*             | MUX A disabled                |
| JU5      | 1-2              | A_ connects to ACOM (Table 2) |
| JU5      | 2-3*             | A_ connects to ACOM (Table 2) |
| JU6      | 1-2              | A_ connects to ACOM (Table 2) |
| JU6      | 2-3*             | A_ connects to ACOM (Table 2) |

<!-- image -->

## MAX14778 Evaluation Kit

## Evaluates: MAX14778

## Detailed Description of Hardware

The  MAX14778  EV  kit  is  a  fully  assembled  and  tested circuit board that simplifies evaluation of the MAX14778 dual Q 25V above- and below-the-rails 4:1 analog multiplexer. The EV kit operates from a single +3V to +5.5V input voltage range.

The  IC  integrates  bias  circuitry  to  provide  a Q 25V analog voltage range with a single +3V to +5.5V supply. This  extended  input  range  allows  multiplexing  different communications signals such as RS-232, RS-485, audio, and USB 1.1 onto the same connector. The IC features 1.5 I (max)  on-resistance  for  analog  signals  between -25V and +25V.

Jumpers JU4 and JU1 are available for  controlling  the turn-on/off of MUX A and MUX B, respectively. Jumpers JU2, JU3, JU5, and JU6 are available for routing the B\_ and  A\_  input  signals  to  the  corresponding  BCOM  and ACOM outputs, respectively. Inputs A\_ and B\_ can pass up  to Q 300mA  of  continuous  current.  The  current  flow through  the  multiplexers  can  be  bidirectional,  allow  ing operation as either a multiplexer or a demultiplexer.

The  EV  kit  provides  PCB  pads  in  addition  to  red  test points for monitoring the multiplexer input and output signals. The EV kit is also populated with 2515 resistor PCB pads  and  0603  capacitor  PCB  pads  for  load-specific applications at the ACOM and BCOM connectors.

## User-Supplied Power Supply

The EV kit is powered from a +3V to +5.5V power supply connected at the VCC and GND test points. The EV kit circuit inputs (A\_, B\_, ACO, and BCOM) can transmit signals of up to Q 25V.

## Multiplexer Configuration

Jumpers  JU4,  JU5,  and  JU6  control  the  operation  for MUX A. JU4 enables/disables the ACOM output and JU5 and JU6 control the signal routing to ACOM. See Table 2 for proper jumper settings for operating MUX A.

Jumpers  JU1,  JU2,  and  JU3  control  the  operation  for MUX B. JU1 enables/disables the BCOM output and JU2 and JU3 control the signal routing to BCOM. See Table 3 for proper jumper settings for operating MUX B.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. MUX A Routing Configuration (JU4, JU5, JU6)

## Table 3. MUX B Routing Configuration (JU1, JU2, JU3)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | ACOM CONNECTED TO   |
|------------------|------------------|------------------|---------------------|
| JU4 (ENA)        | JU5 (SA1)        | JU6 (SA0)        | ACOM CONNECTED TO   |
| 1-2              | 2-3              | 2-3              | A0                  |
| 1-2              | 2-3              | 1-2              | A1                  |
| 1-2              | 1-2              | 2-3              | A2                  |
| 1-2              | 1-2              | 1-2              | A3                  |
| 2-3              | X                | X                | Switch is open      |

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | BCOM CONNECTED TO   |
|------------------|------------------|------------------|---------------------|
| JU1 (ENB)        | JU2 (SB1)        | JU3 (SB0)        | BCOM CONNECTED TO   |
| 1-2              | 2-3              | 2-3              | B0                  |
| 1-2              | 2-3              | 1-2              | B1                  |
| 1-2              | 1-2              | 2-3              | B2                  |
| 1-2              | 1-2              | 1-2              | B3                  |
| 2-3              | X                | X                | Switch is open      |

X = Don't care. X = Don't care.

## MAX14778 Evaluation Kit

## Evaluates: MAX14778

<!-- image -->

Figure 1. MAX14778 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1478 Evalution Kit

## Evalutes: MAX1478

<!-- image -->

Figure 2. MAX14778 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX14778 EV Kit Component PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1478 Evalution Kit

## Evalutes: MAX1478

<!-- image -->

Figure 4. MAX14778 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX14778 EV Kit Component Placement-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14778EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14778 Evaluation Kit Evaluates: MAX14778

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8