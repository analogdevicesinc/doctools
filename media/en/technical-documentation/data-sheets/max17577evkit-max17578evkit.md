<!-- lastmod 2022-08-04 -->
## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## General Description

The  MAX17577EVKIT#  and  MAX17578EVKIT#  evaluation kits (EV kits) provide a proven design to evaluate the MAX17577 and MAX17578 high-efficiency, high-voltage, inverting, Himalaya synchronous DC-DC converters. The devices  generate  output  voltages  (V OUT )  from  -0.9V  to -36V and can deliver up to 1A of load current from a wide 4.5V to 60V-|V OUT | input voltage range.

The  MAX17577EVKIT#  EV  kit  generates  -12V  output (V OUT1 ) at load currents up to 0.8A from a 16V to 48V input supply and operates at 600kHz switching frequency. This EV kit configuration features MAX17577 that operates in continuous conduction mode (CCM) at all loads, thus, providing a constant frequency operation.

The  MAX17578EVKIT#  EV  kit  generates  -5V  output (V OUT2 ) at load currents up to 1A from a 16V to 55V input supply and operates at 600kHz switching frequency. This EV kit configuration features MAX17578 that operates in discontinuous conduction mode (DCM) for superior efficiency at light loads.

The  EV  kits  are  configured  for  optimum  efficiency  and component  size.  The  EV  kits  feature  programmable enable  and  input  undervoltage-lockout  (UVLO),  softstart,  open-drain RESET signal  and  external  clock  synchronization.  The  EV  kits  also  provide  a  good  layout example,  which  are  optimized  for  conducted,  radiated EMI,  and  thermal  performance.  For  more  details  about the device Benefits and Features , refer to the MAX17577, MAX17578 IC data sheet.

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

## Features

- ● Operates Over a Wide Input Range
- MAX17577EVKIT#: V OUT1  = -12V, I OUT1  = 0.8A, VIN1  Range = 16V to 48V
- MAX17578EVKIT#: V OUT2  = -5V, I OUT2  = 1A, VIN2  Range = 16V to 55V
- ● Enable/UVLO Input, Resistor Programmable UVLO Threshold
- ● Adjustable Soft-Start Time
- ● RESET Output with a Pull-Up Resistor to an External Supply
- ● System Ground Interfaced EN/UVLO and RESET Pins
- ● Overcurrent and Overtemperature Protection
- ● Proven PCB Layout
- ● Fully Assembled and Tested
- ● Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## Quick Start

## Recommended Equipment

- ● MAX17577EVKIT#, MAX17578EVKIT#
- ● 60V, 1.5A DC input power supply
- ● 5V, 10mA DC input power supply
- ● Loads capable of sinking 1A at -5V and 0.8A at -12V
- ● 2 Digital Multimeters (DMM)

## Equipment Setup and Test Procedure

The EV kits are fully assembled and tested.

Use the following steps to verify and test individual device operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the 60V input power supply at a voltage between 16V and 48V for MAX17577EVKIT# or between 16V and 55V for MAX17578EVKIT#. Disable the power supply.
- 2) Connect the positive terminal of the 60V power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the positive terminal of the 5V power supply to the VEXT PCB pad and the negative terminal to the nearest GND PCB pad. Set the voltage at 5V.
- 4) Connect the positive terminal of the corresponding load to the GND PCB pad and the negative terminal to the nearest VOUT PCB pad.
- 5) Connect one DVM across the VOUT PCB pad and the nearest GND PCB pad, and the another DVM across the RESET pad and GND pad.
- 6) Verify that no shunts are installed on jumpers. (JU101, JU201) (see Table 1 for details)
- 7) Turn on the DC power supply.
- 8) Enable the load.
- 9) Ensure the input voltage to be above 15.5V which is the EN/UVLO rising threshold.
- 10)  Verify that the DVM across the output terminal displays -12V for MAX17577EVKIT# or -5V for MAX17578EVKIT#.
- 11)  Verify that the DVM across the RESET pad and GND displays 5V.
- 12)  Reduce the input voltage to 12V which is below the EN/UVLO falling threshold.
- 13)  Verify that both the DVMs displays 0V.
- 14)  Disable the input power supply.

## Detailed Description of Hardware

The  MAX17577EVKIT#  and  MAX17578EVKIT#  EV  kits are  designed  to  demonstrate  the  salient  features  of MAX17577 and MAX17578 devices. The EV kits consist

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

of typical application circuits of the two devices. Each of these  circuits  are  electrically  isolated  from  each  other and hosted on the same PCB. Each of the devices can be  evaluated  by  powering  them  from  their  respective input  pins.  Individual  device  settings  can  be  adjusted to  evaluate  their  performance  under  different  operating conditions.

## Soft-Start Input (SS)

The EV kits offer an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of external soft-start capacitor connected between SS and SOUT pins. The selected output capacitance (C OUT ) and the output voltage (V OUT ) determine the  minimum  required  soft-start  capacitor  C SS   (C115, C215) as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to SOUT.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17577  and  MAX17578  offer  an  Enable  and adjustable  input  undervoltage-lockout  feature.  In  these EV kits, for normal operation, leave the EN/UVLO jumpers (JU101, JU201) open. When jumpers are left open, the  MAX17577  and  MAX17578  are  enabled  when  the input voltage rises above 15.5V. To disable the devices, install  shunts  across  pins  2-3  on  the  jumpers  (JU101, JU201). See Table 1 for jumper (JU101, JU201) settings. The EN/UVLO PCB pad on the EV kits support external Enable/Disable control of the device. Leave the jumpers open  when  external  Enable/Disable  control  is  desired. A  potential  divider  formed  by  the  resistors  R UVL\_TOP (R101,  R201)  and  R UVL\_BOT   (R102,  R202)  at  the  EN/ UVLO pin sets the input voltage (V INU ) above which the converter is enabled when the jumpers are left open.

Choose R UVL\_TOP to be 3.32MΩ (max), and then calcu -late R UVL\_BOT  as follows:

<!-- formula-not-decoded -->

where,  R UVL\_BOT is  in  MΩ.  For  more  details  about Setting the Input Undervoltage-Lockout Level , refer to the MAX17577, MAX17578 IC data sheet.

## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## External Clock Synchronization (RT/SYNC)

The EV kits provide RT/SYNC PCB pads to synchronize the  MAX17577  and  MAX17578  to  an  optional  external clock. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW , where f SW  is the switching frequency programmed by the resistors (R105 and  R205)  connected  to  the  RT/SYNC  pin.  For  more details about the External Clock Synchronization , refer to the MAX17577, MAX17578 IC data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kits provide two PCB pads RESET1 and RESET2 to  monitor  the  status  of  the  respective  converters.  The open drain outputs are connected to 5V external power supply  (VEXT1,  VEXT2)  via  pull  up  resistors  (R106, R206). RESET goes high 1024 switching cycles after the output voltage rises above 95% (typ) of its set value and it is driven low to respective GND when the output voltage drops below 92% (typ) of its set value.

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

## Input Voltage Range

The  MAX17577EVKIT#  and  MAX17578EVKIT#  has  a default input voltage range starting from 16V. The operating  input  voltage  range  can  be  modified  by  changing the values of the resistors connected at the FB and EN/ UVLO pins for  the  same  inductor  and  output  capacitor. The  deliverable  output  current  also  changes  with  input voltage range. For more details about the Load Current Capability ,  refer  to  the  MAX17577,  MAX17578  IC  data sheet.  Table  2  and  Table  3  show  the  settings  for  different  input  voltage  ranges  for  MAX17577EVKIT#  and MAX17578EVKIT#, respectively.

## Hot Plug-In and Long Input Cables

The MAX17577EVKIT# and MAX17578EVKIT# PCB layouts provide optional electrolytic capacitors (C108 = C208 = 33μF/80V). These capacitors limit the peak voltage at the input of the corresponding device when the DC input source is Hot-Plugged to the EV kit input terminals with input  cables.  The  equivalent  series  resistance  (ESR)  of the electrolytic capacitors dampen the oscillations caused by interaction of the inductance of the input cables, and the ceramic capacitors at the converters input.

## Table 1. Converter EN/UVLO Jumper (JU101, JU201) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                                 | OUTPUT                                                                |
|------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| 1-2              | Connected to IN                                                                             | Enabled                                                               |
| Not installed*   | Connected to the center node of respective resistor-dividers (R101 and R102; R201 and R202) | Enabled, UVLO level is set by the resistor-divider between IN and GND |
| 2-3              | Connected to GND                                                                            | Disabled                                                              |

*Default position

## Table 2. MAX17577EVKIT# EN/UVLO and FB Resistor Divider Settings

| INPUT VOLTAGE RANGE   |   R101 (MΩ) | R102   |   R103 (k Ω) |   R104 (k Ω) | LOAD CURRENT   |
|-----------------------|-------------|--------|--------------|--------------|----------------|
| 16V to 48V*           |        3.32 | 294kΩ  |          340 |         27.4 | 0.8A           |
| 8V to 48V             |        3.32 | 665kΩ  |          432 |         34.8 | 0.5A           |
| 4.5V to 48V           |        3.32 | 1.33MΩ |          487 |         39.2 | 0.3A           |

*Default Setting

## Table 3. MAX17578EVKIT# EN/UVLO and FB Resistor Divider Settings

| INPUT VOLTAGE RANGE   |   R201 (MΩ) | R202   |   R203 (k Ω) |   R204 (k Ω) | LOAD CURRENT   |
|-----------------------|-------------|--------|--------------|--------------|----------------|
| 16V to 55V*           |        3.32 | 294kΩ  |          121 |         26.7 | 1A             |
| 8V to 55V             |        3.32 | 665kΩ  |          182 |         40.2 | 0.75A          |
| 4.5V to 55V           |        3.32 | 1.33MΩ |          226 |         49.9 | 0.5A           |

*Default Setting

│

## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## Inductive Output Short-Circuit Protection

The  MAX17577EVKIT#  and  MAX17578EVKIT#  PCB layouts provide footprints for optional R-D circuits (R107 and D101, R207 and D201) that are used for Inductive Output Short-Circuit Protection . For more details, refer to the MAX17577, MAX17578 IC data sheet.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

The  MAX17577EVKIT#  and  MAX17578EVKIT#  PCBs have  designated  footprints  for  the  placement  of  conducted EMI filter components as per the optional Bill of Material (BoM). Use of these filter components results in lower conducted EMI, below CISPR32 Class B limits. Cut open  the  trace  at  L102  and  L202  before  installing  EMI filter  components.  The  PCB  layouts  are  also  designed to  limit  radiated  emissions  from  switching  nodes  of  the power  converter,  resulting  in  radiated  emissions  below CISPR32 Class B limits.

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Performance Reports

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Performance Reports (continued)

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

│

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Performance Reports (continued)

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage

Applications

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Performance Reports (continued) 80

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| SullinsCorp     | www.sullinscorp.com    |
| TDK             | www.tdk.com            |

Note:

Indicate that you are using the MAX17577/MAX17578 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17577EVKIT# | EV Kit |
| MAX17578EVKIT# | EV Kit |

#Denotes RoHs compliance.

70

60

<!-- image -->

Frequency

│

## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Bill of Materials

|   S.No | DESIGNATOR                                     | DESCRIPTION                                                                        |   QUANTITY | MANUFACTURER PART NUMBER      |
|--------|------------------------------------------------|------------------------------------------------------------------------------------|------------|-------------------------------|
|      1 | C101, C201                                     | 150pF±5%; 100V; C0G; Ceramic Capacitor (0402)                                      |          2 | TDK C1005C0G2A151J050BA       |
|      2 | C102, C113, C202, C213                         | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                                     |          4 | MURATA GRM188R72A104KA35      |
|      3 | C108, C208                                     | 33uF±20%, 80V, Electrolytic capacitor                                              |          2 | PANASONIC EEE-FK1K330P        |
|      4 | C112                                           | 4.7µF± 10%; 100V; X7R; Ceramic Capacitor (1206)                                    |          1 | MURATA GRM31CZ72A475KE11      |
|      5 | C114, C214                                     | 2.2µF± 10%; 10V; X7R; Ceramic Capacitor (0603)                                     |          2 | MURATA GRM188R71A225KE15      |
|      6 | C115, C215                                     | 5600pF± 10%; 25V; X7R; Ceramic Capacitor (0402)                                    |          2 | MURATA GRM155R71E562KA01      |
|      7 | C116, C118, C122, C216, C218, C222             | 0.1µF±10%; 16V; X7R; Ceramic Capacitor (0402)                                      |          6 | MURATA GRM155R71C104KA88      |
|      8 | C117, C217                                     | 47pF±5%; 50V; C0G; Ceramic Capacitor (0402)                                        |          2 | MURATA GRM1555C1H470JA01      |
|      9 | C119, C219                                     | 10nF±10%; 100V; X7R; Ceramic Capacitor (0603)                                      |          2 | TDK C1608X7R2A103K080AA       |
|     10 | C120, C220                                     | 22µF± 20%; 25V; X7R; Ceramic Capacitor (1210)                                      |          2 | MURATA GRM32ER71E226ME15      |
|     11 | C123, C223                                     | 1µF± 10%; 16V; X7R; Ceramic Capacitor (0603)                                       |          2 | TDK C1608X7R1C105K080AC       |
|     12 | C126, C226                                     | 0.47µF± 10%; 10V; X7R; Ceramic Capacitor (0402)                                    |          2 | MURATA GRM155R71A474KE01      |
|     13 | C212                                           | 2.2µF± 10%; 100V; X7R; Ceramic Capacitor (1210)                                    |          1 | TDK C3225X7R2A225K230AB       |
|     14 | J101, J201                                     | 3-pin header (36-pin header 0.1' centers)                                          |          2 | SULLINS PEC03SAAN             |
|     15 | L101                                           | Inductor, 22μH, 3.4A (5.3mm x 5.5mm)                                               |          1 | COILCRAFT XEL5050-223ME       |
|     16 | L201                                           | Inductor, 10μH, 4.9A (5.3mm x 5.5mm)                                               |          1 | COILCRAFT XEL5050-103ME       |
|     17 | R101, R201                                     | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                                                |          2 |                               |
|     18 | R102, R202                                     | 294kΩ, ±1%, 1/10W, Resistor (0603)                                                 |          2 |                               |
|     19 | R103                                           | 340kΩ, ±1%, 1/16W, Resistor (0402)                                                 |          1 |                               |
|     20 | R104                                           | 27.4kΩ, ±1%, 1/16W, Resistor (0402)                                                |          1 |                               |
|     21 | R105, R205                                     | 10.5kΩ, ±1%, 1/16W, Resistor (0402)                                                |          2 |                               |
|     22 | R106, R206                                     | 10kΩ, ±1%, 1/16W, Resistor (0402)                                                  |          2 |                               |
|     23 | R107, R207                                     | 0Ω, ±1%, 1/16W, Resistor (0805)                                                    |          2 |                               |
|     24 | R203                                           | 121kΩ, ±1%, 1/16W, Resistor (0402)                                                 |          1 |                               |
|     25 | R204                                           | 26.7kΩ, ±1%, 1/16W, Resistor (0402)                                                |          1 |                               |
|     26 | U101                                           | High-Efficiency, Synchronous, Inverting Output DC-DC Converter (12 TDFN 3mm x 3mm) |          1 | MAXIM INTEGRATED MAX17577ATC+ |
|     27 | U201                                           | High-Efficiency, Synchronous, Inverting Output DC-DC Converter (12 TDFN 3mm x 3mm) |          1 | MAXIM INTEGRATED MAX17578ATC+ |
|     28 | SU101, SU201                                   | Jumper Socket (2.54mm)                                                             |          2 | SULLINS STC02SYAN             |
|     29 | C206, C210                                     | OPTIONAL: 2.2µF± 10%; 100V; X7R; Ceramic Capacitor (1210)                          |          2 | TDK C3225X7R2A225K230AB       |
|     30 | L202                                           | OPTIONAL: INDUCTOR, 15μH, 2.2A (4mm x 4mm)                                         |          1 | COILCRAFT XAL4040-153ME       |
|     31 | C103, C109, C111, C125, C203, C209, C211, C225 | OPEN: Capacitor (0402)                                                             |          0 |                               |
|     32 | C104, C124, C204, C224                         | OPEN: Capacitor (0603)                                                             |          0 |                               |
|     33 | C105-C107, C110, C205, C207                    | OPEN: Capacitor (1210)                                                             |          0 |                               |
|     34 | D101, D201                                     | OPEN: Diode (POWERDI-323)                                                          |          0 |                               |
|     35 | L102                                           | OPEN: Inductor (4mm x 4mm)                                                         |          0 |                               |
|     36 | R108, R208                                     | OPEN: Resistor (0603)                                                              |          0 |                               |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU101                  | Open                   |
| JU201                  | Open                   |

│

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Schematics

## MAX17577EVKIT# Schematic Diagram

<!-- image -->

│

## MAX17577EVKIT# and MAX17578EVKIT# EV Kit Schematics (continued)

## MAX17578EVKIT# Schematic Diagram

<!-- image -->

│

## MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layouts

MAX17577EVKIT# and MAX17578EVKIT# EV Kits Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layout-Top Layer

<!-- image -->

│

Evaluate: MAX17577 and MAX17578

in -12V and -5V Output-Voltage

Applications

## MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layouts (continued)

MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layout-Layer 2

<!-- image -->

MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layout-Layer 3

<!-- image -->

│

Evaluate: MAX17577 and MAX17578

in -12V and -5V Output-Voltage

Applications

## MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layouts (continued)

MAX17577EVKIT# and MAX17578EVKIT# EV Kits PCB Layout-Bottom Layer

<!-- image -->

MAX17577EVKIT# and MAX17578EVKIT# EV Kits Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17577EVKIT#, MAX17578EVKIT# Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX17577 and MAX17578 in -12V and -5V Output-Voltage Applications