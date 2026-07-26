<!-- lastmod 2022-08-03 -->
## MAX14662 Evaluation Kit

## General Description

The  MAX14662  evaluation  kit  (EV  Kit)  provides  a convenient way to evaluate the MAX14662 Beyond-theRails 8x, single-pole, single-throw (SPST) switch. All PCB signal traces are 50Ω controlled-impedance to allow easy impedance matching. The MAX14662 is capable of both I 2 C and SPI programming modes, set by the SPI/ I2C pin.

Refer  to  the  MAX14662  IC  data  sheet  for  detailed information regarding the operation of the IC.

## Features

- 50Ω Controlled-Impedance Signal Traces
- PMOD Connector for Easy Interfacing
- RoHS Compliant
- Proven PCB Layout
- Full Assembled and Tested

Ordering Information appears at end of data sheet.

## Table 1. Slave Address Configuration

| LOGIC INPUTS   | LOGIC INPUTS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   | I 2 C SLAVE ADDRESS   |
|----------------|----------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|
| A1             | A0             | B7                    | B6                    | B5                    | B4                    | B3                    | B2                    | B1                    | R/W                   | READ ADD              | WRITE ADD             |
| 0              | 0              | 1                     | 0                     | 0                     | 1                     | 1                     | 0                     | 0                     | 1/0                   | 0x99                  | 0x98                  |
| 0              | 1              | 1                     | 0                     | 0                     | 1                     | 1                     | 0                     | 1                     | 1/0                   | 0x9B                  | 0x9A                  |
| 1              | 0              | 1                     | 0                     | 0                     | 1                     | 1                     | 1                     | 0                     | 1/0                   | 0x9D                  | 0x9C                  |
| 1              | 1              | 1                     | 0                     | 0                     | 1                     | 1                     | 1                     | 1                     | 1/0                   | 0x9F                  | 0x9E                  |

<!-- image -->

Evaluates: MAX14662

## Detailed Description

The MAX14662 evaluation kit (EV Kit) provides a convenient way  to  evaluate  the  MAX14662  Beyond-the-Rails  8x SPST switch. All PCB signal traces are 50 Ω controlledimpedance  to  allow  easy  impedance  matching.  The MAX14662 is capable of both I 2 C and SPI programming modes, set by the SPI/ I2C pin. Use any common I 2 C or SPI programmer to program the MAX14662 switches.

## Operation Mode (SPI/ I2C Pin)

The MAX14662 can be programmed through the I 2 C and SPI interfaces. Set the SPI/ I2C pin high for SPI mode and low for I 2 C mode. In I 2 C mode, the I 2 C slave address of the IC can be set to one of four different values. To select the  slave  address,  connect A0  and A1  to  GND  or  VCC through the DOUT/AD1 and CS /AD0 signals of JU3, as indicated in Table 1 .

## MAX14662 Evaluation Kit

## Table 2. Connector JU1

|   PIN | SIGNAL   | DESCRIPTION              |
|-------|----------|--------------------------|
|     1 | B1       | B connection to switch 1 |
|     2 | B2       | B connection to switch 2 |
|     3 | B3       | B connection to switch 3 |
|     4 | B4       | B connection to switch 4 |
|     5 | B5       | B connection to switch 5 |
|     6 | B6       | B connection to switch 6 |
|     7 | B7       | B connection to switch 7 |
|     8 | B8       | B connection to switch 8 |

## Table 3. Connector JU2

|   PIN | SIGNAL   | DESCRIPTION              |
|-------|----------|--------------------------|
|     1 | A1       | A connection to switch 1 |
|     2 | A2       | A connection to switch 2 |
|     3 | A3       | A connection to switch 3 |
|     4 | A4       | A connection to switch 4 |
|     5 | A5       | A connection to switch 5 |
|     6 | A6       | A connection to switch 6 |
|     7 | A7       | A connection to switch 7 |
|     8 | A8       | A connection to switch 8 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14662EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14662

## Table 4. Connector JU3

|     | SIGNAL       | SIGNAL       |                                                                      |
|-----|--------------|--------------|----------------------------------------------------------------------|
| PIN | SPI/ I2C = 1 | SPI/ I2C = 0 | DESCRIPTION                                                          |
| 1   | AD0          | CS           | I 2 C address bit 0/SPI CS signal                                    |
| 2   | SDA          | DIN          | I 2 C serial data/SPI data input                                     |
| 3   | AD1          | DOUT         | I 2 C address bit 1/SPI data output                                  |
| 4   | SCL          | SCLK         | I 2 C serial clock/SPI serial clock                                  |
| 5   | GND          | GND          | Ground                                                               |
| 6   | VCC          | VCC          | Power Supply Input                                                   |
| 7   | N.C.         | N.C.         | Not connected                                                        |
| 8   | SD           | SD           | Active-low shutdown (low power mode, turns all switches off)         |
| 9   | SPI / I2C    | SPI/ I2C     | Serial mode select SPI (high) or I 2 C (low), supply Input for DOUT. |
| 10  | N.C.         | N.C.         | Not connected                                                        |
| 11  | GND          | GND          | Ground                                                               |
| 12  | VCC          | VCC          | Power supply input                                                   |

## Component Suppliers

| SUPPLIER                               | WEBSITE        |
|----------------------------------------|----------------|
| Murata Electronics North America, Inc. | www.murata.com |

## MAX14662 Evaluation Kit

## MAX14662 EV Kit Bill of Materials

| DESCRIPTION   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC +125 DEGC; TC=X7R;   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC   | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;   | IC; SPST; BEYOND-THE-RAILS 8 X SPST; TQFN28-EP 4X4   | PCB:MAX14662   | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR   | PACKAGE OUTLINE 0603 RESISTOR   |       |
|---------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|----------------|--------------------------------------------|---------------------------------|-------|
| VALUE         | 0.1UF                                                                                      | PBC08SAAN                                                                          | TSW-106-08-S-D-RA                                           | N/A                                                  | MAX14662ETI+                                         | PCB            | OPEN                                       | OPEN                            |       |
| MANUFACTURER  | KEMET; TDK                                                                                 | ELECTRONICS CORP.                                                                  | SAMTEC                                                      | KEYSTONE                                             | MAXIM                                                | MAXIM          | N/A                                        | N/A                             |       |
| QTY Mftr PN   | 2 C0603C104K5RAC; C1608X7R1H104K                                                           | 2 PBC08SAAN                                                                        | 1 TSW-106-08-S-D-RA                                         | 2 5010                                               | 1 MAX14662ETI+                                       | 1 MAX14662     | 0 N/A                                      | 0 N/A                           | 9     |
| DNI/ DNP      | -                                                                                          | -                                                                                  | -                                                           | -                                                    | -                                                    | -              | DNP                                        | DNP                             |       |
| REF DES       | C1, C2                                                                                     | JU1, JU2                                                                           | JU3                                                         | TP1, TP2                                             | U1                                                   | PCB            | C3                                         | R1-R6                           |       |
| ITEM          | 1                                                                                          | 2                                                                                  | 3                                                           | 4                                                    | 5                                                    | 6              | 7                                          | 8                               | TOTAL |

Evaluates: MAX14662

## MAX14662 EV Kit Schematic

<!-- image -->

Evaluates: MAX14662

## MAX14662 EV Kit PCB Layout Diagrams

MAX14662 EV Kit-Top Silkscreen

<!-- image -->

MAX14662 EV Kit-Layer 2

<!-- image -->

MAX14662 EV Kit-Top

<!-- image -->

MAX14662 EV Kit-Layer 3

<!-- image -->

## MAX14662 EV Kit PCB Layout Diagrams (continued)

MAX14662 EV Kit-Bottom Silkscreen

<!-- image -->

MAX14662 EV Kit-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

<!-- image -->

Evaluates: MAX14662