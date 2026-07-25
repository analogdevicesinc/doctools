<!-- lastmod 2022-08-02 -->
## MAX14829 Evaluation Kit

## General Description

The MAX14829 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX14829 IO-Link ®  device transceiver.

The MAX14829 EV kit can be operated stand-alone with pin-strapping or can be driven by a microcontroller using the Arduino-compatible interface.

## Features

- IO-Link-Compliant Device Transceiver
- IO Interface Terminals
- Proven PCB Layout
- Fully Assembled and Tested
- Pads for an Arduino Compatible Shield

## Quick Start

## Recommended Equipment

- MAX14829 EV kit
- 24V, 500mA DC power supply
- Multimeter
- Function generator
- Oscilloscope

IO-Link is a registered trademark of ifm electronic GmbH.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1) Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2) Ensure that SW1 is set to position 1 (to the far left).
- 3) Connect the 24V DC power supply on the V 24  (TP1 or TP3) and GND (TP4 or TP19) connectors of the EV kit board.
- 4) Connect the oscilloscope to the C/Q test point (TP8).
- 5) Turn on the power supply.
- 6) Connect  the  multimeter  to  pin  1  on  the  J4  jumper. Verify that the voltage on the multimeter is 5V.
- 7) Connect  the  multimeter  to  pin  3  on  the  J4  jumper. Verify that the voltage on the multimeter is 3.3V.
- 8) Set  the  function  generator  to  generate  a  0  to  3.3V square wave at 100kHz.
- 9) Connect the oscilloscope to the TX (TP19) and C/Q (TP8) test points.
- 10) Connect  the  function  generator  to  the  TX  test  point (TP19).
- 11) Enable the function generator.
- 12)  Verify that the C/Q output switches with the TX input.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX14829

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                   |
|----------|-----------------|-------------------------------------------------------------------------------|
| J1       | 1-2*            | TXEN is connected to V L . The C/Q driver is enabled when TXEN = CQEN = V L . |
| J1       | 2-3             | TXEN is connected ground.                                                     |
| J2       | 1-2*            | CQEN is connected to V L .                                                    |
| J2       | 2-3             | CQEN is connected to ground.                                                  |
| J3       | 1-2             | CL0 is connected to V L . CL0 is high.                                        |
| J3       | 2-3*            | CL0 is connected to ground. CL0 is low.                                       |
| J4       | 1-2             | V L is connected to V 5 .                                                     |
| J4       | 2-3*            | V L is connected to V 33 .                                                    |
| J5       | 1-2*            | DOEN is connected to V L . The DO driver is enabled.                          |
| J5       | 2-3             | DOEN is connected to ground. The DO driver is disabled.                       |
| J6       | 1-2*            | AR is connected to V L . Autoretry is enabled.                                |
| J6       | 2-3             | AR is connected to ground. Autoretryis disabled.                              |
| J7       | 1-2             | CL1 is connected to V L . CL1 is high.                                        |
| J7       | 2-3*            | CL1 is connected to ground. CL1 is low.                                       |
| J9       | Open            | DI is not connected to pin 2 of the M12 connector (J8).                       |
| J9       | Closed*         | DI is connected to pin 2 of the M12 connector (J8).                           |
| J10      | Open            | DO is not connected to pin 2 of the M12 connector (J8).                       |
| J10      | Closed*         | DO is connected to pin 2 of the M12 connector (J8).                           |
| J11      | Open            | CQOL is not connected to the DS1 LED circuit.                                 |
| J11      | Closed*         | CQOL is connected to the DS1 LED circuit.                                     |
| J12      | Open            | DOOL is not connected to the DS2 LED circuit.                                 |
| J12      | Closed*         | DOOL is connected to the DS2 LED circuit.                                     |
| J13      | Open            | UV24 is not connected to the DS3 LED circuit.                                 |
| J13      | Closed*         | UV24 is connected ot the DS3 LED circuit.                                     |
| J14      | Open            | LOW24 is not connected to the DS4 LED circuit.                                |
| J14      | Closed*         | LOW24 is connected to the DS4 LED circuit.                                    |

* Default position.

## Detailed Description of Hardware

The MAX14829 EV kit provides a proven layout for the MAX14829 IO-Link device transceiver.

All  the  power-supply  and  regulator  input  and  output pins  are  connected  to  convenient  connectors  for  easy probing. The device logic input and output pins are also provided with convenient connectors for logic testing.

The C/Q, DO, and DI pins are protected by TVS diodes.

See  Table  1  for  a  description  of  all  the  EV  kit  jumper configurations.

## Regulators

The MAX14829 includes two regulators: V 5  generates 5V and the V 33  regulator generates 3.3V. Use the on-board switch (SW1) to set the configuration for the V 5  regulator:

- Position 1 connects the REG pin to V 5  and the internal 5V regulator is enabled. In this configuration, the V 5 regulator is capable of driving external loads up to 30mA total external load current.
- Position 2 configures V 5  as an input. The internal 5V regulator is disabled and V 5  becomes the supply input for the internal analog and digital functions.  Connect an external 5V supply to the V 5  pin on the J4 header. 5V must be present on V5 for normal operation.
- Position 3 configured the 5V regulator with an external pass transistor, to driver larger external loads. This switch setting connects REG to the base of the transistor to regulate the voltage and connects V 5  to the emitter.

Use jumper J4 to set the logic supply voltage. Connect J4 to 1-2 to set V L  = V 5 . Connect J4 to 2-3 to set V L  = V 33 .

## Table 2. Setting the C/Q and DO Current Limit

| CL1   | CL0   | MAXIMUM DRIVER CURRENT LIMIT   |
|-------|-------|--------------------------------|
| L     | L     | 155mA                          |
| L     | H     | 295mA                          |
| H     | L     | 365mA                          |
| H     | H     | 430mA                          |

## Setting the Driver Current (C/Q and DO)

Select the current limit for both the C/Q and DO drivers by setting CL1 and CL0 either high or low. Place a shunt on the J7 jumper to set the CL1 input. Place a shunt on the J3 to set the CL0 input. See Table 2.

## Enable/Disable Autoretry Mode (C/Q and DO)

Set the J6 jumper to 1-2 to enable autoretry functionality on the C/Q and DO drivers. Set J6 to 2-3 to disable autoretry functionality on the drivers.

## Configure the M12 Connector (C/Q, DO, DI)

The MAX14829 includes a standard 4-pin M12 connection for easy in-circuit evaluation. Pin 1 and pin 3 of the M12 connector  are  connected  to  L+  (V 24 )  and  L-  (GND), respectively.

Pin 4 of the M12 connector is connected to the C/Q line.

DI  and/or  DO  can  be  connected  to  pin  2  of  the  M12 connector. Close the J9 jumper to connect the DI input to pin 2. Close the J10 jumper to connect DO to pin 2. Leave J9 and J10 open to leave pin 2 unconnected.

Evaluates: MAX14829

## Fault and Status LEDs

The CQOL LED  (DS1)  turns  on  when  the  C/Q  driver enters a fault condition. Similarly, the DOOL LED (DS2) turns  on  when  the  DO  driver  enters  a  fault  condition. CQOL and DOOL are high impedance (DS2 and DS3 are off) when the C/Q and DO drivers are operating normally.

The UV24 and LOW24 LEDs (DS3 and DS4, respectively) indicate  the  status  of  the  V 24   supply. The LOW24 LED (DS4)  turns  on  when  V 24   falls  below  the  16.5V  (typ) warning threshold. Both the UV24 and LOW24 LEDs are on when V 24  falls below the 7.2V (typ) V 24  undervoltage lockout  (UVLO)  threshold. UV24 and LOW24 deassert, and the LEDs turn off, when the V 24  voltage is above the UVLO and warning thresholds, respectively.

## On-Board Protection

The MAX14829 EV kit includes on-board TVS diodes to protect the C/Q, DO, and DI lines against transient highvoltage surge and EFT events up to ±1kV/500 Ω .  Larger diodes  are  required  to  protect  against  higher  voltage/ current events. SMB sized pads are included on the EV kit  for evaluation with larger diodes.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14829EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14829 EV Kit Bill of Materials

|   ITEM | REF_DES                       | DNI/DNP   |   QTY | MFG PART #                                                                             | MANUFACTURER                          | VALUE                                                       | DESCRIPTION                                                                                                                                                               |
|--------|-------------------------------|-----------|-------|----------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C2                        | -         |     2 | C0402C105K8PAC; CC0402KRX5R6BB105                                                      | KEMET;YAGEO                           | 1UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP;1UF;10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                     |
|      2 | C3                            | -         |     1 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO;MURATA;MURATA; TAIYO YUDEN;AVX  | 0.1UF                                                       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                               |
|      3 | C4                            | -         |     1 | C0402C104J4RAC; GCM155R71C104JA55                                                      | KEMET;MURATA                          | 0.1UF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                         |
|      4 | C5-C8                         | -         |     4 | C0402C331J5GAC; GRM1555C1H331JA01                                                      | KEMET;MURATA                          | 330PF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP;330PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                  |
|      5 | D1, D3                        | -         |     2 | SPT02-236DDB                                                                           | ST MICROELECTRONICS                   | SPT02-236DDB                                                | DIODE; TVS; UQFN-2L; PIV=38V; IF=0.3A                                                                                                                                     |
|      6 | D2                            | -         |     1 | SPT01-335DEE                                                                           | ST MICROELECTRONICS                   | SPT01-335DEE                                                | DIODE; TVS; QFN6; PIV=38V; IF=0.3A                                                                                                                                        |
|      7 | D5                            | -         |     1 | ZHCS506                                                                                | DIODES INCORPORATED                   | ZHCS506TA                                                   | DIODE; SCH; SMT (SOT-23); PIV=60V; IF=0.5A                                                                                                                                |
|      8 | DS1-DS4                       | -         |     4 | SML-311UT                                                                              | ROHM                                  | SML-311UTT86                                                | DIODE; LED; LOW CURRENT; SMT (0603); VF=1.8V; IF=0.02A; -30 DEGC TO +85 DEGC; RED                                                                                         |
|      9 | J1-J7                         | -         |     7 | TSW-103-07-T-S                                                                         | SAMTEC                                | TSW-103-07-T-S                                              | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                                          |
|     10 | J8                            | -         |     1 | 09 0431 212 04                                                                         | BINDER                                | 09 0431 212 04                                              | CONNECTOR; MALE; TH; MALE RECEPTACLE; THREADED; PCB SOLDER; STRAIGHT; 4PINS;                                                                                              |
|     11 | J9-J14                        | -         |     6 | TSW-102-07-T-S                                                                         | SAMTEC                                | TSW-102-07-T-S                                              | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                                                   |
|     12 | Q1                            | -         |     1 | BCP56TA                                                                                | DIODES INCORPORATED                   | BCP56TA                                                     | TRAN; NPN SILICON PLANAR MEDUIM POWER TRANSISTOR; NPN; SOT-223; PD-(2.0W); I-(1A); V-(80V)                                                                                |
|     13 | R1, R12-R14                   | -         |     4 | CRCW0402560RFK; RC0402FR-07560RL                                                       | VISHAY DALE; YAGEO PHICOMP            | 560 RESISTOR; 0402; 560 OHM; 1%; 100PPM; 0.063W; THICK FILM | 560 RESISTOR; 0402; 560 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                               |
|     14 | R2-R6, R16-R21                | -         |    11 | RC0402JR-070RL; CR0402-16W-000RJT                                                      | YAGEO PHYCOMP; VENKEL LTD.            |                                                             | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                   |
|     15 | R7                            | -         |     1 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001                                          | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K                                                          | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                       |
|     16 | R9, R10                       | -         |     2 | CRCW040210K0FK; RC0402FR-0710KL                                                        | VISHAY DALE; YAGEO PHICOMP            | 10K                                                         | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                      |
|     17 | SU1-SU13                      | -         |    13 | QPC02SXGN-RC                                                                           | SULLINS ELECTRONICS CORP.             | QPC02SXGN-RC                                                | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                          |
|     18 | SW1                           | -         |     1 | MHS231                                                                                 | COPAL ELECTRONICS INC                 | MHS231                                                      | SWITCH; DP3T; THROUGH HOLE; STRAIGHT;12V; 0.2A; MHS SERIES; HYPER-MINIATURE SLIDE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM                                               |
|     19 | TP1                           | -         |     1 | 5010                                                                                   | KEYSTONE                              | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                     |
|     20 | TP2, TP12, TP18, TP24, TP26   | -         |     5 | 5011                                                                                   | KEYSTONE                              | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                   |
|     21 | TP3                           | -         |     1 | 571-0500                                                                               | DELTRON                               | 571-0500                                                    | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS                                                                                                     |
|     22 | TP4                           | -         |     1 | 571-0100                                                                               | DELTRON                               | 571-0100                                                    | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS                                                                                                     |
|     23 | TP7-TP9, TP13-TP15, TP19-TP21 | -         |     9 | 5014                                                                                   | KEYSTONE                              | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
|     24 | U1                            | -         |     1 | MAX14829ATG+                                                                           | MAXIM                                 | MAX14829ATG+                                                | IC; TXRX; MAX14829ATG+; LOW-POWER DUAL DRIVER IO-LINK DEVICE TRANSCEIVER; PACKAGE CODE: T2444+4; PACKAGE OUTLINE NUMBER: 21-0139; LAND PATTERN NUMBER: 90-0022; TQFN24-EP |
|     25 | PCB                           | -         |     1 | MAX14829                                                                               | MAXIM                                 | PCB                                                         | PCB:MAX14829                                                                                                                                                              |
|     26 | D4, D6-D9                     | DNP       |     0 |                                                                                        | ST MICROELECTRONICS                   |                                                             |                                                                                                                                                                           |
|     27 | U2                            |           |       | SMBJ33A                                                                                |                                       | 33V                                                         | DIODE; TVS; SMB (DO-214AA); VRM=33V; IPP=11.8A                                                                                                                            |
|        |                               | DNP       |     0 | ARDUINO_UNO_R3                                                                         | ARDUINO                               | ARDUINO_UNO_R3                                              | MODULE; ARDUINO_UNO_R3                                                                                                                                                    |

Evaluates: MAX14829

## MAX14829 EV Kit Schematic

<!-- image -->

## MAX14829 EV Kit PCB Layout Diagrams

MAX14829 EV Kit-Top Silkscreen

<!-- image -->

MAX14829 EV Kit-Internal 2

<!-- image -->

MAX14829 EV Kit-Top

<!-- image -->

MAX14829 EV Kit-Internal 3

<!-- image -->

│

## MAX14829 EV Kit PCB Layout Diagrams (continued)

MAX14829 EV Kit-Bottom

<!-- image -->

MAX14829 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14829 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14829