<!-- lastmod 2022-08-02 -->
## MAX17783CEVKITA# Evaluation Kit

## General Description

The  MAX17783CEVKITA#  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX17783C high-efficiency, high-voltage, Himalaya step-down DC-DC converter.  The  EV  kit  generates  3.3V  output  at  load currents  up  to  2.5A  from  a  6V  to  60V  input  sup -ply.  The  switching  frequency  of  the  EV  kit  is  pre -set  to  500kHz  for  optimum  efficiency  and  component size.  The  EV  kit  features  adjustable  input  undervolt -age  lockout,  adjustable  soft-start,  open-drain RESET signal, and external clock synchronization. The EV kit also provides a good layout example, which is optimized for thermal performance. For more details about the IC ben -efits and features, refer to the MAX17783C IC data sheet.

## Features

- Operates from a 6V to 60V Input Supply
- 3.3V Output Voltage
- Delivers Up to 2.5A Output Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- External Clock Synchronization
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17783C in 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17783CEVKITA#
- 6V to 60V, 3A DC input power supply
- Load capable of sinking 2.5A
- 2 digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN  PCB  pad  and  the  negative  terminal  to the  nearest  PGND  PCB  pad.  Connect  the  positive terminal of the 2.5A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are not installed across the pins on jumper JU1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Ensure  that  input  voltage  to  be  6V  or  higher,  with which EN/UVLO voltage is more than EN/UVLO ris -ing threshold.
- 8) Verify that the DVM displays 3.3V.
- 9) Connect the other DVM across the RESET pad and GND. Verify that the DVM displays 5V.
- 10)  The power supply voltage can be set at any voltage between 6V and 60V.
- 11) Reduce the input voltage to 4.7V which is below the EN/UVLO falling threshold.
- 12)  Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 0V.
- 13) Verify that the DVM across the RESET pad and the nearest GND pad displays 0V.
- 14) Disable the input power supply.

<!-- image -->

## MAX17783CEVKITA# Evaluation Kit

## Detailed Description

The  MAX17783CEVKITA#  provides  a  proven  design  to evaluate  the  MAX17783C  high-efficiency,  high-voltage, Himalaya step-down DC-DC converter. The EV kit gener -ates 3.3V output at load currents up to 2.5A from a 6V to 60V input supply. The EV kit features a 500kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable  the  output  at  a  desired  input  voltage  or  enable the  converter  through  an  external  enable  signal  on  the EN/UVLO PCB pad. The RT/SYNC PCB pad allows the application of an external clock to synchronize the device. An additional RESET PCB pad is available for monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjust -ed by the value of the external soft-start capacitor (C11) connected  between  SS  and  GND  pins.  The  selected output capacitance (C SEL ) and the output voltage (V OUT ) determine  the  minimum  required  soft-start  capacitor  as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to GND.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17783C  offers  an  Enable  and  adjustable input  undervoltage  lockout  feature.  In  this  EV  kit,  for normal  operation,  leave  the  EN/UVLO  jumper  (JU1) open. When JU1 is left open, the MAX17783C is enabled when the input voltage rises above 5.6V. To disable the MAX17783C, install  a  jumper  across  pins  1-2  on  JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device.  Leave  JU1  open  when  external  Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

## Evaluates: MAX17783C in 3.3V Output-Voltage Application

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on. For more details about setting the undervoltage lockout level, refer to the MAX17783C data sheet.

## External Clock Synchronization (RT/SYNC)

The EV kit provides an RT/SYNC PCB pad to synchronize the MAX17783C to an optional external clock. For more details about external clock synchronization, refer to the MAX17783C data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status of the converter. RESET goes high 1024 switching cycles  after  V OUT   rises  above  95%  (typ)  of  its  nominal regulated  output  voltage. RESET goes  low  when  V OUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17783CEVKITA# PCB layout provides an option -al electrolytic capacitor (C6 = 33μF/100V). This capacitor limits  the  peak  voltage  at  the  input  of  the  MAX17783C when the DC input source is 'Hot-Plugged' to the EV kit input  terminals with input cables. The equivalent series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the  oscillations  caused  by  the  interaction  of  the  induc -tance of the long input cables, and the ceramic capacitors at the buck converter input.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                                |
|------------------|------------------------------------------------------------|-----------------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between IN and GND |
| 1-2              | Connected to GND                                           | Disabled                                                              |

* Default position.

## MAX17783CEVKITA# EV Kit Performance Report

(V IN = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17783CEVKITA# EV Kit Performance Report (continued)

(V IN = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17783CEVKITA# Evaluation Kit

## Component Suppliers

| SUPPLIER            | WEBSITE                |
|---------------------|------------------------|
| Coilcraft, Inc.     | www.coilcraft.com      |
| Murata Americas     | www.murataamericas.com |
| Panasonic Corp.     | www.panasonic.com      |
| SullinsCorp         | www.sullinscorp.com    |
| Diodes Incorporated | www.diodes.com         |
| Onsemi              | www.onsemi.com         |
| TDK Corp.           | www.tdk.com            |

Note: Indicate that you are using the MAX17783C when contacting these component suppliers.

Evaluates: MAX17783C

in 3.3V Output-Voltage Application

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17783CEVKITA# | EV Kit |

# Denotes RoHS compliance.

## MAX17783CEVKITA# EV Kit Bill of Materials

|   S.NO | DESIGNATOR       | DESCRIPTION                                                 |   QUANTITY | MANUFACTURER PART NUMBER       |
|--------|------------------|-------------------------------------------------------------|------------|--------------------------------|
|      1 | C1, C8, C18, C19 | 150pF, 5%, 100V, COG,Ceramic capacitor (0402)               |          4 | TDK C1005C0G2A151J050BA        |
|      2 | C3, C10          | 0.1μF, 10%, 100V, X7R,Ceramic capacitor (0603)              |          2 | MURATA GRM188R72A104KA35       |
|      3 | C6               | 33uF, 20%, 80V, Electrolytic capacitor                      |          1 | PANASONIC EEE-FK1K330P         |
|      4 | C7               | 4.7μF, 10%, 100V, X7R,Ceramic capacitor (1206)              |          1 | MURATA GRM31CZ72A475KE11       |
|      5 | C11              | 5600pF, 10%, 25V, X7R,Ceramic capacitor (0402)              |          1 | MURATA GRM155R71E562KA01       |
|      6 | C12, C20         | 0.1μF, 10%, 16V, X7R,Ceramic capacitor (0402)               |          2 | MURATA GRM155R71C104KA88       |
|      7 | C13              | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)               |          1 | MURATA GRM188R71A225KE15       |
|      8 | C14              | 100pF,10%,50V,X7R,0402,Ceramic capacitor(0402)              |          1 | MURATA GRM1555C1H101JA01D      |
|      9 | C15              | 47pF,10%,50V,X7R,0402,Ceramic capacitor(0402)               |          1 | MURATA GRM1555C1H470JA01       |
|     10 | C16              | 47μF, 10%, 10V, X7R,Ceramic capacitor (1210)                |          1 | MURATA GRM32ER71A476KE15       |
|     11 | D1               | 70V, 0.07A, Schottky Barrier Diode, SMT (SOD-923)           |          1 | ON SEMICONDUCTOR NSR0170P2T5G  |
|     12 | D2               | 80V, 3A, Schottky Barrier Rectifier, SMT (SMB)              |          1 | DIODES INCORPORATED B380B-13-F |
|     13 | D3               | 20V, 0.5A, Schottky Barrier Diode, SMT (DSN2)               |          1 | ON SEMICONDUCTOR NSR05F20NXT5G |
|     14 | L1               | INDUCTOR, 5.6μH, 5.3A (5.5mm X 5.5mm)                       |          1 | COILCRAFT XAL5050-562ME        |
|     15 | R1               | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                         |          1 |                                |
|     16 | R2               | 909kΩ, ±1%, 1/10W, Resistor (0603)                          |          1 |                                |
|     17 | R3               | 113kΩ, ±1%, 1/16W, Resistor (0402)                          |          1 |                                |
|     18 | R4               | 42.2kΩ, ±1%, 1/16W, Resistor (0402)                         |          1 |                                |
|     19 | R5               | 40.2kΩ, ±1%, 1/16W, Resistor (0402)                         |          1 |                                |
|     20 | R6               | 10kΩ, ±1%, 1/16W, Resistor (0402)                           |          1 |                                |
|     21 | R7               | 1kΩ, ±1%, 1/16W, Resistor (0402)                            |          1 |                                |
|     22 | U1               | Asynchronous Buck Converter, MAX17783C, 10 TDFN (3mm x 3mm) |          1 | MAXIM MAX17783CATB+            |
|     23 | JU1              | Connector Header Through Hole 2 position 0.050" (1.27mm)    |          1 | SULLINS GRPB021VWVN-RC         |
|     24 | SU1              | Jumper Socket (1.27mm)                                      |          1 | HARWIN M50-2030005             |
|     25 | L2               | Open: Inductor (4mm x 4mm)                                  |          0 |                                |
|     26 | C2               | Open: Capacitor (0603)                                      |          0 |                                |
|     27 | C4, C5           | Open: Capacitor (1210)                                      |          0 |                                |
|     28 | C9, C17          | Open: Capacitor (0402)                                      |          0 |                                |
|     29 | C21              | Open: Capacitor (1206)                                      |          0 |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | Not Installed          |

Evaluates: MAX17783C

in 3.3V Output-Voltage Application

## MAX17783CEVKITA# EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX17783C

## MAX17783CEVKITA# EV Kit PCB Layout Diagrams

<!-- image -->

MAX17783CEVKITA# EV kit Component Placement GuideTop Silkscreen

MAX17783CEVKITA# EV kit PCB Layout Diagram-Top View

<!-- image -->

MAX17783CEVKITA# EV kit PCB Layout DiagramLayer 2\_GND

<!-- image -->

Evaluates: MAX17783C

in 3.3V Output-Voltage Application

## MAX17783CEVKITA# EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17783CEVKITA# EV kit PCB Layout DiagramLayer 3\_GND

MAX17783CEVKITA# EV kit PCB Layout DiagramBottom View

<!-- image -->

MAX17783CEVKITA# EV kit PCB Layout DiagramBottom Silkscreen

<!-- image -->

## MAX17783CEVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 6/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17783C

in 3.3V Output-Voltage Application