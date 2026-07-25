<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The  MAX15112  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX15112  high-efficiency, 12A,  step-down  regulator  with  integrated  switches  in a  24-bump  wafer-level  package  (WLP).  The  EV  kit  is preset for 1.5V output at load currents up to 12A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed  switching  frequency,  which  allows  the  EV  kit  to achieve  an  all-ceramic  capacitor  design  and  fast  transient responses.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 22 F F Q 20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J226M     |
| C5            |     0 | Not installed, ceramic capacitor (0603)                                 |
| C7, C8        |     2 | 100 F F Q 10%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J107M |
| C9, C10       |     0 | Not installed, ceramic capacitors (1206)                                |
| C11           |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K     |
| C13           |     1 | 0.47 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C474K  |
| C14           |     1 | 22pF Q 5%, 50V ceramic capacitor (0603) Murata GRM1885C1H220J           |
| C15           |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K    |

## MAX15112 Evaluation Kit Evaluates: MAX15112

## Features

- S Operates from a 2.7V to 5.5V Input Supply
- S All-Ceramic Capacitor Design
- S 1MHz Switching Frequency
- S Output Voltage Range 0.6V Up to 0.94 x V IN  (Forced PWM) 0.6V Up to 0.85 x V IN (Skip Mode)
- S Enable Input/Power-Good Output
- S Selectable Skip-Mode Functionality
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                   |
|--------------------|-------|-----------------------------------------------------------------------------------------------|
| C16                |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K Murata GRM188R71H104K      |
| C18                |     1 | 1500pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H152K                          |
| C19, C20           |     2 | 10 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106K                        |
| C21, C22           |     2 | 1000 F F Q 20%, 10V aluminum electrolytic capacitors (10.3mm x 10.3mm) Panasonic EEEFP1A102AP |
| C23                |     1 | 2.2 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R61C225K TDK C1608X5R1C225K      |
| IN, OUT, PGND (x2) |     4 | Binding posts                                                                                 |
| JU1                |     1 | 2-pin header                                                                                  |
| JU2                |     1 | 3-pin header                                                                                  |
| L1                 |     1 | 0.22 F H, 21A inductor Vishay IHLP2525BD01R22M01                                              |

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| R1            |     1 | 3.32k I Q 1% resistor (0603) |
| R2            |     1 | 2.21k I Q 1% resistor (0603) |
| R3            |     1 | 5.23k I Q 1% resistor (0603) |
| R4, R5        |     2 | 100k I Q 5% resistors (0603) |
| R6            |     1 | 100 I Q 5% resistor (0603)   |
| R7            |     1 | 4.7 I Q 5% resistor (0603)   |
| R8            |     1 | 1 I Q 1% resistor (0805)     |
| R12           |     1 | 10 I Q 1% resistor (0603)    |

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify the board operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect  the  positive  terminal  of  the  12A  load  to the  OUT  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Verify that a shunt is installed on 2-3 on jumper JU2.
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the voltmeter displays 1.5V.

## MAX15112 Evaluation Kit

## Evaluates: MAX15112

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| R13           |     1 | 0 I Q 5% resistor (0603)                                    |
| R14           |     1 | 470 I Q 5% resistor (0402)                                  |
| U1            |     1 | 12A current-mode buck converter (24 WLP) Maxim MAX15112EWG+ |
| -             |     2 | Shunts                                                      |
| -             |     1 | PCB: MAX15112 EVALUATION KIT                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX15112 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15112 EV kit
- 5V, 7A DC power supply
- Load capable of sinking 12A
- Digital voltmeter

## Detailed Description of Hardware

The  MAX15112  EV  kit  provides  a  proven  design  to evaluate the MAX15112 high-efficiency, 12A, step-down regulator  with  integrated  switches.  The  applications include  distributed  power  systems,  portable  devices, and preregulators. The EV kit is preset for 1.5V output at load currents up to 12A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed switching frequency, which allows the EV kit to achieve an all-ceramic capacitor design and fast transient responses. Input aluminum electrolytic capacitors (C21, C22) are provided to damp the input if long wires are used; they are not required in a tight system design.

## Soft-Start and Reference Input (SS/REFIN)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C16, the external capacitor from SS/REFIN  to  GND.  By  default,  C16  is  currently  0.1 F F, which  gives  a  soft-start  time  of  approximately  6ms. To  adjust  the  soft-start  time,  determine  C16  using  the following formula:

<!-- formula-not-decoded -->

where  t SS  is  the  required  soft-start  time  in  seconds and C16 is in farads. C16 should be a minimum of 1nF capacitor  between  SS/REFIN  and  GND.  The  resistor  in series  with  the  soft-start  capacitor  (R14)  improves  load regulation.

When no external reference is applied at SS/REFIN, the device  uses  the  internal  0.6V  reference.  An  external tracking  reference  with  steady-state  value  between  0 and V IN  - 2.5V can be applied to SS/REFIN. Refer to the Setting the Soft-Start Time section  of  the  MAX15112 IC data sheet for a more detailed description. During 1ms hiccup timeout, the SS/REFIN pin is pulled to GND internally  to  discharge  the  soft-start  capacitor.  R6  limits  the currents from an externally supplied reference during the 1ms hiccup timeout event.

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to 0.94 x V IN (forced PWM) by changing the values of resistors R1 and R2.  To  determine  the  value  of  the  resistor-divider,  first select R2 between 1k I and 20k I . Then use the following equation to calculate R1:

<!-- formula-not-decoded -->

where V FB is equal to the reference voltage at SS/REFIN and V OUT  is the desired output. If no external reference is applied at SS/REFIN the internal reference is automatically

## MAX15112 Evaluation Kit Evaluates: MAX15112

selected and V FB  becomes 0.6V. When regulating for an output of 0.6V in skip mode, set R1 to 0 I and keep R2 connected from FB to GND.

When R1 is changed, compensation components C14, R1, and C15 must be changed to ensure loop stability (refer to the Compensation Design Guidelines section in the MAX15112 IC data sheet).

## Regulator Enable (EN)

The device features a regulator enable input. For normal operation,  a  shunt  should  be  installed  on  jumper  JU1. To disable the output, remove the shunt on JU1 and the EN pin will be pulled to PGND through resistor R4. See Table 1 for JU1 settings.

## Skip-Mode Input (SKIP)

The  device  offers  selectable  skip-mode  functionality to  reduce  current  consumption  and  achieve  a  higher efficiency at light loads. To operate in skip mode, install a shunt on pins 1-2 on jumper JU2. See Table 2 for JU2 settings. Caution:  Do  not  change  the  setting  of  the skip jumper while the device is operating.

Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                    | DEVICE OUTPUT   |
|------------------|---------------------------|-----------------|
| Installed*       | Connected to IN           | Enabled         |
| Not installed    | Pulled to PGND through R4 | Disabled        |

* Default position.

## Table 2. Skip-Mode Input (SKIP) Jumper JU2 Description

| SHUNT POSITION   | SKIP PIN          | MODE                 |
|------------------|-------------------|----------------------|
| 1-2              | Connected to EN   | Skip-mode operation  |
| 2-3*             | Connected to PGND | Forced-PWM operation |

## MAX15112 Evaluation Kit Evaluates: MAX15112

Figure 1. MAX15112 EV Kit Schematic

<!-- image -->

Figure 2. MAX15112 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX15112 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX15112 Evalution Kit Evalutes: MAX15112

Figure 4. MAX15112 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX15112 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX15112 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX15112 Evalution Kit

## Evalutes: MAX15112

Figure 7. MAX15112 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15112EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX15112 Evaluation Kit

## Evaluates: MAX15112

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                         | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------|-----------------|
|                 0 | 7/11            | Initial release                     | -               |
|                 1 | 9/12            | Updated Component List and Figure 1 | 1, 4            |

<!-- image -->