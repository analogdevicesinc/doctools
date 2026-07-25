<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX17512 evaluation kit (EV kit) provides a proven design to evaluate the MAX17512 high-speed, constant on-time, valley current regulator IC. The EV kit operates from a 6.5V to 18V input voltage and can deliver output currents of up to 6A.

The IC allows implementation of high-efficiency switchmode current sources. The IC accepts an analog voltage at  the  ICMD  pin  and  regulates  the  valley  of  the  output inductor current at a corresponding level. By implementing  an  external  load  current-sensing  mechanism  and correspondingly adjusting the current command voltage at the ICMD pin in closed-loop fashion, it is possible to implement a constant source current.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 25V X7R ceramic capacitor (1210) Murata GRM32DR71E106K TDK C3225X7R1E106M      |
| C2, C5        |     2 | 2.2 F F Q 10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A225K TDK C2012X5R1A225K    |
| C3            |     1 | 0.1 F F Q 10%, 10V X7R ceramic capacitor (0402) Murata GRM155R71A104KA01D TDK C1005X5R1A104K |
| C4            |     1 | 1 F F Q 10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105M TDK C1608X7R1A105K       |
| C6            |     0 | Not installed, ceramic capacitor (0603)                                                      |
| C7, C8        |     0 | Not installed, ceramic capacitors (1210)                                                     |
| C9            |     1 | 0.22 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E224K TDK C1608X7R1E224K    |
| C10           |     1 | 2.2 F F Q 10%, 50V X7R ceramic capacitor (1210) Murata GRM32ER72A225K TDK C3225X7R1H225K     |

<!-- image -->

## MAX1752 Evaluation Kit

## Evaluates: MAX17512

## Features

- S Operates from a 6.5V to 18V Input Supply
- S Delivers Up to 6A Output Current
- S Enable/UVLO Input
- S Resistor Programmable UVLO Threshold
- S Open-Drain FLT Power-OK (POK) Output
- S Overcurrent and Overtemperature Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C11           |     1 | 10 F F Q 10%, 35V X7R ceramic capacitor (1210) Murata GRM32ER7YA106K Taiyo Yuden GMK325F106ZH |
| JU1           |     1 | 3-pin header                                                                                  |
| L1            |     1 | 8.2 F H, 10.6A, 15.5m I inductor (13mm x 13mm x 6.5mm) Vishay IHLP5050FD-ER-8R2-M01           |
| Q1, Q2        |     2 | 80V n-channel MOSFETs (8 SO) Vishay Si4110DY                                                  |
| R1            |     1 | 30.1k I Q 1% resistor (0603)                                                                  |
| R2            |     1 | 10k I Q 1% resistor (0603)                                                                    |
| R3            |     1 | 121k I Q 1% resistor (0603)                                                                   |
| R4            |     1 | 10k I Q 5% resistor (0603)                                                                    |
| R5, R6        |     2 | 10 I Q 5% resistors (0603)                                                                    |
| R7-R11        |     5 | 0 I resistors (0603)                                                                          |
| U1            |     1 | Current source (20 TQFN-EP*) Maxim MAX17512ATP+                                               |
| U2            |     1 | Half-bridge MOSFET driver (8 SO-EP*) Maxim MAX15019BASA+                                      |
| -             |     1 | Shunt                                                                                         |
| -             |     1 | PCB: MAX17512 EVALUATION KIT                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-86294, or visit Maxim's website at www.maxim-ic.com.

1

- MAX17512	EV	kit
- 6.5V	to	18V	DC	input	power	supply	(VIN)
- 2V	DC	power	supply	(ICMD)
- Resistive	load	of	0.5 I that can dissipate 20W power
- Ammeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Set the power supply (VIN) at a voltage between 6.5V and 18V. Disable the power supply.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Set  the  2V  DC  power  supply  (ICMD)  to  a  voltage between 0.4V and 1.94V. Disable the power supply.
- 4)  Connect the positive terminal of the power supply to the ICMD PCB pad and the negative terminal to the nearest SGND PCB pad.
- 5)  Connect the positive  terminal  of  the  ammeter  to  the VOUT PCB pad, the negative terminal to one terminal of the resistive load. Connect the other terminal of the resistive load to the nearest PGND PCB pad.
- 6)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU1.
- 7)  Turn on the DC power supply.
- 8)  Verify that the ammeter is reading the average current corresponding to the current command voltage.

<!-- image -->

## MAX17512 Evaluation Kit

## Evaluates: MAX17512

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17512 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Description

| SHUNT POSITION   | EN/UVLO PIN                                             | IC OUTPUT                                         |
|------------------|---------------------------------------------------------|---------------------------------------------------|
| 1-2*             | Connected to center node of resistor- divider R1 and R2 | Enabled, UVLO level set through R1 and R2 divider |
| 2-3              | Connected to GND                                        | Disabled                                          |

* Default position.

## Detailed Description of Hardware

The MAX17512 EV kit provides a proven design to evaluate  the  MAX17512 high-speed, constant on-time, valley current regulator. The EV kit operates from a 6.5V to 18V input voltage and can deliver up to 6A. The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable control of  the  converter  output.  An  additional FLT PCB  pad  is available for monitoring the open-drain logic output.

## Regulator Enable/UndervoltageLockout Level (EN/UVLO)

The IC features an enable/undervoltage-lockout input (EN/ UVLO). For normal operation, a shunt should be installed across  pins  1-2  on  jumper  JU1.  To  disable  the  output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for jumper JU1 settings.

## Setting the UVLO Level

The IC offers an adjustable-input UVLO level. Set the voltage at which the device turns on with a resistive voltagedivider connected from VIN to GND. Connect the center node of the divider to EN/UVLO.

Choose R2 to be 10k I and then calculate R1 as follows:

<!-- formula-not-decoded -->

where R1 and R2 are in k I and V IN is in volts.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Programming the Valley of the Output (RTON)

The  IC  employs  a  'modified  constant  on-time  valley current-control  scheme'  (refer  to  the Control  Scheme section  in  the  MAX17512  IC  data  sheet)  to  control  the valley of the ouput inductor current. The heart of this control scheme is the one-shot that sets the high-side switch on-time. This fast, low-jitter, adjustable one-shot includes circuitry that varies the on-time in response to the resistance value connected between the RTON pin and SGND terminals. To set the on-time, adjust resistor R3 on the EV kit. R3 can be calculated for a given on-time as follows:

<!-- formula-not-decoded -->

where t ON  is in ns.

## Programming the Valley Current (ICMD)

The  IC  regulates  the  valley  point  of  the  output  inductor  current  depending  on  the  current-command  voltage  applied  at  the  ICMD  pin.  For  example,  the  device regulates  the  valley  current  to  5A  ±250mA  for  1.842V current-command voltage. The current-command voltage

<!-- image -->

## MAX17512 Evaluation Kit Evaluates: MAX17512

(V ICMD ) to be applied at the ICMD pin for a given inductor valley current (I VALLEY ) can be calculated as follows:

VICMD  = [(I VALLEY  x 0.28) + 0.442] in volts where I VALLEY  is in amps.

The device can deliver  a  maximum current  of  6A  and hence a clamp on the voltage on the current-commandvoltage is incorporated. Therefore, the appropriate current-command voltage range is 0.442V to 2.15V, which corresponds to a valley current range of 220mA to 6A.

For  a  given  current  command  voltage  at  the  ICMD  pin (V ICMD ) and constant on-time (t ON ) selected, the average inductor current (I AVERAGE ) can be calculated by using the following formula:

<!-- formula-not-decoded -->

where V ICMD  is the current command voltage applied at the ICMD pin, V IN  is the input voltage applied, t ON  is the constant on-time selected, and L is the output inductor selected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17512 Evaluation Kit

## Evaluates: MAX17512

<!-- image -->

Figure 1. MAX17512 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX17512 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX17512 EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX17512 Evalution Kit Evalutes: MAX17512

Figure 3. MAX17512 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX17512 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6. MAX17512 EV Kit PCB Layout-Layer 4

<!-- image -->

## Evalutes: MAX17512

Figure 7. MAX17512 EV Kit PCB Layout-Layer 5

<!-- image -->

Figure 8. MAX17512 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17512 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17512EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX17512 Evaluation Kit

## Evaluates: MAX17512

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8