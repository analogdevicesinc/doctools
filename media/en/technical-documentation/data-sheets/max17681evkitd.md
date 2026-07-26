<!-- lastmod 2022-08-02 -->
## MAX17681 Evaluation Kit

## General Description

The MAX17681EVKITD is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17681  high-efficiency,  iso-buck  DC-DC  converter. The EV kit operates over a wide input-voltage range of 17V to 36V and uses primary-side feedback to regulate the  output  voltage.  The  EV  kit  has  two  output  configura -tions. In the first configuration, the output is programmed to +7V at 200mA, with ±8% output voltage regulation. The second configuration uses a post regulator (MAX17651) to produce +5V at 100mA with at least ±3% regulation.

The EV kit comes installed with the MAX17681 in a 10-pin (3mm x 2mm) TDFN package and MAX17651 in a 6-lead TSOT package.

## Features

- 17V to 36V Input Voltage Range
- +7V, 200mA or +5V, 100mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 1.4W Output Power
- Overtemperature Protection
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## Evaluates: MAX17681 for Isolated

## +7V or +5V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V-60V DC, 0.5A power supply
- Two resistive loads of 200mA sink capacity
- Four digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  the  default  output  configuration programmed to +7V.

## Test Procedure for +7V Output

- 1) Verify that J1 is open.
- 2) Verify that the R7 and R14 are not installed.
- 3) Set the power supply output to 24V. Disable the power supply.
- 4) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 200mA resistive load across the +7V PCB pad and the GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +7V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify that output voltage is at +7V (with allowable tolerance of ±8%) with respect to GND0.
- 8) If required, vary the input voltage from 17V to 36V, and the load current from 0mA to 200mA and verify that output voltage is at +7V (with allowable tolerance of ±8%).

<!-- image -->

## MAX17681 Evaluation Kit

## Test Procedure for +5V Output

- 1) Verify that J1 is open.
- 2) Place 0Ω resistors in R7. Place a 681k pack-out resistor (comes with EV kit package) in R14.
- 3) Set the input power supply output to 24V. Disable the power supply.
- 4) Connect  the  positive  terminal  of  the  power  supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 100mA resistive load across the +5V PCB pad and the GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +5V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify  that  output  voltage  is  at  +5V  (with  allowable tolerance of ±3%) with respect to GND0.
- 8) If required,  vary  the  input  voltage  from  17V  to 36V,  and  the  load  current  from  0mA  to  100mA  and verify  that  output  voltage  is  at  +5V  (with  allowable tolerance of ±3%).

## Detailed Description

The MAX17681EVKITD evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of  the  MAX17681  high  efficiency,  iso-buck DC-DC converter designed to provide an isolated power up to 1.4W. The EV kit generates either +7V, 200mA or +5V, 100mA output from a 17V to 36V input supply. The EV kit features a forced PWM control scheme that provides constant switching-frequency of 200kHz operation at all load and line conditions.

## Evaluates: MAX17681 for Isolated +7V or +5V Output Configuration

available for monitoring the health of primary output voltage (V PRI ). RESET pulls  low  if  FB  voltage  drops  below 92.5% of its set value. RESET goes high impedance 1024 clock cycles after FB voltage rises above 95.5% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed procedure  for  setting  the  soft-start  time,  ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the  primary  output  voltage,  primary  inductance  selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in  the  MAX17681  IC  data  sheet.  The  post  regulator, MAX17651 output voltage setting and the related additional information are detailed in MAX17651 IC data sheet.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage-lockout  (UVLO)  threshold.  J1  configures the  EV  kit's  output  for  turn-on/turn-off  control.  Install  a shunt across J1 pins 2-3 to disable V OUT . See Table 1 for proper J1 configurations.

NOTE  1: The  secondary  output  diodes  D1  is  rated  to carry short-circuit current only for few 100's of ms and is not rated to carry the continuous short-circuit current.

The  EV  Kit  includes  an  EN/UVLO  PCB  pad  to  monitor and  program  the  EN/UVLO  pin  of  the  MAX17681.  The V PRI   PCB  pad  helps  measure  the  regulated  primary output  voltage  (V PRI ).  An  additional RESET PCB  pad  is NOTE  2: The  iso-buck  converter  typically  needs  10% minimum  load  to  regulate  the  output  voltage.  In  this design, when the +7V rail is healthy, U3 sinks the minimum load  current  required  to  regulate  the  output  voltages within ±8% regulation.

Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | VOUT                    |
|------------------|--------------------------------------------------|-------------------------|
| J1               |                                                  |                         |
| 1-2              | Connected to V IN                                | Always Enabled          |
| 2-3              | Connected to GND                                 | Always Disabled         |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15.5V |

*Default position.

│

## MAX17681 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17681 for Isolated +7V or +5V Output Configuration

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17681 Evaluation Kit

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17681 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX17681D EV BOM
- MAX17681D EV PCB Layout
- MAX17681D EV Schematic

## Evaluates: MAX17681 for Isolated +7V or +5V Output Configuration

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17681EVKITD# | EVKIT  |

#Denotes RoHS compliant.

## MAX17681 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------|-----------------|
|                 0 | 2/16            | Initial release                                   | -               |
|                 1 | 4/16            | Updated General Description and Bill of Materials | 1, 2            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17681 for Isolated

+7V or +5V Output Configuration

<!-- image -->

|   S NO | Designation   |   Qty | Description                                                  | Manufacturer Partnumber - 1        | Manufacturer Partnumber - 2   | Manufacturer Partnumber - 3   | Manufacturer Partnumber - 4   |
|--------|---------------|-------|--------------------------------------------------------------|------------------------------------|-------------------------------|-------------------------------|-------------------------------|
|      1 | C1            |     1 | 1µF±10%, 50V,X7R Ceramic capacitor (1206)                    | Murata GRM31CR71H105KA61           | KEMET C1206C105K5RAC          | Murata GRM31MR71H105KA88      |                               |
|      2 | C2            |     1 | 1µF±10% 16V X7R Ceramic capacitor (0603)                     | Murata GRM188R71C105KA12           | KEMET C0603C105K4RAC          | TDK C1608X7R1C105K            | TAIYO YUDEN EMK107B7105KA     |
|      3 | C3            |     1 | 0.033UFnF±10%,25V, X7R ceramic capacitor (0402)              | Murata GRM155R71E333KA88           |                               |                               |                               |
|      4 | C4            |     1 | 0.082UFnF±10%,16V, X7R ceramic capacitor (0402)              | Murata GRM155R71C823K              | KEMET C0402C823K4RAC          |                               |                               |
|      5 | C5            |     1 | 680pF±5%,50V,COG ceramic capacitor (0402)                    | Murata GRM1555C1H681JA01           | VENKEL LTD C0402C0G500 681JNP | -                             |                               |
|      6 | C6            |     1 | 10uF±10%,16V, X7R ceramic capacitor (1206)                   | Murata GRM31CR71C106KAC7           |                               |                               |                               |
|      7 | C7, C8        |     2 | 4.7uF±10%,50V, X7R ceramic capacitor (1206)                  | Murata GRM31CR71H475KA12           |                               |                               |                               |
|      8 | C9            |     1 | 2.2uF±10%,50V, X7R ceramic capacitor (1206)                  | Murata GRM31CR71H225KA88           | TAIYO YUDEN UMK316B7225K      |                               |                               |
|      9 | C10           |     1 | 0.1uF±10%, 25V, X7R ceramic capacitor(0402)                  | Murata GRM155R71E104KE14           |                               |                               |                               |
|     10 | C11           |     1 | 0.01uF±10%, 50V, X7R ceramic capacitor (0402)                | Murata GRM155R71H103KA88           | KEMET C0402C103K5RAC          |                               |                               |
|     11 | C12           |     1 | 22uF, 20%, 50V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm, | Panasonic EEEFK1H220P              |                               |                               |                               |
|     12 | C13           |     1 | 1000pF±10%, 1500V, X7R ceramic capacitor (1206)              | AVX 1206SC102KAT                   |                               |                               |                               |
|     13 | D1            |     1 | 100V/2A, PowerDI®123                                         | Diode Inc. DFLS2100                |                               |                               |                               |
|     14 | J1            |     1 | 3 - pin headers                                              | SULLINS ELECTRONICS CORP PEC03SAAN |                               |                               |                               |
|     15 | R1            |     1 | 3.01M Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW04023M01FK         |                               |                               |                               |
|     16 | R2            |     1 | 261K Ohm±1% resistor (0402)                                  | VISHAY DALE CRCW0402261KFK         |                               |                               |                               |
|     17 | R3            |     1 | 78.7K Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW040278K7FK         |                               |                               |                               |
|     18 | R4            |     1 | 10.5k Ω ±1% resistor (0402)                                  | PANASONIC ERJ - 2RKF1052           |                               |                               |                               |
|     19 | R5            |     1 | 4.025k Ω ±1% resistor (0402)                                 | VISHAY CRCW04024K02FK              | PANASONIC ERJ - 2RKF4021X     |                               |                               |
|     20 | R6            |     1 | 100k Ω ±5% resistor (0402)                                   | PANASONIC ERJ - 2GEJ104X           |                               |                               |                               |
|     21 | R7            |     1 | OPEN (0402)                                                  |                                    |                               |                               |                               |

<!-- image -->

|   22 |     |   1 | 115k Ω ±1% resistor (0402)                                  | VISHAY DALE CRCW0402115KFK       |                                  | R8   |
|------|-----|-----|-------------------------------------------------------------|----------------------------------|----------------------------------|------|
|   23 |     |   1 | 22k Ω ±1% resistor (0402)                                   | VISHAY DALE CRCW040222K0FK       |                                  | R9   |
|   24 | R10 |   1 | 22 Ω ±1% resistor (0402)                                    | VISHAY DALE CRCW040222R0FK       |                                  |      |
|   25 | R11 |   1 | 232k Ω ±1% resistor (0402)                                  | VISHAY DALE CRCW0402232KFK       |                                  |      |
|   26 |     |   1 | 432k Ω ±1% resistor (0402)                                  | VISHAY DALE CRCW0402432KFK       |                                  | R12  |
|   27 | R13 |   1 | 59k Ω ±1% resistor (0402)                                   | VISHAY DALE CRCW040259K0FK       | VENKEL LTD CR0402 - 16W - 5902FT |      |
|   28 |     |   1 | EP7, 8 - pin SMT, 50 μ H,1.2A,(4 - 1):(6 - 7):(5 - 8)=1:1:1 | WURTH ELECTRONICS INC. 750342878 |                                  | T1   |
|   29 |     |   1 | MAX17681 TDFN10 3*2mm Iso buck DC - DC converter            | MAX17681ATB+                     |                                  | U1   |
|   30 |     |   1 | MAX17651 TSOT LDO                                           | MAX17651AZT+                     |                                  | U2   |
|   31 |     |   1 | Shunt regulator SOT25                                       | Diode Inc. TL431BW5              |                                  | U3   |

<!-- image -->

## TOP SILKSCREEN

TOP

<!-- image -->

<!-- image -->

BOTTOM

<!-- image -->