<!-- lastmod 2022-08-04 -->
## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## General Description

The  MAX17640A/MAX17640B/MAX17640C  evaluation kits (EV kits) provide proven designs to evaluate the performance  of  the  MAX17640A/MAX17640B/MAX17640C high-voltage,  high-efficiency,  synchronous  step-down DC-DC converters. The MAX17640A converter operates over a 5V to 48V input range and can deliver up to 400mA at a fixed 3.3V output. The MAX17640B converter oper -ates over a 7V to 60V input range and can deliver up to 400mA at a fixed 5V output. The MAX17640C converter operates over a 15V to 60V input range and can deliver up to 400mA at an adjustable 12V output.

The  EV  kits  feature  an  adjustable  input  undervoltagelockout, open-drain RESET , overcurrent protection, selectable  mode  of  operation,  and  thermal  shutdown. Refer  to  the  MAX17640  converter  data  sheet  for  a complete  description  of  the  part  that  should  be  read  in conjunction  with  this  data  sheet  before  operating  these EV kits.

## Features

- Operates up to 60V Input Supply
- Fixed 5V, Fixed 3.3V, and Adjustable 12V Application Circuits
- Up to 400mA Load Current
- 500kHz Fixed Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Selectable PWM and PFM Modes of Operation
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32(EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluate: MAX17640

Converters in Application

## Quick Start

## Required Equipment

- One 60V, 400mA DC power supply
- Digital multimeters (DMM)
- Load resistors capable of sinking up to 400mA (8.25Ω for MAX17640A, 12.5Ω for MAX17640B, and 30Ω for MAX17640C)

## Equipment Setup and Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps to verify and test individual converter operation:

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Disable  the  power  supply  and  set  the  input  power supply at a valid input voltage.
- 2) Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent PGND pad of the converter under evaluation.
- 3) Connect  the  positive  terminal  of  the  400mA  (max) load to the VOUT pad and the negative terminal to the nearest PGND pad of the corresponding converter.
- 4) Connect  the  DMM  across  the  VOUT  pad  and  the nearest PGND pad.
- 5) Verify that the shunts are not installed across pins on jumper JU101 for MAX17640A, JU201 for MAX17640B and, JU301 for MAX17640C. See Table 1 for details.
- 6) Turn on the input power supply.
- 7) Verify  that  the  DMMs  display  the  expected  terminal voltages with respect to GND.

<!-- image -->

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## Detailed Description

The  MAX17640A/MAX17640B/MAX17640C  EV  kits  are designed  to  demonstrate  the  salient  features  of  the MAX17640A/MAX17640B/MAX17640C high-voltage, high-efficiency,  synchronous  step-down  DC-DC convert -ers. The EV kits consist of typical application circuits of three different converters. Each of these circuits is electri -cally  isolated  from  each  other  and  hosted  on  the  same PCB.  Each  of  these  converters  can  be  evaluated  for their performance under different operating conditions by powering them from their respective input pins.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The EV kits offer an adjustable input undervoltage-lockout level  feature  for  the  converters.  For  the  MAX17640A when jumper JU101 is left open, the converter is enabled when  the  input  voltage  rises  above  5V.  To  disable  the MAX17640A, install  a  shunt  across  pins  2-3  on  jumper JU101.  For  the  the  MAX17640B  when  jumper  JU201 is  left  open,  the  converter  is  enabled  when  the  input voltage  rises  above  7V.  To  disable  the  MAX17640B, install  a  shunt  across  pins  2-3  on  jumper  JU201.  For the  MAX17640C  when  jumper  JU301  is  left  open,  the converter is enabled when the input voltage rises above 15V. To disable the MAX17640C, install a shunt across pins  2-3  on  jumper  JU301.  See Table 1 for jumper settings. Refer to the Setting the Input Undervoltage-Lockout Level section  in  the  MAX17640  datasheet  for  more details.

If  the  EN/UVLO  pin  is  driven  from  an  external  signal source,  it  is  recommended  that  a  minimum  1kΩ  series resistance is placed is placed between the signal source output and the EN/UVLO pin to reduce voltage ringing on the line.

## MODE Selection

The  MAX17640A/MAX17640B/MAX17640C  converters support  PWM  and  PFM  modes  of  operation.  In  the  EV kits,  leave  the  jumpers  (JU102  for  MAX17640A,  JU202 for  MAX17640B  and  JU302  for  MAX17640C)  open  for operating the modules in PFM mode at light load. Install shunts across positions 1-2 to configure the modules in PWM mode. See Table 2 for jumper settings. Refer to the Mode Selection (MODE) section in the MAX17640 data sheet for more details.

## Evaluate: MAX17640 Converters in Application

## Adjusting Output Voltage

The MAX17640C supports a 0.9V to (0.89 x V IN )V adjustable output voltage. Output Voltage in the MAX17640C EV kit  is  preset to 12V. Output voltage can be programmed using  the  feedback-resistive  divider  (R304  and  R305) from VOUT and GND. For programming the output to a different voltage, refer to the Adjusting the Output Voltage section in the MAX17640 datasheet for more details.

## Input Capacitor Selection

The input capacitors C106 for the MAX17640A, C206 for the  MAX17640B, and C306 for the  MAX17640C, serve to reduce current peaks drawn from the input power sup -ply  and  reduce  switching  frequency  ripple  at  the  input. Refer  to  the Input  Capacitor section  in  the  MAX17640 datasheet to choose input capacitance. Input capacitor is chosen to be 1µF/100V for the MAX17640A/MAX17640B/ MAX17640C EV kits.

## Table 1. EN/UVLO Jumper Description (JU101, JU201, and JU301)

| SHUNT POSITION   | EN/UVLO PIN                                                                                                                                                                                         | OUTPUT                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R101 and R102 for 3.3V application circuit; R201 and R202 for 5V application circuit; R301 and R302 for 12V application circuit) | Programmed to startup at desired input-voltage level |
| 1-2              | Connected to VIN                                                                                                                                                                                    | Enabled                                              |
| 2-3              | Connected to GND                                                                                                                                                                                    | Disabled                                             |

* Default position

## Table 2. MODE Jumper Description (JU102, JU202, and JU302)

| SHUNT POSITION   | EN/UVLO PIN      | OUTPUT                |
|------------------|------------------|-----------------------|
| Not installed*   | Unconnected      | PFM mode of operation |
| 1-2              | Connected to GND | PWM mode of operation |

* Default position

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## Output Capacitor Selection

X7R  ceramic  capacitors  are  preferred  due  to  their stability over temperature  in industrial applications. The  required  output  capacitor  (C109,  C209)  for  the MAX17640A and MAX17640B is 22µF/6.3V. The required Output Capacitor (C309) for the MAX17640C is 22µF/16V. Refer to the Output Capacitor section in the MAX17640 datasheet for more details.

## Hot Plug-In and Long Input Cables

The  EV  kits provide optional electrolytic capacitors 22µF/100V  (C103  for  the  MAX17640A,  C203  for  the MAX17640B, and C303 for the MAX17640C) to dampen input  voltage  peaks  and  oscillations  that  may  arise  dur -ing  hot-plug-in  and/or  due  to  long  input  cables.  These capacitors limit the peak voltage at the input of the DC-DC converters when the EV kits are powered directly from a precharged  capacitive  source  or  an  industrial  backplane PCB. Long input cables, between the input power source and the EV kit circuit, can cause input-voltage oscillations

## Evaluate: MAX17640 Converters in Application

due to the inductance of the cables. The equivalent series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  the  EV  kit schematic  results  in  lower  conducted  emissions,  below CISPR32 Class B limits.  Manufacturer  part  numbers  of the  EMI  filter  components  are  listed  as  optional  BOM. The  EV  kits'  PCB  layout  are  also  designed  to  limit radiated  emissions  from  switching  nodes  of  the  power converter, resulting in radiated emissions below CISPR32 Class B limits. Further, capacitors placed near the input of the board help in attenuating high-frequency noise.

## MAX17640A/MAX17640B/MAX17640C EV Kits Performance Report

CONDITIONS: FIXED 3.3V OUTPUT, PWM MODE

<!-- image -->

CONDITIONS: ADJUSTABLE 12V OUTPUT, PWM MODE

<!-- image -->

<!-- image -->

CONDITIONS: FIXED 5V OUTPUT, PWM MODE

## MAX17640A/MAX17640B/MAX17640C EV Kits Performance Report (continued)

<!-- image -->

CONDITIONS: FIXED 3.3V OUTPUT, PFM MODE

MAX17640A OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

CONDITIONS: FIXED 3.3V OUTPUT, PWM MODE

MAX17640A OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX17640C OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

CONDITIONS: ADJUSTABLE 12V OUTPUT, PWM MODE

<!-- image -->

CONDITIONS: ADJUSTABLE 12V OUTPUT, PFM MODE

## MAX17640A/MAX17640B/MAX17640C EV Kits Performance Report (continued)

<!-- image -->

<!-- image -->

## MAX17640A/MAX17640B/MAX17640C EV Kits Performance Report (continued)

<!-- image -->

CONDITIONS: PWM MODE, FIXED 5V OUTPUT LOAD STEP BETWEEN 200mA to 400mA

<!-- image -->

CONDITIONS: PWM MODE, ADJUSTABLE 12V OUTPUT LOAD STEP BETWEEN 200mA to 400mA

CONDITIONS: FIXED 5V OUTPUT, 400mA LOAD, PWM MODE

<!-- image -->

CONDITIONS: PFM MODE, ADJUSTABLE 12V OUTPUT LOAD STEP BETWEEN 5mA to 200mA

<!-- image -->

MAX17640A STARTUP THROUGH ENABLE

<!-- image -->

CONDITIONS: FIXED 3.3V OUTPUT, 400mA LOAD, PWM MODE

MAX17640C STARTUP THROUGH ENABLE

<!-- image -->

CONDITIONS: ADJUSTBALE 12V OUTPUT, 400mA LOAD, PWM MODE

## MAX17640A/MAX17640B/MAX17640C EV Kits Performance Report (continued)

<!-- image -->

CONDITIONS: FIXED 3.3V OUTPUT, 400mA LOAD, PWM MODE

<!-- image -->

CONDITIONS: ADJUSTABLE 12V OUTPUT, 400mA LOAD, PWM MODE

MAX17640B RADIATED EMISSIONS PLOT

<!-- image -->

<!-- image -->

CONDITIONS: FIXED 5V OUTPUT, 400mA LOAD, PWM MODE

MAX17640B CONDUCTED EMISSIONS PLOT

<!-- image -->

CONDITIONS : V IN  = 24V, V

OUT

= 5V, I

OUT  = 0.4A

MEASURED ON THE MAX17640BEVKIT# WITH

L201 = 22µH, C202 = C204 = 1µF/100V/X7R/1206

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Murata Americas  | www.murata.com    |
| Panasonic Corp   | www.panasonic.com |
| Taiyo Yuden      | www.yuden.co.jp   |
| TDK              | www.tdk.com       |
| Vishay           | www.vishay.com    |
| Wurth Elektronik | www.we-online.com |

Note: Indicate that you are using the MAX17640 when contacting these component suppliers.

## MAX17640A EV Kit Bill of Materials

## MAX17640A 3.3V Application Circuit

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                     | MANUFACTURER PART NUMBER    |
|--------|-------|---------------|-------------------------------------------------|-----------------------------|
|      1 |     2 | C101, C107    | 0.1μF±10%, 100V, X7R Ceramic Capacitor (0603)   | TAIYO YUDEN HMK107B7104KA   |
|      2 |     1 | C103          | 22μF±20%, 100V, Aluminum Electrolytic capacitor | PANASONIC EEE-FK2A220P      |
|      3 |     1 | C105          | 220pF±5%, 100V, C0G Ceramic Capacitor (0603)    | TDK C1608C0G2A221J080AA     |
|      4 |     1 | C106          | 1μF±10%, 100V, X7R Ceramic Capacitor (1206)     | TAIYO YUDEN HMK316B7105KLH  |
|      5 |     1 | C108          | 1μF±10%, 16V, X7R Ceramic Capacitor (0603)      | TAIYO YUDEN EMK107B7105KA   |
|      6 |     1 | C109          | 22μF±10%, 6.3V, X7R Ceramic Capacitor (1206)    | MURATA GRM31CR70J226KE19    |
|      7 |     1 | C111          | 0.1μF±10%, 16V, X7R Ceramic Capacitor (0402)    | TAIYO YUDEN EMK105B7104KV-F |
|      8 |     1 | L102          | INDUCTOR, 47μH, 1A                              | WURTH 74404054470           |
|      9 |     1 | R101          | 1.1MΩ±1% resistor (0402)                        | VISHAY DALE CRCW04021M10FK  |
|     10 |     1 | R102          | 3.32MΩ±1% resistor (0402)                       | VISHAY DALE CRCW04023M32FK  |
|     11 |     1 | R103          | 10kΩ±1% resistor (0402)                         | VISHAY DALE CRCW040210K0FK  |
|     12 |     1 | U1            | MAX17640A, Integrated Step-down Converter       | MAXIM MAX17640AATA+         |
|     13 |     1 | L101          | Package Outline 2mmx1.9mm inductor              |                             |
|     14 |     2 | C102, C104    | Package Outline 1206 capacitor                  |                             |
|     15 |     1 | C110          | Package Outline 0805 capacitor                  |                             |

Evaluate: MAX17640

Converters in Application

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17640AEVKIT#   | EV Kit |
| MAX17640BEVKIT#   | EV Kit |
| MAX17640C12EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## MAX17640B EV Kit Bill of Materials

## MAX17640B 5V Application Circuit

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                           | MANUFACTURER PART NUMBER    |
|--------|-------|---------------|-------------------------------------------------------|-----------------------------|
|      1 |     2 | C201, C207    | 0.1μF±10%, 100V, X7R Ceramic Capacitor (0603)         | TAIYO YUDEN HMK107B7104KA   |
|      2 |     1 | C203          | 22μF±20%, 100V, Aluminum Electrolytic capacitor       | PANASONIC EEE-FK2A220P      |
|      3 |     1 | C205          | 220pF±5%, 100V, C0G Ceramic Capacitor (0603)          | TDK C1608C0G2A221J080AA     |
|      4 |     1 | C206          | 1μF±10%, 100V, X7R Ceramic Capacitor (1206)           | TAIYO YUDEN HMK316B7105KLH  |
|      5 |     1 | C208          | 1μF±10%, 16V, X7R Ceramic Capacitor (0603)            | TAIYO YUDEN EMK107B7105KA   |
|      6 |     1 | C209          | 22μF±10%, 6.3V, X7R Ceramic Capacitor (1206)          | MURATA GRM31CR70J226KE19    |
|      7 |     1 | C211          | 0.1μF±10%, 16V, X7R Ceramic Capacitor (0402)          | TAIYO YUDEN EMK105B7104KV-F |
|      8 |     1 | L202          | INDUCTOR, 68μH, 0.8A                                  | WURTH 74404054680           |
|      9 |     1 | R201          | 715kΩ±1% resistor (0402)                              | VISHAY DALE CRCW0402715KFK  |
|     10 |     1 | R202          | 3.32MΩ±1% resistor (0402)                             | VISHAY DALE CRCW04023M32FK  |
|     11 |     1 | R203          | 10kΩ±1% resistor (0402)                               | VISHAY DALE CRCW040210K0FK  |
|     12 |     1 | U1            | MAX17640B, Integrated Step-down Converter             | MAXIM MAX17640BATA+         |
|     13 |     1 | L201          | OPTIONAL: 22µH±20%, 390mA Shielded Wirewound Inductor | COILCRAFT XPL2010-223ML     |
|     14 |     2 | C202, C204    | OPTIONAL: 1μF±10%, 100V, X7R Ceramic Capacitor (1206) | TAIYO YUDEN HMK316B7105KLH  |
|     15 |     1 | C210          | Package Outline 0805 capacitor                        |                             |

Evaluate: MAX17640

Converters in Application

## MAX17640C EV Kit Bill of Materials

## MAX17640C 12V Application Circuit

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                     | MANUFACTURER PART NUMBER    |
|--------|-------|---------------|-------------------------------------------------|-----------------------------|
|      1 |     2 | C301, C307    | 0.1μF±10%, 100V, X7R Ceramic Capacitor (0603)   | TAIYO YUDEN HMK107B7104KA   |
|      2 |     1 | C303          | 22μF±20%, 100V, Aluminum Electrolytic capacitor | PANASONIC EEE-FK2A220P      |
|      3 |     1 | C305          | 220pF±5%, 100V, C0G Ceramic Capacitor (0603)    | TDK C1608C0G2A221J080AA     |
|      4 |     1 | C306          | 1μF±10%, 100V, X7R Ceramic Capacitor (1206)     | TAIYO YUDEN HMK316B7105KLH  |
|      5 |     1 | C308          | 1μF±10%, 16V, X7R Ceramic Capacitor (0603)      | TAIYO YUDEN EMK107B7105KA   |
|      6 |     1 | C309          | 22μF±10%, 16V, X7R Ceramic Capacitor (1210)     | MURATA GRM32ER71C226KEA8    |
|      7 |     1 | C311          | 0.1μF±10%, 16V, X7R Ceramic Capacitor (0402)    | TAIYO YUDEN EMK105B7104KV-F |
|      8 |     1 | L302          | INDUCTOR, 150μH, 0.6A                           | WURTH 74404054151           |
|      9 |     1 | R301          | 301kΩ±1% resistor (0402)                        | VISHAY DALE CRCW0402301KFK  |
|     10 |     1 | R302          | 3.32MΩ±1% resistor (0402)                       | VISHAY DALE CRCW04023M32FK  |
|     11 |     1 | R303          | 10kΩ±1% resistor (0402)                         | VISHAY DALE CRCW040210K0FK  |
|     12 |     1 | R304          | 499kΩ±1% resistor (0402)                        | VISHAY DALE CRCW0402499KFK  |
|     13 |     1 | R305          | 40.2kΩ±1% resistor (0402)                       | VISHAY DALE CRCW040240K2FK  |
|     14 |     1 | U1            | MAX17640C, Integrated Step-down Converter       | MAXIM MAX17640CATA+         |
|     15 |     1 | L301          | Package Outline 2mmx1.9mm inductor              |                             |
|     16 |     2 | C302, C304    | Package Outline 1206 Capacitor                  |                             |
|     17 |     1 | C310          | Package Outline 0805 Capacitor                  |                             |

Evaluate: MAX17640

Converters in Application

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## MAX17640A EV Kit Schematic Diagram

<!-- image -->

## Evaluate: MAX17640 Converters in Application

## MAX17640B EV Kit Schematic Diagram

<!-- image -->

## Evaluate: MAX17640 Converters in Application

## MAX17640C EV Kit Schematic Diagram

<!-- image -->

Evaluate: MAX17640

## MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagrams

<!-- image -->

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Top Silkscreen

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Top Layer

<!-- image -->

Evaluate: MAX17640

## MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagrams (continued)

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Layer 2

<!-- image -->

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Layer 3

<!-- image -->

Evaluate: MAX17640

## MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagrams (continued)

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Bottom Layer

<!-- image -->

MAX17640A/MAX17640B/MAX17640C EV Kits PCB Layout Diagram-Bottom Silkscreen

<!-- image -->

## MAX17640A/MAX17640B/ MAX17640C Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------|-----------------|
|                 0 | 1/21            | Release for Market Intro             | -               |
|                 1 | 3/21            | Updated Part numbers in EV kit title | 1-17            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX17640

Converters in Application