<!-- lastmod 2022-08-02 -->
## MAX17681A Evaluation Kit

## General Description

The MAX17681AEVKITF is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17681A high-efficiency, iso-buck DC-DC Converter. The EV kit operates over a wide input-voltage range of 17V to 36V and uses primary-side feedback to regulate the  output  voltage.  The  EV  kit  output  is  programmed  to +24V at 100mA, with ±8% output voltage regulation.

The  EV  kit  comes  installed  with  the  MAX17681A  in  a 10-pin (3mm x 2mm) TDFN package.

## Features

- 17V to 36V Input Voltage Range
- +24V, 100mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 2.4W Output Power
- Overtemperature Protection
- Proven PCB Layout
- Provides robust primary and secondary output short-circuit protection

Ordering Information appears at end of data sheet.

## Evaluates: MAX17681A for Isolated +24V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V-60V DC, 0.5A power supply
- One resistive load 100mA sink capacity
- Two digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Test Procedure

The  EV  kit  comes  with  the  default  output  configuration programmed to +24V.

- 1) Verify that J1 is open.
- 2) Verify that R7 is not installed.
- 3) Set  the  power  supply  output  to  24V.  Disable  the power supply.
- 4) Connect  the  positive  terminal  of  the  power  supply to the V IN   PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 100mA resistive load across the +24V PCB pad and the GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +24V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify that output voltage is at +24V (with allowable tolerance of ±8%) with respect to GND0.
- 8) If required, vary  the  input  voltage  from  17V  to 36V,  and  the  load  current  from  0mA  to  100mA  and verify  that  output  voltage  is  at  +24V  (with  allowable tolerance of ±8%).

<!-- image -->

## MAX17681A Evaluation Kit

## Detailed Description

The MAX17681AEVKITF evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17681A high efficiency, iso-buck DC-DC converter designed to provide an isolated power up to 2.4W. The EV kit generates +24V, 100mA from a 17V  to  36V  input  supply.  The  EV  kit  features  a  forced PWM control  scheme  that  provides  constant  switchingfrequency of 200kHz operation at all load and line conditions.

The EV kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17681A. The V PRI PCB  pad  helps  measure  the  regulated  primary  output voltage (V PRI ). An additional RESET PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESET is pulled low if FB voltage drops below 92.5% of its  set  value. RESET goes  high  impedance  1024  clock cycles  after  FB  voltage  rises  above  95.5%  of  its  set value. The programmable soft-start feature allows users to reduce the input inrush current.

## Evaluates: MAX17681A for Isolated +24V Output Configuration

the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17681 IC data sheet.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage-lockout  (UVLO)  threshold.  J1  configures the  EV  kit's  output  for  turn-on/turn-off  control.  Install  a shunt across J1 pins 2-3 to disable V OUT. See Table 1 for proper J1 configurations.

NOTE  1: The  secondary  output  diodes  D1  is  rated  to carry short-circuit current only for few 100's of ms and is not rated to carry the continuous short-circuit current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting NOTE 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the +24V rail is healthy, the U2 sinks the minimum load current required to regulate the output voltages within ±8% regulation.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT                   |
|------------------|--------------------------------------------------|-------------------------|
| J1               |                                                  |                         |
| 1-2              | Connected to V IN                                | Always Enabled          |
| 2-3              | Connected to GND                                 | Always Disabled         |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15.5V |

*Default position.

## MAX17681A Evaluation Kit

## EV Kit Performance Report

<!-- image -->

## Evaluates: MAX17681A for Isolated +24V Output Configuration

<!-- image -->

<!-- image -->

│

## MAX17681A Evaluation Kit

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17681A when contacting these component suppliers.

## Evaluates: MAX17681A for Isolated +24V Output Configuration

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17681AEVKITF# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX17681A Evaluation Kit

## MAX17681A EV Kit Bill of Materials

| Mfctr PN-4   |                                             | TAIYO YUDEN EMK107B7105KA                |                                                                                                                                                                                                                                                                                                             |                       |                                               |                                                   |                                                |                                      |                               |                               |                                                                                                     |                            |                              |                            |                                    |                                                                           |
|--------------|---------------------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-----------------------------------------------|---------------------------------------------------|------------------------------------------------|--------------------------------------|-------------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------|----------------------------|------------------------------|----------------------------|------------------------------------|---------------------------------------------------------------------------|
| Mfctr PN-3   | Murata GRM31MR71H105KA88                    | TDK C1608X7R1C105K                       |                                                                                                                                                                                                                                                                                                             |                       |                                               |                                                   |                                                |                                      |                               |                               |                                                                                                     |                            |                              |                            |                                    |                                                                           |
| Mfctr PN-2   | KEMET C1206C105K5RAC                        | KEMET C0603C105K4RAC                     | KEMET C0402C823K4RAC KEMET C0402C821K5RAC KEMET C0402C103K5RAC                                                                                                                                                                                                                                              |                       | TAIYO YUDEN UMK316B7225K                      |                                                   |                                                |                                      |                               |                               |                                                                                                     |                            |                              |                            | SUMIDA CEP1110-12387-T092          |                                                                           |
| Mfctr PN-1   | Murata GRM31CR71H105KA61                    | Murata GRM188R71C105KA12                 | Murata GRM155R71E333KA88 Murata GRM155R71C823K Murata GRM155R71H821K Murata GRM31CR71C106KAC7 Murata GRM155R71H103KA88                                                                                                                                                                                      | Panasonic EEEFK1H220P | Murata GRM31CR71H225KA88                      | AVX 1206SC102KAT                                  | Diode Inc. DFLS1100-7 SULLINS ELECTRONICS CORP | PEC03SAAN VISHAY DALE CRCW04023M01FK | VISHAY DALE                   | CRCW0402261KFK VISHAY DALE    | CRCW0402110KFK PANASONIC ERJ-2RKF1052 PANASONIC ERJ2RKF3741 PANASONIC ERJ-2GEJ104X                  | VISHAY DALE CRCW040222R0FK | PANASONIC ERJ-2RKF9092X      | VISHAY DALE CRCW040210K0JN | WURTH ELECTRONICS INC. 750342860   | MAX17681AATB+ Diode Inc. TL431BW5                                         |
| Description  | 1 1µF±10%, 50V,X7R Ceramic capacitor (1206) | 1µF±10% 16V X7R Ceramic capacitor (0603) | 1 0.033UFnF±10%,25V, X7R ceramic capacitor (0402) 1 0.082UFnF±10%,16V, X7R ceramic capacitor (0402) 1 820pF±5%,50V,X7R ceramic capacitor (0402) 1 10uF±10%,16V, X7R ceramic capacitor (1206) 1 0.01uF±10%, 50V, X7R ceramic capacitor (0402) 1 22uF, 20%, 50V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm, |                       | 1 2.2uF±10%,50V, X7R ceramic capacitor (1206) | 1 1000pF±10%, 1500V, X7R ceramic capacitor (1206) | 100V/1A, PowerDI®123 1 3-pin headers           | 1 3.01M Ohm±1% resistor (0402)       | 1 261K Ohm±1% resistor (0402) | 1 110K Ohm±1% resistor (0402) | 1 10.5kΩ ±1% resistor (0402) 1 3.74kΩ ±1% resistor (0402) 1 100kΩ ±5% resistor (0402) 1 OPEN (0402) | 1 22Ω ±1% resistor (0402)  | 1 90.9kΩ ±1% resistor (0402) | 1 10kΩ ±1% resistor (0402) | 1 EP10, 8-pin SMT, 80µH,1.2A,2.4:1 | 1 MAX17681A TDFN10 3*2mm Iso buck DC-DC converter 1 Shunt regulator SOT25 |
| Qty          |                                             | 1                                        |                                                                                                                                                                                                                                                                                                             |                       |                                               |                                                   | 1                                              |                                      |                               |                               |                                                                                                     |                            |                              |                            |                                    |                                                                           |
| Des          | C1                                          | C2                                       | C3 C4 C5 C6 C7                                                                                                                                                                                                                                                                                              | C8                    | C9                                            | C10                                               | D1 J1                                          | R1                                   | R2                            | R3                            | R4 R5 R6 R7                                                                                         | R8                         | R9                           | R10                        | T1                                 | U1 U2                                                                     |
| S NO         | 1                                           | 2                                        | 3 4 5 6 7                                                                                                                                                                                                                                                                                                   | 8                     | 9                                             | 10                                                | 11 12                                          | 13                                   | 14                            | 15                            | 16 17 18 19                                                                                         |                            | 20 21                        | 22                         | 23                                 | 24 25                                                                     |

## Evaluates: MAX17681A for Isolated +24V Output Configuration

## MAX17681A Evaluation Kit

## MAX17681A EV Kit Schematic

<!-- image -->

## Evaluates: MAX17681A for Isolated +24V Output Configuration

## MAX17681A EV Kit PCB Layout Diagrams

MAX17681A EV Kit-Top Silkscreen

<!-- image -->

MAX17681A EV Kit-Top

<!-- image -->

│

## MAX17681A EV Kit PCB Layout Diagrams (continued)

MAX17681A EV Kit-Bottom

<!-- image -->

## MAX17681A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17681A for Isolated +24V Output Configuration