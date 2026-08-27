<!-- lastmod 2022-08-02 -->
## MAX17681 Evaluation Kit

## Evaluates: MAX17681 for Isolated ±15V

## and ±7.5V Output Configuration

## General Description

The MAX17681E evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17681 high-efficiency, iso-buck, DC-DC converter. The EV kit operates over a wide inputvoltage range of 17V to 36V and uses primary-side feedback to regulate the output voltage. The EV kit output is programmed to ±15V, 75mA each and ±7.5V, 75mA each with ±10% regulation.

The EV kit comes installed with the MAX17681 in a 10-pin (3mm x 2mm) TDFN package.

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

Ordering Information appears at end of data sheet.

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

## MAX17681 Evaluation Kit

## Detailed Description

The MAX17681E EV kit is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17681  high-efficiency,  iso-buck,  DC-DC  converter designed to provide an isolated power up to 3.4W. The EV  kit  generates  either  ±15V  or  ±7.5V,  75mA  each output voltages, from a 17V to 36V input supply. The EV kit  features a forced-PWM control scheme that provides constant switching-frequency of 200kHz operation at all load and line conditions.

The EV Kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17681. The V PRI PCB  pad  helps  measure  the  regulated  primary  output voltage (V PRI ). An additional RESET PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESET pulls  low  if  FB  voltage  drops  below  92.5%  of its  set  value. RESET goes  high-impedance  1024  clock cycles  after  FB  voltage  rises  above  95.5%  of  its  set value. The programmable soft-start feature allows users to reduce the input inrush current.

## Evaluates: MAX17681 for Isolated ±15V and 7.5V 2utput Configuration

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

## MAX17681 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17681 for Isolated ±15V and 7.5V 2utput Configuration

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17681 Evaluation Kit

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note:

Indicate that you are using the MAX17681 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX17681E EV BOM
- MAX17681E EV PCB Layout
- MAX17681E EV Schematic

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17681EVKITE# | EVKIT  |

#Denotes RoHS compliant.

## Evaluates: MAX17681 for Isolated ±15V and 7.5V 2utput Configuration

│

## MA;17  1 (valuation .it

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5 /16           | Initial release | -               |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

## Evaluates: MAX17681 for Isolated ±15V and 7.5V 2utput Configuration

<!-- image -->

|   S NO | Designation   |   Qty | Description                                                  | Mfg Part #1                        | Mfg Part #2              | Mfg Part #3         | Mfg Part #4               |
|--------|---------------|-------|--------------------------------------------------------------|------------------------------------|--------------------------|---------------------|---------------------------|
|      1 | C1            |     1 | 4.7µF±10%, 50V,X7R Ceramic capacitor (1206)                  | Murata GRM31CR71H475KA12           |                          |                     |                           |
|      2 | C2            |     1 | 1µF±10% 16V X7R Ceramic capacitor (0603)                     | Murata GRM188R71C105KA12           | KEMET C0603C105K4RAC     | TDK C1608X7R1C105 K | TAIYO YUDEN EMK107B7105KA |
|      3 | C3            |     1 | 0.033µFnF±10%,25V, X7R ceramic capacitor (0402)              | Murata GRM155R71E333KA88           |                          |                     |                           |
|      4 | C4            |     1 | 0.047µFnF±10%,25V, X7R ceramic capacitor (0402)              | TDK C1005X7R1E473K                 | Murata GRM155R71E473K    |                     |                           |
|      5 | C5            |     1 | 470pF±5%,50V,COG ceramic capacitor (0402)                    | Murata GCM1555C1H471JA16           | KEMET GRM1555C1H471JA01  |                     |                           |
|      6 | C6            |     1 | 22µF±10%,25V, X5R ceramic capacitor (1206)                   | Murata GRM31CR61E226K              |                          |                     |                           |
|      7 | C7            |     1 | 0.01µF±10%, 50V, X7R ceramic capacitor (0402)                | Murata GRM155R71H103KA88           | KEMET C0402C103K5RAC     |                     |                           |
|      8 | C8            |     1 | 22µF, 20%, 50V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm, | Panasonic EEEFK1H220P              |                          |                     |                           |
|      9 | C9,C10        |     2 | 4.7µF±10%,16V, X7R ceramic capacitor (1206)                  | Murata GRM31CR71C475K              |                          |                     |                           |
|     10 | C11,C12       |     2 | 2.2µF±10%,50V, X7R ceramic capacitor (1206)                  | Murata GRM31CR71H225KA88           | TAIYO YUDEN UMK316B7225K |                     |                           |
|     11 | C13           |     1 | 1000pF±10%,1500V, X7R ceramic capacitor (1206)               | AVX 1206SC102KAT                   |                          |                     |                           |
|     12 | D1,D2         |     2 | 200V/1A, PowerDI®123                                         | DIODES INCORPORATED DFLS1200       |                          |                     |                           |
|     13 | D3,D4         |     2 | 100V/2A, PowerDI®123                                         | DIODES INCORPORATED DFLS2100       |                          |                     |                           |
|     14 | J1            |     1 | 3 - pin headers                                              | SULLINS ELECTRONICS CORP PEC03SAAN |                          |                     |                           |
|     15 | R1            |     1 | 3.01M Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW04023M01FK         |                          |                     |                           |
|     16 | R2            |     1 | 261K Ohm±1% resistor (0402)                                  | VISHAY DALE CRCW0402261KFK         |                          |                     |                           |
|     17 | R3            |     1 | 86.6K Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW040286K6FK         |                          |                     |                           |
|     18 | R4            |     1 | 11k Ω ±1% resistor (0402)                                    | VISHAY DALE CRCW040211K0FK         |                          |                     |                           |
|     19 | R5            |     1 | 7.15k Ω ±1% resistor (0402)                                  | VISHAY DALE CRCW04027K15FK         |                          |                     |                           |
|     20 | R6            |     1 | 100k Ω ±5% resistor (0402)                                   | PANASONIC ERJ - 2GEJ104X           |                          |                     |                           |

|   21 | R7      |   1 | OPEN (0402)                                              |                                 |                         |     |
|------|---------|-----|----------------------------------------------------------|---------------------------------|-------------------------|-----|
|   22 | R8,R11  |   2 | 22 Ω ±1% resistor (0402)                                 | VISHAY DALE CRCW040222R0FK      |                         |     |
|   23 |         |   1 | 604k Ω ±1% resistor (0402)                               | PANASONIC ERJ-2RKF6043X         |                         | R9  |
|   24 | R10     |   1 | 115k Ω ±1% resistor (0402)                               | VISHAY DALE CRCW0402115KFK      |                         |     |
|   25 | R12     |   1 | 294k Ω ±1% resistor (0402)                               | VISHAY DALE CRCW0402294KFK      |                         |     |
|   26 |         |   1 | 24.9k Ω ±1% resistor (0402)                              | VISHAY DALE CRCW040224K9FKEDHP  |                         | R13 |
|   27 | R14,R15 |   2 | 4.7k Ω ±5% resistor (0603)                               | PANASONIC ERJ-3GEYJ472V         |                         |     |
|   28 | R16,R17 |   2 | 10k Ω ±5% resistor (0603)                                | VISHAY DALE CRCW060310K0JN      | PANASONIC ERJ-3GEYJ103V |     |
|   29 |         |   1 | EP13,10-pin SMT, 50μ,(5-1):(6-7) :(7-8):(8-9):(9-10)=1:1 | WURTH ELECTRONICS INC 750342864 |                         | T1  |
|   30 |         |   1 | MAX17681 TDFN10 3*2mm Iso buck DC- DC converter          | MAX17681ATB+                    |                         | U1  |
|      | U2,U3   |   2 | Shunt regulator SOT25                                    | DIODES INCORPORATED TL431BW5    |                         | 31  |

<!-- image -->

## TOP SILKSCREEN

TOP

<!-- image -->

BOTTOM

<!-- image -->

<!-- image -->

PGND