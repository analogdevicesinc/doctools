<!-- lastmod 2022-08-04 -->
## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

## General Description

The  MAX17579EVKIT#  and  MAX17580EVKIT#  evaluation kits (EV kits) provide a proven design to evaluate the MAX17579 and MAX17580 high-efficiency, high-voltage, inverting, Himalaya synchronous DC-DC converters. The devices  generate  output  voltages  (V OUT )  from  -0.9V  to -36V and can deliver up to 300mA of load current from a wide 4.5V to 60V-|V OUT | input voltage range.

The  MAX17579EVKIT#  EV  kit  generates  -15V  output (V OUT1 ) at load currents up to 240mA from a 16V to 45V input  supply  and  operates  at  600kHz  (f SW1 )  switching frequency. This EV kit configuration features MAX17579 that  operates  in  continuous  conduction  mode  (CCM)  at all loads, thus, providing a constant frequency operation.

The  MAX17580EVKIT#  EV  kit  generates  -5V  output (V OUT2 ) at load currents up to 300mA from a 16V to 55V input  supply  and  operates  at  600kHz  (f SW2 )  switching frequency. This EV kit configuration features MAX17580 that  operates  in  discontinuous  conduction  mode  (DCM) for superior efficiency at light loads.

The  EV  kits  are  configured  for  optimum  efficiency  and component  size.  The  EV  kits  feature  programmable enable  and  input  undervoltage-lockout  (UVLO),  softstart,  open-drain RESET signal  and  external  clock  synchronization.  The  EV  kits  also  provide  a  good  layout example,  which  are  optimized  for  conducted,  radiated EMI,  and  thermal  performance.  For  more  details  about the device Benefits and Features , refer to the MAX17579, MAX17580 IC data sheet.

## Features

- Operates Over a Wide Input Range
- MAX17579EVKIT#: V OUT1  = -15V, I OUT1  = 240mA, VIN1  Range = 16V to 45V
- MAX17580EVKIT#: V OUT2  = -5V, I OUT2  = 300mA, VIN2  Range = 16V to 55V
- Enable/UVLO Input, Resistor Programmable UVLO Threshold
- Adjustable Soft-Start Time
- RESET Output with a Pullup Resistor to an External Supply
- System Ground Interfaced EN/UVLO and RESET Pins
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR 32 (EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

## Quick Start

## Recommended Equipment

- MAX17579EVKIT#, MAX17580EVKIT#
- 60V, 0.5A DC input power supply
- 5V, 10mA DC input power supply
- Loads capable of sinking 300mA at -5V and 240mA at -15V
- Two digital multimeters (DMM)

## Equipment Setup and Test Procedure

The EV kits are fully assembled and tested.

Use the following steps to verify and test individual device operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the 60V input power supply at 15V for MAX17579EVKIT# and MAX17580EVKIT#. Disable the power supply.
- 2) Connect the positive terminal of the 60V power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the positive terminal of the 5V power supply to the respective VEXT PCB pad and the negative terminal to the nearest GND PCB pad. Set the voltage at 5V.
- 4) Connect the positive terminal of the corresponding load to the respective GND PCB pad and the negative terminal to the nearest VOUT PCB pad.
- 5) Connect one DMM across the respective VOUT PCB pad and the nearest GND PCB pad, and the another DMM across the respective RESET pad and GND pad.
- 6) Verify that no shunts are installed on jumpers (J101, J201) See Table 1 for details.
- 7) Turn on the DC power supply.
- 8) Enable the load.
- 9) Observe that both the DMMs display 0V.
- 10)  Increase the input voltage to be above 16V or higher, which is above the EN/UVLO rising threshold.
- 11)  Verify that the DMM across the output terminal displays -15V for MAX17579EVKIT# or -5V for MAX17580EVKIT#.
- 12)  Verify that the DMM across the RESET pad and GND displays 5V.
- 13)  Reduce the input voltage to 12V which is below the EN/UVLO falling threshold.
- 14)  Verify that both the DMMs displays 0V.
- 15)  Disable the input power supply.

## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications

## Detailed Description of Hardware

The MAX17579EVKIT# and MAX17580EVKIT# EV kits are designed to demonstrate the salient features of MAX17579 and  MAX17580 devices,  respectively. These  two  circuits are  electrically  isolated  from  each  other  and  hosted  on the same PCB. Each of the devices can be evaluated by powering them from their respective input pins. Individual device  settings  can  be  adjusted  to  evaluate  their  performance under different operating conditions.

## Soft-Start Input (SS)

The EV kits offer an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of external soft-start capacitor connected between SS and SOUT pins. The selected output capacitance (C OUT ) and the output voltage (V OUT ) determine the  minimum  required  soft-start  capacitor  C SS   (C112, C212) as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to SOUT.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17579  and  MAX17580  offer  an  enable  and adjustable input UVLO feature. In these EV kits, for normal operation, leave the EN/UVLO jumpers (J101, J201) open. When jumpers are left open, the MAX17579 and MAX17580  are  enabled  when  the  input  voltage  rises above 15.7V. To disable the devices, install shunts across pins  2-3  on  the  jumpers  (J101,  J201).  See  Table  1  for jumper (J101, J201) settings. The EN/UVLO PCB pad on the EV kits support external Enable/Disable control of the device.  Leave  the  jumpers  open  when  external  Enable/ Disable control is desired. A potential divider formed by the  resistors  R UVL\_TOP   (R101,  R201)  and  R UVL\_BOT (R102, R202) at the EN/UVLO pin sets the input voltage (V INU )  above  which  the  converter  is  enabled  when  the jumpers are left open.

Choose R UVL\_TOP to be 3.32MΩ (max), and then calcu -late R UVL\_BOT  as follows:

<!-- formula-not-decoded -->

where,  R UVL\_BOT is  in  MΩ.  For  more  details  about Setting the Input Undervoltage-Lockout Level , refer to the MAX17579, MAX17580 IC data sheet.

│

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

## External Clock Synchronization (RT/SYNC)

The EV kits provide RT/SYNC PCB pads to synchronize the  MAX17579  and  MAX17580  to  an  optional  external clock. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW , where f SW  is the switching frequency programmed by the resistors (R105 and  R205)  connected  to  the  RT/SYNC  pin.  For  more details about the External Clock Synchronization , refer to the MAX17579, MAX17580 IC data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kits provide two PCB pads RESET1 and RESET2 to  monitor  the  status  of  the  respective  converters.  The open-drain outputs are connected to 5V external power supply  (VEXT1,  VEXT2)  via  pullup  resistors  (R106, R206). RESET goes high 1024 switching cycles after the output voltage rises above 95% (typ) of its set value and it is driven low to respective GND when the output voltage drops below 92% (typ) of its set value.

## Input Voltage Range

The  MAX17579EVKIT#  and  MAX17580EVKIT#  has  a default input voltage range starting from 16V. The operating  input  voltage  range  can  be  modified  by  changing the values of the components connected at the FB, EN/ UVLO,  and  SS  pins  for  the  same  inductor  and  output capacitor.  The  deliverable  output  current  also  changes with input voltage range. For more details about the Load Current  Capability ,  refer  to  the  MAX17579,  MAX17580 IC data sheet. Table 2 and Table 3 show the settings for different input voltage ranges for MAX17579EVKIT# and MAX17580EVKIT#, respectively.

## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications

## Hot Plug-In and Long Input Cables

The MAX17579EVKIT# and MAX17580EVKIT# PCB layouts provide optional electrolytic capacitors (C108 = C208 = 22μF/80V). These capacitors limit the peak voltage at the input of the corresponding device when the DC input source is Hot-Plugged to the EV kit input terminals with input  cables.  The  equivalent  series  resistance  (ESR)  of the electrolytic capacitors dampen the oscillations caused by interaction of the inductance of the input cables, and the ceramic capacitors at the converters input.

## Inductive Output Short-Circuit Protection

The  MAX17579EVKIT#  and  MAX17580EVKIT#  PCB layouts provide footprints for optional R-D circuits (R107 and D101, R207 and D201) that are used for Inductive Output Short-Circuit Protection . For more details, refer to the MAX17579, MAX17580 IC data sheet.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter and limits the noise injected back into the input power source.

The  MAX17579EVKIT#  and  MAX17580EVKIT#  PCBs have designated footprints for placement of conducted EMI filter  components  per  the  optional  Bill  of  Materials  (BoM). Use of these filter components results in lower conducted EMI, below CISPR 32 Class B limits. Cut open the trace at L102 and L202 before installing EMI filter components. The PCB layouts are also designed to limit radiated emissions from  switching  nodes  of  the  power  converter,  resulting  in radiated emissions below CISPR 32 Class B limits.

## Table 1. Converter EN/UVLO Jumper (J101, J201) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                                 | OUTPUT                                                                |
|------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| 1-2              | Connected to IN                                                                             | Enabled                                                               |
| Not installed*   | Connected to the center node of respective resistor-dividers (R101 and R102; R201 and R202) | Enabled, UVLO level is set by the resistor-divider between IN and GND |
| 2-3              | Connected to GND                                                                            | Disabled                                                              |

*Default position

## Table 2. MAX17579EVKIT# EN/UVLO and FB Resistor Divider Settings

| INPUT VOLTAGE RANGE   | R101   | R102   | R103   | R104   | LOAD CURRENT   | C112   |
|-----------------------|--------|--------|--------|--------|----------------|--------|
| 16V to 45V*           | 3.32MΩ | 294kΩ  | 412kΩ  | 26.1kΩ | 240mA          | 5.6nF  |
| 8V to 45V             | 3.32MΩ | 665kΩ  | 536kΩ  | 34kΩ   | 150mA          | 5.6nF  |
| 4.5V to 45V           | 3.32MΩ | 1.37MΩ | 523kΩ  | 33.2kΩ | 80mA           | 10nF   |

*Default setting

│

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

Evaluate: MAX17579 and MAX17580

in -15V and -5V Output-Voltage

Applications

## Table 3. MAX17580EVKIT# EN/UVLO and FB Resistor Divider Settings

| INPUT VOLTAGE RANGE   | R201   | R202   | R203   | R204   | LOAD CURRENT   | C212   |
|-----------------------|--------|--------|--------|--------|----------------|--------|
| 16V to 55V*           | 3.32MΩ | 294kΩ  | 154kΩ  | 34kΩ   | 300mA          | 5.6nF  |
| 8V to 55V             | 3.32MΩ | 665kΩ  | 165kΩ  | 36.5kΩ | 240mA          | 5.6nF  |
| 4.5V to 55V           | 3.32MΩ | 1.37MΩ | 187kΩ  | 41.2kΩ | 150mA          | 5.6nF  |

*Default setting

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Performance Reports

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Performance Reports (continued)

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

│

## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Performance Reports (continued)

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

│

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage

Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Performance Reports (continued)

(VIN1 = VIN2 = 24V, fSW1 = fSW2 = 600kHz, unless otherwise noted.)

<!-- image -->

## Component Suppliers

| SUPPLIER          | WEBSITE                |
|-------------------|------------------------|
| Wurth Electronics | www.we-online.com      |
| Murata Americas   | www.murataamericas.com |
| Panasonic Corp.   | www.panasonic.com      |
| SullinsCorp       | www.sullinscorp.com    |
| TDK               | www.tdk.com            |

Note: Indicate that you are using the MAX17579/MAX17580 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17579EVKIT# | EV Kit |
| MAX17580EVKIT# | EV Kit |

#Denotes RoHs compliance.

80

70

<!-- image -->

Frequency in Hz

│

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

## Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Bill of Materials

|   S.No | DESIGNATOR                         | DESCRIPTION                                                                        |   QUANTITY | MANUFACTURER PART NUMBER      |
|--------|------------------------------------|------------------------------------------------------------------------------------|------------|-------------------------------|
|      1 | C101, C201                         | 150pF±5%; 100V; C0G; Ceramic Capacitor (0402)                                      |          2 | TDK C1005C0G2A151J050BA       |
|      2 | C102, C111, C202, C211             | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                                     |          4 | MURATA GRM188R72A104KA35      |
|      3 | C108, C208                         | 22uF±20%, 80V, Electrolytic capacitor                                              |          2 | PANASONIC EEE-FK1K220P        |
|      4 | C110, C210                         | 1µF±10%; 100V; X7R; Ceramic Capacitor (1206)                                       |          2 | TDK C3216X7R2A105K160AA       |
|      5 | C112, C212                         | 5600pF±10%; 25V; X7R; Ceramic Capacitor (0402)                                     |          2 | MURATA GRM155R71E562KA01      |
|      6 | C113, C213                         | 2.2µF±10%; 10V; X7R; Ceramic Capacitor (0603)                                      |          2 | MURATA GRM188R71A225KE15      |
|      7 | C114, C214                         | 4700pF±10%; 100V; X7R; Ceramic Capacitor (0402)                                    |          2 | MURATA GRM155R72A472KA01      |
|      8 | C115, C116, C119, C215, C216, C219 | 0.1µF±10%; 25V; X7R; Ceramic Capacitor (0402)                                      |          6 | MURATA GRM155R71E104KE14      |
|      9 | C117                               | 10µF±10%; 25V; X7R; Ceramic Capacitor (0805)                                       |          1 | MURATA GRM21BZ71E106KE15      |
|     10 | C118                               | 0.22µF±10%; 25V; X7R; Ceramic Capacitor (0402)                                     |          1 | TDK C1005X7R1E224K050BB       |
|     11 | C120, C220                         | 33pF±5%; 50V; C0G; Ceramic Capacitor (0402)                                        |          2 | MURATA GRM1555C1H330JA01      |
|     12 | C121, C218, C221                   | 0.47µF±10%; 10V; X7R; Ceramic Capacitor (0402)                                     |          3 | MURATA GRM155R71A474KE01      |
|     13 | C217                               | 10µF±10%; 10V; X7R; Ceramic Capacitor (0603)                                       |          1 | MURATA GRM188Z71A106KA73      |
|     14 | J101, J201                         | 3-pin Header (2.54mm)                                                              |          2 | SULLINS PEC03SAAN             |
|     15 | L101                               | 68μH±10%; IRMS=0.8A; Inductor (5mm x 5mm)                                          |          1 | WURTH 74404054680             |
|     16 | L201                               | 22μH±10%; IRMS=1.7A; Inductor (4.1mm x 4.1mm)                                      |          1 | WURTH 74438356220             |
|     17 | R101, R201                         | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                                                |          2 |                               |
|     18 | R102, R202                         | 294kΩ, ±1%, 1/10W, Resistor (0603)                                                 |          2 |                               |
|     19 | R103                               | 412kΩ, ±1%, 1/16W, Resistor (0402)                                                 |          1 |                               |
|     20 | R104                               | 26.1kΩ, ±1%, 1/16W, Resistor (0402)                                                |          1 |                               |
|     21 | R105, R205                         | 10.5kΩ, ±1%, 1/16W, Resistor (0402)                                                |          2 |                               |
|     22 | R106, R206                         | 10kΩ, ±1%, 1/16W, Resistor (0402)                                                  |          2 |                               |
|     23 | R107, R207                         | 0Ω, ±1%, 1/2W, Resistor (0805)                                                     |          2 |                               |
|     24 | R203                               | 154kΩ, ±1%, 1/16W, Resistor (0402)                                                 |          1 |                               |
|     25 | R204                               | 34kΩ, ±1%, 1/16W, Resistor (0402)                                                  |          1 |                               |
|     26 | U101                               | High-Efficiency, Synchronous, Inverting Output DC-DC Converter (12 TDFN 3mm x 3mm) |          1 | MAXIM INTEGRATED MAX17579ATC+ |
|     27 | U201                               | High-Efficiency, Synchronous, Inverting Output DC-DC Converter (12 TDFN 3mm x 3mm) |          1 | MAXIM INTEGRATED MAX17580ATC+ |
|     28 | SU101, SU201                       | Jumper Socket (2.54mm)                                                             |          2 | SULLINS STC02SYAN             |
|     29 | C205                               | Optional: 1µF±10%; 100V; X7R; Ceramic Capacitor (1206)                             |          1 | TDK C3216X7R2A105K160AA       |
|     30 | L202                               | Optional: 22μH±10%; IRMS=390mA; Inductor (2mm x 1.9mm)                             |          1 | COILCRAFT XPL2010-223ML       |
|     31 | C103, C109, C203, C209             | Open: Capacitor (0402)                                                             |          0 |                               |
|     32 | C104, C122, C204, C222             | Open: Capacitor (0603)                                                             |          0 |                               |
|     33 | C105                               | Open: Capacitor (1206)                                                             |          0 |                               |
|     34 | C106, C107, C206, C207             | Open: Capacitor (1210)                                                             |          0 |                               |
|     35 | D101, D201                         | Open: Diode (POWERDI-323)                                                          |          0 |                               |
|     36 | L102                               | Open: Inductor (3.2mm x 3.5mm)                                                     |          0 |                               |
|     37 | R108, R208                         | Open: Resistor (0603)                                                              |          0 |                               |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| J101                   | Open                   |
| J201                   | Open                   |

│

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Schematics

## MAX17579EVKIT# Schematic Diagram

<!-- image -->

│

## MAX17579EVKIT# and MAX17580EVKIT# EV Kit Schematics (continued)

## MAX17580EVKIT# Schematic Diagram

<!-- image -->

│

## MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layouts

MAX17579EVKIT# and MAX17580EVKIT# EV Kits Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layout-Top Layer

<!-- image -->

│

Evaluate: MAX17579 and MAX17580

in -15V and -5V Output-Voltage

Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layouts (continued)

MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layout-Layer 2

<!-- image -->

MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layout-Layer 3

<!-- image -->

│

Evaluate: MAX17579 and MAX17580

in -15V and -5V Output-Voltage

Applications

## MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layouts (continued)

MAX17579EVKIT# and MAX17580EVKIT# EV Kits PCB Layout-Bottom Layer

<!-- image -->

MAX17579EVKIT# and MAX17580EVKIT# EV Kits Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17579EVKIT#, MAX17580EVKIT# Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitr\ and speci¿cations Zithout notice at an\ time.

│

Evaluate: MAX17579 and MAX17580 in -15V and -5V Output-Voltage Applications