<!-- lastmod 2022-08-04 -->
## MAX17760BEVKIT# Evaluation Kit

## General Description

The MAX17760BEVKIT# evaluation kit (EV kit) provides a proven design to evaluate the MAX17760 high-efficiency, high-voltage,  synchronous  step-down  DC-DC  converter in  a  TDFN  package. The  EV  kit  generates  12V  at  load currents  up  to  300mA  from  a  16V  to  76V  input  supply. The  EV  kit  features  a  400kHz  switching  frequency  for optimum efficiency and component size. The EV kit fea -tures  adjustable  input  undervoltage  lockout,  adjustable soft-start,  adjustable  switching  frequency,  open-drain RESET signal, and  external clock synchronization. The EV kit also provides a good layout example, which is optimized for thermal performance. For more details about the IC Benefits and Features, refer to the MAX17760 IC data sheet.

## Features

- Operates from a 16V to 76V Input Supply
- 12V Output Voltage
- Up to 300mA Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE Pin to Select between PWM or PFM Modes
- Bootstrap Bias Input for Improved Efficiency
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17760 in 12V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17760BEVKIT#
- 76V, 0.5A DC input power supply
- Load capable of sinking 300mA
- 2 digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set  the  power  supply  at  a  voltage  of  14V.  Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive termi -nal of the 300mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad, and the other DVM across the RESET PCB pad and SGND PCB pad.
- 4) Verify  that  shunts  are  installed  across  pins  1-2  on jumper  JU1  and  JU2  (see Table  1  and Table  2  for details), and JU3 is open.
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that both the DVMs display approximately 0V.
- 8) Increase the input voltage to 16V, which is just above the EN/UVLO rising threshold.
- 9) Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 12V.
- 10) Verify that the DVM across the RESET PCB pad and the SGND PCB pad displays 5V.
- 11) The power-supply voltage can be set at any voltage between 16V and 76V and both the DVMs still read the same voltages.
- 12)  Reduce the input voltage to 11.5V, which is below the EN/UVLO falling threshold.
- 13)  Verify that both the DVMs display approximately 0V.
- 14)  Disable the input power supply.

<!-- image -->

## MAX17760BEVKIT# Evaluation Kit

## Detailed Description

The  MAX17760BEVKIT#  provides  a  proven  design  to evaluate  the  MAX17760  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates 12V at load currents up to 300mA from a 16V to 76V input supply. The EV kit features a 400kHz switch -ing frequency for optimum efficiency and component size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage or enable the converter through an external enable signal on the EN/ UVLO PCB pad. The RT/SYNC PCB pad and JU3 allow an external clock to synchronize the device. An additional RESET PCB  pad  is  available  for  monitoring  when  the converter output is in regulation.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17760 offers an Enable and an adjustable input undervoltage lockout feature. In this EV kit, for always-on operation,  leave  the  EN/UVLO  jumper  (JU1)  open.  To disable the MAX17760, install a shunt across pins 2-3 on JU1. See Table 1 for  JU1  settings.  The  EN/UVLO  PCB pad on the EV kit supports external Enable/Disable con -trol of the device. Leave JU1 open when external Enable/ Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when a shunt is connected across pins 1-2 on JU1.

Choose R1 as follows:

<!-- formula-not-decoded -->

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                                | MAX17760 OUTPUT                                         |
|----------|------------------|------------------------------------------------------------|---------------------------------------------------------|
| JU1      | 1-2*             | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| JU1      | Not installed    | Floating                                                   | Always ON                                               |
| JU1      | 2-3              | Connected to SGND                                          | Disabled                                                |

* Default Position

## Evaluates: MAX17760 in 12V Output-Voltage Application

where, V INU  is the voltage at which the device is required to turn on, and R1 is in Ω. Calculate the value of R2 as follows:

<!-- formula-not-decoded -->

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjust -ed by the value of the external soft-start capacitor (C6) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  con -nected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 0.9ms soft-start time, a 5.6nF capacitor should be connected from the SS pin to SGND.

## Mode of Operation Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17760  to  operate  either  in  PWM  or  PFM  modes. Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation. Refer to the MAX17760 IC data sheet for  more details on the modes of operation.

The mode of operation cannot be changed on-the-fly after power-up.

## Table 2. Modes Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MODE OF OPERATION   |
|------------------|-------------------|---------------------|
| 1-2*             | Connected to SGND | PWM                 |
| Not Installed    | Unconnected       | PFM                 |

* Default Setting

## MAX17760BEVKIT# Evaluation Kit

## External Clock Synchronization (RT/SYNC)

The EV kit provides an RT/SYNC PCB pad, to synchro -nize the MAX17760 to an optional external clock. Short jumper  (JU3)  when  external  clock  signals  are  applied. See Table 3 for JU3 settings. In the presence of a valid external clock for synchronization, the MAX17760 oper -ates in PWM mode only. For more details about external clock  synchronization,  refer  to  the  MAX17760  IC  data sheet.

## Table 3. External Clock Synchronization Jumper (JU3) Settings

| SHUNT POSITION   | RT/SYNC PIN                                            |
|------------------|--------------------------------------------------------|
| 1-2              | Connected to RT/SYNC PCB pad through a 22pF capacitor. |
| Not Installed*   | Not connected to RT/SYNC PCB pad                       |

* Default Position

## Evaluates: MAX17760 in 12V Output-Voltage Application

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status  of  the  converter. RESET goes  high  when  V OUT rises above 95% (typ) of its nominal regulated output volt -age. RESET goes low when V OUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The  MAX17760BEVKIT#  EV  kit  PCB  layout  provides an  optional  electrolytic  capacitor  (C1  =  22μF/100V). This capacitor limits the peak voltage at the input of the MAX17760 when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor  dampens the oscillations  caused  by  the  inter -action of the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## MAX17760BEVKIT# Performance Report

(V OUT = 12V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## SOFT-START/SHUTDOWN THROUGH EN/UVLO

CONDITIONS: V IN = 24V, 40Ω RESISTIVE LOAD

<!-- image -->

## 12V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17760BEVKIT# Performance Report (continued)

(V OUT = 12V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17760BEVKIT# Performance Report (continued)

(V OUT = 12V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17760BEVKIT# Performance Report (continued)

(V OUT = 12V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

CONDITIONS: V IN  = 24V, 40Ω RESISTIVE LOAD

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: V IN  = 48V, 40Ω RESISTIVE LOAD

<!-- image -->

## Component Suppliers

| SUPPLIER          | WEBSITE             |
|-------------------|---------------------|
| Murata Americas   | www.murata.com      |
| Panasonic Corp.   | www.panasonic.com   |
| TDK Corp.         | www.tdk.com         |
| SULLINS           | www.sullinscorp.com |
| Wurth Electronics | www.we-online.com   |
| Kemet             | www.kemet.com       |

Note: Indicate that you are using the MAX17760 when contacting these component suppliers.

## Evaluates: MAX17760 in 12V Output-Voltage Application

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17760BEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17760BEVKIT# Evaluation Kit

## MAX17760BEVKIT# EV Kit Bill of Materials

|   S.No | DESIGNATOR    | DESCRIPTION                                     |   QTY | MANUFACTURER PART NUMBER   |
|--------|---------------|-------------------------------------------------|-------|----------------------------|
|      1 | C1            | 22uF±20%, 100V, Electrolytic capacitor          |     1 | PANASONIC EEE-TG2A220UP    |
|      2 | C2            | 1µF± 10%; 100V; X7R; Ceramic Capacitor (1206)   |     1 | TDK C3216X7R2A105K160AA    |
|      3 | C3, C14       | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)  |     2 | MURATA GRM188R72A104KA35   |
|      4 | C4, C13       | 220pF±10%; 100V; X7R; Ceramic Capacitor (0603)  |     2 | KEMET C0603C221K1GAC       |
|      5 | C5            | 22pF±5%; 50V; C0G; Ceramic Capacitor (0402)     |     1 | MURATA GRM1555C1H220JA01   |
|      6 | C6            | 5600pF± 10%; 25V; X7R; Ceramic Capacitor (0402) |     1 | MURATA GRM155R71E562KA01   |
|      7 | C7            | 0.1µF±10%; 50V; X7R; Ceramic Capacitor (0402)   |     1 | MURATA GCM155R71H104KE02   |
|      8 | C8            | 1µF±10%; 6.3V; X7R; Ceramic Capacitor (0603)    |     1 | MURATA GRM188R70J105KA01   |
|      9 | C9            | 4.7µF±10%; 35V; X7R; Ceramic Capacitor (1206)   |     1 | TDK C3216X7R1V475K160AB    |
|     10 | C11           | 0.1µF±10%; 16V; X7R; Ceramic Capacitor (0402)   |     1 | MURATA GRM155R71C104KA88   |
|     11 | JU1           | 3-pin header                                    |     1 | SULLINS PEC03SAAN          |
|     12 | JU2, JU3      | 2-pin header                                    |     2 | SULLINS PEC02SAAN          |
|     13 | L1            | INDUCTOR, 100μH, 0.52A (4.8mm x 4.8mm)          |     1 | WURTH 74408943101          |
|     14 | R1            | 1.5MΩ, ±1%, 1/10W, Resistor (0603)              |     1 |                            |
|     15 | R2            | 115kΩ, ±1%, 1/10W, Resistor (0603)              |     1 |                            |
|     16 | R3            | 226kΩ, ±1%, 1/10W, Resistor (0402)              |     1 |                            |
|     17 | R4            | 16.2kΩ, ±1%, 1/16W, Resistor (0402)             |     1 |                            |
|     18 | R5            | 69.8kΩ, ±1%, 1/10W, Resistor (0402)             |     1 |                            |
|     19 | R6            | 10kΩ, ±5%, 1/10W, Resistor (0402)               |     1 |                            |
|     20 | R7            | 22Ω, ±5%, 1/10W, Resistor (0402)                |     1 |                            |
|     21 |               | Shunts                                          |     3 | SULLINS STC02SYAN          |
|     22 | U1            | Buck Converter, MAX17760 (TDFN12-EP 3X3)        |     1 | MAXIM MAX17760ATC+         |
|     23 | C10, C15, C16 | OPEN: Capacitor (1206)                          |     0 |                            |
|     24 | C12           | OPEN: Capacitor (0402)                          |     0 |                            |
|     25 | L2            | OPEN: INDUCTOR (2mm x 2mm)                      |     0 |                            |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1-2                    |
| JU2                    | 1-2                    |
| JU3                    | Open                   |

Evaluates: MAX17760 in

12V Output-Voltage Application

## MAX17760BEVKIT# EV Kit Schematic Diagram

<!-- image -->

## MAX17760BEVKIT# Evaluation Kit

## MAX17760BEVKIT# EV Kit PCB Layout Diagrams

<!-- image -->

MAX17760BEVKIT# EV Kit Component Placement GuideTop Silkscreen

MAX17760BEVKIT# EV Kit PCB Layout-Top Layer

<!-- image -->

MAX17760BEVKIT# EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX17760 in

## MAX17760BEVKIT# EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17760BEVKIT# EV Kit PCB Layout-Layer 3

MAX17760BEVKIT# EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX17760BEVKIT# EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX17760BEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 8/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17760 in

12V Output-Voltage Application