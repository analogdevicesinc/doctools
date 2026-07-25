<!-- lastmod 2022-08-02 -->
## MAX17682 Evaluation Kit C

## General Description

The MAX17682 EV kit C is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX17682  high-efficiency,  iso-buck  DC-DC  Converter. The EV kit operates over a wide input-voltage range of 17V to 36V and uses primary-side feedback to regulate the  output  voltages.  The  EV  kit  has  four  isolated,  dualoutput voltage rails which are programmed to +15V and -8V. Three of the dual voltage rails can deliver 75mA load current,  whereas  the  fourth  dual  rail  can  deliver  a  load current of 225mA.

The EV kit comes installed with the MAX17682 in a 20-pin (4mm x 4mm) TDFN package.

## Features

- 17V to 36V Input Voltage Range
- Four isolated output rails
- Three rails with +15V and -8V, 75mA continuous current
- One rail with +15V and -8V, 225mA continuous current
- EN/UVLO Input
- 250kHz Switching Frequency
- 96% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 10W Output Power
- Overtemperature Protection
- Proven PCB layout

Ordering Information appears at end of data sheet.

Evaluates: MAX17682 Three-Phase

## Inverter Gate Drive Power Supply

## Quick Start

## Recommended Equipment

- One 15V - 60V DC, 1A Power Supply
- One resistive load of 100Ω, 6W (or more) and three resistive loads of 330Ω, 2W (or more) each sink capacity
- Digital Multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

- 1) Verify that the J1 is open.
- 2) Set the input power supply output to 24V. Disable the power supply.
- 3) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad.
- 4) Connect  four  DMMs  configured  in  voltmeter  mode across the +15V PCB pads and their corresponding REF PCB pads, and the rest of the four DMMs across the -8V PCB pads and their corresponding REF PCB pads.
- 5) Connect a 100Ω resistive load across the D output  +15V  and  -8V  PCB  pads.    Connect    three 330Ω  resistive  loads  across    +15V  and  -8V  A/B/C output PCB pads.
- 6) Enable the input power supply.
- 7) Verify that the secondary output voltage is at +15V/ -8V (with allowable tolerance of 10%) with respect to the corresponding REF PCB pad.
- 8) If  required,  vary  the  input  voltage  from  17V  to  36V, and  the  load  currents  from  10%  to  100%  (using adjustable  load  resistors)  and  verify  that  the  output voltages are within the acceptable limits.

<!-- image -->

## MAX17682 Evaluation Kit C

## Detailed Description

The MAX17682EVKITC evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17682 high-efficiency, isobuck, DC-DC converter designed to provide multiple isolated power  supplies  for  a  three  phase  inverter  gate  drive application. The EV kit generates four isolated dual-rail +15/-8V outputs. Three of the isolated dual rail outputs are rated for 75mA full load current, useful to power the gate  drive  circuits  of  the  top  three  power  devices  in  a three phase inverter. The fourth isolated dual rail output rated  for  225mA  full  load  current  is  useful  to  power the bottom three gate drive circuits of the three phase inverter.  The  EV  kit  features  a  forced-PWM  control scheme  that  provides  constant  switching-frequency  of 250kHz operation at all load and line conditions.

The EV Kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17682. The VPRI  PCB  pad  helps  measure  the  regulated  primary output voltage (V PRI ). An additional RESETB PCB pad is  available  for  monitoring  the  health  of  primary  output voltage  (V PRI ).  RESETB  pulls  low  if  FB  voltage  drops below 92% (typ) of its set value and RESETB goes high impedance  1024  clock  cycles  after  FB  voltage  rises above 95% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

## Evaluates: MAX17682 Three-Phase Inverter Gate Drive Power Supply

divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection,  turns-ratio  selection,  output  capacitor  selection, output diode selection and external loop compensation are given in MAX17682 IC data sheet.

This EV kit is protected against accidental output shortcircuit conditions. When a short-circuit fault occurs at any of the secondary isolated output terminals, the condition induces a negative current in the primary winding of the transformer, which eventually causes the current to hit the negative current limit in MAX17682. The part enters hiccup  mode  after  16  consecutive  events  of  hitting  a negative current limit. The part attempts to recover after 32,768 clock cycles.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input undervoltage  lockout  (UVLO)  threshold.  Jumper  J1 configures  the  EV  kit's  output  for  turn-on/turn-off  con -trol. Install a shunt across jumper J1 pins 2-3 to disable VOUT. See Table 1 for J1 jumper configurations.

## External Synchronization (J2)

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power level without using an opto-coupler. The detailed procedure for setting the soft-start time, ENABLE/UVLO

The SYNC pin on the device allows synchronization to an external clock. Jumper J2 configures the frequency of operation of the EV kit by selecting the internal clock with frequency decided by the RT resistor value or the external clock to synchronize. See Table 2 for J2 jumper configurations.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT OUTPUT             |
|------------------|--------------------------------------------------|--------------------------|
| 1-2              | Connected to V IN                                | Always Enabled           |
| 2-3              | Connected to GND                                 | Always Disabled          |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15.85V |

* Default position.

## Table 2. External Synchroniztaion (SYNC) (J2) Jumper Settings

| SHUNT POSITION   | SYNC PIN          | CLOCK FREQUENCY                                  |
|------------------|-------------------|--------------------------------------------------|
| 1-2              | Connected to SYNC | Uses external clock                              |
| 2-3*             | Connected to GND  | Uses internal clock set according to RT resistor |
| Open             | Unconnected       | Not recommended                                  |

* Default position.

Note 1: The secondary output diodes are rated to carry short-circuit current only for few hundredths of a millisecond and are not rated to carry the continuous short-circuit current.

## MAX17682 Evaluation Kit C

## EV Kit C Performance Report

<!-- image -->

## Evaluates: MAX17682 Three-Phase Inverter Gate Drive Power Supply

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Wurth Electronik | www.we-online.com      |
| Murata Americas  | www.murataamericas.com |
| Panasonic Corp.  | www.panasonic.com      |

Note: Indicate that you are using the MAX17682 when contacting these component suppliers.

## MAX17682 EV Kit C Bill of Materials

|   S. No. | Designation                                                                                            |   Qty | Manufacturer Part #1             | Manufacturer Part #2                       | Description                                                 |
|----------|--------------------------------------------------------------------------------------------------------|-------|----------------------------------|--------------------------------------------|-------------------------------------------------------------|
|        1 | C1                                                                                                     |     1 | MURATA GRM32ER71H106KA12         | SAMSUNG ELECTRONICS CL32B106KBJNNN         | 10µF±10%, 50V X7R ceramic capacitor(1210)                   |
|        2 | C2, C25-C32                                                                                            |     9 | PANASONIC ECJ-1VB1H104K          | MURATA GRM188R71H104KA93                   | 0.1µF±10%, 50V X7R ceramic capacitor(0603)                  |
|        3 | C3                                                                                                     |     1 | PANASONIC EEE-TG1H470UP          |                                            | 47µF±20%, 50V X7R Aluminium electrolytic capacitor(CASE_F)  |
|        4 | C4, C5                                                                                                 |     2 | MURATA GRM155R71E333KA88         |                                            | 0.033µF±10%, 25V X7R ceramic capacitor(0402)                |
|        5 | C6                                                                                                     |     1 | MURATA GRM155R71H182JA01         |                                            | 1800pF±5%, 50V X7R ceramic capacitor(0402)                  |
|        6 | C7, C8                                                                                                 |     2 | MURATA GRJ32ER71A226KE11         |                                            | 22µF±10%, 10V X7R ceramic capacitor(1210)                   |
|        7 | C9                                                                                                     |     1 | MURATA GRM188R71A225ME15         |                                            | 2.2µF±20%, 10V X7R ceramic capacitor(0603)                  |
|        8 | C10                                                                                                    |     1 | TDK C1005X7R1C104K050BC          | AMERICAN TECHNICAL CERAMICS ATC530L104KT16 | 0.1µF±10%, 16V X7R ceramic capacitor(0402)                  |
|        9 | C11-C13                                                                                                |     3 | MURATA GRM31CR71H225KA88         | TAIYO YUDEN UMK316B7225K                   | 2.2µF±10%, 50V X7R ceramic capacitor(1206)                  |
|       10 | C14                                                                                                    |     1 | MURATA GRM31CR71H475KA12         |                                            | 4.7µF±10%, 50V X7R ceramic capacitor(1206)                  |
|       11 | C15-C24                                                                                                |    10 | MURATA GRM32ER71E226KE15         | SAMSUNG ELECTRO-MECHANICS CL32B226KAJNFN   | 22µF±10%, 25V X7R ceramic capacitor(1210)                   |
|       12 | C37                                                                                                    |     1 | AVX 1812HC272KAZ1A               |                                            | 2700pF±10%, 3kV X7R ceramic capacitor(1812)                 |
|       13 | D1-D4                                                                                                  |     4 | VISHAY SEMICONDUCTORS ES07D-M    |                                            | Diode 200V/1A, SMT                                          |
|       14 | D5-D8                                                                                                  |     4 | NEXPERIA TDZ15J                  |                                            | Diode Zener, 15V, SMT                                       |
|       15 | R1                                                                                                     |     1 | SAMSUNG ELECTRONICS RC1005F335   |                                            | 3.3MΩ±1% resistor(0402)                                     |
|       16 | R2                                                                                                     |     1 | PANASONIC ERJ-2RKF2743           |                                            | 274kΩ±1% resistor(0402)                                     |
|       17 | R3                                                                                                     |     1 | VISHAY DALE CRCW040210K0FK       | YAGEO PHICOMP RC0402FR-0710K               | 10kΩ±1% resistor(0402)                                      |
|       18 | R4                                                                                                     |     1 | PANASONIC ERJ-2RKF6801X          | SAMSUNG ELECTRONICS RC1005F682             | 6.8kΩ±1% resistor(0402)                                     |
|       19 | R5                                                                                                     |     1 | PANASONIC ERJ-2GEJ183            |                                            | 18kΩ±1% resistor(0402)                                      |
|       20 | R6                                                                                                     |     1 | VISHAY DALE CRCW0402154KFK       |                                            | 154kΩ±1% resistor(0402)                                     |
|       21 | R7                                                                                                     |     1 | VISHAY DALE CRCW0402102KFK       |                                            | 102kΩ±1% resistor(0402)                                     |
|       22 | R8-R11                                                                                                 |     4 | VISHAY DALE CRCW08052K00JN       |                                            | 2kΩ±1% resistor(0805)                                       |
|       23 | T1                                                                                                     |     1 | WURTH ELECTRONICS INC. 750343646 |                                            | EVKit Part Transformer; Through Hole; 1:2.75:2.75:2.75:2.75 |
|       24 | U1                                                                                                     |     1 | MAXIM MAX17682                   |                                            | MAX17682 TQFN10 4*4mm Iso buck DC-DC converter              |
|       25 | VCC, VPRI                                                                                              |     2 | KEYSTONE 5000                    |                                            |                                                             |
|       26 | PCB                                                                                                    |     1 | MAXIM MAX17682C                  |                                            |                                                             |
|       27 | J1, J2                                                                                                 |     2 | SULLINS PEC03SAAN                | Jumper Headers                             |                                                             |
|       28 | IN, -8A, -8B, -8C, -8D, +15A, +15B, +15C+B2, +15D, PGND, REFA, REFB, REFC, REFD, SYNC, RESETB, EN/UVLO |    17 | WEICO WIRE 9020 BUSS             | Test Loops                                 |                                                             |

## MAX17682 EV Kit C Schematics

<!-- image -->

## MAX17682 EV Kit C PCB Layout Diagrams

MAX17682 EV Kit C-Top Silkscreen

<!-- image -->

MAX17682 EV Kit C-Top

<!-- image -->

│

## MAX17682 EV Kit C PCB Layout Diagrams (continued)

MAX17682 EV Kit C-Level 2 SGND

<!-- image -->

MAX17682 EV Kit C-Level 3 SGND

<!-- image -->

│

## MAX17682 EV Kit C PCB Layout Diagrams (continued)

MAX17682EV Kit C-Bottom

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART            | TYPE   |
|-----------------|--------|
| MAX17682EVKITC# | EVKIT  |

│

## MAX17682 Evaluation Kit C

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│