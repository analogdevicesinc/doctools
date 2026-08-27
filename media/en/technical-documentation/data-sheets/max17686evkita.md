<!-- lastmod 2022-08-02 -->
## MAX17686 Evaluation Kit

## General Description

The MAX17686EVKITA# is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17686  high-efficiency,  iso-buck  DC-DC  Converter. The EV kit operates over a wide input-voltage range of 17V to 60V and uses primary-side feedback to regulate the  output  voltage.  The  EV  kit  output  is  programmed  to +24V at 100mA, with ±8% output voltage regulation.

The EV kit comes installed with the MAX17686 in a 10-pin (3mm x 2mm) TDFN package.

## Features

- 17V to 60V Input Voltage Range
- +24V, 100mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 2.4W Output Power
- Overtemperature Protection
- Proven PCB Layout
- Provides robust primary and secondary output short-circuit protection
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## Evaluates: MAX17686 for Isolated +24V Output Configuration

## Quick Start

## Recommended Equipment

- One 15V-60V DC, 0.5A power supply
- One resistive load 100mA sink capacity
- Two digital multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Test Procedure

The  EV  kit  comes  with  the  default  output  configuration programmed to +24V.

- 1) Verify that J1 is open.
- 2) Set  the  power  supply  output  to  24V.  Disable  the power supply.
- 3) Connect  the  positive  terminal  of  the  power  supply to the V IN   PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 100mA resistive load across the +24V PCB pad and the GND0 PCB pad.
- 4) Connect a DMM configured in voltmeter mode across the +24V PCB pad and the nearest GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the VPRI PCB pad and the nearest PGND PCB pad.
- 6) Enable the input power supply.
- 7) Verify that primary voltage is at +10.3V with respect to PGND.
- 8) Verify that output voltage is at +24V (with allowable tolerance of ±8%) with respect to GND0.
- 9) If  required,  vary  the  input  voltage  from  17V  to  60V, and the load current from 0mA to 100mA and verify that output  voltage  is  at  +24V  (with  allowable  tolerance of ±8%).

<!-- image -->

## MAX17686 Evaluation Kit

## Detailed Description

The  MAX17686EVKITA  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance of  the  MAX17686  high  efficiency,  iso-buck DC-DC converter designed to provide an isolated power up to 2.4W. The EV kit generates +24V, 100mA from a 17V  to  60V  input  supply.  The  EV  kit  features  a  forced PWM control  scheme  that  provides  constant  switchingfrequency of 200kHz operation at all load and line conditions.

The EV kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17686. The V PRI PCB  pad  helps  measure  the  regulated  primary  output voltage (V PRI ). An additional RESET PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESET is pulled low if FB voltage drops below 92.5% of its  set  value. RESET goes  high  impedance  1024  clock cycles  after  FB  voltage  rises  above  95.5%  of  its  set value. The programmable soft-start feature allows users to reduce the input inrush current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power  level  without  using  an  optocoupler.  The  detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17686 IC data sheet.

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter and limits the noise injected back into the input power source.

## Evaluates: MAX17686 for Isolated +24V Output Configuration

## Hot-Plug-In and Long Input Cables

The  MAX17686  EV  kit  PCB  provides  an  electrolytic capacitor  (C2,  22µF/100V)  to  dampen  input  voltage peaks  and  oscillations  that  can  arise  during  hot-plug-in and/or due to long input cables. This capacitor limits the peak voltage at the input of the MAX17686 IC, when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables between  input  power  source  and  the  EV  kit  circuit  can cause  input-voltage  oscillations  due  to  the  inductance of  the  cables.  The  equivalent  series  resistance  (ESR) of  the  electrolytic  capacitor  helps  damp  out  the  oscillations caused by long input cables. Further, capacitor C1 (0.1µF/100V), placed near the input of the board, helps in attenuating high frequency noise.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage-lockout  (UVLO)  threshold.  J1  configures the  EV  kit  output  for  turn-on/turn-off  control.  Install  a shunt across J1 pins 2-3 to disable V OUT. See Table 1 for proper J1 configurations.

NOTE  1: The  secondary  output  diodes  D1  is  rated  to carry short-circuit current only for few 100's of ms and is not rated to carry the continuous short-circuit current.

NOTE 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the +24V rail is healthy, the U2 sinks the minimum load current required to regulate the output voltages within ±8% regulation.

Use of EMI filter components as shown in Figure 1 results in  lower  conducted  emissions,  below  CISPR22 Class B limits. The MAX17686 EV kit PCB layout is also designed to  limit  radiated  emissions  from  the  switching  nodes  of the power converter resulting in radiated emissions below CISPR22 Class B limits.

Figure 1. EMI Filter Components

<!-- image -->

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT                 |
|------------------|--------------------------------------------------|-----------------------|
| J1               |                                                  |                       |
| 1-2              | Connected to V IN                                | Always Enabled        |
| 2-3              | Connected to GND                                 | Always Disabled       |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 16V |

*Default position.

│

## MAX17686 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17686 for Isolated +24V Output Configuration

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17686 Evaluation Kit

## Component Suppliers

| SUPPLIER               | WEBSITE               |
|------------------------|-----------------------|
| Murata Americas        | www.murata.com        |
| Panasonic Corp.        | www.panasonic.com     |
| TDK Corp.              | www.component.tdk.com |
| ON Semiconductor       | www.onsemi.com        |
| Vishay Intertechnology | www.vishay.com        |
| Yageo                  | www.yageo.com         |
| Wurth Electronics      | www.we-online.com     |

Note: Indicate that you are using the MAX17686 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17686EVKITA# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX17686 EV Kit Bill of Materials

|   SL. NO | DESIGNATION   |   QTY | DESCRIPTION                                      | MANUFACTURER PN-1                 | MANUFACTURER PN-2             |
|----------|---------------|-------|--------------------------------------------------|-----------------------------------|-------------------------------|
|        1 | C1, C13       |     2 | 0.1µF±10%, 100V,X7R ceramic capacitor (0603)     | Murata GCJ188R72A104KA01          |                               |
|        2 | C2            |     1 | 22µF±20%; 100V; Aluminium Electrolytic Capacitor | Panasonic EEE-TG2A220P            |                               |
|        3 | C3            |     1 | 4.7µF±10%, 100V,X7R ceramic capacitor (1206)     | Murata GRM31CZ72A475KE11          |                               |
|        4 | C4            |     1 | 0.1µF±10%, 100V,X7R ceramic capacitor (0805)     | Murata GCM21BR72A104KA37          | TDK CGA4J2X7R2A104K125AA      |
|        5 | C5            |     1 | 1µF±10%, 25V,X7R ceramic capacitor (0603)        | Murata GCM188R71E105KA64          |                               |
|        6 | C6            |     1 | 0.033µF±10%, 25V,X7R ceramic capacitor (0402)    | Murata GCM155R71E333KA55          |                               |
|        7 | C7            |     1 | 470pF±5%, 50V,C0G ceramic capacitor (0603)       | Murata GCM1555C1H471JA16          |                               |
|        8 | C8            |     1 | 0.047µF±10%, 25V,X7R ceramic capacitor (0402)    | Murata GCM155R71E473KA55          | TDK C1005X7R1E473K050BC       |
|        9 | C9            |     1 | 1000pF±10%, 1000V,X7R ceramic capacitor (1210)   | Vishay Vitramon VJ1210Y102KXGAT5Z |                               |
|       10 | C10           |     1 | 22µF±10%, 25V,X7R ceramic capacitor (1210)       | Murata GRM32ER71E226KE15          |                               |
|       11 | C12           |     1 | 4.7µF±10%, 50V,X7R ceramic capacitor (0805)      | Murata GRM21BZ71H475KE15          |                               |
|       12 | D1            |     1 | 300V /1A DIODE, SMA (DO-214AC)                   | ON Semiconductor ES1F             | ON SEMICONDUCTOR              |
|       13 | R1            |     1 | 2.2MΩ±1% resistor (0603)                         | Vishay Dale CRCW06032M20FK        |                               |
|       14 | R2            |     1 | 182KΩ±1% resistor (0603)                         | Vishay Dale CRCW0603182KFK        |                               |
|       15 | R3            |     1 | 100KΩ±1% resistor (0402)                         | Panasonic ERJ-2GEJ104             |                               |
|       16 | R4            |     1 | 4.75KΩ±1% resistor (0603)                        | Vishay Dale CRCW06034K75FK        | Panasonic ERJ-3EKF4751        |
|       17 | R5            |     1 | 110KΩ±1% resistor (0603)                         | Vishay Dale CRCW0603110KFK        |                               |
|       18 | R6            |     1 | 10.5KΩ±1% resistor (0603)                        | Vishay Dale CRCW060310K5FK        |                               |
|       19 | R8            |     1 | 22Ω±1% resistor (0402)                           | Vishay Dale CRCW040222R0FK        |                               |
|       20 | R9            |     1 | 90.9KΩ±1% resistor (0402)                        | Panasonic ERJ-2RKF9092            |                               |
|       21 | R10           |     1 | 10KΩ±1% resistor (0402)                          | Vishay Dale CRCW040210K0FK        | Yageo Phicomp RC0402FR-0710KL |
|       22 | T1            |     1 | EP10, 8-pin SMT, 80µH, 1.2A, 2.4:1               | Wurth Electronics inc. 750342860  |                               |
|       23 | U1            |     1 | MAX17686 TDFN10 3x2mm Iso buck DC-DC converter   | Maxim Integrated MAX17686ATB+     |                               |
|       24 | U2            |     1 | Shunt regulator SOT25                            | Diodes Inc TL431BW5               |                               |
|       25 | R7            |     0 | OPEN(1210)                                       |                                   |                               |
|       26 | C11           |     0 | OPEN(0805)                                       |                                   |                               |

## MAX17686 Evaluation Kit

## MAX17686 EV Kit Schematic

<!-- image -->

## MAX17686 Evaluation Kit

## MAX17686 EV Kit PCB Layout Diagrams

MAX17686EVKITA# - Top Silkscreen

<!-- image -->

MAX17686EVKITA# - Top

<!-- image -->

## Evaluates: MAX17686 for Isolated +24V Output Configuration

MAX17686EVKITA# - L2 GND

<!-- image -->

MAX17686EVKITA# - L3 GND

<!-- image -->

│

## MAX17686 EV Kit PCB Layout Diagrams (continued)

MAX17686EVKITA# - Bottom

<!-- image -->

MAX17686EVKITA# - Silk Bottom

<!-- image -->

│

## MAX17686 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17686 for Isolated

+24V Output Configuration