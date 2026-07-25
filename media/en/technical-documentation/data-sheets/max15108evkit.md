<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX15108 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15108  high-efficiency,  8A, step-down regulator with integrated switches in a 20-bump wafer-level package (WLP). The EV kit is preset for 1.5V output at load currents up to 8A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed switching frequency, which allows the EV kit to achieve an all-ceramic capacitor design and fast transient responses.

| DESIGNATION    |   QTY | DESCRIPTION                                                                               |
|----------------|-------|-------------------------------------------------------------------------------------------|
| C1, C2, C19    |     3 | 10 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106K TDK C1608X5R0J106K |
| C3, C4, C21    |     0 | Not installed, ceramic capacitors (0603)                                                  |
| C5, C7, C8, C9 |     4 | 47 F F Q 20%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J476M TDK C3216X5R0J476M |
| C6             |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H222K TDK C1608X7R1H222K   |
| C14            |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J TDK C1608C0G1H101J     |
| C15            |     1 | 4700pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K TDK C1608X7R1H472K   |

<!-- image -->

## MAX15108 Evaluation Kit

## Evaluates: MAX15108

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

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| C16           |     1 | 0.033 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C333K Taiyo Yuden EMK107BJ333KA |
| C20           |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K                              |
| C22           |     0 | Not installed, 220 F F Q 20%, 10V aluminum electrolytic capacitor (6.3mm x 7.7mm)                 |
| C23           |     1 | 2.2 F F Q 10%,10V X7R ceramic capacitor (0603) Murata GRM188R71A225K                              |
| JU1           |     1 | 2-pin header                                                                                      |
| JU2           |     1 | 3-pin header                                                                                      |
| L1            |     1 | 0.33 F H, 18A inductor Vishay IHLP2525BD01R33M01                                                  |
| R1            |     1 | 8.06k I Q 1% resistor (0603)                                                                      |
| R2            |     1 | 5.36k I Q 1% resistor (0603)                                                                      |
| R3            |     1 | 2.43k I Q 1% resistor (0603)                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                    |
|---------------|-------|--------------------------------|
| R4, R5        |     2 | 100k I Q 5% resistors (0603)   |
| R6            |     1 | 10 I Q 5% resistor (0603)      |
| R8            |     1 | 1 I Q 1% resistor (0805)       |
| R9            |     1 | 1k I Q 5% resistor (0603)      |
| R10           |     1 | 10k I Q 5% resistor (0603)     |
| R11           |     0 | Not installed, resistor (0603) |

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify the board operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect  the  positive  terminal  of  the  8A  load  to  the OUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect  the  digital  voltmeter  across  the  OUT  PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Verify that a shunt is installed on pins 2-3 on jumper JU2.
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the voltmeter displays 1.5V.

<!-- image -->

## MAX15108 Evaluation Kit

## Evaluates: MAX15108

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| U1            |     1 | 8A current-mode buck converter (20 WLP) Maxim MAX15108EWP+ |
| -             |     2 | Shunts                                                     |
| -             |     1 | PCB: MAX15108 EVALUATION KIT                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX15108 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX15108	EV	kit
- 5V,	5A	DC	power	supply
- Load	capable	of	sinking	8A
- Digital	voltmeter

## Detailed Description of Hardware

The  MAX15108  EV  kit  provides  a  proven  design  to evaluate  the  MAX15108  high-efficiency,  8A,  step-down regulator  with  integrated  switches.  The  applications include distributed power systems, portable devices, and preregulators. The EV kit is preset for 1.5V output at load currents up to 8A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed switching frequency, which allows  the  EV  kit  to  achieve  an  all-ceramic  capacitor design and fast transient responses. A placeholder for an input  aluminum electrolytic  capacitor  (C22)  is  provided to  damp  the  input  if  long  wires  are  used;  they  are  not required in a tight system design.

## Soft-Start (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C16, the external capacitor from SS to GND. By default, C16 is currently 0.033 F F, which gives  a  soft-start  time  of  approximately  2ms.  To  adjust the  soft-start  time,  determine  C16  using  the  following formula:

<!-- formula-not-decoded -->

where t SS is the required soft-start time in seconds and C16 is in farads.

An  external  tracking  reference  with  steady-state  value between 0 and V IN  - 2V can be applied to SS. Refer to the Programmable Soft-Start (SS) section in the MAX15108 IC data sheet for a more detailed description.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to 0.94 x V IN (forced PWM) by changing the values of resistors R1 and R2.  To  determine  the  value  of  the  resistor-divider,  first select R2 between 1k I and 20k I . Then use the following equation to calculate R1:

<!-- formula-not-decoded -->

where V FB is the feedback threshold voltage (V FB = 0.6V) and V OUT  is the desired output. When regulating for an output of 0.6V in skip mode, set R1 to 0 I and keep R2 connected from FB to ground.

When R1 is changed, compensation components C14, R3, and C15 must be changed to ensure loop stability. Refer to the Compensation Design Guidelines section in the MAX15108 IC data sheet.

Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                    | DEVICE OUTPUT   |
|------------------|---------------------------|-----------------|
| Installed*       | Connected to IN           | Enabled         |
| Not installed    | Pulled to PGND through R4 | Disabled        |

<!-- image -->

## MAX15108 Evaluation Kit Evaluates: MAX15108

## Regulator Enable (EN)

The device features a regulator enable input. For normal operation,  a  shunt  should  be  installed  on  jumper  JU1. To disable the output, remove the shunt on JU1 and the EN pin will be pulled to PGND through resistor R4. See Table 1 for JU1 settings.

## Skip-Mode Input (SKIP)

The  device  offers  selectable  skip-mode  functionality  to reduce current consumption and achieve a higher efficiency at light loads. To operate in skip mode, install a shunt on pins 1-2 on jumper JU2. See Table 2 for JU2 settings.

Caution: Do not change the setting of the skip jumper while the device is operating.

Table 2. Skip-Mode Input (SKIP) Jumper JU2 Description

| SHUNT POSITION   | SKIP PIN          | MODE                 |
|------------------|-------------------|----------------------|
| 1-2              | Connected to EN   | Skip-mode operation  |
| 2-3*             | Connected to PGND | Forced-PWM operation |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15108 Evaluation Kit

## Evaluates: MAX15108

<!-- image -->

Figure 1. MAX15108 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX15108 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX15108 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX15108 Evaluation Kit

## Evaluates: MAX15108

Figure 4. MAX15108 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX15108 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX15108 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX15108 Evaluation Kit

## Evaluates: MAX15108

Figure 7. MAX15108 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15108EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX15108 Evaluation Kit Evaluates: MAX15108

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8