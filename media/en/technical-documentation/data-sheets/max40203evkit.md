<!-- lastmod 2022-08-03 -->
## MAX40203 Evaluation Kit

## General Description

The MAX40203 evaluation kit (EV kit) provides a proven design to evaluate the MAX40203 'ideal-diode'. This EV kit demonstrates the MAX40203 in a space-saving 5-pin SOT23  (MAX40203AUK+). This  EV  kit  can  be  used  to evaluate the MAX40203AUK+ as well.

The MAX40203 EV kit PCB comes with two MAX40203AUK+  devices  installed.  The  MAX40203 device is a current-switch, which drops so little voltage as to approximate an 'ideal diode'.

The MAX40203 is also available in a tiny 0.8mm x 0.8mm 4-bump WLP with a 0.35mm bump pitch and has lower voltage drop. These devices operate over the automotive -40°C to +125° C temperature range.

## MAX40203 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX40203

## Features

- Drops Only 100mV at 500mA
- Less than 10nA Leakage When Reverse-Biased From V DD
- Supply Voltage Range: Between 1.2V and 5.5V
- Low Supply Quiescent Current: 300nA (typ), 500nA (max)
- Thermally Self-Protecting
- -40°C to +125°C Temperature Range
- Evaluates MAX40203AUK+
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX40203 Evaluation Kit

## Quick Start

## Required Equipment

- MAX40203 EV kit
- +6V DC power supply
- Electronic load capable of sinking 1A ( e.g., HP6060B)
- Precision voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the below instructions  to  verify  board  operation. Caution:  Do  not turn on the power supply or the electronic load until all the connections are complete.

1.  Set the DC power supply to 3.6V output. Connect the positive  terminal  of  the  3.6V  supply  to  the  V DD   pad. Connect the negative terminal of the 3.6V supply to the GND pad.
2.  Connect the electronic load's positive terminal to the OUT pad and the negative terminal to the GND pad and set to 500mA sink.

## Table 1. Jumper Functions (J1 - J3)

| JUMPER LABEL   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------------|------------------|-------------------------------------------------------------------------------------|
| J1             | 1-2*             | Enables U1                                                                          |
| J1             | 2-3              | Disables U1                                                                         |
| J2             | 1-2*             | Enables U2                                                                          |
| J2             | 2-3              | Disables U2                                                                         |
| J3**           | Not Installed*   | Devices U1 and U2 Enable operates independently                                     |
| J3**           | Installed        | Connects Enable (EN) input of U1 and U2 together. User-supplied enable input signal |
| J4             | Not Installed*   | Devices operate independently                                                       |
| J4             | Installed        | Connect OUT(U1) and OUT(U2) together for ORing application                          |

Evaluates: MAX40203

3.  Connect the voltmeter across the V DD  and OUT pads.
4.  Verify all the shunts are in default positions, as shown in Table 1.
5.  Do not install J3.
6.  Turn on the power supply.
7.  Turn on the electronic load and verify that the current flowing is equal to the set value of 500mA.
8.  Verify  that  the  forward  voltage  or  (V DD   -  V OUT ) voltmeter reading is approximately 100mV.
9.  Turn off the electronic load.
10.  Set the electronic load to sink 100mA.
11.  Turn on the electronic load.
12.  Verify  that  the  forward  voltage  or  (V DD   -  V OUT ) voltmeter reading is approximately 28mV.

│

## Detailed Description of Hardware

The MAX40203 EV kit provides a proven design to evaluate the MAX40203 5-pin SOT23, space-saving, 'ideal-diode.' The device blocks reverse voltages and passes current when forward-biased, just as a normal diode would. The device, when forward-biased and enabled, conducts with as little as 100mV of voltage drop while carrying currents as  high  as  500mA.  At  higher  currents  (up  to  1A),  the voltage drop increases linearly. The MAX40203 protects itself, and any down-stream circuitry, from overtemperature conditions.

When  disabled  (EN  =  low),  the  MAX40203  can  block voltages  up  to  6V  in  either  direction,  making  it  suitable for most low-voltage portable electronic devices. The low (300nA,  typ.)  supply  current  is  independent  of  the  load current. The MAX40203 operates from supplies within the range of 1.2V and 5.5V.

## MAX40203 EV Kit Bill of Materials

<!-- image -->

| ITEM   | REF_DES                                         | DNI/ DNP   |   QTY | MFG PART #                    | MFG                        | VALUE         | DESCRIPTION                                                                                                                                                                            |
|--------|-------------------------------------------------|------------|-------|-------------------------------|----------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2, C6                                      | -          |     3 | C1206C105K3RAC;ECJ- 3YB1E105K | KEMET;PANA SONIC           | 1UF           | CAPACITOR; SMT (1206); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=X7R; TG=- 55 DEGC TO +125 DEGC; TC=+/-                                                                                   |
| 2      | C3, C4                                          | -          |     2 | C1608X7R1E104K080AA           | TDK                        | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                             |
| 3      | C5                                              | -          |     1 | C2012X7T2E104K125             | TDK                        | 0.1UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 250V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7T                                                                            |
| 4      | EN1, EN2, OUT, OUT1, OUT2, TP5, TP6, VDD1, VDD2 | -          |     9 | 5005                          | KEYSTONE                   | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                   |
| 5      | GND, TP1-TP4, TP9, TP10                         | -          |     7 | 5006                          | KEYSTONE                   | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                 |
| 6      | J1, J2                                          | -          |     2 | PBC03SAAN                     | SULLINS                    | PBC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                       |
| 7      | J3, J4                                          | -          |     2 | PBC02SAAN                     | SULLINS ELECTRONIC S CORP. | PBC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                              |
| 8      | U1, U2                                          | -          |     2 | MAX40203AUK+                  | MAXIM                      | MAX40203AUK + | EVKIT PART - IC; ULTRA-TINY NANOPOWER; 1A IDEAL DIODE WITH ULTRA-LOW VOLTAGE DROP; PACKAGE OUTLINE DRAWING NUMBER: 21-0057; PACKAGE LAND PATTERN: 90-0174; PACKAGE CODE: U5+2; SOT23-5 |
| 9      | PCB                                             | -          |     1 | MAX40203                      | MAXIM                      | PCB           | PCB:MAX40203                                                                                                                                                                           |
| TOTAL  |                                                 |            |    29 |                               |                            |               |                                                                                                                                                                                        |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

## Theory of Operation

The two 'ideal-diode' devices may be used independently or together. The PCB circuit mimics a typical wall adaptor/ battery-charging circuit having different V DD1  and V DD2 . They  are  connected  to  the  common  output,  where  the load is connected.

When used independently or together, enable inputs EN1 and  EN2  turn  the  device  on  or  off.  The  device  that  is turned on conducts current to the load. The device that is turned off does not conduct current to the load from its VDD input.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40203EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX40203 EV Kit Schematic

<!-- image -->

│

## MAX40203 EV Kit PCB Layout Diagrams

MAX40203 EV Kit-Top Silkscreen

<!-- image -->

MAX40203 EV Kit-Bottom

<!-- image -->

MAX40203 EV Kit-Top

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX40203