<!-- lastmod 2022-08-02 -->
## MAX17761EVKITBE# Evaluation Kit

## General Description

The  MAX17761EVKITBE#  provides  a  proven  design  to evaluate  the  MAX17761  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package. The EV kit generates 5V at load currents up to 1A from a 7.5V to 76V input supply. The EV kit features a 400kHz switching frequency for optimum efficiency and component  size.  The  EV  kit  features  adjustable  input undervoltage  lockout,  adjustable  soft-start,  adjustable switching  frequency,  adjustable  current  limit,  open-drain RESET signal,  and  external  clock  synchronization.  The EV  kit  also  provides  a  good  layout  example,  which  is optimized for conducted, radiated EMI, and thermal per -formance.  For  more  details  about  the  IC  benefits  and features, refer to the MAX17761 IC data sheet.

## Features

- Operates from a 7.5V to 76V Input Supply
- 5V Output Voltage
- Up to 1A Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/ILIM Pin to Select Among PWM or PFM Modes and 1.6A or 1.14A current limits
- Auxiliary Bootstrap LDO to improve efficiency
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Evaluates: MAX17761 in

5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17761 5V output EV kit
- 7.5V to 76V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution: Do not turn on power supply until all connections are complete.

- 1) Set the power supply at a voltage between 7.5V and
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1, JU2, and JU3 (see Table 1, Table 2, and Table 3 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17761EVKITBE# Evaluation Kit

## Detailed Description

The  MAX17761EVKITBE#  provides  a  proven  design  to evaluate  the  MAX17761  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates 5V at load currents up to 1A from a 7.5V to 76V input supply. The EV kit features a 400kHz switching fre -quency for optimum efficiency and component size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage. The RT/SYNC PCB pad and JU3 allow an external frequency to synchronize the  device. An  additional RESET PCB  pad  is  available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to  limit inrush current during startup. The soft-start time is adjusted by the value of external soft-start capacitor (C6) connected between SS and SGND. The selected output capacitance (C SEL )  and  the  output  voltage  (V OUT )  determine  the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 5.3ms soft-start time, a 33nF capacitor should be connected from the SS pin to SGND. The minimum possible soft-start time is 5ms.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17761 offers an Enable and an adjustable input undervoltage  lockout  feature.  In  this  EV  kit,  for  always on operation, leave the EN/UVLO jumper (JU1) open. To disable  the  MAX17761,  install  a  shunt  across  pins  2-3 on  JU1.  See  Table  1    for  JU1  settings.  The  EN/UVLO PCB pad on the EV kit supports external enable/disable control  of  the  device.  Leave  JU1  open  when  external enable/disable  control  is  desired.  A  potential  divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when a shunt is connected across pins 1-2 on JU1.

Choose R1 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 is in Ω.

## Evaluates: MAX17761 in 5V Output-Voltage Application

Calculate the value of R2 as follows:

<!-- formula-not-decoded -->

## Current Limit and Mode of Operation Selection (MODE/ILIM)

The EV Kit provides a jumper (JU2) and R9 resistor footprint that allows the MAX17761 to operate in PWM and PFM modes.  Table  2  lists  the  values  of  the  resistor  R9  to program PWM or PFM modes of operation and 1.6A or 1.14A peak current limits.  Refer  to  the  MAX17761  data sheet for more details on the modes of operation.

The mode of operation cannot be changed on-the-fly after power-up.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                                | MAX17761 OUTPUT                                         |
|----------|------------------|------------------------------------------------------------|---------------------------------------------------------|
| JU1      | 1-2*             | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| JU1      | Not installed    | Floating                                                   | Always On                                               |
| JU1      | 2-3              | Connected to GND                                           | Disabled                                                |

*Default position.

## Table 2. RILIM Resistor vs. Modes of Operation and Peak Current Limit

| R9 (KΩ)   | MODE OF OPERATION   |   PEAK CURRENT LIMIT (A) |
|-----------|---------------------|--------------------------|
| OPEN*     | PFM                 |                      1.6 |
| 422       | PFM                 |                     1.14 |
| 243       | PWM                 |                      1.6 |
| 121       | PWM                 |                     1.14 |

*Default position.

## MAX17761EVKITBE# Evaluation Kit

## Switching Frequency Selection and External Clock Synchronization (RT/SYNC)

The EV kit provides RT/SYNC PCB pad, to synchronize the MAX17761 to an optional external clock. Short jumper (JU3)  when  external  clock  signals  are  applied.  In  the presence of a valid external clock for synchronization, the MAX17761  operates  in  PWM  mode  only.    The  resistor R5 sets the switching  frequency  of  the  part  at  any  one of  four  discrete  frequencies-200kHz,  300kHz,  400kHz, and 600kHz.

Table 3 provides the resistor values for different switching frequencies.

For more details about external clock synchronization and frequency selection, refer to the MAX17761 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET)

The EV kit  provides  a RESET PCB  pad  to  monitor  the status  of  the  converter. RESET goes  high  when  V OUT

Table 3. Switching Frequency vs. RT Resistor

|   R5 (KΩ) | SWITCHING FREQUENCY (KHZ)   |
|-----------|-----------------------------|
|       210 | 200                         |
|       140 | 300                         |
|       105 | 400*                        |
|      69.8 | 600                         |

## MAX17761EVKITBE# Performance Report

(V IN  = 24V, V OUT = 5V, I OUT = 1A, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Evaluates: MAX17761 in 5V Output-Voltage Application

rises  above  95%  (typ)  of  its  nominal  regulated  voltage. RESET goes low when V OUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17761EVKITBE# PCB layout provides an optional electrolytic  capacitor  (C1  =  22μF/100V).  This  capacitor limits the peak voltage at the input of the MAX17761 when the DC input source is 'hot-plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter  and limits the noise injected back into the input power source.

The MAX17761EVKITBE# PCB has designated footprints on  the  EV  kit  for  placement  of  EMI  filter  components. Use of these filter components results in lower conducted emissions  below  CISPR22  Class  B  limits.  Cut  open the  trace  at  L2  before  installing  conducted  EMI  filter components.  The  MAX17761EVKITBE#  PCB  layout  is also designed to limit radiated emissions from switching nodes  of  the  power  converter,  resulting  in  radiated emissions below CISPR22 Class B limits.

## MAX17761EVKITBE# Performance Report (continued)

(V IN  = 24V, V OUT = 5V, I OUT = 1A, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17761EVKITBE# Performance Report (continued)

(V IN  = 24V, V OUT = 5V, I OUT = 1A, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

L2 = 10µH, C15 = C16 = 4.7µF/ 100V/X7R/1206

<!-- image -->

<!-- image -->

Final\_ScanV

TUV Rheinland

<!-- image -->

06:32:50 PM, Wednesday, April 17, 2019

## Component Suppliers

| SUPPLIER          | WEBSITE             |
|-------------------|---------------------|
| Murata Americas   | www.murata.com      |
| Panasonic Corp.   | www.panasonic.com   |
| TDK Corp.         | www.tdk.com         |
| SULLINS           | www.sullinscorp.com |
| Wurth Electronics | www.we-online.com   |
| Taiyo Yuden       | www.ty-top.com      |

Note: Indicate that you are using the MAX17761 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17761EVKITBE# | EV Kit |

Evaluates: MAX17761 in

5V Output-Voltage Application

## MAX17761EVKITBE# Bill of Materials

|   S. No. | Designator   | Description                                                               |   Quantity | Part Number                 |
|----------|--------------|---------------------------------------------------------------------------|------------|-----------------------------|
|        1 | C1           | 22uF, 20%, 100V, Electrolytic capacitor                                   |          1 | PANASONIC EEE-TG2A220UP     |
|        2 | C2           | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                           |          1 | MURATA GRM31CZ72A475KE11    |
|        3 | C4, C14      | 150pF, 5%, 100V, C0G, Ceramic capacitor (0402)                            |          2 | TDK C1005C0G2A151J050BA     |
|        4 | C5           | 47pF, 5%, 25V, C0G, Ceramic capacitor (0402)                              |          1 | MURATA GRM1555C1E470JA01    |
|        5 | C6           | 33nF, 10%, 25V, X7R, Ceramic capacitor (0402)                             |          1 | MURATA GRM155R71E333KA88    |
|        6 | C7           | 0.1uF, 10%, 50V, X7R, Ceramic capacitor (0402)                            |          1 | MURATA GRM155R71H104KE14    |
|        7 | C8           | 1uF, 10%, 6.3V, X7R, Ceramic capacitor (0603)                             |          1 | MURATA GRM188R70J105KA01    |
|        8 | C9           | 22uF, 10%, 10V, X7R, Ceramic capacitor (1210)                             |          1 | MURATA GRM32ER71A226K       |
|        9 | C11          | 0.1uF, 10%, 16V, X7R, Ceramic capacitor (0402)                            |          1 | TAIYO YUDEN EMK105B7104KV-F |
|       10 | C13          | 0.1uF, 10%, 100V, X7R, Ceramic capacitor (0603)                           |          1 | TAIYO YUDEN HMK107B7104KA-T |
|       11 | C17          | 4700pF, 10%, 50V, X7R, Ceramic capacitor (0402)                           |          1 | MURATA GRM155R71H472KA01    |
|       12 | JU1          | 3-pin header                                                              |          1 | SULLINS PEC03SAAN           |
|       13 | JU2, JU3     | 2-pin header                                                              |          2 | SULLINS PEC02SAAN           |
|       14 | L1           | INDUCTOR, 33uH, 1.45A                                                     |          1 | WURTH 74404064330           |
|       15 | R1           | 649kΩ ±1%, 1/10W, resistor (0603)                                         |          1 | VISHAY DALE CRCW0603649KFK  |
|       16 | R2           | 105kΩ ±1%, 1/10W, resistor (0603)                                         |          1 | VISHAY DALE CRCW0603127KFK  |
|       17 | R3           | 95.3kΩ ±1%, 1/16W, resistor (0402)                                        |          1 | VISHAY DALE CRCW040295K3FK  |
|       18 | R4           | 18.2kΩ ±1%, 1/16W, resistor (0402)                                        |          1 | VISHAY DALE CRCW040218K2FK  |
|       19 | R5           | 105kΩ, 1%, 1/16W, resistor (0402)                                         |          1 | VISHAY DALE CRCW0402105KFK  |
|       20 | R6           | 10kΩ ±1%, 1/10W, resistor (0402)                                          |          1 | PANASONIC ERJ-2GEJ103       |
|       21 | R7           | 4.7Ω, ±1%, 1/16W, resistor (0402)                                         |          1 | VISHAY DALE CRCW04024R70FK  |
|       22 | R8           | 16.9kΩ ±1%, 1/10W, resistor (0402)                                        |          1 | VISHAY DALE CRCW040216K9FK  |
|       23 |              | Shunts                                                                    |          3 | SULLINS STC02SYAN           |
|       24 | U1           | Buck Converter, MAX17761 (TDFN12-EP 3X3)                                  |          1 | MAXIM MAX17761ATC+          |
|       25 | MH1-MH4      | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON |          4 | KEYSTONE 9032               |
|       26 | C15, C16     | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                 |          1 | MURATA GRM31CZ72A475KE11    |
|       27 | L2           | OPTIONAL: INDUCTOR, 10µH, 1A (2.8mm x 2.8mm)                              |          1 | WURTH ELECTRONICS 744025100 |
|       28 | C3           | OPEN: Capacitor (0603)                                                    |          0 |                             |
|       29 | C10          | OPEN: Capacitor (0805)                                                    |          0 |                             |
|       30 | C12          | OPEN: Capacitor (0402)                                                    |          0 |                             |
|       31 | R9           | OPEN: Resistor (0402)                                                     |          0 |                             |

## Evaluates: MAX17761 in 5V Output-Voltage Application

## MAX17761EVKITBE# Schematic

<!-- image -->

## MAX17761EVKITBE# Evaluation Kit

## MAX17761EVKITBE# PCB Layout Diagrams

MAX17761EVKITBE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17761EVKITBE# PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX17761 in 5V Output-Voltage Application

MAX17761EVKITBE# PCB Layout-Top Layer

<!-- image -->

MAX17761EVKITBE# PCB Layout-Layer 3

<!-- image -->

## MAX17761EVKITBE# PCB Layout Diagrams (continued)

MAX17761EVKITBE# PCB Layout-Bottom Layer

<!-- image -->

MAX17761EVKITBE# PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX17761EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17761 in

5V Output-Voltage Application