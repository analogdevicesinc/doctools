<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX16903 Evaluation Kit

## General Description

Features

The MAX16903 evaluation kit (EV kit) provides a proven design to evaluate the MAX16903 2.1MHz high-voltage mini-buck  converter  in  a  16-pin  TSSOP  package.  All components  are  rated  for  the  automotive  temperature range. Various test points are included for evaluation.

The  EV  kit  PCB  comes  with  a  MAX16903RAUE50/V+ installed.  The  EV  kit  outputs  a  fixed  +5V.  The  fixed +3.3V  output  version  can  also  be  installed  with  minimal  component  changes.  Contact  the  factory  for  free samples  of  the  pin-compatible  MAX16903SAUE50/V+, MAX16903SAUE33/V+,  and  MAX16903RAUE33/V+  to evaluate these devices.

- S Up to +42V Input Supply Range
- S Delivers Up to 1A Output Current
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16903EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 4.7 F F Q 10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H475K |
| C4            |     1 | 0.1 F F Q 10%, 16V C ceramic capacitor (0402) TDK C1005X7R1C104K      |
| C5            |     1 | 10 F F Q 20%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E106M     |
| C6            |     1 | 2.2 F F Q 20%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C225K    |
| C8            |     0 | Not installed, ceramic capacitor (0603)                               |
| D2            |     1 | Green LED (0603)                                                      |
| JU1, JU2      |     2 | 3-pin headers                                                         |
| JU3           |     1 | 2-pin header                                                          |

| DESIGNATION          |   QTY | DESCRIPTION                                                       |
|----------------------|-------|-------------------------------------------------------------------|
| L1                   |     1 | 4.7 F H, 2.0A power inductor TDK LTF5022T-4R7N2R0                 |
| R1, R2               |     0 | Not installed, resistors (0603)                                   |
| R4                   |     1 | 3k I Q 5% resistor (0603)                                         |
| TP2, TP9, TP10, TP11 |     4 | Black multipurpose test points                                    |
| TP3, TP4             |     2 | Red multipurpose test points                                      |
| TP5, TP6             |     2 | Red miniature test points                                         |
| TP8                  |     0 | Not installed, miniature test point                               |
| U1                   |     1 | 2.1MHz mini-buck converter (16 TSSOP-EP*) Maxim MAX16903RAUE50/V+ |
| -                    |     3 | Shunts                                                            |
| -                    |     1 | PCB: MAX16903 EVALUATION KIT+                                     |

/V denotes an automotive qualified part.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16903 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16903 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16903	EV	kit
- +12V,	1A	DC	power	supply	(PS1)
- Electronic	load	or	equivalent	resistor	load
- Two	digital	multimeters	(DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that the jumpers are in their default position, as shown in Table 1.
- 2)  Connect the positive terminal of the +12V supply to VSUP (TP3) and the negative terminal to PGND (TP2).
- 3)  Set  DMM1  to  measure  voltage  and  connect  the positive terminal to VOUT (TP4). Connect the negative terminal to PGND (TP11).
- 4)  Set the power supply to 1A current limit. Turn on the power supply.
- 5)  With jumper JU3 shorted, the green LED should light up. DMM1 should display an output voltage of +5V.

## Additional Evaluation

- 1)  Set  DMM2  to  measure  current  and  connect  the positive terminal to VOUT (TP4). Connect the negative terminal to an electronic load.
- 2)  Set	the	electronic	load	to	500mA	or	use	an	equivalent resistor  load.  The  resistor  load  is  calculated  based on +5V output and should be approximately 10 I .  If using a resistor load, make sure it can handle 5W.
- 3)  Turn on the power supply and electronic load. DMM2 gives the load current while DMM1 gives the output voltage.
- 4)  Increase the load to 1A and observe the output.

## Table 1. Jumper Descriptions (JU1, JU2, JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects EN to VSUP (normal operation).                                                                                                                                     |
| JU1      | 2-3              | Connects EN to PGND (shutdown).                                                                                                                                             |
| JU2      | 1-2*             | Connects SYNC to VBIAS to enable forced-PWM mode.                                                                                                                           |
| JU2      | 2-3              | Connects SYNC to AGND to enable skip mode under light-load conditions.                                                                                                      |
| JU2      | Open             | When SYNC is unconnected or when a clock source is present, forced-PWM mode is enabled. SYNC can be used to synchronize with other supplies when a clock source is present. |
| JU3      | 1-2*             | Powers the green LED from the VBIAS supply.                                                                                                                                 |
| JU3      | Open             | Does not power the green LED from the VBIAS supply.                                                                                                                         |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX16903 EV kit provides a proven layout for the MAX16903  2.1MHz  synchronous  buck  regulator.  The device  accepts  input  voltages  as  high  as  +28V  and delivers up to 1A at +5V. The EV kit can handle an inputsupply  transient  up  to  +42V.  Various  test  points  are included for evaluation.

## SYNC

The device can operate in two modes, forced PWM or skip  mode.  For  light-load  conditions,  skip  mode  has better efficiency. When SYNC is pulled low, the device operates  in  skip  mode  for  light  loads  and  PWM  mode for  larger  loads.  By  applying  a  high  level  on  SYNC, the  device  is  forced  to  do  PWM  even  under  light-load conditions.

SYNC  can  also  be  used  to  synchronize  with  other supplies if a clock source is present. The device forces PWM when a clock source is present based on the input clock.

## Evaluating the +3.3V Version

The device is available in fixed +5V and +3.3V outputs. The EV kit comes installed with the +5V output version. The +3.3V output part can be swapped with the +5V part on the EV kit and the device functions without changing other  components.  To  optimize  efficiency,  refer  to  the MAX16903 IC data sheet.

<!-- image -->

## MAX16903 Evaluation Kit

<!-- image -->

Figure 1. MAX16903 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16903 Evaluation Kit

<!-- image -->

Figure 2. MAX16903 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16903 EV Kit PCB Layout-Component Side

Figure 4. MAX16903 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX16903 EV Kit Component Placement GuideSolder Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16903 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.