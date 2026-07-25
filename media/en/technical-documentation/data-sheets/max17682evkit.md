<!-- lastmod 2022-08-02 -->
## Evaluates: MAX17682 for Isolated +12V Output Configuration MAX17682EVKIT  Evaluation Kit

## General Description

The  MAX17682  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  performance  of  the MAX17682  high-efficiency,  iso-buck  DC-DC  Converter. The  EV  kit  operates  over  a  wide  input-voltage  range of  16V  to  42V  and  uses  primary-side  feedback  to  regulate the  output  voltage.  The  EV  kit  has  isolated  output, programmed to +12V at 750mA, with  10% output voltage regulation.

The EV kit comes installed with the MAX17682 in a 20-pin (4mm x 4mm) TDFN package.

## Features

- 16V to 42V Input Voltage Range
- +12V, 750mA Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- 91% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 10W Output Power
- Overtemperature Protection
- Proven PCB layout

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- One 15V - 60V DC, 1A Power Supply
- One resistive load 750mA sink capacity
- Two Digital Multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

The  EV  kit  comes  with  the  default  secondary  output programmed to +12V.

- 1) Verify that J1 is open
- 2) Set the power supply output to 24V. Disable the power supply
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect a 750mA resistive load across the +12V PCB pad and the GND0 PCB pad.
- 4) Connect a DMM configured in voltmeter mode across the +12V PCB pad and the nearest GND0 PCB pad.
- 5) Enable the input power supply.
- 6) Verify that output voltage is at +12V (with allowable tolerance of  10%) with respect to GND0.
- 7) If required, vary the input voltage from 16V to 42V, and the load current from 0mA to 750mA and verify that output voltage is at +12V (with allowable tolerance of  10%).

<!-- image -->

## MAX17682EVKIT# Evaluation Kit

## Detailed Description

The MAX17682EVKITA evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the  performance of the MAX17682 high-efficiency, isobuck, DC-DC converter designed to provide an isolated power up to 10W. The EV kit generates +12V, 750mA voltages  from  a  16V  to  42V  input  supply.  The  EV  kit features  a  forced-PWM  control  scheme  that  provides constant switching-frequency of 200 kHz operation at all load and line conditions.

## Evaluates: MAX17682 for Isolated +12V Output Configuration

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power level without using an opto-coupler. The detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17682 IC data sheet.

## Enable Control (J1)

The  EV  Kit  includes  an  EN/UVLO  PCB  pad  to  monitor and  program  the  EN/UVLO  pin  of  the  MAX17682.  The VPRI  PCB  pad  helps  measure  the  regulated  primary output  voltage  (V PRI ). An  additional  RESETB  PCB  pad is  available  for  monitoring  the  health  of  primary  output voltage  (V PRI ).  RESETB  pulls  low  if  FB  voltage  drops below 92%(typ) of its set value and RESETB goes high impedance  1024  clock  cycles  after  FB  voltage  rises above 95% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

The  EN/UVLO  pin  on  the  device  serves  as  an  on/ off  control  while  also  allowing  the  user  to  program  the input undervoltage lockout (UVLO) threshold. Jumper J1 configures the EV kit's output for turn-on/turn-off control. Install a shunt across jumper J1 pins 2-3 to disable VOUT. See Table 1 for proper J1 jumper configurations.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT OUTPUT          |
|------------------|--------------------------------------------------|-----------------------|
| J1               |                                                  |                       |
| 1-2              | Connected to V IN                                | Always Enabled        |
| 2-3              | Connected to GND                                 | Always Disabled       |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15V |

* Default position.

Note 1: The secondary output diodes D1 is rated to carry short-circuit current only for few hundredths of a millisecond and is not rated to carry the continuous short-circuit current.

Note 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the +12V rail is healthy, U2 sinks the minimum load current required to regulate the output voltages within ±10% regulation.

## MAX17682EVKIT# Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17682 for Isolated +12V Output Configuration

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Wurth Electronik | www.we-online.com      |
| Murata Americas  | www.murataamericas.com |
| Panasonic Corp.  | www.panasonic.com      |

Note:

Indicate that you are using the MAX17682 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17682EVKIT# | EVKIT  |

# Denotes RoHS compliant.

## MAX17682 EV Kit Bill of Materials

|   S | NO Designation                                                  |   Qty | Description                                                  | Manufacturer Partnumber-1                   | Manufacturer Partnumber-2    | Manufacturer Partnumber-3   |
|-----|-----------------------------------------------------------------|-------|--------------------------------------------------------------|---------------------------------------------|------------------------------|-----------------------------|
|   1 | C1                                                              |     1 | 2.2µF±10%, 100V,X7R Ceramic capacitor (1210)                 | Murata GRM32ER72A225KA35                    | TDK CGA6N3X7R2A225K230       |                             |
|   2 | C2                                                              |     1 | 47µF, 20%, 80V, ALUMINUM ELECTROLYTIC CAPACITOR 6.60*6.60mm, | Panasonic EEE-FK1K470P                      |                              |                             |
|   3 | C3                                                              |     1 | 0.1µF±10%,100V, X7R ceramic capacitor (0603)                 | Murata GRM188R72A104KA35                    | TDK CC0603KRX7R0BB104        |                             |
|   4 | C4,C13                                                          |     2 | 10µF±10%,16V, X7R ceramic capacitor (1210)                   | Murata GRM32DR71C106KA01                    | TDK C3225X7R1C106K           | KEMET C1210C106K4RAC        |
|   5 | C5, C6                                                          |     2 | 22µF±20%,10V, X7R ceramic capacitor (1210)                   | Murata GRM32ER71A226ME20                    |                              |                             |
|   6 | C7                                                              |     1 | 0.033µF±5%,25V,X7R ceramic capacitor (0402)                  | Murata GRM155R71E333KA88                    |                              |                             |
|   7 | C8                                                              |     1 | 2200pF±10%,50V, X7R ceramic capacitor (0402)                 | Murata GRM155R71H222JA01                    |                              |                             |
|   8 | C9                                                              |     1 | 0.015uF±10%, 16V, X7R ceramic capacitor (0402)               | Murata GRM155R71C153KA01                    | KEMET C0402C153K4RAC         |                             |
|   9 | C10                                                             |     1 | 0.1uF±10%, 16V, X7R ceramic capacitor (0402)                 | Murata GRM155R61C104KA88                    |                              |                             |
|  10 | C11                                                             |     1 | 2.2uF±10%,10V, X7R ceramic capacitor (0603)                  | Murata GRM188R71A225KE15                    | SAMSUNG CL10B225KP8NNN       |                             |
|  11 | C12                                                             |     1 | 2700pF±10%, 3000V, X7R ceramic capacitor (1812)              | AVX 1812HC272KAZ1A                          |                              |                             |
|  12 | D1                                                              |     1 | Diode, 200V/3A, SMA                                          | Taiwan Semiconductor Corporation SK320A R3G |                              |                             |
|  13 | JU1,JU2                                                         |     2 | 3-pin headers                                                | SULLINS ELECTRONICS CORP PEC03SAAN          |                              |                             |
|  14 | R1                                                              |     1 | 3.3M Ohm±1% resistor (0603)                                  | VISHAY DALE CRCW06033M30FK                  |                              |                             |
|  15 | R2                                                              |     1 | 287K Ohm±1% resistor (0603)                                  | VISHAY DALE CRCW0603287KFK                  |                              |                             |
|  16 | R3                                                              |     1 | 78.7K Ohm±1% resistor (0402)                                 | VISHAY DALE CRCW040278K7FK                  |                              |                             |
|  17 | R4,R6,R10                                                       |     3 | 10kΩ ±1% resistor (0402)                                     | VISHAY DALE CRCW040210K0FK                  | YAGEO PHICOMP RC0402FR-0710K |                             |
|  18 | R5                                                              |     1 | 6.34kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW04026K34FK                  |                              |                             |
|  19 | R8                                                              |     1 | 12Ω ±1% resistor (0603)                                      | VISHAY DALE RCS060312R0FK                   |                              |                             |
|  20 | R9                                                              |     1 | 40.2kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW040240K2FK                  |                              |                             |
|  21 | R7                                                              |     1 | 105kΩ ±1% resistor (0402)                                    | VISHAY DALE CRCW0402105KFK                  |                              |                             |
|  22 | T1                                                              |     1 | EVKIT PART-TRANSFORMER; SMT; 1.67:1                          | WURTH ELECTRONICS INC. 750343160            |                              |                             |
|  23 | U1                                                              |     1 | MAX17682 TQFN10 4*4mm Iso buck DC-DC converter               | MAX17682                                    |                              |                             |
|  24 | U2                                                              |     1 | Shunt regulator SOT25                                        | ST MICROELECTRONICS TL431AIYDT              |                              |                             |
|  25 | SU1,SU2                                                         |     2 | See Jumper Table                                             | SULLINS ELECTRONICS CORP - STC02SYAN        |                              |                             |
|  26 | VIN, GND0, PGND, SGND, SYNC, VOUT, VPRI, PGND1, RESETB, EN/UVLO |    10 | Test Loops                                                   | WEICO WIRE - 9020 BUSS                      |                              |                             |

│

## MAX17682 EV Kit Schematics

<!-- image -->

## Evaluates: MAX17682 for Isolated +12V MAX17682EVKIT# Evaluation Kit

## MAX17682 EV Kit PCB Layout Diagrams

MAX17682 EV Kit-Top Silkscreen

<!-- image -->

MAX17682 EV Kit-Top

<!-- image -->

## Evaluates: MAX17682 for Isolated +12V MAX17682EVKIT# Evaluation Kit

## MAX17682 EV PCB Layout Diagrams (continued)

MAX17682 EV Kit-Level 2 SGND

<!-- image -->

MAX17682 EV Kit-Level 3 SGND

<!-- image -->

│

## Evaluates: MAX17682 for Isolated +12V Output Configuration MAX17682EVKIT# Evaluation Kit

## MAX17682 EV Kit PCB Layout Diagrams (continued)

MAX17682EV-Bottom

<!-- image -->

Evaluates: MAX17682 for Isolated +12V

Output Configuration

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------|-----------------|
|                 0 | 3/17            | Initial release                       | -               |
|                 1 | 4/18            | Updated title and Bill of Materials . | 1-9             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.