<!-- lastmod 2022-08-02 -->
## MAX17783CEVKITB# Evaluation Kit

## General Description

The MAX17783CEVKITB# evaluation kit (EV kit) provides a proven design to evaluate the MAX17783C high-efficiency, high-voltage,  Himalaya step-down DC-DC converter. The EV kit generates 5V output at load currents up to 2.5A from a 6.5V to 60V input supply. The switching frequency of the EV kit is preset to 500kHz for optimum efficiency and com -ponent size. The EV kit features adjustable input under -voltage lockout, adjustable soft-start, open-drain RESET signal, and external clock synchronization. The EV kit also provides a good layout example, which is optimized for conducted, radiated EMI, and thermal performance. For more details about the IC benefits and features, refer to the MAX17783C IC data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- 5V Output Voltage
- Delivers Up to 2.5A Output Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- External Clock Synchronization
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32(EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## Evaluates: MAX17783C in 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17783CEVKITB#
- 6.5V to 60V, 3A DC input power supply
- Load capable of sinking 2.5A
- 2 digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN  PCB  pad  and  the  negative  terminal  to the  nearest  PGND  PCB  pad.  Connect  the  positive terminal of the 2.5A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are not installed across the pins on jumper JU1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Ensure that input voltage to be 6.5V or higher, with which EN/UVLO voltage is more than EN/UVLO ris -ing threshold.
- 8) Verify that the DVM displays 5V.
- 9) Connect the other DVM across the RESET pad and GND. Verify that the DVM displays 5V.
- 10)  The power supply voltage can be set at any voltage between 6.5V and 60V.
- 11) Reduce the input voltage to 5V which is below the EN/UVLO falling threshold.
- 12)  Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 0V.
- 13) Verify that the DVM across the RESET pad and the nearest GND pad displays 0V.
- 14) Disable the input power supply.

<!-- image -->

## MAX17783CEVKITB# Evaluation Kit

## Detailed Description

The  MAX17783CEVKITB# provides a proven  design  to evaluate  the  MAX17783C  high-efficiency,  high-voltage, Himalaya step-down DC-DC converter. The EV kit gener -ates 5V output at load currents up to 2.5A from a 6.5V to 60V input supply. The EV kit features a 500kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage or enable the converter through an external enable signal on the EN/ UVLO PCB pad. The RT/SYNC PCB pad allows applica -tion  of  an  external  clock  to  synchronize  the  device. An additional RESET PCB  pad  is  available  for  monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start function to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor (C11) connected between SS and GND pins. The selected output capacitance (C SEL ) and the output voltage (V OUT) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to GND.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17783C  offers  an  Enable  and  adjustable input  undervoltage  lockout  feature.  In  this  EV  kit,  for normal  operation,  leave  the  EN/UVLO  jumper  (JU1) open. When JU1 is left open, the MAX17783C is enabled when the input voltage rises above 6.4V. To disable the MAX17783C, install  a  jumper  across  pins  1-2  on  JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device.  Leave  JU1  open  when  external  Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on. For more details about setting the undervoltage lockout level, refer to the MAX17783C data sheet .

## Evaluates: MAX17783C in 5V Output-Voltage Application

## External Clock Synchronization (RT/SYNC)

The EV kit provides a RT/SYNC PCB pad to synchronize the MAX17783C to an optional external clock. For more details about external clock synchronization, refer to the MAX17783C data sheet .

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status of the converter. RESET goes high 1024 switching cycles after VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes  low  when  V OUT   falls  below  92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17783CEVKITB# PCB layout provides an optional electrolytic capacitor (C6 = 33μF/100V). This capacitor limits the  peak  voltage  at  the  input  of  the  MAX17783C  when the  DC  input  source  is  'Hot-Plugged'  to  the  EV  kit  input terminals with input cables. The equivalent series resistance (ESR) of the electrolytic capacitor dampens the oscillations caused  by  interaction  of  the  inductance  of  the  long  input cables,  and  the  ceramic  capacitors  at  the  buck  converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

The MAX17783CEVKITB# PCB has designated footprints for  the  placement  of  conducted  EMI  filter  components as per the optional Bill  of  Material  (BoM).  Use  of  these filter components results in lower conducted EMI, below CISPR32 Class B limits. Cut open the trace at L2 before installing conducted EMI filter components.  The  MAX17783CEVKITB#  PCB  layout  is also designed to limit radiated emissions from switching nodes of the power converter resulting in radiated emis -sions below CISPR32 Class B limits.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                                |
|------------------|------------------------------------------------------------|-----------------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between IN and GND |
| 1-2              | Connected to GND                                           | Disabled                                                              |

* Default position.

## MAX17783CEVKITB# EV KIT Performance Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17783C

in 5V Output-Voltage Application

<!-- image -->

<!-- image -->

STARTUP THROUGH EN/UVLO

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17783C

## MAX17783CEVKITB# EV KIT Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

CONDUCTED EMISSIONSPLOT 5VOUTPUT,2.5ALOADCURRENT

<!-- image -->

<!-- image -->

<!-- image -->

30

<!-- image -->

<!-- image -->

60

<!-- image -->

Frequency in Hz

## MAX17783CEVKITB# Evaluation Kit

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

in 5V Output-Voltage Application

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17783CEVKITB# | EV Kit |

# Denotes RoHS compliance.

## MAX17783C EV Kit Bill of Materials

|   S.No | DESIGNATOR       | DESCRIPTION                                                 |   QUANTITY | MANUFACTURER PART NUMBER       |
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
|     10 | C16              | 22μF, 10%, 16V, X7R,Ceramic capacitor (1210)                |          1 | MURATA GRM32ER71C226KEA8       |
|     11 | D1               | 70V, 0.07A, Schottky Barrier Diode, SMT (SOD-923)           |          1 | ON SEMICONDUCTOR NSR0170P2T5G  |
|     12 | D2               | 80V, 3A, Schottky Barrier Rectifier, SMT (SMB)              |          1 | DIODES INCORPORATED B380B-13-F |
|     13 | D3               | 20V, 0.5A, Schottky Barrier Diode, SMT (DSN2)               |          1 | ON SEMICONDUCTOR NSR05F20NXT5G |
|     14 | L1               | INDUCTOR, 8.2μH, 4.5A (5.5mm X 5.5mm)                       |          1 | COILCRAFT XAL5050-822ME        |
|     15 | R1               | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                         |          1 |                                |
|     16 | R2               | 787kΩ, ±1%, 1/10W, Resistor (0603)                          |          1 |                                |
|     17 | R3               | 221kΩ, ±1%, 1/16W, Resistor (0402)                          |          1 |                                |
|     18 | R4               | 48.7kΩ, ±1%, 1/16W, Resistor (0402)                         |          1 |                                |
|     19 | R5               | 40.2kΩ, ±1%, 1/16W, Resistor (0402)                         |          1 |                                |
|     20 | R6               | 10kΩ, ±1%, 1/16W, Resistor (0402)                           |          1 |                                |
|     21 | R7               | 1kΩ, ±1%, 1/16W, Resistor (0402)                            |          1 |                                |
|     22 | U1               | Asynchronous Buck Converter, MAX17783C, 10 TDFN (3mm x 3mm) |          1 | MAXIM MAX17783CATB+            |
|     23 | JU1              | Connector Header Through Hole 2 position 0.050" (1.27mm)    |          1 | SULLINS GRPB021VWVN-RC         |
|     24 | SU1              | Jumper Socket (1.27mm)                                      |          1 | HARWIN M50-2030005             |
|     25 | C4, C5           | OPTIONAL: 4.7μF, 10%, 100V, X7R,Ceramic capacitor (1206)    |          2 | MURATA GRM31CZ72A475KE11       |
|     26 | L2               | OPTIONAL: INDUCTOR, 15μH, 2.2A (4mm x 4mm)                  |          1 | COILCRAFT XAL4040-153ME        |
|     27 | C2               | OPEN: Capacitor (0603)                                      |          0 | N/A                            |
|     28 | C9, C17          | OPEN: Capacitor (0402)                                      |          0 | N/A                            |
|     29 | C21              | OPEN: Capacitor (1206)                                      |          0 | N/A                            |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| Jumper                 | Shunt Position         |
| JU1                    | Not Installed          |

## Evaluates: MAX17783C in 5V Output-Voltage Application

## MAX17783C EV Kit Schematic Diagram

<!-- image -->

## MAX17783C EV Kit PCB Layout Diagrams

MAX17783C EV Kit-Top Silkscreen

<!-- image -->

Evaluates: MAX17783C

MAX17783C EV Kit-Top Layer

<!-- image -->

MAX17783C EV Kit-Layer 2\_GND

<!-- image -->

Evaluates: MAX17783C

## MAX17783C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17783C EV Kit-Layer 3\_GND

MAX17783C EV Kit-Bottom Layer

<!-- image -->

MAX17783C EV Kit-Bottom Silkscreen

<!-- image -->

## MAX17783CEVKITB# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/20            | Initial release                                                                                                                                                                                     | -               |
|                 1 | 3/21            | Updated the General Description , Enable/Undervoltage-Lockout (EN/UVLO) Programming , Electromagnetic Interference (EMI) and Component Suppliers sections, and Table 1; replaced TOC09; added TOC14 | 1-2, 4-9        |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17783C

in 5V Output-Voltage Application