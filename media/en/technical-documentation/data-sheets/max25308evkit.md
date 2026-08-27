<!-- lastmod 2022-08-03 -->
## MAX25308 Evaluation Kit

## General Description

The  MAX25308  EV  kit  is  a  fully  assembled  and  tested PCB  intended  to  demonstrate  the  capability  of  the MAX25308  LDO  regulator.  The  MAX25308  is  a  3-output linear regulator family that delivers up to 600mA on Channel 1 and up to 300mA on channels 2 and 3 with only 37µVRMS of output noise from 10Hz to 100kHz. These regulators maintain ±1.25% output accuracy over a wide input voltage range, requiring only 155mV (max) of inputto-output  headroom  at  full  load.  The  1.95mA  maximum no-load supply current is independent of dropout voltage. Each  output  is  factory  programmable  between  0.6V  to 3.7875V in  12.5mV steps.  No  external  components  are needed except for the input, output, and bypass capacitors.  Each  output  has  an  independent enable input and RESET output.

## Features

- 1.7V to 5.5V Input Voltage Range
- Factory-Selectable Output Voltage of 0.6V to 3.7875V in 12.5mV Steps
- 1.95mA (Max) Operating Supply Current
- 70dB PSRR at 10kHz
- 600mA Maximum Output Current (OUT1)
- 300mA Maximum Output Current (OUT2/3)
- ±1.25% DC Accuracy Over Load, Line, and Temperature

Ordering Information appears at end of data sheet.

Evaluates: MAX25308

## Quick Start

## Required Equipment

- MAX25308 EV kit
- 6V, 5A power supply
- Appropriate resistive load, or an electronic load
- Multimeters

## Test setup

<!-- image -->

<!-- image -->

## MAX25308 Evaluation Kit

## Procedure

The EV kit comes fully assembled and tested. Follow the steps below to verify board operation.

## Channel 1 operation:

- 1) Populate jumper (EN\_1) between EN1 and IN1.
- 2) Populate jumper RESETB1 to monitor power-good (RESETB) signal.
- 3) Connect 3.3V power supply between IN1 and PGND1 (set power-supply current limit to at least 2A).
- 4) Turn on power supply.
- 5) Measure input voltage at IN1\_S test point.
- 6) Measure output voltage at OUT1\_S and measure RESETB1 signal at RESETB\_1 test point. RESETB1 signal should be high (same as IN1).

## Channel 2 operation:

- 1) Populate jumper IN\_1-2.
- 2) Populate jumper (EN\_2) between EN2 and IN2.
- 3) Populate jumper RESETB2 to monitor power-good (RESETB) signal.
- 4) Connect 3.3V power supply between IN1 and PGND1 (set power-supply current limit to at least 2A).
- 5) Turn on power supply.
- 6) Measure input voltage at IN2\_S test point. It should be the same as IN1.
- 7) Measure output voltage at OUT2\_S and measure RESETB2 signal at RESETB\_2 test point. RESETB2 signal should be high (same as IN2).

## Channel 3 operation:

- 1) Populate jumper IN\_1-3.
- 2) Populate jumper (EN\_3) between EN3 and IN3.
- 3) Populate jumper RESETB3 to monitor power-good (RESETB) signal.
- 4) Connect 5V power supply between IN1 and PGND1 (set power-supply current limit to at least 2A).
- 5) Turn on power supply.
- 6) Measure input voltage at IN3\_S test point. It should be the same as IN1.
- 7) Measure output voltage at OUT3\_S and measure RESETB3 signal at RESETB\_3 test point. RESETB3 signal should be high (same as IN3).

Evaluates: MAX25308

## Detailed Description of Hardware

## EV Kit Interface

The  Channel  1  inputs  (IN1  and  PGND1)  are  the  main input  supply  points.  IN1  powers  the  common  circuitry of the device. This requires power to IN1 to be supplied before OUT2 and/or OUT3 can be turned on. Channel 2 and Channel 3 can be supplied from either IN1 or external  supply.  To  use  external  supply  at  IN2  and/or  IN3, remove jumpers IN\_1-2 and/or IN\_1-3 respectively, which disconnects them from IN1 supply. VOUT1, VOUT2, and VOUT3 (SMA connectors) can be used for output voltage measurement or noise measurement. MAX25308 EV kit has exposed pads (IN1/2/3, OUT1/2/3, and GP (ground point))  to  measure  input  and/or  output  voltage  across ceramic  capacitors,  which  also  can  be  used  for  probe measurements or PSRR measurement.

## Evaluating IC Capabilities

The default device populated on the board is a MAX25308AATEA/V+.  This  is  a  3-channel  device.  The MAX25308  includes  individual  enable  inputs  for  each output  (EN1/EN2/EN3).  Set  EN\_1/2/3  jumper  to  either IN1/2/3 or GND to pull EN high or low, respectively. The MAX25308  includes  an  open-drain  output,  RESETB, for each output that goes low to indicate that the output voltage is out of regulation. The MAX25308 EV kit has a 10kΩ pullup resistor  from  the  RESETB  pin  to  IN1,  IN2, and IN3, respectively-one for each channel.

│

## MAX25308 EV Kit Jumpers, Test points, and Connectors

| JUMPER/TEST POINTS/CONNECTORS   | TYPE       | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                                                  |
|---------------------------------|------------|----------|--------------------|-------------------------------------------------------------------------------------------|
| EN_1                            | Jumper     | EN1      | OFF                | Jumper for activating Channel 1 enable signal                                             |
| EN_2                            | Jumper     | EN2      | OFF                | Jumper for activating Channel 2 enable signal                                             |
| EN_3                            | Jumper     | EN3      | OFF                | Jumper for activating Channel 3 enable signal                                             |
| RESETB1                         | Jumper     | RESETB1  | NA                 | Jumper to connect Channel 1 power good (RESETB) signal                                    |
| RESETB2                         | Jumper     | RESETB2  | NA                 | Jumper to connect Channel 2 power good (RESETB) signal                                    |
| RESETB3                         | Jumper     | RESETB3  | NA                 | Jumper to connect Channel 3 power good (RESETB) signal                                    |
| IN_1-2                          | Jumper     | V IN1    | NA                 | Jumper to connect IN2 and IN1. IN2 is supplied from channel1 input (IN1)                  |
| IN_1-3                          | Jumper     | V IN1    | NA                 | Jumper to connect IN3 and IN1. IN3 is supplied from channel1 input (IN1)                  |
| RESETB_1                        | Test point | RESETB1  | NA                 | Test point to monitor Channel 1 power good signal                                         |
| RESETB_2                        | Test point | RESETB2  | NA                 | Test point to monitor Channel 2 power good signal                                         |
| RESETB_3                        | Test point | RESETB3  | NA                 | Test point to monitor Channel 3 power good signal                                         |
| IN1_S                           | Test point | V IN1    | NA                 | Test point to measure Channel 1 input voltage                                             |
| IN2_S                           | Test point | V IN2    | NA                 | Test point to measure Channel 2 input voltage                                             |
| IN3_S                           | Test point | V IN3    | NA                 | Test point to measure Channel 3 input voltage                                             |
| OUT1_S                          | Test point | V OUT1   | NA                 | Test point to monitor Channel 1 output voltage                                            |
| OUT2_S                          | Test point | V OUT2   | NA                 | Test point to monitor Channel 2 output voltage                                            |
| OUT3_S                          | Test point | V OUT3   | NA                 | Test point to monitor Channel 3 output voltage                                            |
| VOUT1                           | Connector  | V OUT1   | NA                 | SMAconnector to measure Channel 1 output voltage. Can also be used for noise measurement. |
| VOUT2                           | Connector  | V OUT2   | NA                 | SMAconnector to measure Channel 1 output voltage. Can also be used for noise measurement. |
| VOUT3                           | Connector  | V OUT3   | NA                 | SMAconnector to measure Channel 1 output voltage. Can also be used for noise measurement. |
| GNDS_1, GNDS_2, GNDS_3          | Test point | GND      | NA                 | Additional ground points provided                                                         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25308EVKIT# | EV Kit |

## MAX25308 EV Kit Bill of Materials

| REFERENCE                                                    | VALUE   | DESCRIPTION                                                                                                           | MANUFACTURER                      | MFG PART #                     |
|--------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------|--------------------------------|
| C2, C3                                                       | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              | TDK                               | CGA3E1X7R1E105K080AC           |
| C1, C4                                                       | 4.7UF   | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R          | TDK                               | CGA4J3X7R1C475K125AE           |
| C5, C6                                                       | 2.2UF   | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                | TDK                               | CGA3E1X7R0J225K080AC           |
| C7-C9                                                        | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            | MURATA                            | GRM155R71H103JA88              |
| C10                                                          | 150UF   | CAP TANT POLY 150UF 6.3V 2917 (7343 Metric) 25mOhm                                                                    | Panasonic Electronic Components   | 6THE150M                       |
| EN_1-EN_3                                                    | -       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                             | SULLINS                           | PEC03SAAN                      |
| GNDS_1-GNDS_3, IN1_S-IN3_S, OUT1_S-OUT3_S, RESETB_1-RESETB_3 | -       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISHED | Keystone Electronics              | 5005                           |
| IN1-IN3, OUT1-OUT3, PGND1-PGND3                              | -       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                             | WEICO WIRE                        | 9020 BUSS                      |
| IN_1-2, IN_1-3, RESETB1-RESETB3                              | -       | CONNECTOR; MALE; 2.54MM PIN HEADER; STRAIGHT; 2PINS                                                                   | WURTH ELECTRONICS INC             | 61300211121                    |
| R1-R6                                                        | 10K     | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                                | VISHAY DALE;KOA SPEER ELECTRONICS | TNPW060310K0BE; RN731JTTD1002B |
| VOUT1-VOUT3                                                  | -       | CONNECTOR; FEMALE; SMA MIXED TECHNOLOGY; STRAIGHT; 5PINS                                                              | SAMTEC                            | SMA-J-P-H-ST-MT1               |
| J1                                                           | -       | EVKIT PART - IC                                                                                                       | MAXIM                             | MAX25308AATEA/V+               |

Evaluates: MAX25308

## MAX25308 EV Kit Schematic

Figure 1. MAX25308 EV Kit Schematic

<!-- image -->

## MAX25308 EV Kit PCB Layout Diagrams

Figure 2.MAX25308 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

Figure 4. MAX25308 EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 3. MAX25308 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

Figure 5. MAX25308 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX25308 EV Kit PCB Layout Diagrams (continued)

Figure 6. MAX25308 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 7. MAX25308 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre implieG  0D[im InteJrDteG reserYes the riJht to FhDnJe the FirFuitr\ DnG speFi¿FDtions Zithout notiFe Dt Dn\ time

<!-- image -->

│

Evaluates: MAX25308