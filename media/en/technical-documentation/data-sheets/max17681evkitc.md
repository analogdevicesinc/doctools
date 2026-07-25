<!-- lastmod 2022-08-02 -->
## MAX17681 Evaluation Kit

## General Description

The MAX17681EVKITC is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17681  high-efficiency,  iso-buck  DC-DC  converter. The  EV  kit  operates  over  a  wide  input-voltage  range  of 17V to  36V  and  uses  primary-side  feedback  to  regulate the output voltage. The EV kit has two output configura -tions. In the first configuration, the output is programmed to +15V at 200mA, with ±8% output voltage regulation. The second configuration uses a post regulator (MAX17651) to produce +12V at 100mA with better than ±3% regulation.

The EV kit comes installed with the MAX17681 in a 10-pin (3mm x 2mm) TDFN package and MAX17651 in a 6-lead Thin-SOT (TSOT) package.

## Features

- 17V to 36V Input Voltage Range
- +15V, 200mA or +12V, 100mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- 89.5% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 3W Output Power
- Overtemperature Protection
- Proven PCB layout

Ordering Information appears at end of data sheet.

## Evaluates: MAX17681 for Isolated +15V or +12V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V-60V DC, 0.5A power supply
- Two resistive loads of  200mA sink capacity
- Four digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  the  default  output  configuration programmed to +15V.

## Test Procedure for +15V Output

- 1) Verify that the J1 is open
- 2) Verify that the R7 and R14 is not installed
- 3) Set the power supply output to 24V. Disable the power supply
- 4) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 200mA resistive load across the +15V PCB pad and the GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +15V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify that output voltage is at +15V (with allowable tolerance of ±8%) with respect to GND0.
- 8) If required, vary the input voltage from 17V to 36V, and the load current from 0mA to 200mA and verify that output voltage is at +15V (with allowable tolerance of ±8%).

<!-- image -->

## MAX17681 Evaluation Kit

## Test Procedure for +12V Output

- 1) Verify that the J1 is open
- 2) Place 0Ω resistors in R7, Place a 681k pack-out resistor (comes with EV kit package) in R14.
- 3) Set the input power supply output to 24V. Disable the power supply
- 4) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 100mA resistive load across the +12V PCB pad and the GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the +12V PCB pad and the nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify that output voltage is at +12V (with allowable tolerance of ±3%) with respect to GND0.
- 8) If required, vary the input voltage from 17V to 36V, and the load current from 0mA to 100mA and verify that output voltage is at +12V (with allowable tolerance of ±3%).

## Detailed Description

The MAX17681EVKITC evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17681  high-efficiency,  iso-buck DC-DC converter designed to provide an isolated power up to 3W. The EV kit generates either +15V, 200mA or +12V,  100mA  from  a  17V  to  36V  input  supply.  The  EV kit features a forced PWM control scheme that provides constant switching-frequency of 200kHz operation at all load and line conditions.

## Evaluates: MAX17681 for Isolated +15V or +12V Output Configuration

V PRI   PCB  pad  helps  measure  the  regulated  primary  output voltage (V PRI ). An additional RESET PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESET is  pulled  low if  FB voltage drops below 92.5% of its set value. RESET goes high 1024 clock cycles after FB voltage rises above 95.5% of its set value. The programmable soft-start  feature  allows  users  to  reduce  the  input  inrush current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in  MAX17651  IC  data  sheet.  The  MAX17651's  output voltage  setting,  and  related  additional  information,  are detailed in MAX17651 IC data sheet.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage-lockout  (UVLO)  threshold.  J1  configures the  EV  kit's  output  for  turn-on/turn-off  control.  Install  a shunt across J1 pins 2-3 to disable VOUT. See Table 1 for proper J1 configurations.

NOTE  1: The  secondary  output  diode  (D1)  is  rated  to carry the short-circuit current only for few 100's of ms and is not rated to carry the continuous short-circuit current.

The  EV  Kit  includes  an  EN/UVLO  PCB  pad  to  monitor and  program  the  EN/UVLO  pin  of  the  MAX17681.  The NOTE  2: The  iso-buck  converter  typically  needs  10% minimum  load  to  regulate  the  output  voltage.  In  this design, when the +15V rail is healthy, the U3 sinks the minimum  load  current  required  to  regulate  the  output voltages within ±8% regulation.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | VOUT                   |
|------------------|--------------------------------------------------|------------------------|
| J1               |                                                  |                        |
| 1-2              | Connected to V IN                                | Always Enabled         |
| 2-3              | Connected to GND                                 | Always Disabled        |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at VIN ≥ 15.5V |

*Default position.

## MAX17681 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17681 for Isolated +15V or +12V Output Configuration

<!-- image -->

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17681 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17681EVKITC# | EVKIT  |

#Denotes RoHS compliant.

## MAX17681 EV Kit Bill of Materials

|   S NO | Designation   |   Qty | Description                                                   | Manufacturer Partnumber-1          | Manufacturer Partnumber-2     | Manufacturer Partnumber-3   | Manufacturer Partnumber-4   |
|--------|---------------|-------|---------------------------------------------------------------|------------------------------------|-------------------------------|-----------------------------|-----------------------------|
|      1 | C1            |     1 | 1µF±10%, 50V,X7R Ceramic capacitor (1206)                     | Murata GRM31CR71H105KA61           | KEMET C1206C105K5RAC          | Murata GRM31MR71H105KA88    |                             |
|      2 | C2            |     1 | 1µF±10% 16V X7R Ceramic capacitor (0603)                      | Murata GRM188R71C105KA12           | KEMET C0603C105K4RAC          | TDK C1608X7R1C105K          | TAIYO YUDEN EMK107B7105KA   |
|      3 | C3,C4         |     2 | 0.033UFnF±10%,25V, X7R ceramic capacitor (0402)               | Murata GRM155R71E333KA88           |                               |                             |                             |
|      4 | C5            |     1 | 680pF±5%,50V,COG ceramic capacitor (0402)                     | Murata GRM1555C1H681JA01           | VENKEL LTD C0402C0G500-681JNP |                             |                             |
|      5 | C6            |     1 | 10uF±10%,16V, X7R ceramic capacitor (1206)                    | Murata GRM31CR71C106KAC7           |                               |                             |                             |
|      6 | C7, C8,C9     |     3 | 2.2uF±10%,50V, X7R ceramic capacitor (1206)                   | Murata GRM31CR71H225KA88           | TAIYO YUDEN UMK316B7225K      |                             |                             |
|      7 | C10           |     1 | 0.1uF±10%, 25V, X7R ceramic                                   | Murata GRM155R71E104KE14           |                               |                             |                             |
|      8 | C11           |     1 | capacitor(0402) 0.01uF±10%, 50V, X7R ceramic capacitor (0402) | Murata GRM155R71H103KA88           | KEMET C0402C103K5RAC          |                             |                             |
|      9 | C12           |     1 | 22uF, 20%, 50V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm,  | Panasonic EEEFK1H220P              |                               |                             |                             |
|     10 | C13           |     1 | 1000pF±10%, 1500V, X7R ceramic capacitor (1206)               | AVX 1206SC102KAT                   |                               |                             |                             |
|     11 | D1            |     1 | 200V/1A, PowerDI®123                                          | Diode Inc. DFLS1200                |                               |                             |                             |
|     12 | J1            |     1 | 3-pin headers                                                 | SULLINS ELECTRONICS CORP PEC03SAAN |                               |                             |                             |
|     13 | R1            |     1 | 3.01M Ohm±1% resistor (0402)                                  | VISHAY DALE CRCW04023M01FK         |                               |                             |                             |
|     14 | R2            |     1 | 261K Ohm±1% resistor (0402)                                   | VISHAY DALE CRCW0402261KFK         |                               |                             |                             |
|     15 | R3            |     1 | 90.9K Ohm±1% resistor (0402)                                  | PANASONIC ERJ-2RKF9092X            |                               |                             |                             |
|     16 | R4            |     1 | 10.5kΩ ±1% resistor (0402)                                    | PANASONIC ERJ-2RKF1052             |                               |                             |                             |
|     17 | R5            |     1 | 4.75kΩ ±1% resistor (0402)                                    | VISHAY DALE CRCW04024K75FK         |                               |                             |                             |
|     18 | R6            |     1 | 100kΩ ±5% resistor (0402)                                     | PANASONIC ERJ-2GEJ104X             |                               |                             |                             |
|     19 | R7            |     1 | OPEN (0402)                                                   |                                    |                               |                             |                             |
|     20 | R8            |     1 | 105kΩ ±1% resistor (0402)                                     | VISHAY DALE CRCW0402105KFK         |                               |                             |                             |
|     21 | R9            |     1 | 22kΩ ±1% resistor (0402)                                      | VISHAY DALE CRCW040222K0FK         |                               |                             |                             |
|     22 | R10           |     1 | 22Ω ±1% resistor (0402)                                       | VISHAY DALE CRCW040222R0FK         |                               |                             |                             |
|     23 | R11           |     1 | 562kΩ ±1% resistor (0402)                                     | VISHAY DALE CRCW0402562KFK         |                               |                             |                             |
|     24 | R12           |     1 | 909kΩ ±1% resistor (0402)                                     | VISHAY DALE CRCW0402909KFK         |                               |                             |                             |
|     25 | R13           |     1 | 47.5kΩ ±1% resistor (0402)                                    | VISHAY DALE CRCW04024752FK         | VISHAY DALE 9C04021A4752FLHF3 | VISHAY DALE CRCW040247K5FK  |                             |
|     26 | R14           |     1 | 0402                                                          | PACKOUT                            |                               |                             |                             |
|     27 | T1            |     1 | EP10,8-pinSMT,50μH,1.4A,(6-7):(5-8):(4- 1)=1.81:1.81:1        | WURTH ELECTRONICS INC. 750342859   |                               |                             |                             |
|     28 | U1            |     1 | MAX17681 TDFN10 3*2mm Iso buck DC- DC converter               | MAX17681ATB+                       |                               |                             |                             |
|     29 | U2            |     1 | MAX17651 TSOT LDO                                             | MAX17651AZT+                       |                               |                             |                             |
|     30 | U3            |     1 | Shunt regulator SOT25                                         | Diode Inc. TL431BW5                |                               |                             |                             |

## MAX17681 EV Kit System Schematic

<!-- image -->

## MAX17681 EV Kit System PCB Layout Diagrams

<!-- image -->

MAX17681 EV Kit-Top Silkscreen

MAX17681 EV Kit-Top Layer

<!-- image -->

MAX17681 EV Kit-Bottom Layer

<!-- image -->

## MAX17681 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/16            | Initial release                                                                                                                                     | -               |
|                 1 | 4/16            | Updated General Description, Test Procedure for+15V Ouput, Detailed Description, and Enable Control (J1) sections , Table 1 and Bill of Materials . | 1-2             |
|                 2 | 8/17            | Updated General Description and replaced TOC04                                                                                                      | 1, 3            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

## Evaluates: MAX17681 for Isolated +15V or +12V Output Configuration