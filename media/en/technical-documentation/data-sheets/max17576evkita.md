<!-- lastmod 2022-08-02 -->
## MAX17576EVKITA# Evaluation Kit

## General Description

The MAX17576EVKITA# evaluation kit (EV kit) provides a proven design to evaluate the MAX17576 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 3.3V output at load currents up to  4A  and  features  a  350kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external clock  synchronization. The  EV  kit  also  provides  a  good layout  example,  which  is    optimized  for  thermal  performance. For more details about the device features and benefits, refer to the MAX17576 IC data sheet.

## Features

- Operates from a 4.5V to 60V Input Supply
- 3.3V Output Voltage
- Up to 4A Output Current
- 350kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/SYNC Pin to Select Either PWM, PFM, or DCM Mode
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17576 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17576EVKITA#
- 4.5V to 60V, 5A DC input power supply
- Load capable of sinking 4A
- 2 Digital Voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage of 4V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 4A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad, and the other DVM across RESET PCB pad and SGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details)
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Increase the input voltage to 6V which is above the EN/UVLO rising threshold.
- 8) Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 3.3V.
- 9) Verify that the DVM across the RESET PCB pad and the nearest SGND PCB pad displays 5V.
- 10)  The power supply voltage can be set at any voltage between 4.5V and 60V.
- 11)  Reduce the input voltage to 3.7V which is below the EN/UVLO falling threshold.
- 12)  Verify that both the DVMs displays approximately 0V.
- 13)  Disable the input power supply.

<!-- image -->

## MAX17576EVKITA# Evaluation Kit

## Detailed Description

The EV kit is designed to deliver 3.3V output at load current up to 4A from a 4.5V to 60V input supply. The EV kit is  programmed  at  350kHz  switching  frequency  for  optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC PCB pad allows an external clock to synchronize the device. Jumper JU2 allows the selection of a  MODE/SYNC of operation based on light-load performance requirements. An additional RESET PCB  pad  is available for monitoring whether the converter output is in regulation or not.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of the external soft-start capacitor (C5) connected between the SS and SGND pins. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine  the  minimum  required  soft-start  capacitor  as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  connected at SS (C5) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to SGND.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                  |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17576 3.3V Output-Voltage Application

## Enable/Undervoltage-Lockout Level (EN/UVLO) Programming

The  MAX17576  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1 is left open, the MAX17576 is enabled when the input voltage rises above 4.3V. To disable the MAX17576, install a  jumper  across  pins  2-3  on  JU1.  See  Table  1  for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 open  when  external  Enable/Disable  control  is  desired. A potential divider formed by R1 and R2 sets the input voltage  (V INU )  above  which  the  converter  is  enabled  when JU1 is left open.

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to  turn  on,  and  R1  and  R2  are  in  kΩ.  For  more  details about setting the undervoltage lockout level, refer to the MAX17576 data sheet.

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17576 to operate in PWM, PFM, and DCM modes. Refer to the MAX17576 data sheet for more details on the modes of operation. Table  2  shows  the  mode  selection (JU2) settings that can be used to configure the desired mode of operation.

## Table 2. MODE Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MODE                  |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |

* Default position.

│

## MAX17576EVKITA# Evaluation Kit

## External Clock Synchronization (MODE/SYNC)

The EV kit provides a MODE/SYNC PCB pad to synchronize the MAX17576 to an optional external clock. Leave the  jumper  (JU2)  open  when  external  clock  signals  are applied. In the presence of a valid external clock for synchronization, the MAX17576 operates in PWM mode only. For  more  details  about  external  clock  synchronization, refer to the MAX17576 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

## EV Kit Test Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

## Evaluates: MAX17576 3.3V Output-Voltage Application

The MAX17576EVKITB# PCB has designated footprints for  the  placement  of  conducted  EMI  filter  components as per the optional Bill  of  Material  (BoM).  Use  of  these filter components results in lower conducted EMI, below CISPR22 Class B limits. Cut open the trace at L1 before installing EMI filter components. The MAX17576EVKITB#

PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## Hot Plug-In and Long Input Cables

The MAX17576EVKITA# PCB layout provides an optional electrolytic capacitor (CIN6 = 68μF/100V). This capacitor limits the peak voltage at the input of the MAX17576 when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

<!-- image -->

│

## EV Kit Test Report (continued)

<!-- image -->

LOAD AND LINE REGULATION

3.42

3.38

3.34

3.30

3.26

toc05

4

OUTPUT  VOLTAGE  (V)

VEN/UVLO

VOUT

I OUT

RESET

V

0

V IN

= 4.5V

V IN

= 12V

V IN

= 24V

V IN

= 36V

V IN

= 48V

V IN

= 60V

2

1

3

LOAD CURRENT (A)

CONDITIONS: PFM MODE, f SW  = 350kHz

SOFT-START/SHUTDOWN THROUGH EN/UVLO

toc07

5V/div

2V/div

2A/div

5V/div

2ms/div

CONDITIONS: PWM MODE, 0.825Ω RESISTIVE LOAD

## Evaluates: MAX17576 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Test Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17576 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

LOAD TRANSIENT BETWEEN 2A AND 4A

<!-- image -->

│

## MAX17576EVKITA# Evaluation Kit

## EV Kit Test Report (continued)

## LOAD TRANSIENT BETWEEN 50mA AND 2A

<!-- image -->

## Evaluates: MAX17576 3.3V Output-Voltage Application

<!-- image -->

LOAD TRANSIENT BETWEEN 80mA AND 2A

<!-- image -->

CONDITIONS: PWM MODE, 0.825Ω RESISTIVE LOAD

│

## Component Suppliers

| SUPPLIER         | WEBSITE             |
|------------------|---------------------|
| Coilcraft, Inc.  | www.coilcraft.com   |
| Murata Americas  | www.murata.com      |
| Panasonic Corp.  | www.panasonic.com   |
| SullinsCorp      | www.sullinscorp.com |
| Taiyo yuden Corp | www.ty-top.com      |
| Vishay           | www.vishay.com      |

Note:

Indicate that you are using the MAX17576 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17576EVKITA# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17576

3.3V Output-Voltage Application

│

## MAX17576EVKITA# EV Kit Bill of Materials

|   S.No | Designator       | Description                                                           |   Quantity | Manufacturer Part Number      |
|--------|------------------|-----------------------------------------------------------------------|------------|-------------------------------|
|      1 | C3               | 0.1µF±10%; 25V; X7R; Ceramic Capacitor (0402)                         |          1 | MURATA GMD155R71C104KA11      |
|      2 | C4               | 2.2µF± 10%; 10V; X7R; Ceramic Capacitor (0603)                        |          1 | MURATA GRM188R71A225KE15      |
|      3 | C5               | 5600pF± 10%; 25V; X7R; Ceramic Capacitor (0603)                       |          1 | MURATA GRM155R71E562KA01      |
|      4 | CIN1, CIN10, CO7 | 150pF± 10%; 100V; COG; Ceramic Capacitor (0402)                       |          3 | TDK C1005C0G2A151J050BA       |
|      5 | CIN2, CIN3, CIN5 | 4.7µF± 10%; 100V; X7R; Ceramic Capacitor (1206)                       |          3 | MURATA GRM31CZ72A475KE11      |
|      6 | CIN6             | 68µF± 20%; 100V; Aluminum-Electrolytic Capacitor                      |          1 | PANASONIC EEV-FK2A680Q        |
|      7 | CIN11            | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                        |          1 | TAIYO YUDEN HMK107B7104KA     |
|      8 | CO1, CO2         | 47µF± 20%; 10V; X7R; Ceramic Capacitor (1210)                         |          2 | MURATA GRM32ER71A476ME15      |
|      9 | CO6              | 0.1µF±10%; 50V; X7R; Ceramic Capacitor (0402)                         |          1 | TDK C1005X7R1H104K050BE       |
|     10 | JU1, JU2         | 3-pin header (36-pin header 0.1' centers)                             |          2 | SULLINS PEC03SAAN             |
|     11 | L3               | Inductor, 5.6μH, 9.9A (6mm x 6mm)                                     |          1 | COILCRAFT XAL6060-562ME       |
|     12 | R1               | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                                   |          1 |                               |
|     13 | R2               | 1.3MΩ, ±1%, 1/10W, Resistor (0603)                                    |          1 |                               |
|     14 | R3               | 59kΩ, ±1%, 1/16W, Resistor (0402)                                     |          1 |                               |
|     15 | R4               | 100kΩ, ±1%, 1/16W, Resistor (0402)                                    |          1 |                               |
|     16 | R5               | 10kΩ, ±1%, 1/16W, Resistor (0402)                                     |          1 |                               |
|     17 | R6               | 37.4kΩ, ±1%, 1/16W, Resistor (0402)                                   |          1 |                               |
|     18 | R8               | 0Ω, ±5%, 1/16W, Resistor (0402)                                       |          1 |                               |
|     19 | SU1, SU2         | Shunt                                                                 |          2 | Sullins STC02SYAN             |
|     20 | U1               | High-Efficiency, Synchronous Step-down DC-DC Converter (TQFN 4mmx5mm) |          1 | MAXIM INTEGRATED MAX17576ATG+ |
|     21 | CIN7, CIN9       | OPEN: Capacitor (1206)                                                |          0 | N/A                           |
|     22 | CIN8             | OPEN: Capacitor (1210)                                                |          0 | N/A                           |
|     23 | CO9              | OPEN: Capacitor (0603)                                                |          0 | N/A                           |
|     24 | L1               | OPEN: Inductor (5mm x 5mm)                                            |          0 | N/A                           |
|     25 | R7               | OPEN: Resistor (0402)                                                 |          0 | N/A                           |
|     26 | C1, C6           | OPEN: Capacitor (0402)                                                |          0 | N/A                           |
|     27 | CIN4, CO8        | OPEN: Capacitor (0603)                                                |          0 | N/A                           |
|     28 | CO3-CO5          | OPEN: Capacitor (0805)                                                |          0 | N/A                           |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| Jumper                 | Shunt Position         |
| JU1                    | Open                   |
| JU2                    | 2-3                    |

Evaluates: MAX17576

## 3.3V Output-Voltage Application

## MAX17576EVKITA# EV Kit Schematic

<!-- image -->

## MAX17576EVKITA# EV Kit PCB Layout

MAX17576EVKITA# EV Kit-Top Silkscreen

<!-- image -->

MAX17576EVKITA# EV Kit-Layer 2 GND

<!-- image -->

## Evaluates: MAX17576 3.3V Output-Voltage Application

MAX17576EVKITA# EV Kit-Top

<!-- image -->

MAX17576EVKITA# EV Kit-Layer 3 GND

<!-- image -->

│

## MAX17576EVKITA# EV Kit PCB Layout (continued)

MAX17576EVKITA# EV Kit-Bottom

<!-- image -->

MAX17576EVKITA# EV Kit-Silk Bottom

<!-- image -->

│

## MAX17576EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX17576

3.3V Output-Voltage Application