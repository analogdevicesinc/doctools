<!-- lastmod 2022-08-05 -->
## Evaluates: MAX17645 in 5V Output Voltage Application

## General Description

The MAX17645BEVKITB# and MAX17645DEVKITB# evaluation  kits  (EV  kits)  provide  proven  5V  designs  to evaluate the performance of MAX17645B and MAX17645D  high-efficiency,  high-voltage,  synchronous step-down DC-DC converters. The MAX17645BEVKITB# EV kit operates in constant frequency PWM (pulse-width modulation) mode at all loads and the MAX17645DEVKITB#  EV  kit  operates  in  PFM  (pulsefrequency  modulation)  mode  at  light  loads  to  improve efficiency.

The EV kits are configured to demonstrate the optimum performance and component sizes for  MAX17645B/ MAX17645D  converter.  The  EV  kits  support  a  wide operating input range of 7V to 36V and are configured for 5V  output.  The  EV  kits  deliver  up  to  1A  at  a  switching frequency of 650kHz.

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Features

- Wide 7V to 36V Input Range
- Up to 1A Load Current
- 650kHz Fixed Switching Frequency
- High Peak Efficiency of 91.1% (V IN  = 24V, V OUT  = 5V, I OUT = 0.6A)
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- Fixed 3.15ms (typ) Soft-Start Time
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

The  features  of  the  EV  kits  include  adjustable  input undervoltage lockout,  fixed  internal  soft-start,  and  opendrain RESET signal for output voltage status monitoring. The EV kits also provide a good layout example, which is optimized for conducted,  radiated EMI, and  thermal performance. For more details about the IC benefits and features, refer to the MAX17645 IC data sheet.

Ordering Information appears at end of data sheet.

## MAX17645BEVKITB#/MAX17645DEVKITB# Top View

<!-- image -->

<!-- image -->

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Quick Start

## Configuration Diagram

Figure 1. MAX17645BEVKITB#/MAX17645DEVKITB# EV kits Setup Diagram

<!-- image -->

## Required Equipment

- MAX17645BEVKITB#/MAX17645BEVKITB# EV kits
- 7V to 36V, 1A power supply
- Loads capable of sinking 1A at 5V
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kits are fully assembled and tested. Use the following steps to verify and test individual board operation.

## Caution: Do not turn on the power supply until all connections are completed.

1.  Disable the power supply and set the input power supply at a voltage between 7V to 36V.
2.  Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad of the EV kit under evaluation. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad of the EV kit.
3.  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
4.  Verify that no shunts are installed on jumpers (JU101, JU201). See Table 1 for details.
5.  Turn on the input power supply.
6.  Enable the load.
7.  Verify that the digital voltmeter displays 5V across the output terminals.

Evaluates: MAX17645 in

5V Output Voltage Application

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Detailed Description

The MAX17645BEVKITB# and MAX17645DEVKITB# EV kits are designed to demonstrate the salient features of the MAX17645B and MAX17645D high-efficiency, high-voltage, synchronous step-down DC-DC converters in 5V application. The MAX17645B and the MAX17645D application circuits are electrically isolated from each other and hosted on the same PCB. Each of these circuits can be evaluated by powering them from their respective input pins.

The EV kits include EN/UVLO PCB pads and jumpers (JU101, JU201) to enable the output at the desired input voltage. An additional RESET PCB pad is available for monitoring the status of the output.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The MAX17645B and MAX17645D offer an Enable and adjustable input undervoltage lockout feature. To enable the converters always, install a shunt across pin 1-2 on respective jumpers (JU101, JU201). To disable the converters, install a shunt across pin 2-3 on respective jumpers (JU101, JU201). A potential divider formed by resistors R UVL\_TOP  (R101, R201) and R UVL\_BOT  (R102, R202) sets the input voltage (V INU ) above which the converter is enabled when jumpers (JU101, JU201) are left open. See Table 1 for jumper (JU101, JU201) settings. In these EV kits, when the respective jumpers (JU101, JU201) are left open, the MAX17645B and MAX17645D are enabled when the input voltage rises above 6.85V (typ).

Choose R UVL\_TOP  to be 3.32M Ω (max) and then calculate R UVL\_BOT  as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on, V ENR  is the EN/UVLO rising threshold (1.215V, typ) and R UVL\_BOT is in Ω. For more details about setting the undervoltage lockout level, refer to the MAX17645 IC data sheet.

The EN/UVLO PCB pads on the EV kits support external Enable/Disable control of the device. Leave jumpers (JU101, JU201) open when external Enable/Disable control is desired. If the EN/UVLO pin is driven from an external signal source, it  is  recommended that a series resistance of a minimum of 1kΩ is placed between the signal source output and the EN/UVLO pin to reduce voltage ringing on the line.

## Table 1. Converter EN/UVLO Jumper (JU101, JU201) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                             | OUTPUT                                               |
|------------------|-----------------------------------------------------------------------------------------|------------------------------------------------------|
| 1-2              | Connected to VIN                                                                        | Enabled                                              |
| 2-3              | Connected to SGND                                                                       | Disabled                                             |
| Not installed*   | Connected to center node of respective resistive divider (R101 and R102, R201 and R202) | Programmed to startup at desired input voltage level |

*Default position

## Open-Drain Reset Output ( RESET )

The EV kits provide RESET PCB pads to monitor the status of the converters. The RESET is an open drain signal and is pulled up to the V CC  of the respective IC on these EV kits. RESET goes high (V CC ) when VOUT rises above 95.5% (typ) of  its  nominal  regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-in and Long Input Cables

The MAX17645BEVKITB# and MAX17645DEVKITB# EV kits come with an installed optional electrolytic capacitor (C106, C206 = 22µF/50V). These capacitors limit the peak voltage at the input of the converters when the DC input source is Hot-Plugged to the EV kit input terminals with long input cables. The equivalent series resistance (ESR) of the electrolytic capacitor dampens the oscillations caused by the interaction of the inductance of the long input cables and the ceramic capacitors at the buck converter input.

## Evaluates: MAX17645 in 5V Output Voltage

Application

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Electromagnetic Interference

Compliance to conducted emission (CE) standards requires an electromagnetic interference (EMI) filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17645BEVKITB# and MAX17645DEVKITB# PCBs have designated footprints for the placement of conducted EMI filter components as per the optional bill of material (BOM). The use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L101 and L201 before installing conducted EMI filter components. The PCB layouts are also designated to limit radiated emissions from switching nodes of the power converter resulting in radiated emissions below CISPR32 Class B limits.

## MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits Performance Report

(V IN1  = V IN2  = 24V, V OUT1  = V OUT2  = 5V, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17645 in

5V Output Voltage

Application

<!-- image -->

<!-- image -->

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

(V IN1  = V IN2  = 24V, V OUT1  = V OUT2  = 5V, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17645 in 5V Output Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

(V IN1  = V IN2  = 24V, V OUT1  = V OUT2  = 5V, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17645BEVKITB# | EV Kit |
| MAX17645DEVKITB# | EV Kit |

#Denotes RoHS compliance.

## Component Suppliers

| SUPPLIER        | WEBSITE             |
|-----------------|---------------------|
| Murata Americas | www.murata.com      |
| TDK Corp        | www.tdk.com         |
| Vishay          | www.vishay.com      |
| Panasonic       | www.panasonic.com   |
| Coilcraft       | www.coilcraft.com   |
| Taiyo yuden     | www.ty-top.com      |
| SullinsCorp     | www.sullinscorp.com |

Note: Indicate that you are using the MAX17645B/MAX17645D when contacting these component suppliers.

<!-- image -->

## Evaluates: MAX17645 in 5V Output Voltage

## Application

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

Evaluates: MAX17645 in

5V Output Voltage Application

## MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits Bill of Materials

|   Sl. No. | DESIGNATOR             | DESCRIPTION                                                               |   QTY | PART NUMBER                  |
|-----------|------------------------|---------------------------------------------------------------------------|-------|------------------------------|
|         1 | C101, C201             | 2.2µF, 10%, 50V, X7R, Ceramic capacitor (1206)                            |     2 | TDK C3216X7R1H225K160AE      |
|         2 | C102, C202             | 1µF, 10%, 16V, X7R, Ceramic capacitor (0603)                              |     2 | TDK C1608X7R1C105K080AC      |
|         3 | C103, C203             | 22µF, 20%, 16V, X7R, Ceramic capacitor (1206)                             |     2 | MURATA GRM31CZ71C226ME15     |
|         4 | C104, C110, C204, C210 | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)                            |     4 | TDK C1005C0G2A151J050BA      |
|         5 | C105, C109, C205, C209 | 0.1µF, 10%, 50V, X7R, Ceramic capacitor (0402)                            |     4 | TDK C1005X7R1H104K050BE      |
|         6 | C106, C206             | 22µF, 20%, 50V, Electrolytic capacitor                                    |     2 | PANASONIC EEE-TG1H220P       |
|         7 | C112, C212             | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                            |     2 | TAIYO YUDEN EMK105B7104KV    |
|         8 | L102, L202             | INDUCTOR, 10µH; 20%; 2.8A (4mm x 4mm)                                     |     2 | COILCRAFT XGL4040-103ME      |
|         9 | R101, R201             | 3.32MΩ ±1%, 1/16W, resistor (0402)                                        |     2 | VISHAY DALE CRCW04023M32FK   |
|        10 | R102, R202             | 715kΩ ±1%, 1/10W, resistor (0402)                                         |     2 | PANASONIC ERJ-2RKF7153       |
|        11 | R103, R203             | 102kΩ ±1%, 1/16W, resistor (0402)                                         |     2 | VISHAY DALE CRCW0402102KFK   |
|        12 | R104, R204             | 22.1kΩ ±1%, 1/16W, resistor (0402)                                        |     2 | VISHAY DALE CRCW040222K1FK   |
|        13 | R105, R205             | 10kΩ ±1%, 1/16W, resistor (0402)                                          |     2 | YAGEO RC0402FR-0710KL        |
|        14 | U101                   | High-efficiency; Synchronous step-down DC-DC Converter (8 TDFN 2mm x 2mm) |     1 | ANALOG DEVICES MAX17645BATA+ |
|        15 | U201                   | High-efficiency; Synchronous step-down DC-DC Converter (8 TDFN 2mm x 2mm) |     1 | ANALOG DEVICES MAX17645DATA+ |
|        16 | JU101, JU201           | 3-pin header                                                              |     2 | SULLINS PEC03SAAN            |
|        17 |                        | Shunts                                                                    |     2 | SULLINS NPB02SVAN-RC         |
|        18 | C107, C108, C207, C208 | OPEN: Capacitor (1206)                                                    |     0 | MURATA GRM31CR71H475KA12     |
|        19 | C111, C113, C211, C213 | OPEN: Capacitor (0402)                                                    |     0 |                              |
|        20 | L101, L201             | OPEN: Inductor (4mm x 4mm)                                                |     0 | COILCRAFT XGL4040-103ME      |

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## MAX17645BEVKITB# EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX17645 in

5V Output Voltage

Application

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## MAX17645DEVKITB# EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX17645 in

5V Output Voltage

Application

Evaluates: MAX17645 in

5V Output Voltage

Application

## MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits PCB Layout Diagrams

MAX17645BEVKITB#/MAX17645DEVKITB# EV kits Component Placement Guide-Top Silkscreen

<!-- image -->

1

'

MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits PCB Layout-Top Layer

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Evaluates: MAX17645 in 5V Output Voltage Application

MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits PCB Layout-Layer 2

<!-- image -->

MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits PCB Layout-Layer 3

<!-- image -->

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Evaluates: MAX17645 in 5V Output Voltage Application

MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits PCB Layout-Bottom Layer

<!-- image -->

MAX17645BEVKITB#/MAX17645DEVKITB# EV Kits Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX17645BEVKITB#/ MAX17645DEVKITB# Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION             | PAGES CHANGED   |
|-------------------|-----------------|-------------------------|-----------------|
|                 0 | 03/22           | Initial release         | -               |
|                 1 | 06/22           | Updated datasheet title | 1-12            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates: MAX17645 in 5V Output Voltage Application