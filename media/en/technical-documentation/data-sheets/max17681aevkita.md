<!-- lastmod 2022-08-02 -->
## MAX17681A Evaluation Kit

## General Description

The  MAX17681A  evaluation  kit  (EV  kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the performance of the MAX17681A high-efficiency, isobuck DC-DC converter. The EV kit operates over a wide input voltage range of 17V to 32V and uses primary-side feedback to regulate the output voltage. The EV kit has two  output  configurations.  In  the  first  configuration,  the output is programmed to ±15V at 100mA, with ±10% output voltage  regulation.  The  second  configuration  uses  a  post regulator  (MAX17651)  to  produce  ±12V  at  50mA  with less than ±3% regulation.

The  EV  kit  comes  installed  with  the  MAX17681A  in  a 10-pin (3mm x 2mm) TDFN package and MAX17651 in a 6-pin TSOT package.

## Features

- 17V to 32V Input Voltage Range
- ±15V, 100mA or ±12V, 50mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- 90% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers Up to 3W Output Power
- Overtemperature Protection
- Proven PCB layout
- Provides Robust Primary and Secondary Output Short-Circuit Protection

Ordering Information appears at end of data sheet.

## Evaluates: MAX17681A for Isolated ±15V or ±12V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V to 60V DC, 0.5A power supply
- Two loads of 50mA to 100mA sink capacity
- Four digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  default  output  configuration programmed to ±15V.

## Test Procedure for ±15V Output

- 1) Verify that jumper JU1 is open.
- 2) Verify that the R17-R19 are not installed.
- 3) Set the power-supply output to 24V. Disable the power supply.
- 4) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the first 100mA load to the +15V PCB pad and the negative terminal to the nearest GND0 PCB pad. Connect the positive terminal of the second 100mA load to the GND0 PCB pad and the negative terminal to the nearest -15V PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +15V PCB pad and the nearest GND0 PCB pad. Connect another DMM configured in voltmeter mode across the -15V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Enable the loads and verify that the output voltage is at ±15V with respect to GND.
- 8) If required, vary the input voltage from 17V to 32V, the load current from 0 to 100mA, and verify that the output voltage is ±15V.

<!-- image -->

## MAX17681A Evaluation Kit

## Test Procedure for ±12V Output

- 1) Verify that JU1 is open.
- 2) Remove R16 and R10. Place 0Ω resistors in R18 and R19. Place a 681kΩ pack-out resistor (comes with EV kit package) in R17.
- 3) Set the power-supply output to 24V. Disable the power supply.
- 4) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the first 50mA load to the +12V PCB pad and the negative terminal to the nearest GND0 PCB pad. Connect the positive terminal of the second 50mA load to the GND0 PCB pad and the negative terminal to the nearest -12V PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +12V PCB pad and the nearest GND0 PCB pad. Connect another DMM configured in voltmeter mode across the -12V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Enable the loads and verify that the output voltage is at ±12V with respect to GND.
- 8) If required, vary the input voltage from 17V to 32V, the load current from 0 to 50mA, and verify that the output voltage is ±12V.

## Evaluates: MAX17681A for Isolated ±15V or ±12V Output Configuration

## Detailed Description

The EV kit is a fully assembled and tested circuit board that  demonstrates  the  performance  of  the  MAX17681A high-efficiency,  iso-buck  DC-DC  converter  designed  to provide isolated power up to 3W. The EV kit generates either ±15V, 100mA or ±12V, 50mA output voltages from a 17V to 32V input supply. The EV kit features a forcedPWM control  scheme  that  provides  constant  switchingfrequency of 200kHz operation at all load and line conditions.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  to  enable control of the converter output. The VPRI PCB pad helps measure  the  regulated  nonisolated  buck  voltage.  An additional  RESET  PCB  pad  is  available  for  monitoring FB  regulated  voltage,  the  open-drain  logic  output.  The programmable  soft-start  feature  allows  users  to  reduce input inrush current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed procedure  for  setting  the  soft-start  time,  ENABLE/UVLO divider, primary output-voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode  selection,  and  external  loop  compensation  are given in the MAX17681 IC data sheet. The post-regulator MAX17651  output-voltage  setting  and  additional  related information are detailed in the MAX17651 IC data sheet.

## Enable Control (JU1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage-lockout  (UVLO)  threshold.  JU1  configures the EV kit's output for on/off control. Install a shunt across JU1 pins 2-3 to disable VOUT. See Table 1 for proper JU1 jumper configurations.

## Table 1. Enable Control (EN/UVLO) (JU1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | VOUT OUTPUT            |
|------------------|--------------------------------------------------|------------------------|
| 1-2              | Connected to VIN                                 | Enabled                |
| 2-3              | Connected to GND                                 | Disabled               |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at VIN ≥ 15.5V |

*Default position.

## MAX17681A Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17681A for Isolated ±15V or ±12V Output Configuration

<!-- image -->

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17681A when contacting these component suppliers.

## MAX17681A EV Kit Bill of Materials

|   S NO | Des.            |   Qty | Description                                                  | Mnftr PN-1                         | Mnftr PN-2                    | Mnftr PN-3                    | Mnftr PN-4                |
|--------|-----------------|-------|--------------------------------------------------------------|------------------------------------|-------------------------------|-------------------------------|---------------------------|
|      1 | C1              |     1 | 1µF±10%, 50V,X7R Ceramic capacitor (1206)                    | Murata GRM31CR71H105KA61           | KEMET C1206C105K5RAC          | Murata GRM31MR71H105KA88      |                           |
|      2 | C2              |     1 | 1µF±10% 16V X7R Ceramic capacitor (0603)                     | Murata GRM188R71C105KA12           | KEMET C0603C105K4RAC          | TDK C1608X7R1C105K            | TAIYO YUDEN EMK107B7105KA |
|      3 | C3,C4           |     2 | 33nF±10%,25V, X7R ceramic capacitor (0402)                   | Murata GRM155R71E333KA88           |                               |                               |                           |
|      4 | C5              |     1 | 680pF±5%,50V,X7R ceramic capacitor (0402)                    | Murata GRM1555C1H681JA01           | TDK C1005C0G1H681G050         | VENKEL LTD C0402C0G500-681JNP | Murata GRM1555C1H681GA01  |
|      5 | C6              |     1 | 10uF±10%,16V, X7R ceramic capacitor (1206)                   | Murata GRM31CR71C106KAC7           |                               |                               |                           |
|      6 | C7, C8, C9, C10 |     4 | 2.2uF±10%,50V, X7R ceramic capacitor (1206)                  | Murata GRM31CR71H225KA88           | TAIYO YUDEN UMK316B7225K      |                               |                           |
|      7 | C11             |     1 | 1000PF ±10%,1500V, X7R ceramic capacitor (1206)              | AVX 1206SC102KAT                   |                               |                               |                           |
|      8 | C12,C13         |     2 | 0.1uF±10%, 25V, C0G ceramic capacitor(0402)                  | Murata GRM155R71E104KE14           |                               |                               |                           |
|      9 | C14             |     1 | 0.01uF±10%, 50V, X7R ceramic capacitor (0402)                | Murata GRM155R71H103KA88           | KEMET C0402C103K5RAC          |                               |                           |
|     10 | C15             |     1 | 22uF, 20%, 50V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm, | Panasonic EEEFK1H220P              |                               |                               |                           |
|     11 | JU1             |     1 | 3-pin headers                                                | SULLINS ELECTRONICS CORP PEC03SAAN |                               |                               |                           |
|     12 | D1,D2           |     2 | 200V/1A, PowerDI®123                                         | Diode Inc. DFLS1200-7              |                               |                               |                           |
|     13 | R1              |     1 | 3.01M Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW04023M01FK         |                               |                               |                           |
|     14 | R2              |     1 | 261K Ohm±1% resistor (0402)                                  | VISHAY DALE CRCW0402261KFK         |                               |                               |                           |
|     15 | R3              |     1 | 90.9K Ohm±1% resistor (0402)                                 | PANASONIC ERJ-2RKF9092X            |                               |                               |                           |
|     16 | R4              |     1 | 10.5kΩ ±1% resistor (0402)                                   | PANASONIC ERJ-2RKF1052             |                               |                               |                           |
|     17 | R5              |     1 | 4.75kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW04024K75FK         |                               |                               |                           |
|     18 | R6              |     1 | 100kΩ ±5% resistor (0402)                                    | PANASONIC ERJ-2GEJ104X             |                               |                               |                           |
|     19 | R7,R9           |     2 | 22kΩ ±1% resistor (0402)                                     | VISHAY DALE CRCW040222K0FK         |                               |                               |                           |
|     20 | R8              |     1 | 82.5kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW040282K5FK         | BOURNS CR0402-FX-8252GLF      |                               |                           |
|     21 | R10             |     1 | 562Ω ±1% resistor (0402)                                     | PANASONIC ERJ-2RKF5620X            |                               |                               |                           |
|     22 | R11             |     1 | 931kΩ ±1% resistor (0402)                                    | VISHAY DALE CRCW0402931KFK         |                               |                               |                           |
|     23 | R12, R14        |     2 | 909kΩ ±1% resistor (0402)                                    | VISHAY DALE CRCW0402909KFK         |                               |                               |                           |
|     24 | R13, R15        |     2 | 47.5kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW04024752FK         | VISHAY DALE 9C04021A4752FLHF3 | VISHAY DALE CRCW040247K5FK    |                           |
|     25 | R16             |     1 | 0Ω ±5% resistor (0805)                                       | YAGEO PHYCOMP RC0805JR-070RL       |                               |                               |                           |
|     26 | R17             |     1 | 681kΩ ±1% resistor (0402)                                    | YAGEO PHYCOMP RC0805JR-070RL       |                               |                               |                           |
|     27 | R18, R19        |     2 | 0Ω ±1% resistor (0402)                                       | YAGEO PHYCOMP RC0402JR-070RL       | VENKEL LTD CR0402-16W- 000RJT |                               |                           |
|     28 | T1              |     1 | EP10, 8-pin SMT, 50µH,1.4A, (1-4):(5-6):(7-8) = 1:1.8:1.8    | WURTH ELECTRONICS INC. 750342557   | SUMIDA CEP1110-12387-T088     |                               |                           |
|     29 | U1              |     1 | MAX17681A TDFN 3*2mm Iso buck DC-DC converter                | MAX17681AATB+                      |                               |                               |                           |
|     30 | U2, U3          |     1 | MAX17651 TSOT LDO                                            | MAX17651AZT+                       |                               |                               |                           |
|     31 | U4              |     1 | Shunt regulator SOT25                                        | Diode Inc. TL431BW5                |                               |                               |                           |

## MAX17681A Evaluation Kit

## MAX17681A EV Kit PCB Layout Diagrams

<!-- image -->

Figure 1. MAX17681A EV Kit Component Placement GuideComponent Side

Figure 2. MAX17681V EV Kit PCB Layout-Component Side

<!-- image -->

Figure 3. MAX17681A EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17681A EV Kit Schematic

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17681AEVKITA# | EV Kit |

#Denotes RoHS compliant.

## MAX17681A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17681A for Isolated ±15V or ±12V Output Configuration