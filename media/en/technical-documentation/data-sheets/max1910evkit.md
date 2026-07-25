<!-- lastmod 2022-08-03 -->
## General Description

The MAX1910 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) containing a complete circuit driving four parallel white LEDs. The circuit operates from a 2.7V to 5.3V input supply. A MAX1910 comes installed on the board, but the EV kit can also be used to evaluate the MAX1912.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C2        |     2 | 0.47µF ± 10%, 10V X5R ceramic capacitors (0603) Taiyo Yuden LMK107BJ474KA |
| C3, C4        |     2 | 2.2µF ± 10%, 10V X5R ceramic capacitors (0805) Taiyo Yuden LMK212BJ225KG  |
| D1-D4         |     4 | White LEDs (surface-mount,3mmx2mm) Kingbright AA3020RWC/A                 |
| JU1           |     1 | 3-pin header                                                              |
| R1-R4         |     4 | 15 Ω ± 5% resistors (0805)                                                |
| R5, R7        |     0 | Not installed, resistors (0805)-PCB shorts                                |
| R6            |     0 | Not installed, resistor (0805)                                            |
| R11           |     1 | 1 Ω ± 5% resistor (0805)                                                  |
| R13           |     1 | 100k Ω ± 5% resistor (0805)                                               |
| U1            |     1 | MAX1910EUB+ (10-pin µMAX)                                                 |
| -             |     1 | Shunt                                                                     |
| -             |     1 | PCB: MAX1910 Evaluation Kit+                                              |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE            |
|-------------|--------------|--------------------|
| Kamaya      | 260-489-1533 | www.kamaya.com     |
| Kingbright  | 909-468-0900 | www.kingbright.com |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com    |

Note: Indicate that you are using the MAX1910 or MAX1912 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Current-Regulated Charge Pump
- ♦ 60mA Output Current
- ♦ No Inductor Required
- ♦ 750kHz Operation Minimizes Input Ripple
- ♦ Uses Small Ceramic Capacitors
- ♦ Load Disconnected in Shutdown
- ♦ 1 µ A Shutdown Current
- ♦ Small 10-Pin µ MAX ® Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX1910EVKIT  | EV Kit |
| MAX1910EVKIT+ | EV Kit |

## Quick Start

## Procedure

The MAX1910 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed:

- 1) Preset the power supply to between 2.7V and 4.2V.
- 2) Verify shunt JU1 is on pins 1-2 (enable).
- 3) Connect the positive (+) lead of the power supply to the IN1 pad.
- 4) Connect the negative (-) lead of the power supply to the GND pad.
- 5) Turn on the power supply.
- 6) Verify that the LEDs are lit.
- 7) Vary the power supply from 2.7V to 4.2V.
- 8) To verify shutdown mode, move shunt JU1 to pins 2-3. The LEDs turn off.
- 9) Move shunt JU1 back to pins 1-2. The LEDs turn back on.

Maxim Integrated Products

1

## MAX1910 Evaluation Kit

## Detailed Description

## Jumper Selection

## Shutdown Mode

The MAX1910 features a shutdown mode that reduces input current to 0.1µA (typ). Place the shunt across pins 1-2 of JU1 for normal operation. Place the shunt across pins 2-3 of JU1 for shutdown mode (Table 1).

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | OUTPUT   |
|------------------|------------------|----------|
| 1-2              | Connected to IN  | Enabled  |
| 2-3              | Connected to GND | Shutdown |

Regulating the Total Current Through LEDs In the default configuration, the current through LED D4 is set by the resistor R4. The current through the other LEDs tracks the current in the regulated LED. Refer to the MAX1910/MAX1912 IC data sheet for other LED matching and ballasting configurations.

The EV kit can also be configured to regulate the total current through the LEDs by following these steps:

Figure 1. MAX1910 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 1) Cut the PCB traces that short the pads for R5 and R7.
- 2) Short the pads of R6.
- 3) R5 remains open.
- 4) Install  a  resistor  in  R7.  R7  sets  the  sum  of  all  LED currents, and its value is found from:

<!-- formula-not-decoded -->

## Connecting an External Load

To use an external load in place of the four LEDs (such as an LED module), first follow the steps listed in the Regulating the Total Current Through LEDs section. Next, remove the four LEDs (D1-D4), or the four ballast resistors  (R1-R4). An external load can now be connected from OUT1+ to OUT1-. The current through the external load is regulated to the current set by R7.

## Evaluating the MAX1912

To evaluate the MAX1912, carefully remove U1 from the PCB and replace it with the MAX1912. Free samples of the MAX1912 can be obtained from Maxim.

<!-- image -->

Figure 2. MAX1910 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1910 Evaluation Kit

Figure 3. MAX1910 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX1910 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1910 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | REVISION DESCRIPTION                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/03            | Initial release                                                                                                                                              | -               |
|                 1 | 11/07           | Updated Ordering Information table format, adding lead-free and RoHS- compliant part; changed part number for D1-D4 in Component List ; various style edits. | 1-3             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600