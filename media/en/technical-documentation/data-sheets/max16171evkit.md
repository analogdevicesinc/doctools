<!-- lastmod 2022-08-03 -->
## MAX16171 Evaluation Kit

## General Description

The  MAX16171  EV  kit  is  designed  to  evaluate  the MAX16171,  an  ideal  diode  controller that protects systems  against  reverse  current  and  reverse  voltage faults in automotive applications. The EV kit operates with a supply voltage range of 4V to 57V over the automotive temperature  range  of  -40°C  to  +125°C.  A  jumper  (J1) helps  place  the  EV  kit  into  low  power  shutdown  mode. The EV kit PCB is available with the MAX16171ATA/VY+ installed.

## Benefits and Features

- 4V to 57V Operating Voltage Range
- Shutdown Mode Jumper
- -40°C to +125°C Temperature Range
- Lead(Pb)-Free and RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX16171

## Quick Start

## Required Equipment

- MAX16171 EV Kit
- ±25V, 10A DC Power Supply
- Electronic Load
- Oscilloscope
- Two Digital Voltmeters (DVM1, DVM2)

## Procedure

The  MAX16171  EV  kit  is  fully  assembled  and  tested. Follow the steps to verify operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that the jumper (J1) is in its default position as shown in Table 1.
- 2) Connect the DC  power supply across IN and PWRGND PCB pads.
- 3) Connect the electronic load between OUT and PGND.
- 4) Connect the positive terminal of DVM1 to GATE and the negative terminal to IN.
- 5) Connect the positive terminal of DVM2 to IN and the negative terminal to OUT.
- 6) Connect channel 1 of the scope to IN to monitor the input voltage.
- 7) Connect channel 2 of the scope to OUT to monitor the output voltage.
- 8) Turn on the power supply and increase the input voltage, while monitoring the input and output on the oscilloscope. The output should follow the input when the input voltage exceeds 0.7V.
- 9) Increase the input voltage up to 12V. DVM1 should read  about  2.5V,  while  DVM2  should  read  about 20mV  with no load at the output.
- 10)  Slowly  increase  the  load  current  while  monitoring DVM1  and  DVM2.  The  voltage  on  DVM1  should increase as the load is increased, while DMM2 should read close to 20mV. The EV kit is ready for further evaluation.  Refer  to  the MAX16171  data  sheet for more details.

<!-- image -->

## Detailed Description

The  MAX16171  EV  kit  evaluates  the  MAX16171,  an ideal diode controller and protection device that protects systems against fault conditions such as reverse current, reverse voltage, and negative transients. The MAX16171 controls a single N-channel MOSFET connected between the source and load. In shutdown mode, the MAX16171 turns off the MOSFET(Q1) by pulling GATE to SRC but allows power-flow to the load through the body diode of the  MOSFET. Thus,  the  system  can  remain  in  standby mode while the MAX16171 consumes 1µA (typ) of current.  In  light  load  applications,  the  MAX16171  controls gate  voltage  to  maintain  a  20mV  regulation  voltage between  source  and  drain  of  the  MOSFET.  At  higher load  currents,  the  MAX16171's  charge  pump  increases the  gate-to-source  voltage  to  drive  the  MOSFET  into an  enhanced  mode  of  operation.  When  the  gate-tosource  voltage  reaches  its  maximum  drive  voltage  due to  increased  load  current,  the  MOSFET  should  be  fully on and the drop across the MOSFET is determined by its RDSON and load current.

## Enable Input, EN

The MAX16171 EV kit provides a jumper (J1) to enable or  disable  the  MAX16171.  See  Table  1  for  J1  jumper settings.  Pulling  EN  to  ground  allows  the  MAX16171  to enter the shutdown mode and reduce the device supply current to 1µA (typ). While in shutdown, the power can still flow to the load through the body diode of the MOSFET. Therefore, excessive load current while the device is in shutdown should be avoided to minimize power loss.

## Table 1. EN Input (J1)

| SHUNT POSITION   | DESCRIPTION         |
|------------------|---------------------|
| Installed*       | Enabled. VEN = VIN  |
| Not Installed    | Disabled. VEN = GND |

* Default Position

## Input Transient Protection

The  MAX16171  EV  kit  tolerates  input  transients  from +76V down to -42V without damage to the MAX16171 and on-board components. To increase the positive and negative  transient  beyond  the  absolute  maximum  ratings  of the  MAX16171,  the  EV  kit  features  optional  footprints for  external  TVS  diodes  (D1  and  D2)  to  clamp  input transients exceeding the protection range offered by the IC. See the MAX16171 EV Kit Schematic Diagrams for proper orientation and connection.

## Optional Components

The EV kit features optional components to facilitate the evaluation  of  the  MAX16171  in  a  system.  A  Schottky diode (D4) in the SOD123 package between the system and IC grounds provides an alternative protection scheme in  case  D2  is  not  desirable.  If  D4  is  installed,  the  path underneath its footprint must be cut to disconnect the IC ground from the system ground. In such a configuration, the  IC  ground  remains  a  diode  drop  above  the  system ground during normal operation. In reverse voltage conditions, D4 is reverse biased and blocks the negative input transients while D1 is forward biased keeping the voltage drop across the MAX16171 to -0.7V.

The MAX16171 also features optional input/output capacitors,  C2  and  C3.  For  systems  that  do  not  require  a huge capacitive load, C2 provides the option to evaluate the  MAX16171  with  smaller  capacitor  values.  Similarly, bypassing the capacitor (C3) offers the ability to optimize and  modify  the  bypassing  scheme  in  case  having  C1 alone on the board does not meet system requirements.

Note: These optional components are not necessary for the proper operation of the MAX16171 but are provided to optimize system operation, facilitate testing, and evaluation of the IC.

## MAX16171 Evaluation Kit

## Component List

| PART   |   QTY | DESCRIPTION                                                                                                             |
|--------|-------|-------------------------------------------------------------------------------------------------------------------------|
| C1     |     2 | 0.1µF ±10%, 100V X7R ceramic capacitors (1206) Murata: GRM319R72A104KA01 TDK: C3216X7R2A104K160AA Kemet: C1206C104K1RAC |
| C2     |     0 | Not installed. Ceramic capacitor (1206)                                                                                 |
| C3     |     0 | Not installed. Ceramic capacitor (1206)                                                                                 |
| C4     |     1 | 100µF ±20%, 80V (Case 1213), Aluminum Electrolytic, Vishay: MAL214699706E3                                              |
| D1     |     0 | Not installed. TVS diode                                                                                                |
| D2     |     0 | Not installed. TVS diode                                                                                                |
| D4     |     0 | Not installed. Schottky diode (SOD123)                                                                                  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Wurth Electronics Inc.                 | 248 756-5355 | www.we-online.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com        |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay Semiconductors                  | 402-563-6866 | www.vishay.com        |

Note:

Indicate that you are using the MAX16171 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16171EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX16171

| PART                            |   QTY | DESCRIPTION                                                                                       |
|---------------------------------|-------|---------------------------------------------------------------------------------------------------|
| GATE                            |     1 | Test Point Keystone 5012                                                                          |
| ICGND, IN, OUT, PWRGND, PWRGND1 |     5 | 20G bus wire formed into 'U' shape loop; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG |
| IN1, OUT1, PGND, TP2            |     4 | Banana Jacks                                                                                      |
| J1                              |     1 | Banana Jacks                                                                                      |
| Q1                              |     1 | 100V, 75A, N-channel MOSFET (TO-263) Vishay: SQM70060EL_GE3                                       |
| U1                              |     4 | MAX16171ATA+                                                                                      |
| -                               |     1 | PCB: MAX16171 EVALUATION KIT                                                                      |

│

## MAX16171 EV Kit Schematic Diagrams

<!-- image -->

<!-- image -->

│

## MAX16171 EV Kit PCB Layout Diagrams

MAX16171 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX16171 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX16171 EV Kit PCB Layout Diagrams (continued)

MAX16171 EV Kit PCB Layout-Bottom View

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX16171