<!-- lastmod 2023-05-04 -->
<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V Output-Voltage Applications

## General Description

The MAX17571 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX17571  high-efficiency,  highvoltage Himalaya synchronous DC-DC converters.

The  EV  kit  comprises  3.3V  (V OUT1 )  and  5V  (V OUT2 ) output voltage application circuits, which  operate at 500kHz switching frequency. The 3.3V application circuit delivers load current up to 1.5A over a 4.7V to 60V input voltage  range.  The  5V  application  circuit  delivers  load current up to 1.5A over a 6.5V to 60V input voltage range. The EV kit can also deliver load current of 0.6A from a 4V input supply for 3.3V application circuit and 0.25A from a 5.5V input supply for 5V application circuit.

Each application circuit on the EV kit features adjustable input undervoltage lockout (UVLO), adjustable soft-start, open-drain RESET signal, and external clock synchronization. The EV kits also provide a good layout example,  which  is  optimized  for  conducted,  radiated electromagnetic interference (EMI), and thermal performance.  For  more  details,  refer  to  the Product Highlights section in the MAX17571 IC data sheet.

## EV Kit Photo

<!-- image -->

## Features

- Operates over a Wide Input Range
- MAX17571EVKITA#: VOUT1 = 3.3V
- -IOUT1 = 1.5A, VIN1 Range = 4.7V to 60V
- -IOUT1 = 0.6A, VIN1 Range = 4V to 60V
- MAX17571EVKITB#: VOUT2 = 5V
- -IOUT2 = 1.5A, VIN2 Range = 6.5V to 60V
- -IOUT2 = 0.25A, VIN2 Range = 5.5V to 60V
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- RESET Output with a Pullup Resistor to an External Supply
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR 32 (EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## MAX17571 Evaluation Kit

319-100960; Rev 0; 11/22

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## Quick Start

## Configuration Diagram

<!-- image -->

MAX17571EVKITA#/MAX17571EVKITB# EV Kit Setup Diagram

## Required Equipment

- MAX17571EVKITA#, MAX17571EVKITB#
- 60V, 2A DC input power supply
- Load capable of sinking 1.5A at 3.3V and 5V
- Two digital multimeters (DMM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

1.  Set the input power supply at 3.3V for the MAX17571EVKITA# and 4V for the MAX17571EVKITB#. Disable the power supply.
2.  Connect the positive terminal of the 60V power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad.
3.  Connect the positive terminal of the corresponding load to the respective VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
4.  Connect one DMM across respective VOUT PCB pad and the nearest PGND PCB pad, and another DMM across the respective RESET PCB pad and the SGND PCB pad.
5.  Verify that no shunts are installed on converter EN/UVLO jumpers (JU101, JU201). See Table 1 for details.
6.  Turn on the DC input power supply.
7.  Enable the load.
8.  Observe that both the DMMs display 0V.
9.  Increase the input voltage to 4.7V or higher for the MAX17571EVKITA# and 6.5V or higher for the MAX17571EVKITB# that are above the EN/UVLO rising thresholds.
10.  Verify that the DMM across the output terminals displays 3.3V for the MAX17571EVKITA# and 5V for the MAX17571EVKITB#.
11.  Verify that the DMM across the RESET PCB pad and SGND PCB displays 5V.
12.  Reduce the input voltage to 3.2V for the MAX17571EVKITA# and 4V for the MAX17571EVKITB# that are below the EN/UVLO falling thresholds.
13.  Verify that both the DMMs display 0V.
14.  Disable the input power supply.

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## Detailed Description

The MAX17571 EV kit is designed to demonstrate the salient features of the MAX17571 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The EV kit consists of typical application circuits for 3.3V and 5V output voltages. These two circuits are electrically isolated from each other and hosted on the same PCB. Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

The EV kit includes EN/UVLO PCB pads and jumpers (JU101, JU201) to enable the output at a desired input voltage. An additional RESET PCB pad is available for monitoring the status of the output.

## Soft-Start (SS) Input

The MAX17571 offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of the external soft-start capacitor connected between SS and SGND. The selected output capacitance (CSEL) and the output voltage (VOUT) determine the minimum required soft-start capacitor CSS as follows:

<!-- formula-not-decoded -->

The soft-start time (tSS) is related to the capacitor connected at SS (CSS) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1µs soft-start time, a 5600pF capacitor should be connected from the SS pin to SGND.

## Enable/Undervoltage Lockout (EN/UVLO)-Level Programming

The  MAX17571 offers  an  enable  and  adjustable  input  UVLO  feature.  In  the  EV  kit,  for  normal  operation,  leave  the EN/UVLO jumpers (JU101, JU201) open. When jumpers are left open, 3.3V application circuit is enabled when the input voltage rises above 4V and 5V application circuit is enabled when the input voltage rises above 5.1V. To disable the converters, install shunts across pin 2-3 on jumpers (JU101, JU201). See Table 1 for jumper (JU101, JU201) settings. The EN/UVLO PCB pads on the EV kit support external Enable/Disable control of the device. Leave the jumpers open when external Enable/Disable control is desired. A potential divider formed by the resistors RUVL\_TOP (R101, R201) and RUVL\_BOT (R102, R202) at the EN/UVLO pin sets the input voltage (VINU) above which the converter is enabled when the jumpers are left open.

Choose RUVL\_TOP to be 3.32MΩ (max), and then calculate R UVL\_BOT as follows:

<!-- formula-not-decoded -->

where, RUVL\_BOT is in ohms. For more details about setting the input UVLO level, refer to the MAX17571 IC data sheet.

## Table 1. Converter EN/UVLO Jumper (JU101, JU201) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                                 | OUTPUT                                                                 |
|------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 1-2              | Connected to IN                                                                             | Enabled                                                                |
| Not installed*   | Connected to the center node of respective resistor-dividers (R101 and R102; R201 and R202) | Enabled, UVLO level is set by the resistor-divider between IN and SGND |
| 2-3              | Connected to SGND                                                                           | Disabled                                                               |

*Default position

## External Clock Synchronization (RT/SYNC)

The EV kit provides RT/SYNC PCB pads to synchronize the MAX17571 with an optional external clock. The external synchronization  clock  frequency  must  be  between  1.1  x  fsw    and  1.4  x  fsw,  where  fsw  is  the  switching  frequency

## MAX17571 Evaluation Kit

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 Evaluation Kit

programmed by the resistors (R103 and R203) connected to the RT/SYNC pin . For more details about the External Clock Synchronization, refer to the MAX17571 IC data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides RESET PCB pads to monitor the status of the converters. RESET goes high 1024 switching cycles after the output voltage rises above 95% (typ) of its set nominal value. RESET goes low when the output voltage falls below 92% (typ) of its set nominal value.

## Hot Plug-In and Long Input Cables

The MAX17571EVKITA# and MAX17571EVKITB#  EV kit PCB layouts provide an optional electrolytic capacitor (CIN105, CIN205 = 33µF/80V). These capacitors limit the peak voltage at the input of the converters when the DC input source is hot plugged to the EV kit input terminals with long input cables. The equivalent series resistance (ESR) of the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables and the ceramic c apacitors at the converter's input.

## Electromagnetic Interference

Compliance to conducted emissions (CE) standards requires an EMI filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17571EVKITA# and MAX17571EVKITB#  PCBs have designated footprints for the placement of conducted EMI filter components as per the optional Bill of Materials (BoM). Use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L101 and L201 before installing EMI filter components. The PCB layouts are also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR32 Class B limits.

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit Performance Reports

(V IN1  = V IN2  = 24V, V OUT1  = 3.3V, V OUT2  = 5V, I OUT1  = I OUT2  = 1.5A, f SW  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 Evaluation Kit

(V IN1  = V IN2  = 24V, V OUT1  = 3.3V, V OUT2  = 5V, I OUT1  = I OUT2  = 1.5A, f SW  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 Evaluation Kit

(V IN1  = V IN2  = 24V, V OUT1  = 3.3V, V OUT2  = 5V, I OUT1  = I OUT2  = 1.5A, f SW  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft       | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp  | www.panasonic.com      |
| Vishay          | www.vishay.com         |
| TDK Corp        | www.tdk.com            |
| SullinsCorp     | www.sullinscorp.com    |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17571EVKITA# | EV Kit |
| MAX17571EVKITB# | EV Kit |

#Denotes RoHS compliance.

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit Bill of Materials

|   S.No | Designator                     | Description                                                                  |   Quantity | Manufacturer Part Number      |
|--------|--------------------------------|------------------------------------------------------------------------------|------------|-------------------------------|
|      1 | C102, C202                     | 100pF±10%; 50V; C0G; Ceramic Capacitor (0402)                                |          2 | TDK C1005C0G1H101K050BA       |
|      2 | C103, C203                     | 47pF±5%; 50V; C0G; Ceramic Capacitor (0402)                                  |          2 | MURATA GCM1555C1H470JA16      |
|      3 | C104                           | 0Ω, 0.1W, Resistor (0402)                                                    |          1 | PANASONIC ERJ-2GE0R005        |
|      4 | C107, C204, C207, CO103, CO203 | 0.1µF±10%; 16V; X7R; Ceramic Capacitor (0402)                                |          5 | TDK C1005X7R1C104K050BC       |
|      5 | C108, C208                     | 2.2µF± 10%; 10V; X7R; Ceramic Capacitor (0603)                               |          2 | MURATA GRM188R71A225KE15      |
|      6 | C110, C210                     | 5600pF± 2%; 50V; C0G; Ceramic Capacitor (0402)                               |          2 | MURATA GRM1555C1H562GE01      |
|      7 | CIN101, CIN106, CIN201, CIN206 | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                               |          4 | MURATA GRM188R72A104KA35      |
|      8 | CIN102, CIN202                 | 4.7µF±10%; 100V; X7R; Ceramic Capacitor (1206)                               |          2 | MURATA GRM31CZ72A475KE11      |
|      9 | CIN105, CIN205                 | 33µF±20%, 80V, Electrolytic capacitor                                        |          2 | PANASONIC EEE-FK1K330P        |
|     10 | CO101                          | 22µF± 20%; 16V; X7R; Ceramic Capacitor (1210)                                |          1 | TDK C3225X7R1C226M250AC       |
|     11 | CO201                          | 22µF± 15%; 16V; X7R; Ceramic Capacitor (1210)                                |          1 | MURATA GRM32ER71C226KEA8      |
|     12 | D101, D201                     | Shottky Diode, SOD-323, PIV=30V, IF=0.2A                                     |          2 | VISHAY BAT54WS-E3             |
|     13 | JU101, JU201                   | 3- pin header (0.1' centers)                                                 |          2 | SULLINS PBC03SAAN             |
|     14 | L102, L202                     | Inductor, 15μH, 3.9A (5.48mm x 5.28mm)                                       |          2 | COILCRAFT XGL5050-153ME       |
|     15 | R101, R201                     | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                                          |          2 |                               |
|     16 | R102                           | 1.6MΩ, ±1%, 1/10W, Resistor (0603)                                           |          1 |                               |
|     17 | R103, R203                     | 40.2kΩ, ±1%, 1/16W, Resistor (0402)                                          |          2 |                               |
|     18 | R104                           | 90.9kΩ, ±1%, 1/10W, Resistor (0402)                                          |          1 |                               |
|     19 | R105                           | 34kΩ, ±1%, 1/16W, Resistor (0402)                                            |          1 |                               |
|     20 | R106, R206                     | 10kΩ, ±1%, 1/16W, Resistor (0402)                                            |          2 |                               |
|     21 | R107, R207                     | 1kΩ, ±1%, 1/12.5W, Resistor (0402)                                           |          2 |                               |
|     22 | R202                           | 1.15MΩ, ±1%, 1/10W, Resistor (0603)                                          |          1 |                               |
|     23 | R204                           | 130kΩ, ±1%, 1/16W, Resistor (0402)                                           |          1 |                               |
|     24 | R205                           | 28.7kΩ, ±1%, 1/16W, Resistor (0402)                                          |          1 |                               |
|     25 | R208                           | 4.7Ω, ±1%, 1/16W, Resistor (0402)                                            |          1 |                               |
|     26 | U1, U2                         | High-Efficiency, Synchronous, Step-Down DC-DC Converter (TD1233+1C, 3mmx3mm) |          2 | MAXIM INTEGRATED MAX17571ATC+ |
|     27 | -                              | Shunts                                                                       |          2 | SULLINS STC02SYAN             |
|     28 | MH1-MH4                        | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON    |          4 | KEYSTONE 9032                 |
|     29 | C201                           | Optional: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                    |          1 | MURATA GRM31CZ72A475KE11      |
|     30 | L201                           | Optional: Inductor, 15µH, 3.6A (4mm x 4mm)                                   |          1 | COILCRAFT XGL4040-153ME       |
|     31 | C101, CIN103, CIN203           | OPEN: Capacitor (1206)                                                       |          0 |                               |
|     32 | CIN104, CIN204                 | OPEN: Capacitor (0603)                                                       |          0 |                               |
|     33 | CO102, CO202                   | OPEN: Capacitor (1210)                                                       |          0 |                               |
|     34 | L101                           | OPEN: Inductor (4mm x 4mm)                                                   |          0 |                               |
|     35 | R108                           | OPEN: Resistor (0402)                                                        |          0 |                               |

| DEFAULT JUMPER SETTINGS   | DEFAULT JUMPER SETTINGS   |
|---------------------------|---------------------------|
| Jumper                    | Shunt Position            |
| JU101                     | OPEN                      |
| JU201                     | OPEN                      |

## MAX17571 Evaluation Kit

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit Schematics

MAX17571EVKITA# Schematic Diagram

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit Schematics (continued)

MAX17571EVKITB# Schematic Diagram

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit PCB Layout

MAX17571 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX17571 EV Kit PCB Layout -Top

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit PCB Layout (continued)

MAX17571 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX17571 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V OutputVoltage Applications

## MAX17571 EV Kit PCB Layout (continued)

MAX17571 EV Kit PCB Layout -Bottom

<!-- image -->

MAX17571 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX17571 in 5V and 3.3V Output-Voltage Applications

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17571 Evaluation Kit