<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16910C9 Evaluation Kit

## Evaluates: MAX16910C

## General Description

The MAX16910C9 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX16910C lowdropout (LDO) linear regulator. The EV kit circuit can be configured as either a fixed output voltage (3.3V or 5V) or an adjustable output voltage. The EV kit provides up 200mA current at the circuit output. The EV kit operates from a 3.5V to 30V supply.

The  EV  kit  comes  with  the  MAX16910CASA9  92.5% output-voltage  reset-threshold  IC  installed.  The  EV  kit can also evaluate the MAX16910CASA8 IC, which has an 87% output voltage reset threshold.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     0 | Not installed, electrolytic capacitor                              |
| C2            |     1 | 1 F F Q 10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H105K   |
| C3            |     1 | 4.7 F F Q 10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E475K |
| C4            |     1 | 1000pF 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102k    |

<!-- image -->

## Features

- S 3.5V to 30V Input Voltage Range
- S Configurable for 3.3V or 5V Output Voltage
- S Resistor PCB Pads for Adjusting the Output Voltage (1.5V to 11V)
- S Provides Up to 200mA Output Current
- S Low-Dropout Voltage of 280mV at 200mA
- S RESET Power-Good Output
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin headers                                                       |
| R1, R2        |     0 | Not installed, resistors (0805)                                     |
| R3            |     1 | 10k I Q 5% resistor (0603)                                          |
| U1            |     1 | 200mA automotive linear regulator (8 SO-EP*) Maxim MAX16910CASA9/V+ |
| -             |     3 | Shunts                                                              |
| -             |     1 | PCB: MAX16910C9 EVALUATION KIT                                      |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-699-2299 | www.component.tdk.com |

Note: Indicate that you are using the MAX16910C9 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX16910C9 Evaluation Kit

## Evaluates: MAX16910C

## Quick Start

## Required Equipment

- MAX16910C9	EV	kit
- 3.5V	to	30V,	300mA	power	supply
- Electronic	load	capable	of	sinking	200mA
- Digital	multimeter	(DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  shunts  are  installed  across  jumpers  JU1 (1-2), JU2 (2-3), and JU3 (1-2).
- 2)  Set the power supply to 14V and disable the output.
- 3)  Connect  the  positive  input  of  the  DMM  to  the  OUT PCB pad on the EV kit, and the negative input of the DMM to the GND PCB pad on the EV kit to measure the output voltage.
- 4)  Connect the 200mA load between the OUT and GND PCB pads on the EV kit.
- 5)  Enable the power-supply output.
- 6)  Verify that the output voltage is 5V.

## Detailed Description of Hardware

The MAX16910C9 EV kit is a fully assembled and tested PCB  for  evaluating  the  MAX16910CASA9  200mA  LDO regulator.  The  EV  kit  operates  from  3.5V  to  30V  and requires 300mA current.

The LDO regulator has a fixed 3.3V or 5V output, but can be  configured  between  1.5V  and  11V.  An  open-drain RESET output  changes  from  low  to  high  whenever  the OUT voltage rises to 92.5% of its regulated output. When OUT exceeds its rising threshold voltage, RESET remains low for the 1.25ms reset timeout period programmed by capacitor C4, and then goes high. A RESET PCB pad is available for monitoring the output.

## Enable (JU1)

Jumper  JU1  configures  the  EV  kit's  output  for  turn-on/ off  control.  Install  a  shunt  across  pins  1-2  to  enable  the circuit  output.  Install  a  shunt  across  pins  2-3  to  disable the  output.  The  output  can  also  be  externally  controlled by placing an independent voltage source at the ENABLE PCB pad when a shunt is not installed at JU1. See Table 1 for proper JU1 configuration.

## Output-Voltage Selection

Jumpers JU2 and JU3 configure the EV kit circuit to operate  in  fixed  output-voltage  or  adjustable  output-voltage mode.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

In  fixed  output-voltage  mode,  the  output  voltage  is  set to 3.3V or 5V using jumper JU3. To configure the EV kit circuit for fixed output mode, install a shunt across pins 2-3 on jumper JU2. Place a shunt across pins 1-2 on JU3 for the 5V preset output. Place a shunt across pins 2-3 for the 3.3V preset output.

In  adjustable  output-voltage  mode,  the  output  voltage is  set  using  a  resistor-divider  network  from  the  OUT to  SETOV  pins.  To  configure  the  circuit  for  adjustable output-voltage mode, install a shunt across pins 1-2 on jumper  JU2  and  remove  the  shunt  at  jumper  JU3.  The output  voltage  can  be  set  between  1.5V  to  11V  using surface-mount 0805 resistor PCB pads R1 and R2.

To set the output voltage, select resistor R2 to be less than or equal to 100k I and  use  the  following  equation to compute R1:

<!-- formula-not-decoded -->

where  V OUT   is  the  desired  output  voltage,  V SETOV   is 1.25V, and R1 is in k I .

See  Table  2  for  proper  jumper  configurations  when operating the EV kit circuit in fixed or adjustable outputvoltage mode.

## RESET Output

The IC has an open-drain RESET output that goes high impedance after the output rises 92.5% (typ) above its regulated output. Pullup resistor R3 pulls the RESET PCB pad up to the OUT voltage.

## Table 1. Enable Control (JU1)

| SHUNT POSITION   | ENABLE PIN       | OUTPUT   |
|------------------|------------------|----------|
| 1- 2             | Connected to IN  | Enabled  |
| 2-3              | Connected to GND | Disabled |

## Table 2. Output-Voltage Configurations (JU2, JU3)

| SHUNT POSITION   | SHUNT POSITION   | OUTPUT VOLTAGE                               |
|------------------|------------------|----------------------------------------------|
| JU2              | JU3              | OUTPUT VOLTAGE                               |
| 1 -2             | Not installed    | Set by external feedback resistors R1 and R2 |
| 2 -3             | 1-2              | 5V                                           |
| 2 -3             | 2-3              | 3.3V                                         |

## MAX16910C9 Evaluation Kit

## Evaluates: MAX16910C

<!-- image -->

Figure 1. MAX16910C9 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16910C9 Evalution Kit

Figure 2. MAX16910C9 EV Kit Component Placement GuideSilkscreen

<!-- image -->

## Evalutes: MAX16910C

Figure 3. MAX16910C9 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16910C9 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART             | EV Kit   |
|------------------|----------|
| MAX16910C9EVKIT# | EV Kit   |

# Denotes RoHS compliant.

## MAX16910C9 Evaluation Kit

## Evaluates: MAX16910C

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6