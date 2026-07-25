<!-- lastmod 2022-08-02 -->
## MAX17687 Evaluation .it

## Evaluates: MAX17687 for Isolated +12V Output Configuration

## General Description

The MAX17687EVKITA# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17687  high-efficiency,  iso-buck DC-DC Converter. The EV kit operates over a wide inputvoltage range of 16V to 60V and uses primary-side feedback to regulate the output voltage. The EV kit has isolated output, programmed to +12V at 750mA, with  10% output voltage regulation.

The EV kit comes installed with the MAX17687 in a 20-pin (4mm x 4mm) TQFN package.

## Features

- 16V to 60V Input Voltage Range
- +12V, 750mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 10W Output Power
- Overtemperature Protection
- Proven PCB layout
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- One 15V - 60V DC, 1A Power Supply
- One resistive load 750mA sink capacity
- Two Digital Multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  the  default  secondary  output programmed to +12V.

- 1) Verify that JU2 is open
- 2) Set  the  power  supply  output  to  24V.  Disable  the power supply
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 750mA resistive  load  across  the  VOUT  PCB  pad  and  the GND0 PCB pad.
- 4) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 5) Connect a DMM configured in voltmeter mode across the VPRI PCB pad and the nearest PGND PCB pad.
- 6) Enable the input power supply.
- 7) Verify that the primary voltage is at +8V with respect to PGND.
- 8) Verify that output voltage is at +12V (with allowable tolerance of  10%) with respect to GND0.
- 9) If  required,  vary  the  input  voltage  from  16V  to  60V, and the load current from 0mA to 750mA and verify that output voltage is at +12V (with allowable tolerance of  10%).

<!-- image -->

## MAX17687 Evaluation Kit

## Detailed Description

The MAX17687EVKITA# evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the  performance of the MAX17687 high-efficiency, isobuck, DC-DC converter designed to provide an isolated power up to 10W. The EV kit generates +12V, 750mA voltages  from  a  16V  to  60V  input  supply.  The  EV  kit features  a  forced-PWM  control  scheme  that  provides constant switching-frequency of 200 kHz operation at all load and line conditions.

The  EV  Kit  includes  an  EN/UVLO  PCB  pad  to  monitor and  program  the  EN/UVLO  pin  of  the  MAX17687.  The VPRI  PCB  pad  helps  measure  the  regulated  primary output  voltage  (V PRI ).  An  additional RESET PCB  pad is  available  for  monitoring  the  health  of  primary  output voltage  (V PRI ). RESET pulls  low  if  FB  voltage  drops below  92%(typ)  of  its  set  value  and RESET goes  high impedance  1024  clock  cycles  after  FB  voltage  rises above 95% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power level without using an opto-coupler. The detailed procedure for setting the soft-start time, EN/UVLO divider, primary  output  voltage  (V PRI )  selection,  adjusting  the primary  output  voltage,  primary  inductance  selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17687 IC data sheet.

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

## Evaluates: MAX17687 for Isolated +12V Output Configuration

Use of EMI filter components as shown in Figure 1 results in  lower  conducted  emissions,  below  CISPR22 Class B limits. The MAX17687 EV kit PCB layout is also designed to  limit  radiated  emissions  from  switching  nodes  of  the power  converter,  resulting  in  radiated  emissions  below CISPR22 Class B limits.

## Hot-Plug-In and Long Input Cables

The  MAX17687  EV  kit  PCB  provides  an  electrolytic capacitor  (C8,  47µF/100V)  to  dampen  input  voltage peaks  and  oscillations  that  can  arise  during  hot-plug-in and/or due to long input cables. This capacitor limits the peak voltage at the input of the MAX17687 IC, when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between  input  power  source  and  the  EV  kit  circuit  can cause  input-voltage  oscillations  due  to  the  inductance of  the  cables.  The  equivalent  series  resistance  (ESR) of  the  electrolytic  capacitor  helps  damp  out  the  oscillations caused by long input cables. Further, capacitor C9 (0.1µF/100V), placed near the input of the board, helps in attenuating high frequency noise.

## Enable Control (JU2)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage  lockout  (UVLO)  threshold.  Jumper  JU2 configures the EV kit's output for turn-on/turn-off control. Install  a  shunt  across  jumper  JU2  pins  2-3  to  disable VOUT. See Table 1 for proper JU2 jumper configurations.

Figure 1. Conducted Emissions Filter

<!-- image -->

## Table 1. Enable Control (EN/UVLO) (JU2) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT OUTPUT          |
|------------------|--------------------------------------------------|-----------------------|
| JU2              |                                                  |                       |
| 1-2              | Connected to V IN                                | Always Enabled        |
| 2-3              | Connected to GND                                 | Always Disabled       |
| Open*            | Connected to midpoint of R2, R3 resistor-divider | Enabled at V IN ≥ 15V |

* Default position.

Note 1: The secondary output diodes D1 is rated to carry short-circuit current only for few hundredths of a millisecond and is not rated to carry the continuous short-circuit current.

Note 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the +12V rail is healthy, D2 sinks the minimum load current required to regulate the output voltages within ±10% regulation.

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17687 for Isolated +12V Output Configuration

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER               | WEBSITE                |
|------------------------|------------------------|
| Murata Americas        | www.murataamericas.com |
| Panasonic Corp.        | www.panasonic.com      |
| TDK Corp               | www.component.tdk.com  |
| KEMET Corp.            | www.kemet.com          |
| ON Semiconductor       | www.onsemi.com         |
| Taiwan Semiconductor   | www.taiwansemi.com     |
| Vishay Intertechnology | www.vishay.com         |
| Wurth Electronik       | www.we-online.com      |

Note: Indicate that you are using the MAX17687 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17687EVKITA# | EVKIT  |

# Denotes RoHS compliant.

## MAX17687EVKITA# EV Kit Bill of Materials

| Sl. No DESIGNATION             | QTY                                                 | DESCRIPTION MFG PART #1             | MFG PART #2                   |
|--------------------------------|-----------------------------------------------------|-------------------------------------|-------------------------------|
| 1 C1                           | 1 2.2UF±10%; 10V, X7R Ceramic Capacitor (0603)      | Murata GRM188R71A225KE15            | TDK C1608X7R1A225K080AC       |
| 2 C2                           | 1 2200PF±10%; 50V, X7R Ceramic Capacitor (0402)     | Murata GCM155R71H222KA37            | TDK C1005X7R1H222K050BA       |
| 3 C3                           | 1 0.033UF±10%; 25V, X7R Ceramic Capacitor (0402)    | Murata GCM155R71E333KA55            |                               |
| 4 C4                           | 1 0.015UF±10%; 25V, X7R Ceramic Capacitor (0402)    | Murata GCM155R71E153KA55            |                               |
| 5 C5, C9, C16                  | 3 0.1UF±10%; 100V, X7R Ceramic Capacitor (0603)     | Murata GCJ188R72A104KA01            |                               |
| 6 C6                           | 1 4.7UF±10%; 100V, X7R Ceramic Capacitor (1206)     | Murata GRM31CZ72A475KE11            |                               |
| 7 C7                           | 1 0.1UF±10%; 16V, X7R Ceramic Capacitor (0402)      | Murata GCM155R71C104KA55            |                               |
| 8 C8                           | 1 47UF±20%; 100V, Aluminium electrolytic capacitor  | Panasonic EEV-TG2A470Q              |                               |
| 9 C10, C11, C13, C14, C17- C19 | 7 22UF±10%; 25V, X7R Ceramic Capacitor (1210)       | Murata GRM32ER71E226KE15            |                               |
| 10 C12                         | 1 1000PF±10%; 4000V, X7R Ceramic Capacitor (2220)   | Vishay Vitramon HV2220Y102KXVATHV   |                               |
| 11 C15                         | 1 120PF±5%; 200V, C0G Ceramic Capacitor (0805)      | Kemet C0805C121J2GAC                |                               |
| 12 D1                          | 1 Diode 200V / 3A, SMA                              | Taiwan Semicondoctor SK320A R3G     |                               |
| 13 D2                          | 1 Zener Diode, 12V, SMA                             | On Semiconductor 1SMA5927BT3G       |                               |
| 15 JU1, JU2                    | 2 3 Pin Connector Male                              | Sullins PEC03SAAN                   |                               |
| 16 MECH1-MECH4                 | 4 STANDOFF; FEMALE-THREADED; HEX; M2.5; 12MM; BRASS | Keysone 24384                       |                               |
| 17 R1                          | 1 105KΩ±1% Resistor (0402)                          | Vishay Dale CRCW0402105KFK          |                               |
| 18 R2                          | 1 287KΩ±1% Resistor (0603)                          | Vishay Dale CRCW0603287KFK          |                               |
| 19 R3                          | 1 3.3MΩ±1% Resistor (0603)                          | Vishay Dale CRCW06033M30FK          |                               |
| 20 R4                          | 1 6.34KΩ±1% Resistor (0402)                         | Vishay Dale CRCW04026K34FK          |                               |
| 21 R5, R7                      | 2 10KΩ±1% Resistor (0402)                           | Vishay Dale CRCW040210K0FK          | Yageo Phicomp RC0402FR-0710KL |
| 22 R6                          | 1 78.7KΩ±1% Resistor (0402)                         | Vishay Dale CRCW040278K7FK          |                               |
| 23 R8                          | 1 100Ω±5% Resistor (1210)                           | Vishay Dale CRCW1210100RJNEAHP      |                               |
| 24 R9                          | 1 17.8Ω±1% Resistor (0805)                          | Vishay Dale CRCW080517R8FK          | Panasonic ERJ-6ENF17R8V       |
| 25 SCREW1-SCREW4               | 4 M2.5 Screws                                       | Keystone 29300                      |                               |
| 26 SU1, SU2                    | 2 Shunt Connectors                                  | SULLINS ELECTRONICS CORP. STC02SYAN |                               |
| 27 T1                          | 1 EVKIT PART-TRANSFORMER; SMT; 1.67:1               | WURTH ELECTRONICS INC 750343160     |                               |
| 28 U1                          | 1 MAX17687 20pin TQFN4mmx4mm                        | Maxim Integrated MAX17687ATP+       |                               |

## Evaluates: MAX17687 for Isolated +12V Output Configuration

## MAX17687EVKITA# EV Kit Schematics

<!-- image -->

## MAX17687EVKITA# EV Kit PCB Layout Diagrams

MAX17687EVKITA# EV Kit-Top Silkscreen

<!-- image -->

MAX17687EVKITA# EV Kit-Top View

<!-- image -->

│

## MAX17687EVKITA# EV Kit PCB Layout Diagrams (continued)

MAX17687EVKITA# EV Kit-Level 2 SGND

<!-- image -->

MAX17687EVKITA# EV Kit-Level 3 SGND

<!-- image -->

│

## MAX17687EVKITA# EV Kit PCB Layout Diagrams (continued)

MAX17687EVKITA# EV Kit-Bottom View

<!-- image -->

MAX17687EVKITA# EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------|-----------------|
|                 0 | 12/18           | Initial release                               | -               |
|                .1 |                 | Corrected typo in General Description section | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17687 for Isolated +12V

Output Configuration