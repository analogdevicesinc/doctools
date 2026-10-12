<!-- lastmod 2022-08-02 -->
<!-- image -->

WIXVW

## MAX16922 Evaluation Kit

## General Description

## Features

The MAX16922 evaluation kit (EV kit) is  an  assembled and tested circuit board that contains all the components necessary  to  evaluate  the  MAX16922  IC  family.  The MAX16922 is a dual-output, step-down DC-DC converter and dual low dropout (LDO) linear regulator. The EV kit is powered from a DC supply providing 6V to 18V and up to 3A. The EV kit is designed to withstand a load-dump condition up to 45V.

The  EV  kit  is  shipped  with  the  MAX16922ATPE/V+ installed. This MAX16922 version is capable of delivering 5V at 1.2A from the first step-down DC-DC converter (DC-DC1)  and  3.3V  at  up  to  600mA  from  the  second step-down  DC-DC  converter  (DC-DC2).  The  first  LDO linear regulator (LDO1) provides 2.5V and up to 300mA, while  the  second  LDO  linear  regulator  (LDO2)  provides 1.8V and up to 300mA. The MAX16922 switching frequency  is  2.2MHz  and  the  two  DC-DC  converters switch 180 N out of phase with respect to each other. The DC-DC2 can operate in PWM mode to prevent AM band interference  or  high-efficiency  skip  mode.  The  EV  kit includes an enable input (EN) and a power-good reset output ( RESET ) to monitor the output voltages of the two DC-DC converters.

- S 6V to 18V Input Supply Voltage Range
- S Load-Dump Protection Circuit Withstands Input Transients Up to 45V
- S 5V at 1.2A Output (OUT1 from DC-DC1)
- S 3.3V at 600mA Output (OUT2 from DC-DC2)
- S 2.5V at 300mA Output (OUT3 from LDO1)
- S 1.8V at 300mA Output (OUT4 from LDO2)
- S 180 N Out-of-Phase Operation Reduces Input Capacitance
- S 2.2MHz Switching Frequency
- S Forced-PWM and Skip Mode Operation
- S Enable Input (EN)
- S Power-Good Reset Output ( RESET )
- S Evaluates the MAX16922 Family in a 20-Pin TQFN (5mm x 5mm x 0.8mm) Package
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16922EVKIT+ | EV Kit |

## Component List

| Designation   |   Qty | Description                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| C1            |     1 | 47 F F Q 20%, 50V aluminum electrolytic capacitor (Size E or 8mm x 6.2mm) Panasonic EEE-FK1H470P |
| C2, C3        |     2 | 0.047 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H473K                         |
| C4            |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K                              |
| C5-C10        |     6 | 4.7 F F Q 10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E475K                           |

| Designation   |   Qty | Description                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C11           |     1 | 0.1uF Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K        |
| C12, C13      |     2 | 10 F F Q 10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A106K      |
| D1            |     1 | 40V, 1.1A Schottky diode (PowerDI-123) Diodes Inc. DFLS140 (Top Mark: F04) |
| D2            |     1 | 200V, 1A diode (SMA) Diodes Inc. ES1D (Top Mark: ES1D)                     |
| JU1, JU2      |     2 | 2-pin headers                                                              |

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX16922 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| Designation   |   Qty | Description                                      |
|---------------|-------|--------------------------------------------------|
| JU3, JU4      |     2 | 3-pin headers                                    |
| L1            |     1 | 4.7 F H, 2.0A inductor TDK LTF5022-4R7N2R0       |
| L2            |     1 | 2.2 F H, 1.32A inductor Coilcraft EPL2014-222MLB |
| PGND, VBAT    |     2 | Uninsulated panel-mount banana jacks             |
| R1            |     1 | 100k I Q 5% resistor (0402)                      |

| Designation   |   Qty | Description                                                  |
|---------------|-------|--------------------------------------------------------------|
| R2, R3        |     2 | 20k I Q 5% resistors (0402)                                  |
| U1            |     1 | Dual step-down converter (20 TQFN-EP*) Maxim MAX16922ATPE/V+ |
| -             |     4 | Shunts                                                       |
| -             |     1 | PCB: MAX16922 EVALUATION KIT+                                |

/V denotes an automotive qualified part.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16922 when contacting these component suppliers.

## Quick Start

## Required Equipment

- Adjustable 6V to 18V, 3A DC power supply
- Up to four electronic (e.g., HP6060B) or passive loads
- Voltmeter
- 3) Verify that a shunt is installed on pins 1-2 of jumper JU3 (LDO1 powered from OUT1).
- 4) Verify that a shunt is installed on pins 2-3 of jumper JU4 (LDO2 powered from OUT2).
- 5) Connect  the  electronic  or  passive  loads  to  the desired outputs.
- 6) Connect a 6V to 18V DC power supply to the VBAT and PGND binding posts; set the voltage to 12V.
- 7) Turn on the power supply.
- 8) Enable the electronic loads.
- 9) Verify that OUT1 is 5V, OUT2 is 3.3V, OUT3 is 2.5V, and OUT4 is 1.8V.

<!-- image -->

## Procedure

The  MAX16922  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed on jumper JU1 (EV kit enabled).
- 2) Verify that a shunt is installed on jumper JU2 (DCDC2 on forced-PWM mode).

2    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16922 Evaluation Kit

## Detailed Description of Hardware

The MAX16922 evaluation kit (EV kit) contains two stepdown  DC-DC  converters  and  two  low  dropout  (LDO) linear regulators. The EV kit is designed to operate from a DC power supply that provides 6V to 18V and at least 3A of current. The MAX16922's converter switching frequency is 2.2MHz. The DC-DC2 operates in either PWM mode or skip mode.

The DC-DC1 generates 5V and provides up to 1.2A of current.  The  DC-DC2  generates  3.3V  and  provides  up to  600mA  of  current.  The  LDO1  generates  2.5V  and provides up to 300mA of current. The LDO2 generates 1.8V and provides up to 300mA of current. For different output  voltages,  replace  U1  with  the  desired  IC  in  the MAX16922  IC  family.  Refer  to  the  MAX16922  IC  data sheet for a complete list of the available IC versions.

The DC-DC1 switching frequency is 2.2MHz and enters skip mode automatically under light loads to prevent an overvoltage condition from occurring at the output. The DC-DC2 switching-frequency mode is jumper selectable between forced-PWM mode and skip mode. The DC-DC converters switch 180 N out of phase with respect to each other.

## Enable Input (EN)

The  MAX16922  EV  kit  provides  an  enable  input  (EN)  to enable  or  disable  the  MAX16922  DC-DC1  and  DC-DC2. Since  the  LDO  inputs  are  supplied  by  either  DC-DC1  or DC-DC2, the LDO outputs are also controlled by the logic

## Table 1. Jumper JU1 Functions (EN)

| SHUNT POSITION   | EN PIN CONNECTED TO        | MAX16922 EV KIT FUNCTION   |
|------------------|----------------------------|----------------------------|
| Installed*       | PV1                        | Enabled                    |
| Not installed    | PGND (through resistor R1) | Disabled                   |

<!-- image -->

level of the EN pin. When the EN pin is logic-high, all EV kit outputs are enabled. When the EN pin is logic-low, all EV  kit  outputs  are  disabled.  The  MAX16922  EN  pin  is an input logic pin that is active-high and TTL compatible (see Table 1).

## Power-Good Reset Output ( RESET )

The MAX16922 EV kit provides a power-good reset output signal ( RESET ) to validate the outputs of the DC-DC1 and DC-DC2. RESET is  pulled  up  to  OUT1  by  resistor R2. The power-good reset output signal pulls low when either converter output drops below 90% of their nominal regulated voltages. The RESET output signal is available on the RESET PCB pad.

## DC-DC2 Switching Frequency Mode (PWM)

The MAX16922 EV kit provides an option to select the switching  frequency  mode  of  the  600mA  DC-DC  converter (DC-DC2). The DC-DC2 switching frequency can be set to forced-PWM mode to prevent AM band interference or high-efficiency skip mode. When PWM is high, the DC-DC2 switching frequency is in PWM mode. When PWM is low, the DC-DC2 switching frequency is in skip mode (see Table 2).

## LDO1/LDO2 Input Supplies (PV3 and PV4)

The MAX16922 EV kit provides an option to select the input supplies for the two LDOs. The LDO1/LDO2 inputs are selectable between OUT1 and OUT2 (see Tables 3 and 4).

## Jumper Selection

## Enable, EN (JU1)

The MAX16922 EV kit provides a jumper (JU1) to enable or disable the MAX16922 IC, thus reducing the supply current to the EV kit. To disable the MAX16922, remove the shunt from JU1. Table 1 lists the options to enable or disable the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16922 Evaluation Kit

## DC-DC2 Switching Frequency Mode, PWM (JU2)

The  MAX16922  EV  kit  circuit  features  a  jumper  (JU2) to  set  the  DC-DC2  switching  frequency  mode  to  PWM mode or skip mode. Table 2 lists the various JU2 jumper options  for  configuring  DC-DC2's  switching  frequency mode.

## LDO1 Input Supply, PV3 (JU3)

The MAX16922 EV kit provides an option to select the LDO1  input  supply.  The  LDO1  input  supply  is  selectable between OUT1 and OUT2. Jumper JU3 selects the LDO1 input supply on the EV kit. Table 3 lists the selectable JU3 jumper options.

Table 2. Jumper JU2 Functions (PWM)

| SHUNT POSITION   | PWM PIN CONNECTED TO       | DC-DC2 SWITCHING FREQUENCY MODE   |
|------------------|----------------------------|-----------------------------------|
| Installed*       | OUT1                       | PWM mode                          |
| Not installed    | PGND (through resistor R3) | Skip mode                         |

* Default position.

Table 3. Jumper JU3 Functions (PV3)

| SHUNT POSITION   | PV3 PIN CONNECTED TO   | LDO1 INPUT SUPPLY   |
|------------------|------------------------|---------------------|
| 1-2*             | OUT1                   | DC-DC1 output       |
| 2-3              | OUT2                   | DC-DC2 output       |
| Not installed    | Unconnected            | None (LDO1 off)     |

4    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## LDO2 Input Supply, PV4 (JU4)

The MAX16922 EV kit provides an option to select the LDO2  input  supply.  The  LDO2  input  supply  is  selectable between OUT1 and OUT2. Jumper JU4 selects the LDO2 input supply on the EV kit. Table 4 lists the selectable JU4 jumper options.

## Other Output Voltages

The MAX16922 IC is available in different output-voltage versions.  Refer  to  the  MAX16922  IC  data  sheet  for  a complete list of the MAX16922 IC family.

The MAX16922 EV kit is designed to evaluate all the various voltage versions of the MAX16922. To evaluate other MAX16922  IC  versions,  replace  U1  with  the  desired TQFN IC.

Table 4. Jumper JU4 Functions (PV4)

| SHUNT POSITION   | PV4 PIN CONNECTED TO   | LDO2 INPUT SUPPLY   |
|------------------|------------------------|---------------------|
| 1-2              | OUT1                   | DC-DC1 output       |
| 2-3*             | OUT2                   | DC-DC2 output       |
| Not installed    | Unconnected            | None (LDO2 off)     |

<!-- image -->

## MAX16922 Evaluation Kit

<!-- image -->

Figure 1. MAX16922 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX16922 Evaluation Kit

<!-- image -->

Figure 2. MAX16922 EV Kit Component Placement GuideComponent Side

Figure 3. MAX16922 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16922 EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

6    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16922 Evaluation Kit

Figure 5. MAX16922 EV Kit PCB Layout-Layer 3 (PWR)

<!-- image -->

Figure 6. MAX16922 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

7