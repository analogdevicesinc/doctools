<!-- lastmod 2022-08-02 -->
## MAX17681A Evaluation Kit

## General Description

The MAX17681E evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17681A high-efficiency, iso-buck, DC-DC converter. The EV kit operates over a wide inputvoltage range of 17V to 36V and uses primary-side feedback to regulate the output voltage. The EV kit output is programmed to ±15V, 75mA each and ±7.5V, 75mA each with ±10% regulation.

The  EV  kit  comes  installed  with  the  MAX17681A  in  a 10-pin (3mm x 2mm) TDFN package.

## Features

- 17V to 36V Input Voltage Range
- ±15V, 75mA Each and ±7.5V, 75mA Each Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- 86.9% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers Up to 3.4W Output Power
- Overtemperature Protection
- Proven PCB layout
- Provides robust primary and secondary output shortcircuit protection

Ordering Information appears at end of data sheet.

## Evaluates: MAX17681A for Isolated ±15V and ±7.5V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V-60V DC, 0.5A power supply
- Four resistive loads, each 75mA sink capacity
- Four digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Test Procedure

- 1) Verify that J1 is open.
- 2) Set the power supply output to 24V. Disable the power supply.
- 3) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad.
- 4) Connect the first resistive load across the +15V PCB pad and the GND0 PCB pad. Connect the second 75mA resistive load across the -15V PCB pad and the GND0 PCB pad.
- 5) Connect the third 75mA resistive load across the +7V PCB pad and the GND0 PCB pad. Connect the fourth 75mA resistive load across the -7V PCB pad and the GND0 PCB pad.
- 6) Connect two DMMs configured in voltmeter mode across the ±15V PCB pads and the nearest GND0 PCB pad. Also, connect another two DMMs configured in voltmeter mode across the ±7 PCB pads and the nearest GND0 PCB pad.
- 7) Enable the input power supply.
- 8) Verify that output voltages are at ±15V and ±7.5V (with allowable tolerance of ±10%) with respect to GND0.
- 9) If required, vary the input voltage from 17V to 36V, and the load current from 0mA to 75mA and verify that output voltages are ±15V and ±7.5V.

<!-- image -->

## MAX17681A Evaluation Kit

## Detailed Description

The MAX17681E EV kit is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17681A high-efficiency,  iso-buck,  DC-DC  converter designed to provide an isolated power up to 3.4W. The EV  kit  generates  either  ±15V  or  ±7.5V,  75mA  each output voltages, from a 17V to 36V input supply. The EV kit  features a forced-PWM control scheme that provides constant switching-frequency of 200kHz operation at all load and line conditions.

The EV Kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17681A. The V PRI PCB  pad  helps  measure  the  regulated  primary  output voltage (V PRI ). An additional RESET PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESET pulls  low  if  FB  voltage  drops  below  92.5%  of its  set  value. RESET goes  high-impedance  1024  clock cycles  after  FB  voltage  rises  above  95.5%  of  its  set value. The programmable soft-start feature allows users to reduce the input inrush current.

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration

procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in the MAX17681 IC data sheet.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/ off  control  while  also  allowing  the  user  to  program  the input undervoltage lockout (UVLO) threshold. Jumper J1 configures the EV kit's output for turn-on/turn-off control. Install a shunt across jumper J1 pins 2-3 to disable V OUT . See Table1 for proper J1 jumper configurations.

NOTE 1: The secondary output diodes D1, D2, D3, and D4  are  rated  to  carry  short-circuit  current  only  for  few 100's of ms and is not rated to carry the continuous shortcircuit current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed NOTE  2: The  iso-buck  converter  typically  needs  10% minimum  load  to  regulate  the  output  voltage.  In  this design  when  the  +24V  rail  is  healthy,  the  U2,  U3  sinks the minimum load current required to regulate the output voltages within ±10% regulation.

Table1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | VOUT OUTPUT             |
|------------------|--------------------------------------------------|-------------------------|
| J1               |                                                  |                         |
| 1-2              | Connected to V IN                                | Enabled                 |
| 2-3              | Connected to GND                                 | Disabled                |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15.5V |

*Default position.

│

## MAX17681A Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note:

Indicate that you are using the MAX17681A when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17681AEVKITE# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX17681A Evaluation Kit

## MAX17681A EV Kit Bill of Materials

| Mfctr PN-4          | TAIYO YUDEN EMK107B7105KA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mfctr PN-3          | TDK C1608X7R1C105K                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Mfctr PN-2          | KEMET C0603C105K4RAC Murata GRM155R71E473K KEMET GRM1555C1H471JA01 KEMET C0402C103K5RAC TAIYO YUDEN UMK316B7225K                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | PANASONIC ERJ-3GEYJ103V SUMIDA CEP1311F-13324- T 146                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Mfctr PN-1          | Murata GRM31CR71H475KA12 Murata GRM188R71C105KA12 Murata GRM155R71E333KA88 TDK C1005X7R1E473K Murata GCM1555C1H471JA16 Murata GRM31CR61E226K Murata GRM155R71H103KA88 CAPACITOR Panasonic EEEFK1H220P Murata GRM31CR71C475K Murata GRM31CR71H225KA88 AVX 1206SC102KAT DIODES INCORPORATED DFLS1200 DIODES INCORPORATED DFLS2100 SULLINS ELECTRONICS CORP PEC03SAAN VISHAY DALE CRCW04023M01FK VISHAY DALE CRCW0402261KFK VISHAY DALE CRCW040286K6FK VISHAY DALE CRCW040211K0FK VISHAY DALE CRCW04027K15FK PANASONIC ERJ-2GEJ104X VISHAY DALE CRCW040222R0FK PANASONIC ERJ-2RKF6043X VISHAY DALE CRCW0402115KFK VISHAY DALE CRCW0402294KFK VISHAY DALE CRCW040224K9FKEDHP PANASONIC ERJ-3GEYJ472V | VISHAY DALE CRCW060310K0JN WURTH ELECTRONICS INC 750342864 MAX17681AATB+ DIODES INCORPORATED TL431BW5                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Des Qty Description | 1 4.7µF±10%, 50V,X7R Ceramic capacitor (1206) 1 1µF±10% 16V X7R Ceramic capacitor (0603) C3 1 0.033µFnF±10%,25V, X7R ceramic capacitor (0402) C4 1 0.047µFnF±10%,25V, X7R ceramic capacitor (0402) C5 1 470pF±5%,50V,COG ceramic capacitor (0402) C6 1 22µF±10%,25V, X5R ceramic capacitor (1206) C7 1 0.01µF±10%, 50V, X7R ceramic capacitor (0402) C8 1 22µF, 20%, 50V, ALUMINUM ELECTROLYTIC 6.60*6.60mm, C9,C10 2 4.7µF±10%,16V, X7R ceramic capacitor (1206) C11,C12 2 2.2µF±10%,50V, X7R ceramic capacitor (1206) C13 1 1000pF±10%,1500V, X7R ceramic capacitor (1206) D1,D2 2 200V/1A, PowerDI®123 D3,D4 2 100V/2A, PowerDI®123 J1 1 3-pin headers R1 1 3.01M Ohm±1% resistor (0402)      | R2 1 261K Ohm±1% resistor (0402) R3 1 86.6K Ohm±1% resistor (0402) R4 1 11kΩ ±1% resistor (0402) R5 1 7.15kΩ ±1% resistor (0402) R6 1 100kΩ ±5% resistor (0402) R7 1 OPEN (0402) R8,R11 2 22Ω ±1% resistor (0402) R9 1 604kΩ ±1% resistor (0402) R10 1 115kΩ ±1% resistor (0402) R12 1 294kΩ ±1% resistor (0402) R13 1 24.9kΩ ±1% resistor (0402) R14,R15 2 4.7kΩ ±5% resistor (0603) R16,R17 2 10kΩ ±5% resistor (0603) T1 1 EP13, 10-pin SMT, 50µH,1:1 U1 1 MAX17681A TDFN10 3*2mm Iso buck DC-DC converter U2,U3 2 Shunt regulator SOT25 |
|                     | C1 C2 3 4 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| S NO                | 1 2 6 7 8 9 10 11 12 13 14 15 16 17 18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 19 20 21 22 23 24 25 26 27 28 29 30 31                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration

## MAX17681A Evaluation Kit

## MAX17681A EV Kit Schematic

<!-- image -->

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration

## MAX17681A Evaluation Kit

## MAX17681A EV Kit PCB Layout Diagrams

MAX17681A EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration

MAX17681A EV Kit-Top

<!-- image -->

MAX17681A EV Kit-Bottom

<!-- image -->

│

## MA;17  1A (valuation .it

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

## Evaluates: MAX17681A for Isolated 15V and 7.5V 2utput Configuration